import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import React from "react";
import { Bulb } from "../../components/mac/bolb";
import * as THREE from "three";
import { ScrollControls, useScroll } from "@react-three/drei";
import { Composition } from "../../components/mac/composition";

const Mac: NextPage = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "fixed", top: "0" }}>
      <Canvas shadows camera={{ position: [0, 0, 40], fov: 12 }} dpr={[1, 2]}>
        <ScrollControls pages={5}>
          <Composition />
        </ScrollControls>
        <primitive object={new THREE.AxesHelper(10)} />
        {/* <Bulb position={[0, 3, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default Mac;
