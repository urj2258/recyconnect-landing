import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Copy, Check, Info, Bot, Compass, Smartphone, Monitor, Shield, Sparkles } from 'lucide-react';

const AssetShowcase = () => {
  const [copiedColor, setCopiedColor] = useState(null);

  const colors = [
    { name: 'Primary Green', hex: '#4CAF50', desc: 'Sustainability & Growth', rgb: 'rgb(76, 175, 80)' },
    { name: 'Dark Green', hex: '#2E7D32', desc: 'Trust & Environment', rgb: 'rgb(46, 125, 50)' },
    { name: 'Blue Accent', hex: '#2196F3', desc: 'Digital Connectivity & AI', rgb: 'rgb(33, 150, 243)' },
    { name: 'Deep Slate', hex: '#0F172A', desc: 'Dark Mode Base & Contrast', rgb: 'rgb(15, 23, 42)' },
  ];

  const handleCopyColor = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 1.5rem',
      color: '#0f172a',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          marginBottom: '5rem',
        }}
      >
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          background: 'rgba(76, 175, 80, 0.1)',
          color: '#2e7d32',
          borderRadius: '100px',
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          border: '1px solid rgba(76, 175, 80, 0.2)',
        }}>
          <Sparkles size={14} /> Brand Assets & Identity
        </span>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          marginBottom: '1.25rem',
          background: 'linear-gradient(135deg, #2e7d32 0%, #2196f3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          RecyConnect Brand Kit
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#64748b',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          Explore the official visual identity of RecyConnect. Our design bridges the gap between sustainability and digital AI connectivity.
        </p>
      </motion.div>

      {/* Main Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginBottom: '5rem',
        }}
      >
        {/* Card: App Icon */}
        <motion.div variants={itemVariants} className="card-premium" style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '2rem',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>App Icon</span>
              <Smartphone size={20} color="#4CAF50" />
            </div>
            <div style={{
              background: '#f8fafc',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              aspectRatio: '1.5',
              marginBottom: '1.5rem',
              border: '1px solid rgba(0,0,0,0.02)',
            }}>
              <img 
                src="/app_ico.png" 
                alt="RecyConnect App Icon" 
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '28px',
                  boxShadow: '0 20px 40px -10px rgba(76,175,80,0.25)',
                }}
              />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>App Icon version</h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              The primary mobile application icon. High-tech circular recycling loop with embedded leaf and AI network nodes.
            </p>
          </div>
          <a href="/app_ico.png" download className="btn" style={{
            background: '#4CAF50',
            color: '#ffffff',
            borderRadius: '12px',
            width: '100%',
            padding: '12px',
            boxShadow: '0 8px 16px -4px rgba(76,175,80,0.3)',
          }}>
            <Download size={18} /> Download PNG (512x512)
          </a>
        </motion.div>

        {/* Card: Full Horizontal Logo */}
        <motion.div variants={itemVariants} className="card-premium" style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '2rem',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>Full Logo</span>
              <Monitor size={20} color="#2196F3" />
            </div>
            <div style={{
              background: '#f8fafc',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              aspectRatio: '1.5',
              marginBottom: '1.5rem',
              border: '1px solid rgba(0,0,0,0.02)',
            }}>
              <img 
                src="/logo_horizontal.png" 
                alt="RecyConnect Horizontal Logo" 
                style={{
                  maxWidth: '90%',
                  maxHeight: '70px',
                  objectFit: 'contain',
                }}
              />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Full Horizontal Logo</h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              The primary branding asset for websites, presentations, and documents. Merges our symbol and modern bold geometric wordmark.
            </p>
          </div>
          <a href="/logo_horizontal.png" download className="btn" style={{
            background: '#2196F3',
            color: '#ffffff',
            borderRadius: '12px',
            width: '100%',
            padding: '12px',
            boxShadow: '0 8px 16px -4px rgba(33,150,243,0.3)',
          }}>
            <Download size={18} /> Download PNG
          </a>
        </motion.div>

        {/* Card: Dark Mode Version */}
        <motion.div variants={itemVariants} className="card-premium" style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '2rem',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>Dark Mode</span>
              <Shield size={20} color="#0F172A" />
            </div>
            <div style={{
              background: '#0F172A',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              aspectRatio: '1.5',
              marginBottom: '1.5rem',
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2)',
            }}>
              <img 
                src="/logo_dark.png" 
                alt="RecyConnect Dark Logo" 
                style={{
                  maxWidth: '90%',
                  maxHeight: '70px',
                  objectFit: 'contain',
                }}
              />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Dark Mode Version</h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              Designed for dark application themes and nighttime marketing materials. Features glowing neon accents on a deep slate background.
            </p>
          </div>
          <a href="/logo_dark.png" download className="btn" style={{
            background: '#0F172A',
            color: '#ffffff',
            borderRadius: '12px',
            width: '100%',
            padding: '12px',
          }}>
            <Download size={18} /> Download PNG
          </a>
        </motion.div>

        {/* Card: Monochrome Version */}
        <motion.div variants={itemVariants} className="card-premium" style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '2rem',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>Print & Press</span>
              <Info size={20} color="#64748b" />
            </div>
            <div style={{
              background: '#f8fafc',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              aspectRatio: '1.5',
              marginBottom: '1.5rem',
              border: '1px solid rgba(0,0,0,0.02)',
            }}>
              <img 
                src="/logo_monochrome.png" 
                alt="RecyConnect Monochrome Logo" 
                style={{
                  maxWidth: '90%',
                  maxHeight: '70px',
                  objectFit: 'contain',
                }}
              />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Monochrome Version</h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              A flat, single-color black and white execution. Intended for embossing, print publications, stamps, and letterheads.
            </p>
          </div>
          <a href="/logo_monochrome.png" download className="btn" style={{
            background: '#f1f5f9',
            color: '#0f172a',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '12px',
            width: '100%',
            padding: '12px',
          }}>
            <Download size={18} /> Download PNG
          </a>
        </motion.div>

        {/* Card: Favicon Version */}
        <motion.div variants={itemVariants} className="card-premium" style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '2rem',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>Favicon</span>
              <Compass size={20} color="#e2e8f0" />
            </div>
            <div style={{
              background: '#f8fafc',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              aspectRatio: '1.5',
              marginBottom: '1.5rem',
              border: '1px solid rgba(0,0,0,0.02)',
            }}>
              {/* Browser Address Bar Mockup */}
              <div style={{
                background: '#ffffff',
                width: '100%',
                borderRadius: '8px',
                padding: '6px 12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.75rem',
                color: '#64748b',
                border: '1px solid rgba(0,0,0,0.05)',
              }}>
                <img src="/favicon.png" alt="Favicon" style={{ width: '16px', height: '16px' }} />
                <span>recyconnect.com</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginTop: '1.5rem', alignItems: 'center' }}>
                <img src="/favicon.png" alt="Favicon Large" style={{ width: '48px', height: '48px', borderRadius: '8px' }} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Favicon (32x32px & 48x48px)</span>
              </div>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Favicon Version</h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              A highly simplified, crisp execution of our recycle tech mark, optimized for display in browser tabs and bookmark bars.
            </p>
          </div>
          <a href="/favicon.png" download className="btn" style={{
            background: '#f1f5f9',
            color: '#0f172a',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '12px',
            width: '100%',
            padding: '12px',
          }}>
            <Download size={18} /> Download Favicon
          </a>
        </motion.div>

        {/* Card: EcoBot Mascot */}
        <motion.div variants={itemVariants} className="card-premium" style={{
          background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(76, 175, 80, 0.15)',
          padding: '2rem',
          boxShadow: '0 20px 40px -10px rgba(76,175,80,0.05)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#2e7d32', letterSpacing: '0.05em' }}>Mascot Character</span>
              <Bot size={20} color="#4CAF50" />
            </div>
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              aspectRatio: '1.5',
              marginBottom: '1.5rem',
              border: '1px solid rgba(76,175,80,0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img 
                src="/ecobot_mascot.png" 
                alt="EcoBot Mascot" 
                style={{
                  maxHeight: '130px',
                  objectFit: 'contain',
                  zIndex: 2,
                }}
              />
              <div style={{
                position: 'absolute',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(76,175,80,0.15) 0%, transparent 70%)',
                filter: 'blur(10px)',
                bottom: '10px',
                zIndex: 1,
              }} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#2e7d32' }}>EcoBot Mascot</h3>
            <p style={{ fontSize: '0.95rem', color: '#2e7d32', lineHeight: '1.5', marginBottom: '1.5rem', opacity: 0.85 }}>
              A friendly 3D robot character made of recycled material plates, with glowing green eyes and a leaf core. Used to guide users and gamify recycling rewards.
            </p>
          </div>
          <a href="/ecobot_mascot.png" download className="btn" style={{
            background: '#4CAF50',
            color: '#ffffff',
            borderRadius: '12px',
            width: '100%',
            padding: '12px',
            boxShadow: '0 8px 16px -4px rgba(76,175,80,0.3)',
          }}>
            <Download size={18} /> Download 3D Render
          </a>
        </motion.div>
      </motion.div>

      {/* Brand Identity & Details */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#f8fafc',
          borderRadius: '32px',
          padding: '3rem 2rem',
          border: '1px solid rgba(0, 0, 0, 0.04)',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em' }}>Brand Specifications</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
        }}>
          {/* Colors */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#475569' }}>Color Swatches</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {colors.map((color) => (
                <div key={color.hex} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#ffffff',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.03)',
                }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: color.hex, border: '1px solid rgba(0,0,0,0.05)' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{color.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{color.hex}</div>
                  </div>
                  <button 
                    onClick={() => handleCopyColor(color.hex)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', padding: '4px' }}
                    title="Copy hex code"
                  >
                    {copiedColor === color.hex ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#475569' }}>Typography</h3>
            <div style={{
              background: '#ffffff',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(0,0,0,0.03)',
            }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Primary Font</span>
                <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', fontFamily: "'Inter', sans-serif", marginTop: '4px' }}>Inter</p>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Mascot / Headings Accent</span>
                <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em', marginTop: '4px' }}>Geometric Sans-Serif</p>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '1rem', lineHeight: '1.4' }}>
                For headings and subheadings, we use tight letter-spacing (-0.03em to -0.04em) and heavy weights (700 to 800) for a modern, high-tech SaaS aesthetic.
              </p>
            </div>
          </div>

          {/* Mascot Info */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#475569' }}>EcoBot Personality</h3>
            <div style={{
              background: '#ffffff',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(0,0,0,0.03)',
              fontSize: '0.85rem',
              color: '#64748b',
              lineHeight: '1.6',
            }}>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Friendly & Trustworthy:</strong> Speaks with direct, simple language and uses visual emotional cues (like bright expressive eyes).</li>
                <li><strong>Environmentally Conscious:</strong> Always advocates for sustainable waste disposal, recycling, and circular economy choices.</li>
                <li><strong>Gamification Engine:</strong> Guides the Eco Points reward system, cheering users on achievements, daily streaks, and leadboard upgrades.</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AssetShowcase;
