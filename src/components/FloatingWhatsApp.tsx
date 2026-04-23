import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

const FloatingWhatsApp = () => {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground rounded-full px-4 py-3 shadow-warm hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-6 h-6" aria-hidden />
      <span className="hidden sm:inline font-semibold text-sm">Fale com a gente</span>
    </a>
  );
};

export default FloatingWhatsApp;