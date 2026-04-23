import { motion } from "framer-motion";
import { Bus, CalendarDays, CreditCard, Heart, Quote, ShieldCheck, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import PacoteCard from "@/components/sections/PacoteCard";
import { pacotes } from "@/data/pacotes";
import { depoimentos } from "@/data/depoimentos";
import { faq } from "@/data/faq";

import heroJeri from "@/assets/hero-jeri.jpg";
import onibus from "@/assets/onibus-conforto.jpg";

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src={heroJeri}
          alt="Praia paradisíaca no Nordeste brasileiro com mar turquesa, dunas douradas e jangada"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/55 to-night/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 bg-secondary/95 text-secondary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 shadow-md">
              <Sparkles className="w-3.5 h-3.5" /> Pacotes parcelados no carnê
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-5 text-balance">
              Você merece
              <br />
              <span className="text-secondary">realizar seus</span>
              <br />
              sonhos.
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8">
              Pacotes de viagem pelo Nordeste com pagamento <strong className="text-white">parcelado no carnê</strong> — sem cartão de crédito, com muito conforto e o menor preço.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton variant="primary" size="lg">
                Quero viajar com a Xique-Xique
              </WhatsAppButton>
              <a
                href="#pacotes"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition"
              >
                Ver próximas saídas
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" /> Empresa registrada no Cadastur</span>
              <span className="inline-flex items-center gap-2"><Heart className="w-4 h-4 text-secondary" /> Mais de 5 mil sonhos realizados</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:flex justify-end"
          >
            <div className="selo-carne w-44 h-44 bg-secondary text-secondary-foreground border-4 border-dashed border-night/20 text-xl">
              <span>
                Sem<br />cartão<br />de crédito
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TARJA DE CONFIANÇA */}
      <section className="bg-jungle-deep text-white py-5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "5.000+", l: "Clientes felizes" },
            { n: "12 anos", l: "De estrada" },
            { n: "18x", l: "Sem cartão" },
            { n: "100%", l: "Atendimento humano" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-3xl md:text-4xl text-secondary leading-none">{s.n}</p>
              <p className="text-xs uppercase tracking-wider text-white/70 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACOTES */}
      <section id="pacotes" className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-sertao mb-3">
            🗺️ Nossas viagens
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-jungle-deep leading-[0.95] mb-4">
            Próximas saídas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Escolha o seu próximo destino e <strong className="text-foreground">pague aos poucos</strong>.
            Pacotes criados para o máximo de conforto com o menor custo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pacotes.map((p, i) => (
            <PacoteCard key={p.id} pacote={p} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Não encontrou o destino ideal?</p>
          <WhatsAppButton message="Olá! Gostaria de consultar outros roteiros que não estão no site." variant="primary" size="lg">
            Consultar outros roteiros
          </WhatsAppButton>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-sand-warm/40 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-sertao mb-3">
              ✨ Simples assim
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-jungle-deep leading-[0.95] mb-4">
              Como funciona
            </h2>
            <p className="text-lg text-muted-foreground">
              Em três passos você está com a vaga garantida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { Icon: CalendarDays, n: "1", titulo: "Escolha o destino", texto: "Veja as próximas saídas e escolha a viagem dos seus sonhos pelo nosso WhatsApp." },
              { Icon: CreditCard, n: "2", titulo: "Pague a entrada", texto: "Dê uma entrada que cabe no seu bolso. Sem cartão, sem fiador, sem complicação." },
              { Icon: Bus, n: "3", titulo: "Pague o resto no carnê", texto: "Parcele em até 18 vezes direto com a gente. Quando chegar a data, é só embarcar." },
            ].map(({ Icon, n, titulo, texto }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-3xl p-7 shadow-card relative"
              >
                <div className="absolute -top-5 -right-3 font-display text-7xl text-secondary/40 leading-none">{n}</div>
                <div className="w-14 h-14 rounded-2xl bg-jungle text-white grid place-items-center mb-4">
                  <Icon className="w-7 h-7" aria-hidden />
                </div>
                <h3 className="font-display text-3xl text-jungle-deep leading-tight mb-2">{titulo}</h3>
                <p className="text-muted-foreground leading-relaxed">{texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFORTO / ÔNIBUS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-warm aspect-[4/3]"
          >
            <img src={onibus} alt="Interior de ônibus de turismo confortável" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-sertao mb-3">
              🚍 Conforto na estrada
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-jungle-deep leading-[0.95] mb-4">
              Sua viagem<br />começa no embarque.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Trabalhamos com ônibus leito executivo, ar-condicionado, banheiro e poltronas reclináveis.
              Você dorme tranquilo e acorda no destino.
            </p>
            <ul className="space-y-3 text-foreground">
              {[
                "Seguro viagem incluso em todos os pacotes",
                "Guia da Xique-Xique acompanhando o grupo",
                "Hospedagem selecionada com café da manhã",
                "Passeios principais já inclusos no preço",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-jungle text-white text-xs grid place-items-center mt-0.5 shrink-0 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="bg-jungle-deep text-white py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-10 right-10 text-9xl text-white/5 font-display">❤️</div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-3">
              ❤️ Nossa comunidade
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white leading-[0.95] mb-4">
              Quem viaja, recomenda
            </h2>
            <p className="text-lg text-white/75">
              Histórias reais de quem realizou o sonho de viajar com a Xique-Xique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {depoimentos.map((d, i) => (
              <motion.figure
                key={d.nome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur rounded-3xl p-7 border border-white/10 flex flex-col"
              >
                <Quote className="w-8 h-8 text-secondary mb-3" aria-hidden />
                <blockquote className="text-white/90 leading-relaxed mb-6 flex-1">
                  "{d.texto}"
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img src={d.foto} alt={d.nome} loading="lazy" className="w-14 h-14 rounded-full object-cover border-2 border-secondary" />
                  <div>
                    <p className="font-bold text-white">{d.nome}</p>
                    <p className="text-xs text-white/60">{d.ocupacao} · {d.destino}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-4 md:px-8 py-20 md:py-24">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-sertao mb-3">
            🙋 Tira-dúvidas
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-jungle-deep leading-[0.95] mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Não achou sua resposta? Chama no zap que a gente explica.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faq.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl border border-border px-5 shadow-card"
            >
              <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-sun py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-night leading-[0.95] mb-5 text-balance">
            Bora realizar seu sonho?
          </h2>
          <p className="text-lg md:text-xl text-night/80 mb-8 max-w-2xl mx-auto">
            Fale com a gente agora pelo WhatsApp e descubra como é fácil viajar pagando aos poucos.
          </p>
          <WhatsAppButton variant="whatsapp" size="lg">
            Quero falar agora
          </WhatsAppButton>
        </div>
      </section>
    </Layout>
  );
};

export default Index;