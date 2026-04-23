import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/config/site";

const navLinks = [
  { label: "Pacotes", href: "/#pacotes" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Dúvidas", href: "/#faq" },
  { label: "Contato", href: "/contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-sand/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label={SITE.name}>
          <div className="w-10 h-10 rounded-full bg-gradient-sun grid place-items-center text-2xl">
            🌵
          </div>
          <div className="leading-tight">
            <p className="font-display text-2xl text-jungle-deep">Xique-Xique</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-1">Viagens</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-jungle transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton variant="primary" size="sm">
            Falar com a gente
          </WhatsAppButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-card"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3">
                <WhatsAppButton variant="primary" size="md" className="w-full">
                  Falar com a gente
                </WhatsAppButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;