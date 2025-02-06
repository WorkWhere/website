import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col items-start">
          <p className="text-blue-600 font-bold">Work Where</p>
          <p className="text-gray-600">Todos os direitos reservados</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-blue-600 hover:text-blue-800" />
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
        </div>
        <Link href="/contactos" className="text-gray-600 hover:text-blue-600">
          Contactos
        </Link>
      </div>
    </footer>
  )
}

export default Footer

