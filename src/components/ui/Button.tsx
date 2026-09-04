import Link from 'next/link';
import {SectionLink} from '@/components/ui/SectionLink';

export function Button({ href, children, inverted = false, className = '' }: { href: string; children: React.ReactNode; inverted?: boolean; className?: string }) {
  const buttonClassName = `button ${inverted ? 'outline' : ''} ${className}`.trim();
  const content = <>{children}<span aria-hidden="true">→</span></>;

  if (href.startsWith('#')) return <SectionLink id={href.slice(1)} className={buttonClassName}>{content}</SectionLink>;
  return <Link href={href} className={buttonClassName}>{content}</Link>;
}
