"use client"

import { Canvas, useThree } from "@react-three/fiber"
import RobotModel from "./RobotModel"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"

function Loader() {
  const { progress, active } = useProgress()
  
  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Robot() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="top-[150px] relative h-svh w-[60vw]">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={3}>      
          <RobotModel />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}