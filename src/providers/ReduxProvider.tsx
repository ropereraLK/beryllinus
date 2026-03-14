"use client"

import { Provider } from "react-redux"
import { store } from "@/state/store"

interface ReduxProviderProps {
children: React.ReactNode
}

export default function ReduxProvider({
children
}: ReduxProviderProps) {
return (

{children}

)
}