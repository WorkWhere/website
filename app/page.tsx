'use client'
import { useLanguage } from './contexts/LanguageContext'
import Image from 'next/image'
import QuestionarioForm from './components/QuestionarioForm'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState('necessidade')

  const content = {
    pt: {
      intro: "Quer trabalhar quando quiseres, onde quiseres e do que gostas? A Work Where é a tua plataforma de trabalhos temporários! ⚡ Encontra milhares de oportunidades, filtradas especialmente para ti. Inscreve-te em segundos, trabalha quando quiseres e recebe o pagamento rapidamente. Faz parte de uma comunidade de trabalhadores flexíveis e constrói o teu futuro à tua medida.",
      slogan: "Oportunidades ao seu alcance",
      sections: {
        necessidade: {
          title: "Necessidade",
          content: "A \"Work Where\" responde à necessidade de facilitar o acesso a trabalhos temporários 🛠️, conectando trabalhadores a partir dos 16 anos a oportunidades rápidas e próximas ⚡. Muitas pessoas enfrentam dificuldades em encontrar empregos flexíveis, enquanto empregadores têm desafios para preencher vagas de forma ágil. Além disso, a falta de segurança e de simplicidade nos processos de contratação e pagamento aumenta essa lacuna 💳. A necessidade central é criar uma ponte confiável que simplifique essas conexões e promova inclusão no mercado de trabalho 🌍"
        },
        solucao: {
          title: "Solução",
          content: "A \"Work Where\" oferece uma plataforma digital intuitiva 📱 que conecta trabalhadores temporários a empregadores com vagas de curta duração, baseada em localização, preferências e filtros avançados 🔍. Resolvemos o problema ao simplificar as conexões, reduzir burocracias e garantir pagamentos seguros via aplicação 💳. A nossa solução é disponibilizada como app móvel, garantindo fácil acesso ao público-alvo 🎯. A sustentabilidade é assegurada por um modelo de negócio que cobra taxas justas por transação, equilibrando acessibilidade com rentabilidade 🔄. Além disso, promovemos inclusão e impacto social, ampliando o acesso ao trabalho temporário, especialmente para jovens a partir dos 16 anos 🌱"
        },
        beneficio: {
          title: "Benefício",
          content: "A \"Work Where\" oferece benefícios concretos ao conectar trabalhadores temporários e empregadores de forma rápida, prática e segura 📲. Permite que jovens a partir dos 16 anos tenham acesso a oportunidades próximas, flexibilizando o trabalho e promovendo inclusão no mercado. Para empregadores, garante preenchimento ágil de vagas temporárias com profissionais adequados 🎯. O protótipo da plataforma é simples: o trabalhador cria um perfil, seleciona preferências e localiza empregos próximos com base em filtros avançados, enquanto os empregadores publicam vagas detalhadas 📋. O nosso sistema usa algoritmos de emparelhamento para conectar as partes de forma eficaz 🤝, com pagamentos realizados diretamente pela aplicação 💳. Em comparação com as abordagens atuais, que dependem de redes informais ou processos burocráticos e pouco seguros, oferecemos agilidade, segurança e transparência 🚀. A originalidade está em combinar tecnologia com acessibilidade, oferecendo uma experiência centrada no utilizador e adaptada às necessidades de trabalhadores e empregadores modernos 🌍."
        },
        colaboracao: {
          title: "Colaboração",
          content: "A concretização da \"Work Where\" conta com a colaboração de diversos agentes estratégicos 🤝. Entre nossos aliados estarão empresas locais e grandes empregadores, que utilizam a plataforma para preencher vagas temporárias de forma rápida e eficaz 🏢. Além disso, instituições educacionais e centros de formação podem divulgar a aplicação entre jovens a partir dos 16 anos, ajudando-nos a alcançar nosso público-alvo. Parceiros tecnológicos desempenham um papel crucial no desenvolvimento e manutenção da plataforma, garantindo uma experiência confiável e fluida para os usuários 💻. Já os sistemas de pagamento online asseguram transações seguras e transparentes 💳. ONGs e instituições focadas em inclusão social também podem contribuir, conectando populações vulneráveis ao mercado de trabalho 🌍. Esses agentes colaboram fornecendo visibilidade, suporte técnico e acesso a públicos-alvo diversificados, fortalecendo o impacto da \"Work Where\" e ajudando a construir uma rede sustentável de oportunidades para trabalhadores e empregadores. 🚀"
        }
      }
    },
    en: {
      intro: "Want to work when you want, where you want, and doing what you love? Work Where is your platform for temporary jobs! ⚡ Find thousands of opportunities, specially filtered for you. Sign up in seconds, work when you want, and get paid quickly. Be part of a community of flexible workers and build your future on your own terms.",
      slogan: "Opportunities within your reach",
      sections: {
        necessidade: {
          title: "Need",
          content: "\"Work Where\" responds to the need to facilitate access to temporary jobs 🛠️, connecting workers from 16 years old to quick and nearby opportunities ⚡. Many people face difficulties in finding flexible jobs, while employers have challenges in filling positions quickly. Moreover, the lack of security and simplicity in hiring and payment processes widens this gap 💳. The central need is to create a reliable bridge that simplifies these connections and promotes inclusion in the job market 🌍"
        },
        solucao: {
          title: "Solution",
          content: "\"Work Where\" offers an intuitive digital platform 📱 that connects temporary workers to employers with short-term vacancies, based on location, preferences, and advanced filters 🔍. We solve the problem by simplifying connections, reducing bureaucracy, and ensuring secure payments via the application 💳. Our solution is available as a mobile app, ensuring easy access to the target audience 🎯. Sustainability is ensured by a business model that charges fair fees per transaction, balancing accessibility with profitability 🔄. Furthermore, we promote inclusion and social impact, expanding access to temporary work, especially for young people from 16 years old 🌱"
        },
        beneficio: {
          title: "Benefit",
          content: "\"Work Where\" offers concrete benefits by connecting temporary workers and employers quickly, practically, and safely 📲. It allows young people from 16 years old to access nearby opportunities, making work more flexible and promoting inclusion in the market. For employers, it ensures agile filling of temporary vacancies with suitable professionals 🎯. The platform prototype is simple: the worker creates a profile, selects preferences, and locates nearby jobs based on advanced filters, while employers post detailed vacancies 📋. Our system uses matching algorithms to connect parties effectively 🤝, with payments made directly through the application 💳. Compared to current approaches, which rely on informal networks or bureaucratic and insecure processes, we offer agility, security, and transparency 🚀. The originality lies in combining technology with accessibility, offering a user-centered experience adapted to the needs of modern workers and employers 🌍."
        },
        colaboracao: {
          title: "Collaboration",
          content: "The realization of \"Work Where\" relies on the collaboration of various strategic agents 🤝. Among our allies are local companies and large employers, who use the platform to fill temporary vacancies quickly and effectively 🏢. Additionally, educational institutions and training centers can promote the application among young people from 16 years old, helping us reach our target audience. Technological partners play a crucial role in the development and maintenance of the platform, ensuring a reliable and smooth experience for users 💻. Online payment systems ensure secure and transparent transactions 💳. NGOs and institutions focused on social inclusion can also contribute, connecting vulnerable populations to the job market 🌍. These agents collaborate by providing visibility, technical support, and access to diverse target audiences, strengthening the impact of \"Work Where\" and helping to build a sustainable network of opportunities for workers and employers. 🚀"
        }
      }
    }
  }

  const t = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Work Where</h1>
        <p className="text-xl mb-6">
          {t.intro}
        </p>
        <h2 className="text-2xl font-semibold mb-8 text-blue-600 font-serif italic">{t.slogan}!</h2>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/g4Ij7VMV200"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[400px] rounded-lg shadow-lg"
          ></iframe>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <QuestionarioForm />
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <Tabs defaultValue="necessidade" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {Object.entries(t.sections).map(([key, section]) => (
              <TabsTrigger key={key} value={key} onClick={() => setActiveSection(key)}>
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(t.sections).map(([key, section]) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{section.content}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[1, 2, 3, 4].map((member) => (
          <div key={member} className="bg-gray-200 rounded-lg aspect-square shadow-md hover:shadow-lg transition-shadow duration-300"></div>
        ))}
      </motion.section>
    </div>
  )
}

