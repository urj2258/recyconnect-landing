import { motion } from 'framer-motion';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    { icon: <Shield size={16} />, label: "Secure Data" },
    { icon: <Award size={16} />, label: "Certified Impact" },
    { icon: <Users size={16} />, label: "Community Driven" },
    { icon: <CheckCircle size={16} />, label: "Verified Solutions" }
  ];

  return (
    <div style={{ backgroundColor: 'var(--white)', padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 'clamp(20px, 5vw, 60px)', 
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {indicators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              <div style={{ color: 'var(--primary)', display: 'flex' }}>{item.icon}</div>
              <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
