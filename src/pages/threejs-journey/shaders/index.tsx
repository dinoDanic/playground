import React, { useCallback, useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

const Shaders = () => {
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

      // Geomentry
      const geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);

      // Material
      // const material = new THREE.ShaderMaterial({
      //   vertexShader: source,
      //   fragmentShader:
      //     "../../../components/threejs-journey/shaders/test/vertex.glsl",
      //   side: THREE.DoubleSide,
      // });

      // Mesh
      // const mesh = new THREE.Mesh(geometry, material);
      // scene.add(mesh);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const camera = new THREE.PerspectiveCamera(75, scW / scH, 0.1, 100);

      camera.position.copy(new THREE.Vector3(0, 2, 0));

      const ambientLight = new THREE.AmbientLight(0, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      renderer.render(scene, camera);
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

export default Shaders;
