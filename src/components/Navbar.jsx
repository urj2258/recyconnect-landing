import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { name: 'About', href: '#about' },
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
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      padding: isScrolled ? '0.75rem 2rem' : '1.25rem 2.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: isScrolled ? '0 20px 40px -10px rgba(0,0,0,0.05)' : 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* Logo */}
      <a href="#" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img 
          src="/app_icon.png" 
          alt="RecyConnect Logo" 
          style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '12px', 
            objectFit: 'contain',
            boxShadow: '0 8px 16px -4px rgba(16, 185, 129, 0.3)'
          }} 
        />
        <span style={{ 
          fontSize: '1.4rem', 
          fontWeight: 800, 
          color: 'var(--secondary)', 
          letterSpacing: '-0.04em' 
        }}>RecyConnect</span>
      </a>

      {/* Desktop Menu */}
      <div style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }} className="nav-desktop">
        <style>{`
          @media (min-width: 1024px) { .nav-desktop { display: flex !important; } .nav-mobile-toggle { display: none !important; } }
          .nav-link { color: rgba(15, 23, 42, 0.7) !important; }
          .nav-link:hover { color: var(--secondary) !important; }
          .nav-link::after { background-color: var(--primary) !important; }
        `}</style>
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="nav-link"
            style={{ 
              fontSize: '0.95rem', 
              fontWeight: 500, 
              transition: '0.3s' 
            }}
          >
            {link.name}
          </a>
        ))}
        <motion.button 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="btn" 
          style={{ 
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            padding: '10px 24px', 
            fontSize: '0.9rem',
            borderRadius: '100px',
            boxShadow: '0 10px 20px -5px rgba(16, 185, 129, 0.4)'
          }}
        >
          Join the Movement
        </motion.button>
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
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 1rem)',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              textAlign: 'center',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--secondary)' }}
              >
                {link.name}
              </a>
            ))}
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', borderRadius: '100px' }}>Join the Movement</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
