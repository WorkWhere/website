'use client'
import { useLanguage } from '../contexts/LanguageContext'
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Contactos() {
  const { language } = useLanguage()

  const content = {
    pt: {
      title: "Contactos",
      school: "Agrupamento de Escolas de Vila Real de Santo António"
    },
    en: {
      title: "Contacts",
      school: "Agrupamento de Escolas de Vila Real de Santo António"
    }
  }

  const t = content[language]

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-center">{t.title}</h1>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <Phone className="mr-4 text-blue-600" />
          <span>+351 927 526 690</span>
        </div>
        
        <div className="flex items-center">
          <Mail className="mr-4 text-blue-600" />
          <a href="mailto:workwwhere@gmail.com" className="hover:underline">
            workwwhere@gmail.com
          </a>
        </div>
        
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/output-onlinepngtools (2).png" 
              width={24} 
              height={24} 
              alt="TikTok"
              className="text-blue-600 hover:text-blue-800" 
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-blue-600 hover:text-blue-800" />
          </a>
        </div>
        
        <div className="flex items-center mt-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4">
            {/* Placeholder para o ícone da escola */}
          </div>
          <span>{t.school}</span>
        </div>
      </div>
    </div>
  )
}

