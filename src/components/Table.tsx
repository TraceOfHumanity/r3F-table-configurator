import {useGLTF} from "@react-three/drei";
import {Mesh} from "three";
import {useAppSelector} from "../hooks/useReduxToolkit";
import { useEffect } from "react";
import * as Three from "three";

type GLTFResult = {
  nodes: {
    Plate: Mesh;
    Legs01Left: Mesh;
    Legs01Right: Mesh;
    Legs02Left: Mesh;
    Legs02Right: Mesh;
    Legs03Right: Mesh;
    Legs03Left: Mesh;
  };
  materials: {
    Plate: any;
    Metal: any;
  };
};

export const Table = (props: any) => {
  const {nodes, materials} = useGLTF(
    "./models/Table.gltf"
  ) as unknown as GLTFResult;

  const {legs, legsColor, tableWidth} = useAppSelector((state) => state.table);

  const tableWidthScale = tableWidth / 100;

  useEffect(() => {
    materials.Metal.color = new Three.Color(legsColor);
  }, [legsColor]);
  

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plate.geometry}
        material={materials.Plate}
        castShadow
        scale={[tableWidthScale, 1, 1]}
      />
      {legs === 0 && (
        <>
          <mesh
            geometry={nodes.Legs01Left.geometry}
            material={materials.Metal}
            position={[-1.5 * tableWidthScale, 0, 0]}
          />
          <mesh
            geometry={nodes.Legs01Right.geometry}
            material={materials.Metal}
            position={[1.5 * tableWidthScale, 0, 0]}
          />
        </>
      )}
      {legs === 1 && (
        <>
          <mesh
            geometry={nodes.Legs02Left.geometry}
            material={materials.Metal}
            position={[-1.5 * tableWidthScale, 0, 0]}
          />
          <mesh
            geometry={nodes.Legs02Right.geometry}
            material={materials.Metal}
            position={[1.5 * tableWidthScale, 0, 0]}
          />
        </>
      )}
      {legs === 2 && (
        <>
          <mesh
            geometry={nodes.Legs03Right.geometry}
            material={materials.Metal}
            position={[1.5 * tableWidthScale, 0, 0]}
          />
          <mesh
            geometry={nodes.Legs03Left.geometry}
            material={materials.Metal}
            position={[-1.5 * tableWidthScale, 0, 0]}
          />
        </>
      )}
    </group>
  );
};

useGLTF.preload("./models/Table.gltf");
