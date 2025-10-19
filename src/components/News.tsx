import { Card } from "@/components/ui/card";
import { Calendar, Trophy, Users } from "lucide-react";

const News = () => {
  const news = [
    {
      icon: Trophy,
      date: "Dezembro 2024",
      title: "Alunos do CT conquistam pódio em campeonato estadual",
      description:
        "Nossos atletas conquistaram medalhas de ouro, prata e bronze no último campeonato estadual de Jiu-Jitsu. Parabéns a todos!",
      category: "Competição",
    },
    {
      icon: Users,
      date: "Novembro 2024",
      title: "Novas turmas de Muay Thai Kids",
      description:
        "Abertas novas vagas para crianças de 6 a 12 anos. Aulas focadas em disciplina, respeito e desenvolvimento motor.",
      category: "Turmas",
    },
    {
      icon: Calendar,
      date: "Outubro 2024",
      title: "Seminário especial de MMA com faixa-preta",
      description:
        "Participe do nosso próximo seminário com atletas de alto nível. Vagas limitadas, garanta a sua!",
      category: "Evento",
    },
  ];

  return (
    <section id="noticias" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            ÚLTIMAS <span className="text-gradient">NOTÍCIAS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Fique por dentro das novidades e conquistas do nosso centro de treinamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover-glow transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-primary font-semibold uppercase">{item.category}</span>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
