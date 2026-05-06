import { motion } from 'framer-motion';
import { Download, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

const Hero = () => {
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
              RecyConnect uses advanced AI technology to simplify waste management and promote sustainable living. Join the movement toward a circular economy today.
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
