"use client";

import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { FARM_MODEL_PATH } from "@/lib/constants";

useGLTF.preload(FARM_MODEL_PATH);

function FarmModelMesh() {
  const { scene } = useGLTF(FARM_MODEL_PATH);
  const model = useMemo(() => scene.clone(true), [scene]);

  return (
    <Center scale={0.1}>
      <primitive object={model} />
    </Center>
  );
}

function FarmScene() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[6, 10, 4]} intensity={1.15} />
      <directionalLight position={[-4, 6, -2]} intensity={0.35} />
      <Suspense fallback={null}>
        <FarmModelMesh />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.1}
          autoRotate={!reducedMotion}
          autoRotateSpeed={0.9}
        />
      </Suspense>
    </>
  );
}

export function HeroFarmModel() {
  return (
    <div className="hero-farm-model" aria-hidden>
      <Canvas
        className="!h-full !w-full"
        camera={{ position: [3.4, 2.1, 4.2], fov: 40, near: 0.1, far: 100 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <FarmScene />
      </Canvas>
    </div>
  );
}
