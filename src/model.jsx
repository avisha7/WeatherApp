import { useRef } from "react";
import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model({ glbPath }) {
  const modelRef = useRef();
  
  // Load GLB Model
  const { scene } = useGLTF(glbPath);

  // Auto Rotation Animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.02; // Rotate on Y-axis
    }
  });

  return <primitive ref={modelRef} object={scene} scale={8.5} />;
}
