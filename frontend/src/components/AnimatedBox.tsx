import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import type { Mesh } from 'three'


export default function AnimatedBox() {
const ref = useRef<Mesh | null>(null)


useEffect(() => {
if (!ref.current) return


// Use GSAP context so we can cleanly revert on unmount
const ctx = gsap.context(() => {
gsap.to(ref.current!.rotation, {
y: Math.PI * 2,
duration: 5,
repeat: -1,
ease: 'linear',
})
}, ref)


return () => ctx.revert()
}, [])


return (
<mesh ref={ref} position={[2, 1, 0]} castShadow>
<boxGeometry args={[1, 1, 1]} />
<meshStandardMaterial color="orange" />
</mesh>
)
}