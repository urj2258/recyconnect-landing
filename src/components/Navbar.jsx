import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Impact', href: '#target-users' },
    { name: 'Download', href: '#download' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: isScrolled ? '1rem' : '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(1200px, calc(100% - 3rem))',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      padding: isScrolled ? '0.75rem 1.5rem' : '1rem 2.5rem',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderRadius: '24px',
      border: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
      boxShadow: isScrolled ? '0 20px 40px -10px rgba(0,0,0,0.05)' : 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ 
          width: '36px', 
          height: '36px', 
          backgroundColor: 'var(--primary)', 
          borderRadius: '10px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: 'white' 
        }}>
          <Leaf size={22} />
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '-0.03em' }}>RecyConnect</span>
      </a>

      {/* Desktop Menu */}
      <div style={{ display: 'none', gap: '3rem', alignItems: 'center' }} className="nav-desktop">
        <style>{`
          @media (min-width: 1024px) { .nav-desktop { display: flex !important; } .nav-mobile-toggle { display: none !important; } }
        `}</style>
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-dark)', opacity: 0.7, transition: '0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
          >
            {link.name}
          </a>
        ))}
        <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          Join the Movement
        </button>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="nav-mobile-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary)' }}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 1rem)',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              textAlign: 'center',
              border: '1px solid var(--border)'
            }}
          >
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>{link.name}</a>
            ))}
            <button className="btn btn-primary">Join the Movement</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
