import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group, AnimationAction } from "three"

useGLTF.preload("./robot_playground.glb")

export default function RobotModel() {
  const group = useRef<Group>(null)
  const { nodes, materials, animations, scene } = useGLTF("./robot_playground.glb")
  const { actions, clips } = useAnimations(animations, group)
  const scroll = useScroll()

  useEffect(() => {
    if (actions && actions["Experiment"] instanceof AnimationAction) {
      actions["Experiment"].play()
      actions["Experiment"].paused = true
    }
  }, [actions])

  useFrame(() => {
    if (actions && actions["Experiment"] instanceof AnimationAction) {
      const action = actions["Experiment"]
      const duration = action.getClip().duration
      action.time = (duration * scroll.offset) / 4
    }
  })

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}
