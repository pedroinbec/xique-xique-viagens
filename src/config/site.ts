// Configuração central do site Xique-Xique Viagens.
// Para trocar o número do WhatsApp, edite apenas a constante WHATSAPP_NUMBER abaixo.

/** Número de WhatsApp no formato internacional, somente dígitos (ex: 5585999999999). */
export const WHATSAPP_NUMBER = "5585999999999";

/** Mensagem padrão pré-preenchida quando o cliente clica em "Falar no WhatsApp". */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Xique-Xique Viagens e gostaria de saber mais sobre os pacotes. 🌴";

/** Monta a URL do WhatsApp com mensagem opcional. */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const SITE = {
  name: "Xique-Xique Viagens",
  tagline: "Você merece realizar seus sonhos.",
  email: "contato@xiquexiqueviagens.com.br",
  phone: "(85) 9 9999-9999",
  address: "Rua das Viagens, 100 — Fortaleza, CE",
  cnpj: "00.000.000/0001-00",
  instagram: "https://instagram.com/xiquexiqueviagens",
  facebook: "https://facebook.com/xiquexiqueviagens",
  youtube: "https://youtube.com/@xiquexiqueviagens",
} as const;