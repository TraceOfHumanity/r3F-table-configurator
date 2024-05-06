import { OrbitControls, Stage } from '@react-three/drei';
import { useConfigurator } from 'contexts/Configurator';
import React from 'react';

import { Table } from './Table';

export const Experience = () => {
  const { legs } = useConfigurator();
  return (
    <>
      {/* <mesh
        rotation-x={-Math.PI * 0.5}
        castShadow
        receiveShadow
        position={[0, -1, 0]}
      >
        <planeGeometry args={[30, 30]} />
      </mesh> */}
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: 'accumulative',
          color: '#d9afd9',
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
    </>
  );
};
