import structure1 from "@/assets/structure-1.jpg";
import structure2 from "@/assets/structure-2.jpg";
import structure3 from "@/assets/structure-3.jpg";
import { Card } from "@/components/ui/card";

const Structure = () => {
  const facilities = [
    {
      image: structure1,
      title: "Área de Treino Principal",
      description: "Tatames de alta qualidade e espaço amplo para treinos de Jiu-Jitsu e MMA",
    },
    {
      image: structure2,
      title: "Ring e Octógono",
      description: "Equipamentos profissionais para treinos de striking e simulações de luta",
    },
    {
      image: structure3,
      title: "Vestiários Completos",
      description: "Instalações modernas e confortáveis para sua comodidade",
    },
  ];

  return (
    <section id="estrutura" className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            NOSSA <span className="text-gradient">ESTRUTURA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Infraestrutura completa e profissional para o seu melhor desempenho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover-glow group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">500m²</div>
            <p className="text-muted-foreground">Área de Treino</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">Alunos Ativos</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">3</div>
            <p className="text-muted-foreground">Modalidades</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
