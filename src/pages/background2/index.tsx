import React, { useCallback, useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";
import { Cube } from "components/vanilla-setup/Cube";

const Background2 = () => {
  const refBody = useRef<HTMLDivElement>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [scene] = useState(new THREE.Scene());

  const handleWindowResize = useCallback(() => {
    const { current: container } = refBody;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refBody;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const geometry = new THREE.PlaneGeometry(5, 5, 128, 128);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          color1: {
            value: new THREE.Color("red"),
          },
          color2: {
            value: new THREE.Color("purple"),
          },
        },
        vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
        fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
        }
      `,
        wireframe: false,
      });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.rotation.x = -2;

      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const camera = new THREE.PerspectiveCamera(75, scW / scH, 0.1, 100);

      camera.position.copy(new THREE.Vector3(0, 2, 0));

      const ambientLight = new THREE.AmbientLight(0x404040);
      ambientLight.castShadow = true;
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      renderer.render(scene, camera);

      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Update controls
        controls.update();

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
      };

      tick();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);
  return (
    <div
      ref={refBody}
      style={{ width: "100%", height: "100%", position: "fixed" }}
    ></div>
  );
};

export default Background2;
