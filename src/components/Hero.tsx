import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5541995608598?text=Olá,%20quero%20me%20matricular%20no%20CT%20Maicon%20Sant'ana!";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">CT MAICON SANT'ANA</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          JIU-JITSU • MMA • MUAY THAI
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Treine com os melhores. Desenvolva sua técnica, disciplina e superação em um ambiente profissional e acolhedor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button variant="cta" size="lg" asChild className="text-lg px-8 py-6 h-auto">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Matricule-se Já
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 h-auto"
            onClick={() => {
              document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Conheça o CT
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
