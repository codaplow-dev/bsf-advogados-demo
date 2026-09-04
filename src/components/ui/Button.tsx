import Link from 'next/link';

export function Button({ href, children, inverted = false, className = '' }: { href: string; children: React.ReactNode; inverted?: boolean; className?: string }) {
  return <Link href={href} className={`button ${inverted ? 'outline' : ''} ${className}`.trim()}>{children}<span aria-hidden="true">→</span></Link>;
}
