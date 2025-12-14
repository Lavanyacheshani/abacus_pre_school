import { ReactNode } from "react"

interface AnimatedTextProps {
    children: ReactNode
    className?: string
}

export function AnimatedText({ children, className = "" }: AnimatedTextProps) {
    return <span className={`animate-color-cycle ${className}`}>{children}</span>
}
