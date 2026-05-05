import { motion } from 'framer-motion';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    { 
      icon: <Shield size={24} />, 
      title: "Data Security", 
      desc: "Enterprise-grade encryption for all user data."
    },
    { 
      icon: <Award size={24} />, 
      title: "Certified Impact", 
      desc: "Eco-impact reports verified by sustainability standards."
    },
    { 
      icon: <Users size={24} />, 
      title: "Community Driven", 
      desc: "Built by environmentalists for environmentalists."
    },
    { 
      icon: <CheckCircle size={24} />, 
      title: "Simple & Honest", 
      desc: "Transparent reward systems with no hidden fees."
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--white)', padding: '40px 0' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '60px', 
          flexWrap: 'wrap',
          opacity: 0.8
        }}>
          {indicators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                color: 'var(--text-muted)'
              }}
            >
              <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--secondary)', fontSize: '0.9rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.8rem' }}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
