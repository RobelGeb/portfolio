"use client"
import { useMousePosition } from './mouseTracker.js'

export default function RadialWrapper({
    children,
}: Readonly<{
    children: React.ReactNode
    }>) {
    const { x, y } = useMousePosition()
    return (
        <div className="pointer-events-none transition duration-300 lg:absolute fixed inset-0 flex-1 justify-center" style={{background: `radial-gradient(800px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 65%)`}}>
        {children}
        </div>
    )
}