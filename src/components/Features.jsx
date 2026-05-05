import { motion } from 'framer-motion';
import { ScanSearch, Store, Truck, ShieldCheck, MessageCircle, LayoutDashboard } from 'lucide-react';

const features = [
  { icon: <ScanSearch />, title: "AI Classification", desc: "Identify materials instantly with neural vision." },
  { icon: <Store />, title: "Marketplace", desc: "Buy and sell verified recyclables at fair prices." },
  { icon: <Truck />, title: "Pickup System", desc: "Schedule doorstep collections with one tap." },
  { icon: <ShieldCheck />, title: "Secure Payments", desc: "Instant payouts through encrypted fintech." },
  { icon: <MessageCircle />, title: "Real-time Chat", desc: "Coordinate with buyers and collectors easily." },
  { icon: <LayoutDashboard />, title: "Admin Dashboard", desc: "Powerful tools to manage your environmental impact." }
];

const Features = () => {
  return (
    <section className="section" id="features" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="badge">Powerful Features</div>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Designed for the <span className="gradient-text">Circular Economy</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Professional-grade tools to make recycling effortless and profitable for everyone.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-premium"
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ 
                width: '56px', 
                height: '56px', 
                backgroundColor: 'var(--primary-light)', 
                color: 'var(--primary)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
