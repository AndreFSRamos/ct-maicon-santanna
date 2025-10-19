import { Shield, Trophy, Users, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Profissionalismo",
      description: "Instrutores certificados e experientes em cada modalidade",
    },
    {
      icon: Trophy,
      title: "Excelência",
      description: "Formação de campeões e atletas de alto nível",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Ambiente acolhedor para todas as idades e níveis",
    },
    {
      icon: Heart,
      title: "Dedicação",
      description: "Comprometimento com o desenvolvimento de cada aluno",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            CONHEÇA O <span className="text-gradient">CT MAICON SANT'ANA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            O Centro de Treinamento Maicon Sant'ana é referência em artes marciais, oferecendo as melhores 
            condições para o desenvolvimento de atletas em Jiu-Jitsu, MMA e Muay Thai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover-glow hover:border-primary transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Nossa Missão</h3>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            Proporcionar um ambiente de excelência para a prática de artes marciais, onde cada aluno 
            pode desenvolver não apenas suas habilidades técnicas, mas também valores como disciplina, 
            respeito e superação pessoal. Nosso compromisso é com a evolução constante de cada 
            praticante, seja você iniciante ou atleta de competição.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
