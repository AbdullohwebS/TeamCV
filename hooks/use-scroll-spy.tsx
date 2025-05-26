"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Find the section that is currently in view
      const section = ids
        .map((id) => {
          const element = document.getElementById(id)
          if (!element) return { id, top: -1, bottom: -1 }

          const rect = element.getBoundingClientRect()
          const top = rect.top + window.scrollY
          const bottom = rect.bottom + window.scrollY

          return { id, top, bottom }
        })
        .find(({ top, bottom }) => scrollPosition >= top && scrollPosition <= bottom)

      setActiveId(section?.id || null)
    }

    handleScroll() // Call once on mount
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [ids, offset])

  return activeId
}
