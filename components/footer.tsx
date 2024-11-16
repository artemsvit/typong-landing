'use client';

import { Github, Twitter, Linkedin } from 'lucide-react';
import { smoothScroll } from '@/utils/smooth-scroll';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isInternalLink = href.startsWith('#');
  const targetId = isInternalLink ? href.replace('#', '') : '';

  return isInternalLink ? (
    <a
      href={href}
      onClick={(e) => smoothScroll(e, targetId)}
      className="block text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors py-2"
    >
      {children}
    </a>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors py-2"
    >
      {children}
    </a>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-r from-orange-400 to-orange-500"></div>
              <span className="text-xl font-bold">Typong</span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enhance your typing experience with AI-powered suggestions and corrections.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <div className="flex flex-col">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#testimonials">What Users Say</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <div className="flex flex-col">
              <FooterLink href="https://docs.typong.app">Documentation</FooterLink>
              <FooterLink href="https://blog.typong.app">Blog</FooterLink>
              <FooterLink href="https://status.typong.app">Status</FooterLink>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <div className="flex flex-col">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Typong. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://twitter.com/typongapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/typong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/typong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
