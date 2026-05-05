import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ScanSearch, Store, Truck } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>The Problem</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '32px', lineHeight: '1.2' }}>
              Traditional recycling is <br />
              <span style={{ color: '#ef4444' }}>broken & confusing.</span>
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: <AlertCircle size={24} color="#ef4444" />, title: "Waste is everywhere", text: "Lack of easy tracking leads to unmanaged litter in our communities." },
                { icon: <AlertCircle size={24} color="#ef4444" />, title: "No easy way to recycle", text: "Finding centers and understanding categories is a manual headache." },
                { icon: <AlertCircle size={24} color="#ef4444" />, title: "Unknown item value", text: "Millions of dollars in valuable materials are discarded daily." }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ marginTop: '4px' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-premium"
            style={{ background: 'var(--surface)', borderColor: 'var(--primary-light)' }}
          >
            <div className="badge">The Solution</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '32px', lineHeight: '1.2' }}>
              AI-driven <br />
              <span className="gradient-text">transparency.</span>
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: <ScanSearch size={24} color="var(--primary)" />, title: "AI Waste Classification", text: "Instantly identify materials and their market value with one scan." },
                { icon: <Store size={24} color="var(--primary)" />, title: "Reward Marketplace", text: "Sell your recyclables directly to buyers or redeem points for cash." },
                { icon: <Truck size={24} color="var(--primary)" />, title: "Smart Pickup System", text: "Request a collector to your door with real-time GPS tracking." }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: 'white', 
                    borderRadius: '10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-soft)'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.text}</p>
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
