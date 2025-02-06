"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import LanguageSwitch from "./LanguageSwitch"
import { useLanguage } from "../contexts/LanguageContext"
import { useState, useEffect, useRef } from "react"

const Header = () => {
  const pathname = usePathname()
  const { language } = useLanguage()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const translations = {
    pt: {
      home: "Início",
      prototype: "Protótipo",
      contacts: "Contactos",
      more: "Mais",
      ourMessage: "A nossa mensagem",
      // Remova a linha: marketStudy: 'Estudo de mercado',
    },
    en: {
      home: "Home",
      prototype: "Prototype",
      contacts: "Contacts",
      more: "More",
      ourMessage: "Our Message",
      // Remova a linha: marketStudy: 'Market Study',
    },
  }

  const t = translations[language]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full mr-3">{/* Placeholder para o ícone da app */}</div>
          <Link href="/" className="text-blue-600 text-2xl font-bold">
            Work Where
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            {[
              { name: t.home, href: "/" },
              { name: t.prototype, href: "/prototipo" },
              { name: t.contacts, href: "/contactos" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-gray-600 hover:text-blue-600 ${
                    pathname === link.href ? "border-b-2 border-blue-600" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <div
                ref={dropdownRef}
                className={`relative text-gray-600 hover:text-blue-600 cursor-pointer ${
                  isDropdownOpen ? "text-blue-600" : ""
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {t.more}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                    <Link href="/nossa-mensagem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {t.ourMessage}
                    </Link>
                    {/* Remova o bloco abaixo */}
                    {/* <Link href="/estudo-mercado" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {t.marketStudy}
                    </Link> */}
                  </div>
                )}
              </div>
            </li>
            <li>
              <LanguageSwitch />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

