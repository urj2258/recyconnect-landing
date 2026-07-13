import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Lock, CheckCircle2, Sparkles, Copy, Check, HelpCircle } from 'lucide-react';

const CTASection = () => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleCopyHash = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("be1ab0b90399643e0420a88fa863c497ada0d3c64edc5d34ff676e8da5cdf24c");
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section className="section" id="download" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
            borderRadius: 'clamp(24px, 5vw, 3rem)',
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2rem)',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.2)'
          }}
        >
          {/* Subtle Background Glows */}
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.2)', marginBottom: '1.5rem' }}>
              <Sparkles size={14} style={{ marginRight: '8px' }} />
              Ready to make an impact?
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ 
                marginBottom: '1.5rem', 
                color: '#ffffff'
              }}
            >
              Start Your Sustainable <br className="hidden-mobile" />
              Journey <span className="gradient-text">Today.</span>
            </motion.h2>
            
            <p style={{ 
              marginBottom: '3rem', 
              opacity: 0.8, 
              maxWidth: '600px', 
              marginInline: 'auto', 
              color: 'rgba(255, 255, 255, 0.9)' 
            }}>
              Download the RecyConnect app and join a community dedicated to building a cleaner, smarter future through responsible waste management.
            </p>

            <motion.a 
              href="https://github.com/Tayyab2344/RecyConnect-frontend/releases/download/v1.0.0/app-release.apk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-green" 
              style={{ 
                padding: '1.125rem 3rem',
                marginBottom: '1.5rem'
              }}
            >
              <Download size={22} />
              Download APK Now
            </motion.a>

            {/* Release Checksum verification */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              marginBottom: 'clamp(3rem, 8vw, 4rem)'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                fontSize: '0.85rem', 
                color: 'rgba(255, 255, 255, 0.7)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '8px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}>
                <ShieldCheck size={15} color="#10b981" />
                <span style={{ fontWeight: 600 }}>v1.0.0 SHA-256:</span>
                <code style={{ 
                  fontFamily: 'monospace', 
                  backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                  color: '#e2e8f0',
                  padding: '4px 8px', 
                  borderRadius: '6px',
                  fontSize: '0.8rem',
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
                    color: copiedHash ? '#10b981' : 'rgba(255, 255, 255, 0.6)',
                    transition: 'all 0.2s',
                    backgroundColor: copiedHash ? 'rgba(16, 185, 129, 0.15)' : 'transparent'
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
                    color: '#34d399',
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
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    maxWidth: '450px',
                    textAlign: 'left',
                    fontSize: '0.8rem',
                    backdropFilter: 'blur(10px)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.4'
                  }}
                >
                  <p style={{ fontWeight: 600, color: '#ffffff', marginBottom: '6px', fontSize: '0.85rem' }}>
                    Verify APK Integrity
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    Run the appropriate command in your terminal to match the SHA-256 checksum:
                  </p>
                  <div style={{ marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600, color: '#ffffff' }}>Windows PowerShell:</span>
                    <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '6px', borderRadius: '6px', overflowX: 'auto', marginTop: '4px', fontFamily: 'monospace', fontSize: '0.75rem', color: '#e2e8f0', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      Get-FileHash .\app-release.apk -Algorithm SHA256
                    </pre>
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, color: '#ffffff' }}>macOS / Linux:</span>
                    <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '6px', borderRadius: '6px', overflowX: 'auto', marginTop: '4px', fontFamily: 'monospace', fontSize: '0.75rem', color: '#e2e8f0', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      shasum -a 256 app-release.apk
                    </pre>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Trust Badges */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 'clamp(1.5rem, 5vw, 3rem)', 
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '3rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', fontWeight: 600 }}>
                <ShieldCheck size={18} color="#10b981" />
                <span>Verified Impact</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', fontWeight: 600 }}>
                <Lock size={18} color="#10b981" />
                <span>Encrypted Data</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
