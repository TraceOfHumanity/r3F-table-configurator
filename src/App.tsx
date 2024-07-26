import {OrbitControls, Stage} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";
import {Table} from "./components/Table";
import {Interface} from "components/Interface";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas className="" shadows camera={{position: [4, 4, -12], fov: 35}}>
        <Stage
          intensity={1.5}
          environment="city"
          shadows={{
            type: "contact",
            color: "#000000",
            // colorBlend: 0,
            // opacity: 1,
          }}
          adjustCamera={1.5}
        >
          <Table />
        </Stage>
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <Interface />
    </div>
  );
}

export default App;
