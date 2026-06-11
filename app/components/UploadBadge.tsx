'use client'

import { useEffect, useState } from 'react'

export default function UploadBadge() {
  const [hasPending, setHasPending] = useState(false)

  useEffect(() => {
    const currentMonth = new Date().toISOString().slice(0, 7)
    const pending = localStorage.getItem(`month-${currentMonth}-pending`)
    setHasPending(pending === 'true')
  }, [])

  if (!hasPending) return null

  return (
    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
  )
}
