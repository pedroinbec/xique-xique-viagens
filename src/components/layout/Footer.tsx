import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-night text-white/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-sun grid place-items-center text-2xl">🌵</div>
              <p className="font-display text-2xl text-white">Xique-Xique</p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Pacotes de viagem pelo Nordeste com pagamento parcelado no carnê.
              Sem cartão, sem juros abusivos, com muito conforto.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Instagram, href: SITE.instagram, label: "Instagram" },
                { Icon: Facebook, href: SITE.facebook, label: "Facebook" },
                { Icon: Youtube, href: SITE.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-secondary hover:text-night transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl text-white mb-4">Navegue</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#pacotes" className="hover:text-secondary transition">Próximas saídas</a></li>
              <li><a href="/#como-funciona" className="hover:text-secondary transition">Como funciona</a></li>
              <li><a href="/#depoimentos" className="hover:text-secondary transition">Depoimentos</a></li>
              <li><a href="/#faq" className="hover:text-secondary transition">Dúvidas frequentes</a></li>
              <li><Link to="/contato" className="hover:text-secondary transition">Fale conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-secondary shrink-0" aria-hidden />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-secondary shrink-0" aria-hidden />
                <span>{SITE.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" aria-hidden />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-white mb-4">A empresa</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              {SITE.name}<br />
              CNPJ: {SITE.cnpj}<br />
              Cadastur ativo
            </p>
            <p className="text-xs text-white/40 mt-4">
              Atendimento de segunda a sábado, das 8h às 18h.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para quem sonha em viajar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;