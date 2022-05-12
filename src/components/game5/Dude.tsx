import { useBox, useCompoundBody } from "@react-three/cannon";
import { PerspectiveCamera, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { getDirectionOffset } from "hooks/getDirectionalOffest";
import { usePlayerControls } from "hooks/usePlayerControls";
import React, { useEffect, useRef, useState } from "react";
import { Group, Quaternion, TextureLoader, Vector2, Vector3 } from "three";

type animations =
  | "Idle"
  | "Walk"
  | "Punch"
  | "Run"
  | "Jump"
  | "Death"
  | "Working";

export const Dude = ({ ...props }) => {
  const [currentAnimation, setCurrentAnimation] = useState<animations>("Idle");
  const [fov, setFov] = useState(50);
  const [position, setPosition] = useState({ x: 0, y: 5, z: 8 });
  const { nodes, materials, animations } = useGLTF(
    "http://localhost:3000/game5/Dude/Dude.gltf"
  );
  const group = useRef<any>();
  const { camera } = useThree();
  const activeAction = useRef<any>();
  const previousAction = useRef<any>();

  const texture = useLoader(
    TextureLoader,
    "http://localhost:3000/game5/Dude/ClothedLightSkin.png"
  );

  const [ref, api] = useCompoundBody<any>(() => ({
    mass: 1000,
    type: "Dynamic",
    position: [0, 1, 0],
    ...props,
    shapes: [
      // { args: [1.5], position: [0, 4, 0], type: "Sphere" },
      // { args: [1.5, 1.5, 2.5], position: [0, 2.2, 0], type: "Cylwwwwwwwwwinder" },
      { args: [1.5], position: [0, 1.5, 0], type: "Sphere" },
    ],
  }));
  const { actions } = useAnimations(animations, group);

  const movement = usePlayerControls();
  const { forward, backward, left, right, sprint } = movement;

  const rotateAngleFrontAxis = new Vector3(0, 1, 0);
  const rotateAngleSideAxis = new Vector3(0, 0, 0);
  const rotateQuarternion = new Quaternion();
  const speed = movement.sprint ? 13 : 8;

  const walkDirection = new Vector3();
  useFrame(() => {
    if (!ref.current) return;

    if (forward && fov <= 60) {
      setFov(fov + 0.1);
    } else if (backward && fov >= 40) {
      setFov(fov - 0.1);
    } else if (forward === false && backward === false) {
      if (fov < 50) {
        setFov(fov + 0.1);
      } else if (fov > 50) {
        setFov(fov - 0.1);
      }
    }
    /* camera position when walking */

    const easeSpeed = sprint ? 0.05 : 0.02;
    if (right && position.x < 1) {
      setPosition({ ...position, x: position.x + easeSpeed });
    } else if (left && position.x >= -1) {
      setPosition({ ...position, x: position.x - easeSpeed });
    } else if (!left && !right) {
      if (position.x > 0.01) {
        setPosition({ ...position, x: position.x - easeSpeed });
      } else if (position.x < -0.01) {
        setPosition({ ...position, x: position.x + easeSpeed });
      }
    }

    /* els */
    if (forward || backward || left || right) {
      const directionOffset = getDirectionOffset(
        forward,
        backward,
        right,
        left
      );

      camera.getWorldDirection(walkDirection);

      walkDirection.y = 0;

      walkDirection.applyAxisAngle(
        forward || backward ? rotateAngleFrontAxis : rotateAngleSideAxis,
        directionOffset
      );
      if (forward || backward) {
        walkDirection.normalize().multiplyScalar(speed);
      }

      const moveX = walkDirection.x;
      const rotateY = right ? -Math.PI : left ? Math.PI : 0;
      const moveZ = walkDirection.z;

      if (forward || backward) {
        rotateQuarternion.setFromAxisAngle(
          rotateAngleFrontAxis,
          directionOffset
        );
        ref.current.quaternion.rotateTowards(rotateQuarternion, 0.2);

        api.velocity.set(moveX, 0, moveZ);
        api.angularVelocity.set(0, rotateY / 2, 0);
      } else {
        api.velocity.set(0, 0, moveZ);
        api.angularVelocity.set(0, rotateY, 0);
      }
    } else {
      api.angularVelocity.set(0, 0, 0);
    }
  });
  const velocity = useRef([0, 0, 0]);
  const angularVelocity = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
    api.angularVelocity.subscribe((av) => (angularVelocity.current = av));
  }, []);

  useEffect(() => {
    if (movement.forward && movement.sprint && movement.jump) {
      setCurrentAnimation("Jump");
    } else if (movement.forward && movement.jump) {
      setCurrentAnimation("Jump");
    } else if (movement.forward && movement.sprint) {
      setCurrentAnimation("Run");
    } else if (movement.forward) {
      setCurrentAnimation("Walk");
    } else if (movement.jump) {
      setCurrentAnimation("Jump");
    } else {
      setCurrentAnimation("Idle");
    }
  }, [movement]);

  useEffect(() => {
    materials.Texture.map = texture;
  }, [materials, texture]);

  useEffect(() => {
    previousAction.current = activeAction.current;
    activeAction.current =
      actions[`Human Armature|${currentAnimation}`]?.play();
    if (previousAction.current) {
      activeAction.current.stop();
      activeAction.current
        .crossFadeFrom(previousAction.current, 0.2, true)
        .play();
    } else {
      activeAction.current.play();
    }
  }, [actions, animations, currentAnimation]);

  console.log(ref);

  return (
    <group ref={ref} receiveShadow castShadow>
      {/* <axesHelper /> */}
      <PerspectiveCamera
        makeDefault
        position={[position.x, position.y, position.z]}
        rotation={[-0.3, 0, 0]}
        fov={fov}
      />
      <group ref={group} {...props} dispose={null} rotation={[0, Math.PI, 0]}>
        <group receiveShadow castShadow scale={40} position={[0, 0, 0]}>
          <primitive object={nodes.Hips} />
        </group>

        <skinnedMesh
          geometry={nodes.Human_Mesh.geometry}
          material={materials.Texture}
          skeleton={nodes.Human_Mesh.skeleton}
          scale={60}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  );
};
