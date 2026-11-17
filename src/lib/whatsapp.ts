import { CONTACT_CONFIG } from "./constants";

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || CONTACT_CONFIG.defaultMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  header: "Olá! Gostaria de falar com um consultor sobre o Residencial ORA.",
  heroPrimary: "Olá! Quero conhecer o Residencial ORA e receber o material completo.",
  about: "Olá! Gostaria de mais informações sobre o projeto do Residencial ORA.",
  highlights: "Olá! Gostaria de saber mais sobre os diferenciais e acabamentos dos apartamentos do ORA.",
  amenities: "Olá! Gostaria de saber mais sobre a infraestrutura e áreas de lazer do Residencial ORA.",
  interiors: "Olá! Gostaria de agendar uma visita e conhecer o apartamento decorado do Residencial ORA.",
  floorPlan48: "Olá! Gostaria de consultar valores e disponibilidade da planta de 48,94 m² do Residencial ORA.",
  floorPlan49: "Olá! Gostaria de consultar valores e disponibilidade da planta de 49,67 m² do Residencial ORA.",
  floorPlan60: "Olá! Gostaria de consultar valores e disponibilidade da planta de 60,86 m² (3 dormitórios) do Residencial ORA.",
  floorPlanGarden: "Olá! Gostaria de saber a disponibilidade e valores das unidades Garden do Residencial ORA.",
  floorPlanLivingEstendido: "Olá! Gostaria de informações sobre as plantas com Living Estendido do Residencial ORA.",
  location: "Olá! Gostaria de saber mais sobre a localização e acessos do Residencial ORA em Canoas.",
  developer: "Olá! Gostaria de falar com a equipe de vendas da Lottici sobre o Residencial ORA.",
  faq: "Olá! Tenho uma dúvida sobre o Residencial ORA e gostaria de conversar com um especialista.",
  finalCta: "Olá! Gostaria de conversar com um consultor para encontrar o apartamento ideal no Residencial ORA.",
  floating: "Olá! Estive navegando no site do Residencial ORA e gostaria de mais detalhes.",
};

