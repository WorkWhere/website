'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

type Question = {
  id: number
  text: {
    pt: string
    en: string
  }
  options: {
    pt: string[]
    en: string[]
  }
  nextQuestion: (answer: string) => number | null
}

const questions: Question[] = [
  {
    id: 1,
    text: {
      pt: "Tens algum negócio?",
      en: "Do you have a business?"
    },
    options: {
      pt: ["✅ Sim", "❌ Não"],
      en: ["✅ Yes", "❌ No"]
    },
    nextQuestion: (answer) => answer.includes("✅") ? 8 : 2
  },
  {
    id: 2,
    text: {
      pt: "Quantos anos tens?",
      en: "How old are you?"
    },
    options: {
      pt: ["16 a 18", "19 a 25", "26 a 35", "36 ou mais"],
      en: ["16 to 18", "19 to 25", "26 to 35", "36 or more"]
    },
    nextQuestion: () => 3
  },
  {
    id: 3,
    text: {
      pt: "Atualmente estás?",
      en: "Currently, are you?"
    },
    options: {
      pt: ["Empregado(a)", "Desempregado(a)", "A estudar", "A trabalhar por conta própria"],
      en: ["Employed", "Unemployed", "Studying", "Self-employed"]
    },
    nextQuestion: () => 4
  },
  {
    id: 4,
    text: {
      pt: "Qual é o teu nível de escolaridade?",
      en: "What is your education level?"
    },
    options: {
      pt: ["Ensino básico", "Ensino secundário", "Licenciatura", "Pós-graduação ou superior"],
      en: ["Primary education", "Secondary education", "Bachelor's degree", "Postgraduate or higher"]
    },
    nextQuestion: () => 5
  },
  {
    id: 5,
    text: {
      pt: "Já usaste o Work Where?",
      en: "Have you used Work Where before?"
    },
    options: {
      pt: ["Sim⭐", "Não"],
      en: ["Yes⭐", "No"]
    },
    nextQuestion: () => 6
  },
  {
    id: 6,
    text: {
      pt: "Aceita os termos?",
      en: "Do you accept the terms?"
    },
    options: {
      pt: ["Sim", "Não"],
      en: ["Yes", "No"]
    },
    nextQuestion: (answer) => answer === "Sim" || answer === "Yes" ? 7 : 1
  },
  {
    id: 7,
    text: {
      pt: "Submeter o questionário?",
      en: "Submit the questionnaire?"
    },
    options: {
      pt: ["Submeter", "Cancelar"],
      en: ["Submit", "Cancel"]
    },
    nextQuestion: () => null
  },
  {
    id: 8,
    text: {
      pt: "Qual a área da sua empresa",
      en: "What is your company's area"
    },
    options: {
      pt: [
        "Restauração (Restaurantes, Cafés, Bares, Pastelarias)",
        "Comércio Retalhista (Lojas de Moda, Supermercados, Livrarias, Lojas de Eletrodomésticos)",
        "Comércio Grossista",
        "Serviços (Cabeleireiros, Centros de Estética, Lavandarias)",
        "Alojamento e Turismo (Hotéis, Alojamentos Locais, Agências de Viagens",
        "Transportes e Logística, Saúde e Bem-Estar (Clínicas, Farmácias, Ginásios)",
        "Educação e Formação (Escolas, Centros de Estudos, Workshops)",
        "Tecnologia e Informática (Lojas de Informática, Desenvolvimento de Software)",
        "Indústria e Produção (Fábricas, Indústrias Transformadoras)",
        "Construção e Obras (Empreiteiros, Lojas de Materiais de Construção)",
        "Agricultura e Pecuária, Entretenimento e Cultura (Teatros, Museus, Cinemas)"
      ],
      en: [
        "Food Service (Restaurants, Cafes, Bars, Pastry Shops)",
        "Retail (Fashion Stores, Supermarkets, Bookstores, Appliance Stores)",
        "Wholesale Trade",
        "Services (Hairdressers, Beauty Centers, Laundries)",
        "Accommodation and Tourism (Hotels, Local Lodging, Travel Agencies)",
        "Transport and Logistics, Health and Wellness (Clinics, Pharmacies, Gyms)",
        "Education and Training (Schools, Study Centers, Workshops)",
        "Technology and IT (Computer Stores, Software Development)",
        "Industry and Production (Factories, Manufacturing Industries)",
        "Construction and Works (Contractors, Construction Material Stores)",
        "Agriculture and Livestock, Entertainment and Culture (Theaters, Museums, Cinemas)"
      ]
    },
    nextQuestion: () => 9
  },
  {
    id: 9,
    text: {
      pt: "Quantos empregados você tem?",
      en: "How many employees do you have?"
    },
    options: {
      pt: ["Nenhum, só eu", "de 1 a 5", "de 5 a 20", "mais de 20"],
      en: ["None, just me", "1 to 5", "5 to 20", "more than 20"]
    },
    nextQuestion: () => 10
  },
  {
    id: 10,
    text: {
      pt: "De vez em quando você precisa de uma mão extra no seu negócio?",
      en: "Do you occasionally need an extra hand in your business?"
    },
    options: {
      pt: ["Sim", "Não"],
      en: ["Yes", "No"]
    },
    nextQuestion: () => 6
  }
]

const QuestionarioForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasResponded, setHasResponded] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const storedResponse = localStorage.getItem('questionarioResponse')
    if (storedResponse) {
      setHasResponded(true)
    }
  }, [])

  const handleAnswer = (answer: string) => {
    const question = questions.find(q => q.id === currentQuestion)
    if (!question) return

    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }))
    
    if ((answer === "Não" || answer === "No") && question.id === 6) {
      // Reset the form if user doesn't accept terms
      setAnswers({})
      setCurrentQuestion(1)
      return
    }

    const nextQuestionId = question.nextQuestion(answer)
    if (nextQuestionId) {
      setCurrentQuestion(nextQuestionId)
    } else if (answer === "Submeter" || answer === "Submit") {
      console.log('Respostas finais:', answers)
      setIsSubmitted(true)
      localStorage.setItem('questionarioResponse', JSON.stringify(answers))
    }
  }

  const currentQuestionData = questions.find(q => q.id === currentQuestion)

  const translations = {
    pt: {
      title: "Questionário",
      alreadyResponded: "Você já respondeu a este questionário. Obrigado pela sua participação!",
      thankYou: "Obrigado por participar no questionário!",
      responsesRecorded: "Suas respostas foram registradas com sucesso."
    },
    en: {
      title: "Questionnaire",
      alreadyResponded: "You have already answered this questionnaire. Thank you for your participation!",
      thankYou: "Thank you for participating in the questionnaire!",
      responsesRecorded: "Your responses have been successfully recorded."
    }
  }

  const t = translations[language]

  if (hasResponded) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg text-center">{t.alreadyResponded}</p>
      </div>
    )
  }

  if (!currentQuestionData) return null

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{t.title}</h2>
      
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4">{t.thankYou}</h3>
            <p>{t.responsesRecorded}</p>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-lg mb-4">{currentQuestionData.text[language]}</p>
            <div className="space-y-2">
              {currentQuestionData.options[language].map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default QuestionarioForm

