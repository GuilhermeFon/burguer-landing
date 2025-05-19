// import { Toaster } from "sonner";
// 'use client';
// import {useState} from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-semibold text-orange-600">BurgerPro</h2>
      </header>
      <main className="flex-1">
        <LandingPage />
      </main>
      {/* <Toaster /> */}
    </div>
  );
}

function LandingPage() {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  // Handle form submission
  // setEmail("");
  // setName("");
  // };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforme Sua Cozinha em uma Hamburgueria Lucrativa
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Aprenda a criar hambúrgueres artesanais e construa um negócio de
            sucesso sem sair de casa
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-100 transition-colors cursor-pointer">
            Comece Agora
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que Escolher Nosso Curso?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-orange-50"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            O Que Dizem Nossos Alunos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            O Que Você Vai Aprender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Comece Sua Jornada Hoje
          </h2>
          <form
            // onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full p-3 rounded-lg border border-gray-300"
              required
            />
            <input
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="w-full p-3 rounded-lg border border-gray-300"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors cursor-pointer"
            >
              Quero Me Inscrever
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BurgerPro</h3>
            <p className="text-gray-400">
              Transformando sonhos em negócios de sucesso
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Sobre o Curso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contato@burgerpro.com</li>
              <li>(11) 99999-9999</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

const benefits = [
  {
    icon: "🎯",
    title: "Método Comprovado",
    description: "Sistema testado e aprovado por mais de 1000 alunos",
  },
  {
    icon: "💰",
    title: "Retorno Garantido",
    description: "Recupere seu investimento em menos de 30 dias",
  },
  {
    icon: "🚀",
    title: "Suporte Completo",
    description: "Acompanhamento personalizado durante todo o curso",
  },
];

const testimonials = [
  {
    text: "Em apenas 2 meses, consegui criar uma renda extra de R$ 3.000 com minha hamburgueria caseira!",
    name: "Ana Silva",
    location: "São Paulo, SP",
  },
  {
    text: "O curso me deu todas as ferramentas necessárias para começar meu negócio do zero.",
    name: "Carlos Santos",
    location: "Rio de Janeiro, RJ",
  },
];

const courseModules = [
  {
    title: "Fundamentos do Hambúrguer Artesanal",
    description: "Aprenda as técnicas essenciais para criar blends perfeitos",
  },
  {
    title: "Gestão Financeira",
    description: "Calcule custos, preços e maximize seus lucros",
  },
  {
    title: "Marketing Digital",
    description: "Atraia clientes usando as redes sociais",
  },
  {
    title: "Operação e Logística",
    description: "Organize sua produção e entregas de forma eficiente",
  },
];
