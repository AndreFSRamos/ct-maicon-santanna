import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="CT Maicon Sant'ana" className="h-16 w-16" />
              <div>
                <h3 className="text-xl font-bold">CT MAICON SANT'ANA</h3>
                <p className="text-sm text-muted-foreground">Brazilian Jiu-Jitsu</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Centro de treinamento especializado em Jiu-Jitsu, MMA e Muay Thai. 
              Formando campeões e desenvolvendo atletas com excelência.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("horarios")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Horários
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("estrutura")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Estrutura
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="https://wa.me/5541995608598" className="hover:text-primary transition-colors">
                  (41) 99560-8598
                </a>
              </li>
              <li>Curitiba - PR</li>
              <li className="text-sm">
                Seg-Sex: 06:30 - 21:00<br />
                Sáb: 08:00 - 13:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} CT Maicon Sant'ana. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
