'use client'

import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}

export default LanguageSwitch

