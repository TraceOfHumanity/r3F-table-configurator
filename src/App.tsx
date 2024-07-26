import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas className="" shadows camera={{position: [4, 4, -12], fov: 35}}>
        <Table />
      </Canvas>
    </div>
  );
}

export default App;
