import portoGalinhas from "@/assets/destino-porto-galinhas.jpg";
import natal from "@/assets/destino-natal.jpg";
import guaramiranga from "@/assets/destino-guaramiranga.jpg";
import maragogi from "@/assets/destino-maragogi.jpg";
import salvador from "@/assets/destino-salvador.jpg";
import lencois from "@/assets/destino-lencois.jpg";

export interface Pacote {
  id: string;
  destino: string;
  estado: string;
  imagem: string;
  duracao: string;
  proximaSaida: string;
  precoTotal: number;
  parcelas: number;
  valorParcela: number;
  destaque?: string;
  inclui: string[];
}

export const pacotes: Pacote[] = [
  {
    id: "porto-galinhas",
    destino: "Porto de Galinhas",
    estado: "Pernambuco",
    imagem: portoGalinhas,
    duracao: "5 dias / 4 noites",
    proximaSaida: "15 de Março",
    precoTotal: 1490,
    parcelas: 12,
    valorParcela: 124.16,
    destaque: "Mais vendido",
    inclui: ["Ônibus leito executivo", "Hotel com café da manhã", "Passeio às piscinas naturais", "Seguro viagem"],
  },
  {
    id: "natal",
    destino: "Natal & Praia de Pipa",
    estado: "Rio Grande do Norte",
    imagem: natal,
    duracao: "6 dias / 5 noites",
    proximaSaida: "22 de Março",
    precoTotal: 1690,
    parcelas: 12,
    valorParcela: 140.83,
    inclui: ["Ônibus leito executivo", "Pousada com café", "Passeio de buggy nas dunas", "City tour"],
  },
  {
    id: "guaramiranga",
    destino: "Guaramiranga",
    estado: "Ceará",
    imagem: guaramiranga,
    duracao: "3 dias / 2 noites",
    proximaSaida: "5 de Abril",
    precoTotal: 690,
    parcelas: 8,
    valorParcela: 86.25,
    destaque: "Pra começar",
    inclui: ["Ônibus turismo", "Pousada na serra", "Café da manhã", "Trilha guiada"],
  },
  {
    id: "maragogi",
    destino: "Maragogi — Caribe Brasileiro",
    estado: "Alagoas",
    imagem: maragogi,
    duracao: "5 dias / 4 noites",
    proximaSaida: "12 de Abril",
    precoTotal: 1790,
    parcelas: 12,
    valorParcela: 149.16,
    inclui: ["Ônibus leito executivo", "Hotel pé na areia", "Catamarã às Galés", "Café da manhã"],
  },
  {
    id: "salvador",
    destino: "Salvador & Morro de São Paulo",
    estado: "Bahia",
    imagem: salvador,
    duracao: "7 dias / 6 noites",
    proximaSaida: "26 de Abril",
    precoTotal: 2190,
    parcelas: 18,
    valorParcela: 121.67,
    inclui: ["Ônibus leito executivo", "Hotel + pousada na ilha", "Catamarã ida e volta", "City tour Pelourinho"],
  },
  {
    id: "lencois",
    destino: "Lençóis Maranhenses",
    estado: "Maranhão",
    imagem: lencois,
    duracao: "8 dias / 7 noites",
    proximaSaida: "10 de Maio",
    precoTotal: 2890,
    parcelas: 18,
    valorParcela: 160.55,
    destaque: "Sonho de uma vida",
    inclui: ["Ônibus leito executivo", "Pousadas selecionadas", "Passeios 4x4 nas lagoas", "Guia local"],
  },
];

/** Formata um número como moeda brasileira. */
export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}