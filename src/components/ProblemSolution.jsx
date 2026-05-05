import { motion } from 'framer-motion';
import { AlertCircle, ScanSearch, Store, Truck } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '60px', 
          alignItems: 'center' 
        }} className="ps-grid">
          <style>{`
            @media (min-width: 768px) { .ps-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } }
            @media (min-width: 1024px) { .ps-grid { gap: 100px !important; } }
          `}</style>
          
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ backgroundColor: '#fee2e2', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.1)' }}>The Problem</div>
            <h2 style={{ marginBottom: '32px' }}>
              Traditional recycling is <br className="hidden-mobile" />
              <span style={{ color: '#ef4444' }}>broken & confusing.</span>
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: <AlertCircle size={20} color="#ef4444" />, title: "Waste is everywhere", text: "Lack of easy tracking leads to unmanaged litter in our communities." },
                { icon: <AlertCircle size={20} color="#ef4444" />, title: "No easy way to recycle", text: "Finding centers and understanding categories is a manual headache." },
                { icon: <AlertCircle size={20} color="#ef4444" />, title: "Unknown item value", text: "Millions of dollars in valuable materials are discarded daily." }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ marginTop: '4px' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px', color: 'var(--secondary)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.95rem' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-premium"
            style={{ background: 'var(--surface)', borderColor: 'var(--primary-light)' }}
          >
            <div className="badge">The Solution</div>
            <h2 style={{ marginBottom: '32px' }}>
              AI-driven <br className="hidden-mobile" />
              <span className="gradient-text">transparency.</span>
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: <ScanSearch size={22} color="var(--primary)" />, title: "AI Classification", text: "Instantly identify materials and their market value with one scan." },
                { icon: <Store size={22} color="var(--primary)" />, title: "Reward Marketplace", text: "Sell your recyclables directly to buyers or redeem points for cash." },
                { icon: <Truck size={22} color="var(--primary)" />, title: "Smart Pickup", text: "Request a collector to your door with real-time GPS tracking." }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    backgroundColor: 'white', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-soft)',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px', color: 'var(--secondary)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.95rem' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
