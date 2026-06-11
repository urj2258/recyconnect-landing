import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="section" id="vision" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--white)' }}>
      {/* Subtle Background Accent */}
      <div 
        className="glow-shape" 
        style={{ 
          top: '20%', 
          left: '-10%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.03) 0%, transparent 70%)',
          opacity: 0.8
        }} 
      />

      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '40px', 
          alignItems: 'center',
          padding: '40px 0'
        }} className="problem-redesign-grid">
          <style>{`
            @media (min-width: 1024px) { 
              .problem-redesign-grid { 
                grid-template-columns: 1fr 1fr !important; 
                gap: 120px !important; 
                padding: 80px 0 !important;
              } 
            }
          `}</style>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ marginBottom: '24px' }}>
              <Leaf size={14} style={{ marginRight: '8px' }} />
              Why RecyConnect Exists
            </div>
            
            <h2 style={{ 
              marginBottom: '32px', 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              lineHeight: '1.1',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--secondary)'
            }}>
              The problem is not waste. <br />
              It’s the <span className="gradient-text">missing connection.</span>
            </h2>
            
            <p style={{ 
              fontSize: '1.25rem', 
              lineHeight: '1.6', 
              color: 'var(--text-muted)',
              maxWidth: '520px',
              margin: 0
            }}>
              Every day, valuable resources are lost to landfills simply because people, collectors, and recyclers lack a unified way to connect. We’re building the digital bridge to turn discarded items back into valued resources.
            </p>
          </motion.div>

          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div style={{
              width: '100%',
              maxWidth: '560px',
              borderRadius: '32px',
              overflow: 'hidden',
              backgroundColor: 'var(--bg-light)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-premium)'
            }}>
              <img 
                src="/eco_tech_connection.png" 
                alt="Eco-Tech Connection" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  mixBlendMode: 'multiply'
                }} 
              />
            </div>

            {/* Subtle Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '30px',
                padding: '12px 20px',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-soft)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 2
              }}
              className="hidden-mobile"
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary)' }}>Smarter Bridge</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
