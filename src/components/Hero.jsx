import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, ShieldCheck, Zap, Globe, Shield, Copy, Check, HelpCircle } from 'lucide-react';

const Hero = () => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleCopyHash = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("be1ab0b90399643e0420a88fa863c497ada0d3c64edc5d34ff676e8da5cdf24c");
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section style={{ 
      padding: 'clamp(120px, 15vw, 180px) 0 clamp(60px, 10vw, 100px)', 
      position: 'relative', 
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% -20%, #f0fdf4 0%, transparent 50%)'
    }}>
      {/* Soft Glow Effects */}
      <div className="glow-shape" style={{ top: '-10%', left: '-5%', opacity: 0.5 }} />
      <div className="glow-shape" style={{ bottom: '10%', right: '-10%', opacity: 0.3, background: 'radial-gradient(circle, #dcfce7 0%, transparent 70%)' }} />

      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: '40px', 
          alignItems: 'center' 
        }} className="hero-grid">
          <style>{`
            @media (min-width: 768px) {
              .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; gap: 40px !important; }
              .hero-content { text-align: left !important; }
              .hero-p { margin-left: 0 !important; }
              .hero-btns { justify-content: flex-start !important; }
              .hero-trust { justify-content: flex-start !important; }
            }
            @media (min-width: 1024px) {
              .hero-grid { gap: 80px !important; }
            }
          `}</style>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: 'center' }}
            className="hero-content"
          >


            <h1 style={{ marginBottom: '24px' }}>
              Smarter Recycling <br className="hidden-mobile" />
              for a <span className="gradient-text">Greener Planet.</span>
            </h1>
            <style>{`
              @media (max-width: 640px) { .hidden-mobile { display: none; } }
            `}</style>
            
            <p style={{ 
              marginBottom: '40px', 
              marginInline: 'auto',
              maxWidth: '540px'
            }} className="hero-p">
              <style>{`
                @media (min-width: 1024px) { .hero-p { margin-left: 0 !important; } }
              `}</style>
              RecyConnect helps you turn your household waste into environmental impact. Scan items with AI, find local collectors, and join a community dedicated to a waste-free future.
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              flexWrap: 'wrap',
              justifyContent: 'center'
            }} className="hero-btns">
              <style>{`
                @media (min-width: 1024px) { .hero-btns { justify-content: flex-start !important; } }
              `}</style>
              <motion.a 
                href="https://github.com/Tayyab2344/RecyConnect-frontend/releases/download/v1.0.0/app-release.apk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-green" 
              >
                <Download size={20} />
                Download APK
              </motion.a>
              
              <motion.a 
                href="#features"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary"
              >
                Learn More
                <ArrowRight size={20} />
              </motion.a>
            </div>

            {/* Release Checksum verification */}
            <div style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }} className="hero-checksum">
              <style>{`
                @media (min-width: 1024px) { .hero-checksum { align-items: flex-start !important; } }
              `}</style>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                fontSize: '0.85rem', 
                color: 'var(--text-muted)',
                backgroundColor: 'var(--white)',
                padding: '8px 16px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.3s ease'
              }}>
                <Shield size={15} color="var(--primary)" />
                <span style={{ fontWeight: 600 }}>v1.0.0 SHA-256:</span>
                <code style={{ 
                  fontFamily: 'monospace', 
                  backgroundColor: 'var(--bg-light)', 
                  padding: '4px 8px', 
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  color: 'var(--text-dark)',
                  maxWidth: '180px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }} title="be1ab0b90399643e0420a88fa863c497ada0d3c64edc5d34ff676e8da5cdf24c">
                  be1ab0b9...c5d34ff6
                </code>
                <button 
                  onClick={handleCopyHash}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px',
                    borderRadius: '6px',
                    color: copiedHash ? 'var(--primary)' : 'var(--text-muted)',
                    transition: 'all 0.2s',
                    backgroundColor: copiedHash ? 'var(--primary-light)' : 'transparent'
                  }}
                  title="Copy full SHA-256 hash"
                >
                  {copiedHash ? <Check size={14} /> : <Copy size={14} />}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowInstructions(!showInstructions);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px',
                    borderRadius: '6px',
                    color: 'var(--primary)',
                    transition: 'all 0.2s',
                    textDecoration: 'underline',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                  title="How to verify download"
                >
                  <HelpCircle size={14} style={{ marginRight: '4px' }} />
                  Verify
                </button>
              </div>

              {showInstructions && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    backgroundColor: 'var(--bg-light)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    maxWidth: '450px',
                    textAlign: 'left',
                    fontSize: '0.8rem',
                    boxShadow: 'var(--shadow-soft)',
                    color: 'var(--text-muted)',
                    lineHeight: '1.4'
                  }}
                >
                  <p style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px', fontSize: '0.85rem' }}>
                    Verify APK Integrity
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    Run the appropriate command in your terminal to match the SHA-256 checksum:
                  </p>
                  <div style={{ marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Windows PowerShell:</span>
                    <pre style={{ backgroundColor: 'var(--surface)', padding: '6px', borderRadius: '6px', overflowX: 'auto', marginTop: '4px', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-dark)' }}>
                      Get-FileHash .\app-release.apk -Algorithm SHA256
                    </pre>
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>macOS / Linux:</span>
                    <pre style={{ backgroundColor: 'var(--surface)', padding: '6px', borderRadius: '6px', overflowX: 'auto', marginTop: '4px', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-dark)' }}>
                      shasum -a 256 app-release.apk
                    </pre>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Trust highlights */}
            <div style={{ 
              marginTop: '48px', 
              display: 'flex', 
              gap: '24px', 
              flexWrap: 'wrap',
              justifyContent: 'center'
            }} className="hero-trust">
              <style>{`
                @media (min-width: 1024px) { .hero-trust { justify-content: flex-start !important; } }
              `}</style>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>
                <Zap size={16} color="var(--primary)" />
                <span>AI Powered System</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>
                <Globe size={16} color="var(--primary)" />
                <span>Eco-Friendly Solution</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{ 
              borderRadius: 'clamp(20px, 5vw, 40px)', 
              padding: 'clamp(12px, 3vw, 20px)',
              backgroundColor: 'white',
              boxShadow: 'var(--shadow-premium)',
              border: '1px solid var(--border)',
              position: 'relative',
              zIndex: 1
            }}>
              <img 
                src="/recyconnect_hero_illustration.png" 
                alt="RecyConnect AI" 
                style={{ width: '100%', height: 'auto', borderRadius: 'clamp(12px, 3vw, 24px)', display: 'block' }}
              />
              
              {/* Floating Badge (Hidden on very small screens or resized) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass hidden-mobile"
                style={{ 
                  position: 'absolute',
                  top: '10%',
                  right: '-5%',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                <span style={{ fontWeight: 600, fontSize: '12px', color: 'var(--secondary)' }}>Smart Waste Detection</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
