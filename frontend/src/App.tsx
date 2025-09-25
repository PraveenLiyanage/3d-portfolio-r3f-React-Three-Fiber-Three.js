import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import Model from './components/Model'
import AnimatedBox from './components/AnimatedBox'
import Home from './pages/Home'


export default function App() {
return (
<>
<Canvas
shadows
gl={{ antialias: true }}
camera={{ position: [0, 1.5, 5], fov: 50 }}
style={{ height: '100vh', width: '100vw' }}
>
{/* Basic lights */}
<ambientLight intensity={0.4} />
<directionalLight
castShadow
intensity={1}
position={[5, 10, 5]}
shadow-mapSize-width={1024}
shadow-mapSize-height={1024}
/>
{/* Ground (so shadows/readability improve) */}
<mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
<planeGeometry args={[50, 50]} />
<meshStandardMaterial color="#0b0b0b" />
</mesh>


<Suspense fallback={<Html center>Loading 3D...</Html>}>
{/* Put your model at the scene origin. Adjust `scale`/`position` as needed. */}
<Model position={[0, 0, 0]} scale={1.2} />
</Suspense>


{/* Simple animated object to make sure rendering works */}
<AnimatedBox />


<OrbitControls enablePan enableZoom />
</Canvas>


{/* HTML overlay UI */}
<Home />
</>
)
}