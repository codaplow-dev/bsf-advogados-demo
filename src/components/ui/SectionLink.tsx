'use client';

type SectionLinkProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

export function SectionLink({id, children, className = '', onNavigate}: SectionLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const element = document.getElementById(id);
    if (!element) return;

    event.preventDefault();
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
    window.history.replaceState(null, '', `#${id}`);
    onNavigate?.();
  }

  return <a href={`#${id}`} className={className} onClick={handleClick}>{children}</a>;
}
