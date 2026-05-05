import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Leaf, Zap } from 'lucide-react';

const trustPoints = [
  { icon: <ShieldCheck size={20} />, text: "Secure & Safe" },
  { icon: <Cpu size={20} />, text: "AI Powered" },
  { icon: <Leaf size={20} />, text: "Eco-Friendly" },
  { icon: <Zap size={20} />, text: "Fast & Reliable" }
];

const TrustIndicators = () => {
  return (
    <section style={{ 
      padding: '2rem 0', 
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'var(--surface)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '4rem', 
          flexWrap: 'wrap'
        }}>
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                fontWeight: 600
              }}
            >
              <div style={{ color: 'var(--primary)', display: 'flex' }}>
                {point.icon}
              </div>
              <span style={{ letterSpacing: '0.02em' }}>{point.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
