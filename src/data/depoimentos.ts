import socorro from "@/assets/depoimento-socorro.jpg";
import familia from "@/assets/depoimento-familia.jpg";
import carla from "@/assets/depoimento-carla.jpg";

export interface Depoimento {
  nome: string;
  ocupacao: string;
  foto: string;
  texto: string;
  destino: string;
}

export const depoimentos: Depoimento[] = [
  {
    nome: "Maria do Socorro",
    ocupacao: "Aposentada, 65 anos",
    foto: socorro,
    texto:
      "Realizei o sonho de conhecer o mar aos 65 anos. O pagamento no carnê ajudou demais, nem senti as parcelas. Equipe nota 10!",
    destino: "Porto de Galinhas",
  },
  {
    nome: "João e Família",
    ocupacao: "Autônomo",
    foto: familia,
    texto:
      "Levei meus dois filhos e minha esposa pra Natal. Tudo muito organizado e seguro. Recomendo pra todo mundo que quer viajar barato.",
    destino: "Natal — RN",
  },
  {
    nome: "Carla Silveira",
    ocupacao: "Estudante",
    foto: carla,
    texto:
      "Fui pra Guaramiranga e amei! A Xique-Xique pensa em tudo. O ônibus é super confortável e o clima foi maravilhoso.",
    destino: "Guaramiranga — CE",
  },
];