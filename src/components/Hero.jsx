import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{ 
      padding: '160px 0 100px', 
      position: 'relative', 
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% -20%, #ecfdf5 0%, transparent 50%)'
    }}>
      {/* Soft Animated Background Glows */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="glow-shape"
        style={{ top: '-10%', left: '-5%', opacity: 0.4 }}
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="glow-shape"
        style={{ bottom: '10%', right: '-10%', opacity: 0.3, backgroundColor: '#dcfce7' }}
      />

      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
          gap: '80px', 
          alignItems: 'center' 
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="badge">
              <Sparkles size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              AI-Powered Sustainability
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(3.5rem, 6vw, 5rem)', 
              lineHeight: '1.1', 
              marginBottom: '24px',
              color: 'var(--secondary)'
            }}>
              Turn Your Waste <br />
              into <span className="gradient-text">Wealth.</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-muted)', 
              marginBottom: '48px', 
              maxWidth: '540px',
              lineHeight: '1.7'
            }}>
              RecyConnect uses advanced AI to identify recyclables and rewards you for every item saved. Join the circular economy movement that pays you to save the planet.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <motion.a 
                href="/recyconnect.apk"
                download="recyconnect.apk"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-green" 
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Download size={20} />
                Download APK
              </motion.a>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary"
              >
                Learn More
                <ArrowRight size={20} />
              </motion.button>
            </div>

            {/* Quick Stats/Trust */}
            <div style={{ marginTop: '60px', display: 'flex', gap: '40px', opacity: 0.6 }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>50k+</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Active Users</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>12k</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Tons Recycled</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>$2M</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Rewards Paid</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Main Illustration Wrapper */}
            <div style={{ 
              borderRadius: '40px', 
              padding: '24px',
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
              
              {/* Glass Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass"
                style={{ 
                  position: 'absolute',
                  top: '10%',
                  right: '-5%',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--secondary)' }}>AI Scanning Active</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass"
                style={{ 
                  position: 'absolute',
                  bottom: '15%',
                  left: '-10%',
                  padding: '20px',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>Estimated Value</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)' }}>$24.50</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
