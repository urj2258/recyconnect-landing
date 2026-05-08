import { motion } from 'framer-motion';
import { Download, ShieldCheck, Lock, CheckCircle2, Sparkles } from 'lucide-react';

const CTASection = () => {
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
                marginBottom: 'clamp(3rem, 8vw, 4rem)'
              }}
            >
              <Download size={22} />
              Download APK Now
            </motion.a>

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
