import { motion } from 'framer-motion';
import { Download, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{ 
      padding: '160px 0 100px', 
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="badge">
              <ShieldCheck size={14} style={{ marginRight: '8px' }} />
              Built for Sustainable Future
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
              lineHeight: '1.1', 
              marginBottom: '24px',
              color: 'var(--secondary)'
            }}>
              Smarter Recycling for <br />
              a <span className="gradient-text">Greener Planet.</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-muted)', 
              marginBottom: '40px', 
              maxWidth: '540px',
              lineHeight: '1.6'
            }}>
              RecyConnect uses advanced AI technology to simplify waste management and promote sustainable living. Join the movement toward a circular economy today.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <motion.a 
                href="/recyconnect.apk"
                download="recyconnect.apk"
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

            {/* Trust-based highlights instead of fake stats */}
            <div style={{ 
              marginTop: '48px', 
              display: 'flex', 
              gap: '32px', 
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>
                <Zap size={18} color="var(--primary)" />
                <span>AI Powered System</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>
                <Globe size={18} color="var(--primary)" />
                <span>Eco-Friendly Solution</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{ 
              borderRadius: '40px', 
              padding: '20px',
              backgroundColor: 'white',
              boxShadow: 'var(--shadow-premium)',
              border: '1px solid var(--border)',
              position: 'relative',
              zIndex: 1
            }}>
              <img 
                src="/recyconnect_hero_illustration.png" 
                alt="RecyConnect AI" 
                style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }}
              />
              
              {/* Clean Trust Badges instead of dynamic data */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass"
                style={{ 
                  position: 'absolute',
                  top: '10%',
                  right: '-5%',
                  padding: '12px 20px',
                  borderRadius: '14px',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--secondary)' }}>Smart Waste Detection</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass"
                style={{ 
                  position: 'absolute',
                  bottom: '15%',
                  left: '-8%',
                  padding: '16px',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  border: '1px solid rgba(16, 185, 129, 0.1)'
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>Status</span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-dark)' }}>Verified Eco-Impact</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
