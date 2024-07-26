import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export const Table = (props: any) => {
  const { nodes, materials } = useGLTF("./models/Table.gltf") as any;

  // Assert the type of nodes.Plate as Mesh
  const plateMesh = nodes.Plate as Mesh;
  

  return (
    <group {...props} dispose={null}>
      <mesh geometry={plateMesh.geometry} material={materials.Plate} />
      {/* <mesh geometry={plateMesh.Legs01Left.geometry} material={materials.Metal} /> */}
      
    </group>
  );
};

useGLTF.preload("./models/Table.gltf");
