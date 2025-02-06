'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

type LanguageContextType = {
  language: string
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('pt')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'pt'
    setLanguage(storedLanguage)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

