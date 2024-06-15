"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/stylizedhand/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    // console.log("hello"+gltf);

    // useFrame(() => {
    //     mesh.current.rotation.y += 2.01;
    //     mesh.current.rotation.z = 0.30;
    //  });
    
  
    return (
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }
  
  export function StylizedHand() {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Canvas className='h-2xl w-2xl' camera={{ position: [0, 0, 5], fov: 75 }}>
          <MeshComponent />
        </Canvas>
      </div>
    );
  }