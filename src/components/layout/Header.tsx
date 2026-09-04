'use client';

import {useEffect, useState} from 'react';
import {siteConfig} from '@/config/site';
import {SectionLink} from '@/components/ui/SectionLink';

const links = [
  ['O Escritório', 'escritorio'],
  ['Áreas de Atuação', 'areas'],
  ['Profissionais', 'profissionais'],
  ['Conteúdos', 'conteudos'],
  ['Contato', 'contato'],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
    <SectionLink id="inicio" className="brand">
      <b>{siteConfig.monogram}</b>
      <span>{siteConfig.shortName}<small>ADVOGADOS ASSOCIADOS</small></span>
    </SectionLink>
    <nav className="nav">
      {links.map(([label, id]) => <SectionLink key={id} id={id}>{label}</SectionLink>)}
    </nav>
    <SectionLink id="contato" className="head-cta">ENTRAR EM CONTATO</SectionLink>
    <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
      {open ? 'Fechar' : 'Menu'}
    </button>
    {open && <nav className="mobile-nav" id="mobile-navigation">
      {links.map(([label, id]) => <SectionLink key={id} id={id} onNavigate={() => setOpen(false)}>{label}</SectionLink>)}
    </nav>}
  </header>;
}
