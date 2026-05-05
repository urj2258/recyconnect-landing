import { motion } from 'framer-motion';
import { Download, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section" id="download" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
            borderRadius: '4rem',
            padding: '8rem 2rem',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.3)'
          }}
        >
          {/* Background Glows for Depth */}
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                marginBottom: '2rem', 
                fontWeight: 800, 
                letterSpacing: '-0.04em',
                color: '#ffffff', // Explicitly white for maximum visibility
                textShadow: '0 10px 30px rgba(0,0,0,0.3)' // Subtle shadow to pop from background
              }}
            >
              Start Recycling <span className="gradient-text" style={{ 
                background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', // Brighter gradient for better visibility
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Today.</span>
            </motion.h2>
            
            <p style={{ fontSize: '1.4rem', marginBottom: '4rem', opacity: 0.8, maxWidth: '650px', margin: '0 auto 4rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.9)' }}>
              Join 50,000+ eco-warriors and turn your recyclables into rewards. It's time to build a cleaner future together.
            </p>

            <motion.a 
              href="/recyconnect.apk"
              download="recyconnect.apk"
              whileHover={{ scale: 1.05, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-green" 
              style={{ 
                padding: '1.5rem 4rem', 
                fontSize: '1.25rem', 
                textDecoration: 'none',
                display: 'inline-flex',
                boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.5)',
                marginBottom: '6rem'
              }}
            >
              <Download size={28} style={{ marginRight: '1rem' }} />
              Download APK Now
            </motion.a>

            {/* Trust Badges */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '4rem', 
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '4rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', fontWeight: 600 }}>
                <ShieldCheck size={24} color="var(--primary)" />
                <span>Verified Impact</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', fontWeight: 600 }}>
                <Lock size={24} color="var(--primary)" />
                <span>Encrypted Data</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', fontWeight: 600 }}>
                <CheckCircle2 size={24} color="var(--primary)" />
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
