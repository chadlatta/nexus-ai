import { useState } from 'react'
import ChatInterface from '@/components/ChatInterface'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Nexus AI</h1>
      <ChatInterface />
    </main>
  )
}