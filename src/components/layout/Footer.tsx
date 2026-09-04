import Link from 'next/link';
import {siteConfig, fullAddress} from '@/config/site';
import {SectionLink} from '@/components/ui/SectionLink';

const institutionalLinks = [
  ['O Escritório', 'escritorio'],
  ['Áreas de Atuação', 'areas'],
  ['Profissionais', 'profissionais'],
  ['Conteúdos', 'conteudos'],
  ['Contato', 'contato'],
] as const;

export function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div className="brand"><b>{siteConfig.monogram}</b><span>{siteConfig.shortName}<small>ADVOGADOS ASSOCIADOS</small></span></div>
      <p>Atuação jurídica orientada pela ética, responsabilidade e atendimento próximo.</p>
    </div>
    <div className="footer-grid">
      <div>
        <i>Institucional</i>
        {institutionalLinks.map(([label, id]) => <SectionLink key={id} id={id}>{label}</SectionLink>)}
      </div>
      <div><i>Áreas de atuação</i>{['Direito Civil', 'Família e Sucessões', 'Direito Trabalhista', 'Direito Previdenciário', 'Direito Empresarial', 'Contratos'].map(x => <span key={x}>{x}</span>)}</div>
      <div><i>Sede institucional</i><span>{fullAddress}</span><a href={siteConfig.contact.phoneHref}>Telefone: {siteConfig.contact.phone}</a></div>
    </div>
    {siteConfig.isDemo && <p className="demo-note">Demonstração visual — algumas imagens e conteúdos são ilustrativos.</p>}
    <div className="footer-bottom"><span>© 2026 {siteConfig.name}. Todos os direitos reservados.</span><span><Link href="/politica-de-privacidade">Política de Privacidade</Link> <Link href="/termos-de-uso">Termos de Uso</Link></span></div>
  </footer>;
}
