'use client'

import { signOut } from "next-auth/react"
import Link from "next/link"

export const Navigation = () => {
    return (
        <div className="flex justify-end">
            <button onClick={() => signOut()}>sign out</button>
        </div>
    )
}