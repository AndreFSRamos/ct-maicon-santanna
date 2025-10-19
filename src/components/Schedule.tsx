import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Schedule = () => {
  return (
    <section id="horarios" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            HORÁRIOS E <span className="text-gradient">MODALIDADES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira nossa grade completa de horários e escolha a modalidade ideal para você
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Horários */}
          <Card className="p-6 bg-card border-border hover-glow">
            <h3 className="text-3xl font-bold mb-6 text-center">Grade de Horários</h3>
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center font-bold">Hora</TableHead>
                    <TableHead className="text-center font-bold">Seg.</TableHead>
                    <TableHead className="text-center font-bold">Ter.</TableHead>
                    <TableHead className="text-center font-bold">Qua.</TableHead>
                    <TableHead className="text-center font-bold">Qui.</TableHead>
                    <TableHead className="text-center font-bold">Sex.</TableHead>
                    <TableHead className="text-center font-bold">Sáb.</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold text-primary">06:30</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">07:30</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">08:00</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">09:00</TableCell>
                    <TableCell className="text-center text-sm text-red-400">Thai Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm text-red-400">Thai Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm text-red-400">Thai Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">10:00</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">12:00</TableCell>
                    <TableCell className="text-center text-sm">Jiu-Jitsu Martel</TableCell>
                    <TableCell className="text-center text-sm text-purple-400">No-Gi Martel</TableCell>
                    <TableCell className="text-center text-sm">Jiu-Jitsu Martel</TableCell>
                    <TableCell className="text-center text-sm text-purple-400">No-Gi Martel</TableCell>
                    <TableCell className="text-center text-sm">Jiu-Jitsu Martel</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">14:00</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">15:00</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">16:00</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm text-purple-400">MMA</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm text-purple-400">MMA</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">17:15</TableCell>
                    <TableCell className="text-center text-sm text-red-400">Thai Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm text-red-400">Thai Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm text-red-400">Thai Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">18:30</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Kids</TableCell>
                    <TableCell className="text-center text-sm text-red-400">Jiu Kids</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Kids</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Kids</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Kids</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">18:30</TableCell>
                    <TableCell className="text-center text-sm">Funcional</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm">Funcional</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm">Funcional</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">19:30</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm text-cyan-400">Jiu Jitsu</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-primary">20:30</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm text-purple-400">MMA</TableCell>
                    <TableCell className="text-center text-sm">Muay Thai</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                    <TableCell className="text-center text-sm">-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>

          {/* Preços */}
          <Card className="p-6 bg-card border-border hover-glow">
            <h3 className="text-3xl font-bold mb-6 text-center">Planos e Valores</h3>
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-lg font-bold">Modalidade</TableHead>
                    <TableHead className="text-lg font-bold text-right">Valor (R$)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Matrícula</TableCell>
                    <TableCell className="text-right text-primary font-bold">50,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Jiu-Jitsu</TableCell>
                    <TableCell className="text-right text-primary font-bold">150,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Muay Thai</TableCell>
                    <TableCell className="text-right text-primary font-bold">120,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">MMA</TableCell>
                    <TableCell className="text-right text-primary font-bold">120,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Muay Thai Kids</TableCell>
                    <TableCell className="text-right text-primary font-bold">100,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Jiu-Jitsu Kids</TableCell>
                    <TableCell className="text-right text-primary font-bold">100,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Funcional</TableCell>
                    <TableCell className="text-right text-primary font-bold">139,00</TableCell>
                  </TableRow>
                  <TableRow className="bg-primary/5">
                    <TableCell className="font-bold">Treino Livre (2 Modalidades)</TableCell>
                    <TableCell className="text-right text-secondary font-bold text-lg">200,00</TableCell>
                  </TableRow>
                  <TableRow className="bg-primary/5">
                    <TableCell className="font-bold">Treino Livre (3 Modalidades)</TableCell>
                    <TableCell className="text-right text-secondary font-bold text-lg">250,00</TableCell>
                  </TableRow>
                  <TableRow className="bg-primary/5">
                    <TableCell className="font-bold">Kids Livre (2 Modalidades)</TableCell>
                    <TableCell className="text-right text-secondary font-bold text-lg">150,00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">JIU-JITSU</h3>
            <p className="text-muted-foreground mb-4">
              Arte marcial brasileira focada em técnicas de solo e submissão. Aulas para adultos e crianças.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>• Adultos: Segunda a Sábado</p>
              <p>• Kids: Seg/Qua/Sex</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/30">
            <h3 className="text-2xl font-bold mb-3 text-red-400">MUAY THAI</h3>
            <p className="text-muted-foreground mb-4">
              A arte das oito armas. Treino intenso de striking, condicionamento físico e técnica.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>• Adultos: Todos os dias</p>
              <p>• Kids: Seg/Qua/Sex</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/30">
            <h3 className="text-2xl font-bold mb-3 text-purple-400">MMA</h3>
            <p className="text-muted-foreground mb-4">
              Artes marciais mistas combinando todas as técnicas de luta. Treino completo e desafiador.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>• Adultos: Ter/Qui/Sáb</p>
              <p>• Técnica avançada</p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-primary font-semibold mb-2">
            Chave PIX: 41 995608598
          </p>
          <p className="text-muted-foreground">
            Planos livres no cartão com desconto: Trimestral 5% • Semestral 10% • Anual 15%
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            * Aluno que adquirir mais de uma modalidade está livre da taxa de matrícula
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
