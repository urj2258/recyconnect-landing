import { motion } from 'framer-motion';
import { UserPlus, Camera, ScanSearch, Handshake, CheckCircle } from 'lucide-react';

const steps = [
  { icon: <UserPlus />, title: "Register", desc: "Create your secure eco-account." },
  { icon: <Camera />, title: "Upload Item", desc: "Take a photo of your recyclables." },
  { icon: <ScanSearch />, title: "AI Detection", desc: "Our AI identifies the material value." },
  { icon: <Handshake />, title: "Sell or Pickup", desc: "Trade on market or request pickup." },
  { icon: <CheckCircle />, title: "Complete", desc: "Finalize deal and receive payment." }
];

const HowItWorks = () => {
  return (
    <section className="section" id="how-it-works" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="badge">Simple Workflow</div>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>How it <span className="gradient-text">Works</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>From waste to wonder in five easy steps.</p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: '24px', 
          flexWrap: 'wrap',
          position: 'relative'
        }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ flex: '1 1 200px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--surface)', 
                color: 'var(--primary)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '24px',
                position: 'relative',
                border: '2px dashed var(--primary-light)'
              }}>
                {s.icon}
                <div style={{ 
                  position: 'absolute', 
                  top: '-5px', 
                  right: '-5px', 
                  width: '28px', 
                  height: '28px', 
                  backgroundColor: 'var(--secondary)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 800
                }}>
                  {i + 1}
                </div>
              </div>
              <h4 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>{s.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
