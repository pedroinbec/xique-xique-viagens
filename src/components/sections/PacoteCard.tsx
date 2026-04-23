import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { type Pacote, formatBRL } from "@/data/pacotes";

interface PacoteCardProps {
  pacote: Pacote;
  index?: number;
}

const PacoteCard = ({ pacote, index = 0 }: PacoteCardProps) => {
  const message = `Olá! Tenho interesse no pacote para ${pacote.destino} (${pacote.estado}), saída ${pacote.proximaSaida}. Pode me passar mais detalhes? 🌴`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pacote.imagem}
          alt={`${pacote.destino}, ${pacote.estado}`}
          width={1280}
          height={960}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {pacote.destaque && (
          <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-md">
            ⭐ {pacote.destaque}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-night/80 to-transparent p-4">
          <div className="flex items-center gap-1.5 text-white/90 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5" aria-hidden /> {pacote.estado}
          </div>
          <h3 className="font-display text-3xl text-white leading-tight mt-1">
            {pacote.destino}
          </h3>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" aria-hidden /> {pacote.duracao}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" aria-hidden /> {pacote.proximaSaida}
          </span>
        </div>

        <ul className="space-y-1.5 mb-5 flex-1">
          {pacote.inclui.slice(0, 3).map((item) => (
            <li key={item} className="text-sm text-foreground/80 flex items-start gap-2">
              <span className="text-jungle font-bold mt-0.5">✓</span> {item}
            </li>
          ))}
        </ul>

        <div className="bg-sand-warm/50 rounded-2xl p-4 mb-4">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">A partir de</p>
          <p className="font-display text-4xl text-sertao leading-none mt-1">
            {pacote.parcelas}x {formatBRL(pacote.valorParcela)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            ou {formatBRL(pacote.precoTotal)} à vista — <strong className="text-foreground">no carnê, sem cartão</strong>
          </p>
        </div>

        <WhatsAppButton message={message} variant="primary" size="md" className="w-full">
          Quero esse pacote
        </WhatsAppButton>
      </div>
    </motion.article>
  );
};

export default PacoteCard;