export const Bulb = ({ ...other }) => {
  return (
    <mesh {...other}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.3]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};
