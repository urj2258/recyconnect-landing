import { motion } from 'framer-motion';
import { Home, Building2, Warehouse, Truck } from 'lucide-react';

const targets = [
  {
    icon: <Home size={36} />,
    title: "Households",
    description: "Manage your home recycling, earn rewards, and track your family's environmental impact.",
    color: "#10b981"
  },
  {
    icon: <Building2 size={36} />,
    title: "Companies",
    description: "Enterprise tools for corporate waste management, ESG reporting, and employee engagement.",
    color: "#3b82f6"
  },
  {
    icon: <Warehouse size={36} />,
    title: "Warehouses",
    description: "Industrial solutions for handling bulk recyclables and optimizing large-scale logistics.",
    color: "#f59e0b"
  },
  {
    icon: <Truck size={36} />,
    title: "Waste Collectors",
    description: "Digital tools to streamline routes, manage inventory, and connect with verified sources.",
    color: "#ef4444"
  }
];

const TargetUsers = () => {
  return (
    <section className="section" id="target-users" style={{ backgroundColor: '#020617', color: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Premium Background Effects */}
      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)' }}></div>
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <div className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>Platform Partners</div>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, color: 'white' }}>A Solution for <span style={{ color: 'var(--primary)' }}>Everyone.</span></h2>
          <p style={{ opacity: 0.6, maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.6' }}>
            RecyConnect provides tailored tools for every participant in the circular economy.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem' 
        }}>
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255,255,255,0.2)' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '4rem 3rem',
                borderRadius: '3rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div style={{ 
                width: '84px', 
                height: '84px', 
                borderRadius: '2rem', 
                backgroundColor: `${target.color}15`, 
                color: target.color,
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 2.5rem',
                boxShadow: `0 15px 30px -5px ${target.color}25`
              }}>
                {target.icon}
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', fontWeight: 800 }}>{target.title}</h3>
              <p style={{ opacity: 0.5, lineHeight: '1.7', fontSize: '1.05rem' }}>{target.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;
