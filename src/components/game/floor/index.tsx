import React, { useEffect, useRef } from "react";
import { PlaneGeometry } from "three";

export const Floor = () => {
  const planeRef = useRef<any>();
  useEffect(() => {
    console.log(planeRef);
    planeRef.current.rotation.x = -Math.PI * 0.5;
  }, []);
  return (
    <mesh ref={planeRef} position={[0, -10, 0]}>
      <planeGeometry args={[1000, 1000, 1000]} />
    </mesh>
  );
};
