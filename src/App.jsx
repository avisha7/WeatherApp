import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./model.jsx"; // ✔ Ensure file name and path are correct


export default function App() {
  return (
    <Canvas style={{ background: "black", height: "100vh" }}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[1, 1, 1]} />
      
      {/* Load GLB Model */}
      <Model glbPath="/Model1.glb" />  // ✔ Ensure GLB file is inside 'public' or 'src/assets'

       <OrbitControls />
    </Canvas>
  );
}
