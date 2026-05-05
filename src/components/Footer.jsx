import { Leaf, Share2, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '6rem 0 3rem', backgroundColor: 'var(--white)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Leaf size={24} />
              </div>
              <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '-0.03em' }}>RecyConnect</span>
            </div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '340px', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Connecting people, businesses, and cities to create a more sustainable future through AI-powered technology.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              {[Globe, Share2, Mail, Phone].map((Icon, i) => (
                <a key={i} href="#" style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  backgroundColor: 'var(--surface)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--secondary)',
                  transition: 'all 0.3s ease',
                  border: '1px solid var(--border)'
                }}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.75rem', fontSize: '1.2rem', fontWeight: 700 }}>Platform</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-muted)', listStyle: 'none' }}>
              <li><a href="#features" style={{ fontSize: '1rem' }}>Features</a></li>
              <li><a href="#how-it-works" style={{ fontSize: '1rem' }}>How it Works</a></li>
              <li><a href="#download" style={{ fontSize: '1rem' }}>Download APK</a></li>
              <li><a href="#" style={{ fontSize: '1rem' }}>Partner Program</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.75rem', fontSize: '1.2rem', fontWeight: 700 }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-muted)', listStyle: 'none' }}>
              <li><a href="#" style={{ fontSize: '1rem' }}>About Us</a></li>
              <li><a href="#" style={{ fontSize: '1rem' }}>Sustainability Report</a></li>
              <li><a href="#" style={{ fontSize: '1rem' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ fontSize: '1rem' }}>Terms of Service</a></li>
            </ul>
          </div>

          <div style={{ gridColumn: 'span 1' }}>
            <h4 style={{ marginBottom: '1.75rem', fontSize: '1.2rem', fontWeight: 700 }}>Get the App</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', width: '100%', fontSize: '0.9rem' }}>
                Download APK
              </button>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', justifyContent: 'center' }}>
                <ShieldCheck size={14} color="var(--primary)" />
                Secure & Verified
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '2.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <p>© 2026 RecyConnect. Designed for a greener future.</p>
          <div style={{ display: 'flex', gap: '2.5rem', fontWeight: 500 }}>
            <a href="#">Contact Us</a>
            <a href="#">Support Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for trust icon
const ShieldCheck = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);

export default Footer;
