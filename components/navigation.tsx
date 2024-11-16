'use client';

import { smoothScroll } from "@/utils/smooth-scroll";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  const targetId = href.replace('#', '');
  
  return (
    <a
      href={href}
      onClick={(e) => smoothScroll(e, targetId)}
      className={`text-sm font-medium transition-colors hover:text-primary ${className}`}
    >
      {children}
    </a>
  );
};

export const Navigation = () => {
  return (
    <nav className="flex items-center space-x-8">
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#testimonials">What Users Say</NavLink>
      <NavLink href="#pricing">Pricing</NavLink>
    </nav>
  );
};
