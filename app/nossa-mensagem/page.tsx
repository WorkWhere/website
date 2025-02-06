'use client'
import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'

export default function NossaMensagem() {
  const { language } = useLanguage()

  const content = {
    pt: {
      title: "A Nossa Mensagem",
      subtitle: "Inspiração e Transformação",
      intro: "Participar no \"The Challenge\" foi mais do que uma competição — foi uma jornada de crescimento e descoberta. Desenvolvemos a Work Where com uma missão clara: conectar pessoas a oportunidades flexíveis, rápidas e seguras. Mas o mais valioso foi o que aprendemos ao longo do caminho.",
      quote: "Cada desafio trouxe-nos uma nova solução. Cada erro, uma lição valiosa.",
      whatWeLearned: {
        title: "O Que Aprendemos 📚",
        items: [
          { title: "Colaboração é chave 🤝", description: "Trabalhar em equipa ajudou-nos a unir forças e a criar algo incrível." },
          { title: "Inovação sem limites 💡", description: "Fomos além das nossas ideias iniciais e desenvolvemos uma solução real." },
          { title: "Crescimento pessoal 🌱", description: "Superámos obstáculos, evoluímos e tornámo-nos mais resilientes." },
        ],
      },
      whyParticipate: {
        title: "Porque Deves Participar? 🎯",
        intro: "Se estás à procura de uma oportunidade para desenvolver as tuas ideias, testar limites e aprender na prática, este é o desafio certo. Vais ganhar:",
        items: [
          "Experiência prática real em projetos inovadores 🌍.",
          "Oportunidade de crescimento e trabalho em equipa 💼.",
          "Impacto ao criar algo com propósito 🚀.",
        ],
        outro: "Tu também podes fazer a diferença. Tens uma ideia? Põe-na em prática!",
      },
      teamTips: {
        title: "Dicas da Nossa Equipa 💬",
        items: [
          "Mantém-te focado nos objetivos, mas aberto a novas abordagens.",
          "Não tenhas medo de errar — aprende com cada desafio.",
          "Colabora e comunica: as melhores ideias nascem do trabalho em conjunto.",
        ],
      },
      invitation: {
        title: "Um Convite Para Ti 🌟",
        content: "Acreditamos que o \"The Challenge\" é uma porta aberta para transformares ideias em realidade. Inscreve-te, acredita no teu potencial e cria impacto.",
        callToAction: "Juntos podemos construir o futuro. Dá o teu primeiro passo.",
      },
    },
    en: {
      title: "Our Message",
      subtitle: "Inspiration and Transformation",
      intro: "Participating in \"The Challenge\" was more than just a competition — it was a journey of growth and discovery. We developed Work Where with a clear mission: to connect people to flexible, quick, and secure opportunities. But the most valuable thing was what we learned along the way.",
      quote: "Each challenge brought us a new solution. Each mistake, a valuable lesson.",
      whatWeLearned: {
        title: "What We Learned 📚",
        items: [
          { title: "Collaboration is key 🤝", description: "Working as a team helped us unite forces and create something incredible." },
          { title: "Innovation without limits 💡", description: "We went beyond our initial ideas and developed a real solution." },
          { title: "Personal growth 🌱", description: "We overcame obstacles, evolved, and became more resilient." },
        ],
      },
      whyParticipate: {
        title: "Why Should You Participate? 🎯",
        intro: "If you're looking for an opportunity to develop your ideas, test limits, and learn in practice, this is the right challenge. You'll gain:",
        items: [
          "Real hands-on experience in innovative projects 🌍.",
          "Opportunity for growth and teamwork 💼.",
          "Impact by creating something with purpose 🚀.",
        ],
        outro: "You too can make a difference. Do you have an idea? Put it into practice!",
      },
      teamTips: {
        title: "Tips from Our Team 💬",
        items: [
          "Stay focused on the goals, but open to new approaches.",
          "Don't be afraid to make mistakes — learn from each challenge.",
          "Collaborate and communicate: the best ideas are born from working together.",
        ],
      },
      invitation: {
        title: "An Invitation for You 🌟",
        content: "We believe that \"The Challenge\" is an open door for you to transform ideas into reality. Sign up, believe in your potential, and create impact.",
        callToAction: "Together we can build the future. Take your first step.",
      },
    },
  }

  const t = content[language]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-center">{t.title}</h1>
      <h2 className="text-2xl font-semibold mb-8 text-center text-gray-600">{t.subtitle}</h2>

      <p className="text-lg mb-6">{t.intro}</p>

      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-6 italic text-gray-600">
        "{t.quote}"
      </blockquote>

      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">{t.whatWeLearned.title}</h3>
        <ul className="space-y-4">
          {t.whatWeLearned.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-2xl">{item.title.split(' ').pop()}</span>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="mb-8">
        <Image
          src="/placeholder.svg?height=436&width=550"
          width={550}
          height={436}
          alt="Placeholder image"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">{t.whyParticipate.title}</h3>
        <p className="mb-4">{t.whyParticipate.intro}</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          {t.whyParticipate.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{t.whyParticipate.outro}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">{t.teamTips.title}</h3>
        <ul className="list-disc list-inside space-y-2">
          {t.teamTips.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-4">{t.invitation.title}</h3>
        <p className="mb-4">{t.invitation.content}</p>
        <p className="font-semibold text-blue-600">{t.invitation.callToAction}</p>
      </section>

      <div className="flex items-center mb-8">
        <Image
          src="https://via.placeholder.com/382x60?text=Project+Promoter+Logo"
          width={382}
          height={60}
          alt="Project promoter logo"
          className="mr-4"
        />
      </div>
    </div>
  )
}

