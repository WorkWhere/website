'use client'
import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'

export default function Prototipo() {
  const { language } = useLanguage()

  const content = {
    pt: {
      title: "Protótipo",
      testMessage: "Teste o nosso protótipo interativo!",
      warningMessage: "Este protótipo foi desenvolvido para computadores. A visualização num dispositivo móvel poderá desformatar a simulação!",
      tipMessage: "Dica: Os quadrados azuis que aparecem quando você clica indicam os itens interativos",
      businessVersion: "Versão empresa",
      workerVersion: "Versão trabalhador"
    },
    en: {
      title: "Prototype",
      testMessage: "Test our interactive prototype!",
      warningMessage: "This prototype was developed for computers. Viewing on a mobile device may distort the simulation!",
      tipMessage: "Tip: The blue squares that appear when you click indicate interactive items",
      businessVersion: "Business version",
      workerVersion: "Worker version"
    }
  }

  const t = content[language]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center">{t.title}</h1>
      
      <div className="text-center mb-8">
        <p className="text-xl mb-4">{t.testMessage}</p>
        <p className="text-sm text-gray-600 mb-2">
          {t.warningMessage}
        </p>
        <p className="text-sm text-blue-600">
          {t.tipMessage}
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div className="flex-1">
            <iframe 
              width="100%" 
              height="600" 
              src="https://embed.figma.com/proto/nGMEUYVqILd5Jiqnd5gd2P/WorkWhere?node-id=533-1521&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=49%3A55&starting-point-node-id=54%3A622&embed-host=share&hide-ui=1"
            ></iframe>
            <p className="text-center mt-2 font-bold">{t.businessVersion}</p>
          </div>
          <div className="flex-1">
            <iframe 
              width="100%" 
              height="600" 
              src="https://embed.figma.com/proto/nGMEUYVqILd5Jiqnd5gd2P/WorkWhere?node-id=533-1374&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=49%3A55&starting-point-node-id=54%3A622&embed-host=share&hide-ui=1"
            ></iframe>
            <p className="text-center mt-2 font-bold">{t.workerVersion}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

