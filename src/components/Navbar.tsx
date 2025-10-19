import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappLink = "https://wa.me/5541995608598?text=Olá,%20quero%20me%20matricular%20no%20CT%20Maicon%20Sant'ana!";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="CT Maicon Sant'ana" className="h-16 w-16" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("horarios")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Horários
            </button>
            <button
              onClick={() => scrollToSection("estrutura")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Estrutura
            </button>
            <button
              onClick={() => scrollToSection("noticias")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Notícias
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
            <Button variant="cta" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Matricule-se Já
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("horarios")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Horários
            </button>
            <button
              onClick={() => scrollToSection("estrutura")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Estrutura
            </button>
            <button
              onClick={() => scrollToSection("noticias")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Notícias
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Contato
            </button>
            <Button variant="cta" size="lg" asChild className="w-full">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Matricule-se Já
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
