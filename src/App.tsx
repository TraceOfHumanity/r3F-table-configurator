import {OrbitControls, Stage} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";
import {Table} from "./components/Table";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas className="" shadows camera={{position: [4, 4, -12], fov: 35}}>
        {/* <ambientLight intensity={5} /> */}
        {/* <pointLight position={[2, 1, 0]} intensity={10} /> */}
        <Stage
          intensity={1.5}
          environment="city"
          shadows={{
            type: "accumulative",
            color: "#d9afd9",
            colorBlend: 0,
            opacity: 1,
          }}
          adjustCamera={2}
        >
          <Table />
        </Stage>
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default App;
