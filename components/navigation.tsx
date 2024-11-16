'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScroll } from "@/utils/smooth-scroll";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className = '', onClick }: NavLinkProps) => {
  const targetId = href.replace('#', '');
  
  return (
    <a
      href={href}
      onClick={(e) => {
        smoothScroll(e, targetId);
        onClick?.();
      }}
      className={`text-sm font-medium transition-colors hover:text-primary ${className}`}
    >
      {children}
    </a>
  );
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#testimonials">What Users Say</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 md:hidden">
          <div className="flex flex-col space-y-3 p-4">
            <NavLink
              href="#features"
              className="block w-full text-left text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md"
              onClick={closeMenu}
            >
              Features
            </NavLink>
            <NavLink
              href="#testimonials"
              className="block w-full text-left text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md"
              onClick={closeMenu}
            >
              What Users Say
            </NavLink>
            <NavLink
              href="#pricing"
              className="block w-full text-left text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md"
              onClick={closeMenu}
            >
              Pricing
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
