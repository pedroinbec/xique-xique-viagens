import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import { whatsappLink, SITE } from "@/config/site";
import { pacotes } from "@/data/pacotes";

const contatoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Digite seu nome (mínimo 2 letras)")
    .max(80, "Nome muito longo"),
  telefone: z
    .string()
    .trim()
    .min(8, "Digite um telefone válido")
    .max(20, "Telefone muito longo"),
  destino: z.string().trim().max(60).optional(),
  mensagem: z
    .string()
    .trim()
    .max(500, "Mensagem muito longa (máximo 500 caracteres)")
    .optional(),
});

const Contato = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", telefone: "", destino: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contatoSchema.safeParse(form);
    if (!result.success) {
      const first = result.error.issues[0];
      toast({
        title: "Verifique os dados",
        description: first?.message ?? "Por favor, revise o formulário.",
        variant: "destructive",
      });
      return;
    }
    const { nome, telefone, destino, mensagem } = result.data;
    const text = [
      `Olá! Meu nome é ${nome}.`,
      `Telefone: ${telefone}`,
      destino ? `Destino de interesse: ${destino}` : null,
      mensagem ? `\n${mensagem}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    toast({
      title: "Abrindo o WhatsApp...",
      description: "Vamos continuar a conversa por lá. 🌴",
    });
  };

  return (
    <Layout>
      <section className="bg-jungle-deep text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-3">
            💬 Vamos conversar
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-4">
            Fale com a gente
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tira suas dúvidas, monta seu orçamento ou só dá um oi. A gente responde rapidinho no WhatsApp.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-3 bg-card rounded-3xl p-6 md:p-10 shadow-card"
        >
          <h2 className="font-display text-3xl md:text-4xl text-jungle-deep mb-2">Mande sua mensagem</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Preenche aqui que a gente abre o WhatsApp já com tudo certinho pra você.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold mb-1.5">Nome *</label>
              <input
                id="nome"
                type="text"
                required
                maxLength={80}
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-jungle"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-semibold mb-1.5">WhatsApp *</label>
              <input
                id="telefone"
                type="tel"
                required
                maxLength={20}
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                placeholder="(00) 90000-0000"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-jungle"
              />
            </div>

            <div>
              <label htmlFor="destino" className="block text-sm font-semibold mb-1.5">Destino de interesse</label>
              <select
                id="destino"
                value={form.destino}
                onChange={(e) => setForm({ ...form, destino: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-jungle"
              >
                <option value="">Ainda não decidi</option>
                {pacotes.map((p) => (
                  <option key={p.id} value={`${p.destino} (${p.estado})`}>
                    {p.destino} — {p.estado}
                  </option>
                ))}
                <option value="Outro destino">Outro destino</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-semibold mb-1.5">Mensagem</label>
              <textarea
                id="mensagem"
                rows={4}
                maxLength={500}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                placeholder="Conta pra gente o que você precisa saber..."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-jungle resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1 text-right">{form.mensagem.length}/500</p>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-4 rounded-full hover:bg-sertao-deep shadow-warm transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" /> Enviar pelo WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Ao enviar, abriremos o WhatsApp com sua mensagem pronta.
            </p>
          </form>
        </motion.div>

        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gradient-sun rounded-3xl p-7 text-night shadow-warm">
            <h3 className="font-display text-3xl mb-2">Prefere falar agora?</h3>
            <p className="text-night/80 mb-5">Clica aqui e cai direto no nosso WhatsApp.</p>
            <WhatsAppButton variant="whatsapp" size="md" className="w-full">
              Abrir WhatsApp
            </WhatsAppButton>
          </div>

          <div className="bg-card rounded-3xl p-7 shadow-card space-y-4">
            <h3 className="font-display text-2xl text-jungle-deep">Outros contatos</h3>
            <a href={`tel:+55${SITE.phone.replace(/\D/g, "")}`} className="flex items-start gap-3 hover:text-jungle transition">
              <Phone className="w-5 h-5 text-sertao mt-0.5" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Telefone</p>
                <p className="font-semibold">{SITE.phone}</p>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 hover:text-jungle transition">
              <Mail className="w-5 h-5 text-sertao mt-0.5" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">E-mail</p>
                <p className="font-semibold break-all">{SITE.email}</p>
              </div>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sertao mt-0.5" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Endereço</p>
                <p className="font-semibold">{SITE.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;