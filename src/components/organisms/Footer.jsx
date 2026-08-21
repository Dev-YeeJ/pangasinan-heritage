import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant/30 py-8 px-container-margin-mobile md:px-container-margin-desktop mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-body-md text-[11px] text-on-surface-variant font-medium">
        <Link href="/" className="font-headline-sm text-sm font-bold text-primary">
          Heritage Pangasinan
        </Link>
        
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
          <Link href="/archive" className="hover:text-primary transition-colors">Heritage Archive</Link>
          <Link href="/contact-us" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        
        <div className="text-right text-[10px] leading-tight">
          © 2024 Pangasinan Heritage Digital Showcase.<br />Cultural Preservation Project.
        </div>
      </div>
    </footer>
  );
}
