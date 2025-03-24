"use client"
import { useMousePosition } from './mouseTracker.js'

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode
    }>) {
    const { x, y } = useMousePosition()
    return (
        <div className="mx-auto w-full max-w-screen-sm transition duration-300 absolute inset-0 flex justify-center" style={{background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 65%)`}}>
        </div>
    )
}