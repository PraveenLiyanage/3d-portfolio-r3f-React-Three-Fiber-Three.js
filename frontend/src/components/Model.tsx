import { useGLTF } from '@react-three/drei'
import type { ThreeElements } from '@react-three/fiber'

// IMPORTANT: Place your model in public/assets/model.glb
// and it will be available at runtime via /assets/model.glb

export default function Model(props: ThreeElements['group']) {
  const { scene } = useGLTF('/assets/model.glb')

  return <primitive object={scene} {...props} />
}

// Preload helps with caching
useGLTF.preload('/assets/model.glb')
