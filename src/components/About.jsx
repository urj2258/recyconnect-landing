import { motion } from 'framer-motion';
import { Users, Cpu, Code2, Smartphone, Leaf, Sparkles } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Muhammad Umer Liaqat",
      role: "Full Stack Developer",
      desc: "Specializes in building high-performance, responsive user interfaces with a focus on premium aesthetics.",
      image: "/Muhammad Umer Liaqat.png",
      icon: <Smartphone size={32} />,
      pos: "center 10%"
    },
    {
      name: "Rana M Tayyab Atiq",
      role: "Full Stack Developer",
      desc: "Expert in architecting robust server-side systems and managing complex data workflows for circular economies.",
      image: "/Rana M Tayyab Atiq.png",
      icon: <Code2 size={32} />,
      pos: "center"
    },
    {
      name: "Warda Sohail",
      role: "Full Stack Developer",
      desc: "Develops advanced neural vision models to accurately identify and classify recyclable materials in real-time.",
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
          <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Project Supervisor</h3>
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

        {/* Tech Stack & Mission */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '48px',
          borderTop: '1px solid var(--border)',
          paddingTop: '80px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ marginBottom: '24px', fontSize: '1.2rem', fontWeight: 700 }}>Built with Industry-Leading Tech</h4>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {techStack.map((tech, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  padding: '12px 24px', 
                  backgroundColor: 'white', 
                  borderRadius: '12px', 
                  boxShadow: 'var(--shadow-soft)',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{ color: tech.color }}>{tech.icon}</div>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ 
              textAlign: 'center', 
              maxWidth: '600px', 
              padding: '32px', 
              borderRadius: '24px', 
              backgroundColor: 'var(--primary-light)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', color: 'rgba(16, 185, 129, 0.2)' }}>
              <Leaf size={100} />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: 'var(--primary)' }}>
                <Sparkles size={24} />
              </div>
              <p style={{ 
                fontSize: '1.25rem', 
                fontWeight: 600, 
                color: 'var(--primary-dark)', 
                fontStyle: 'italic',
                lineHeight: '1.4'
              }}>
                "Our mission is to build a world where waste is seen as a resource, not a burden on the planet."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
