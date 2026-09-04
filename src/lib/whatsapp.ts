import {siteConfig} from '@/config/site';
const whatsappMessage='Olá, gostaria de obter informações sobre o atendimento do escritório Brandão, Santos & Folli Advogados Associados.';
export const whatsappUrl=`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
