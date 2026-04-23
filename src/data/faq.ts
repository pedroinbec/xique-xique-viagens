export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export const faq: FaqItem[] = [
  {
    pergunta: "Posso pagar mesmo sem cartão de crédito?",
    resposta:
      "Sim! Esse é o nosso diferencial. Você paga uma entrada e o restante no carnê, parcelado em até 18 vezes. Tudo direto com a gente, sem banco e sem cartão.",
  },
  {
    pergunta: "Preciso de fiador?",
    resposta:
      "Não. Trabalhamos com base na confiança e em uma análise simples de cadastro. A maioria dos clientes consegue fechar o pacote no mesmo dia.",
  },
  {
    pergunta: "E se eu quiser viajar sozinho?",
    resposta:
      "Sem problema! Muitos dos nossos clientes viajam sozinhos e fazem amizades no caminho. O grupo é acompanhado por um guia da Xique-Xique do começo ao fim.",
  },
  {
    pergunta: "O que está incluso no pacote?",
    resposta:
      "Transporte em ônibus leito executivo, hospedagem com café da manhã, passeios principais e seguro viagem. Cada pacote tem uma lista detalhada na página de informações.",
  },
  {
    pergunta: "Posso cancelar se acontecer algum imprevisto?",
    resposta:
      "Sim. Seguimos as regras do Código de Defesa do Consumidor. Quanto mais cedo você avisar, menor é a taxa de cancelamento. Em caso de doença comprovada, ajudamos a remarcar para outra data.",
  },
  {
    pergunta: "De onde saem os ônibus?",
    resposta:
      "A maioria dos pacotes sai de Fortaleza/CE, mas combinamos pontos de embarque em outras cidades quando há grupo suficiente. Fale com a gente no WhatsApp para saber o ponto mais próximo.",
  },
];