import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas className="" shadows camera={{position: [4, 4, -12], fov: 35}}>
        <ambientLight intensity={1} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
