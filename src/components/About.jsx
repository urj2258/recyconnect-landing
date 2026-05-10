import { motion } from 'framer-motion';
import { Users, Cpu, Code2, Smartphone, Leaf, Sparkles, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Muhammad Umer Liaqat",
      role: "Full Stack Developer",
      desc: "Passionate about building modern and user-friendly software solutions.",
      image: "/Muhammad Umer Liaqat.png",
      icon: <Smartphone size={32} />,
      pos: "center 10%"
    },
    {
      name: "Rana M Tayyab Atiq",
      role: "Full Stack Developer",
      desc: "Focused on developing efficient and reliable digital experiences.",
      image: "/Rana M Tayyab Atiq.png",
      icon: <Code2 size={32} />,
      pos: "center"
    },
    {
      name: "Warda Sohail",
      role: "Full Stack Developer",
      desc: "Dedicated to creating innovative and impactful technology solutions.",
      image: "/warda.png",
      icon: <Cpu size={48} />,
      pos: "center"
    }
  ];

  const techStack = [
    { name: "Flutter", icon: <Smartphone size={20} />, color: "#02569B" },
    { name: "Node.js", icon: <Code2 size={20} />, color: "#339933" },
    { name: "AI / ML", icon: <Cpu size={20} />, color: "#FF6B6B" }
  ];

  const portraitStyle = {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 24px',
    boxShadow: '0 12px 24px -8px rgba(16, 185, 129, 0.25)',
    backgroundColor: 'var(--surface)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid white'
  };

  return (
    <section className="section" id="about" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="badge">
            <Users size={14} style={{ marginRight: '8px' }} />
            The Team Behind RecyConnect
          </div>
          <h2 style={{ marginBottom: '24px' }}>About <span className="gradient-text">RecyConnect</span></h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.8 }}>
            RecyConnect is a mission-driven platform designed to revolutionize waste management through artificial intelligence, connecting eco-conscious individuals with local recycling ecosystems.
          </p>
        </div>

        {/* Supervisor Section (Portrait Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, boxShadow: '0 20px 40px -5px rgba(16, 185, 129, 0.1)' }}
          viewport={{ once: true }}
          className="card-premium"
          style={{
            maxWidth: '450px',
            margin: '0 auto 80px',
            textAlign: 'center',
            border: '1px solid var(--primary-light)',
            background: 'white',
            padding: '2.5rem',
            borderRadius: '24px'
          }}
        >
          <div className="badge" style={{ backgroundColor: 'var(--secondary)', color: 'white', marginBottom: '24px' }}>Project Supervisor</div>
          <div style={portraitStyle}>
            <img
              src="/supervisor.png"
              alt="Supervisor"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Jawad Khan</h3>
          <div style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '16px' }}>Lead Research & Oversight</div>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            Providing strategic guidance and academic oversight to ensure RecyConnect meets the highest standards of technical excellence.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px',
          marginBottom: '100px',
          alignItems: 'stretch'
        }}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px -5px rgba(16, 185, 129, 0.1)' }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-premium"
              style={{ 
                textAlign: 'center', 
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '24px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <div style={portraitStyle}>
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: member.pos
                    }} 
                  />
                ) : (
                  <div style={{ color: 'var(--primary)', opacity: 0.2 }}>{member.icon}</div>
                )}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', fontWeight: '700', color: 'var(--text-dark)' }}>{member.name}</h3>
              <div style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem', marginBottom: '16px' }}>{member.role}</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', flexGrow: 1 }}>{member.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '100px',
          marginTop: '60px'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '80px', 
            alignItems: 'start' 
          }} className="about-grid">
            <style>{`
              @media (min-width: 1024px) { 
                .about-grid { grid-template-columns: 1fr 1fr !important; gap: 120px !important; } 
              }
            `}</style>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary-dark)' }}>Our Purpose</div>
              <h3 style={{ marginBottom: '24px', fontSize: '2rem' }}>Building a <span className="gradient-text">Smarter Future</span> for our Planet.</h3>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.7' }}>
                RecyConnect was born from a simple yet profound observation: our current waste management systems are outdated and disconnected. We saw billions of dollars in valuable materials ending up in landfills simply because people lacked the tools to identify and move them efficiently.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Our vision is to build a world where technology and community action work in perfect harmony. By leveraging AI and real-time connectivity, we are creating a digital ecosystem that turns every citizen into an environmental hero and every piece of waste into a resource.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
            >
              <div>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ color: 'var(--primary)' }}><Leaf size={24} /></div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>The Mission</h4>
                </div>
                <p style={{ margin: 0, fontSize: '1rem' }}>
                  To democratize recycling by providing accessible, AI-powered tools that simplify waste classification and connect the entire recycling value chain—from households to industrial recyclers.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ color: 'var(--primary)' }}><Sparkles size={24} /></div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>The Long-Term Goal</h4>
                </div>
                <p style={{ margin: 0, fontSize: '1rem' }}>
                  We aim to reduce landfill contributions by 40% in our target regions within the next five years, fostering a global culture of circularity where "waste" is a term of the past.
                </p>
              </div>

              <div style={{
                padding: '32px',
                backgroundColor: 'var(--secondary)',
                borderRadius: '24px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1, color: 'white' }}>
                  <Globe size={100} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h5 style={{ color: 'var(--primary)', marginBottom: '8px', fontWeight: 700 }}>Global Innovation</h5>
                  <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.9 }}>
                    Designed for scalability, RecyConnect is built to support universities, government organizations, and NGOs in achieving their sustainability targets through data-driven waste management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ textAlign: 'center', marginTop: '100px', opacity: 0.6 }}>
          <h4 style={{ marginBottom: '32px', fontSize: '1.1rem', fontWeight: 600 }}>Built with Industry-Leading Technology</h4>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {techStack.map((tech, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ color: tech.color }}>{tech.icon}</div>
                <span style={{ fontWeight: 600 }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
