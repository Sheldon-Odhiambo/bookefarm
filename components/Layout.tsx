
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Academics', id: 'academics' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'Life at Bookefarm', id: 'life' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Bar */}
      <div className="hidden lg:flex bg-green-700 text-white py-2 px-6 justify-between text-sm">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 font-medium">
            <Phone size={14} className="text-green-300" /> +254 746 129 446
          </span>
          <span className="flex items-center gap-2 font-medium">
            <Mail size={14} className="text-green-300" /> info@bookefarm.sc.ke
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-green-300" /> Greenspan, Nairobi
        </div>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-200">B</div>
            <div>
              <h1 className="text-xl font-bold text-green-800 leading-tight">Bookefarm</h1>
              <p className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold">Primary School</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold transition-colors hover:text-green-600 ${activeSection === item.id ? 'text-green-600 underline underline-offset-8 decoration-2' : 'text-gray-600'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-green-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t absolute w-full left-0 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg py-2 ${activeSection === item.id ? 'text-green-600 font-bold' : 'text-gray-600'}`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('admissions')}
                className="bg-green-600 text-white px-6 py-3 rounded-full font-bold text-center mt-2 shadow-lg"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/254746129446" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 z-40 flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">B</div>
              <h2 className="text-xl font-bold text-white">Bookefarm</h2>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering the next generation of thinkers, creators, and leaders in a safe, nurturing environment in Nairobi.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors text-xs font-bold">FB</div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors text-xs font-bold">X</div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors text-xs font-bold">IG</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleNavClick('about')} className="hover:text-green-400">About Us</button></li>
              <li><button onClick={() => handleNavClick('academics')} className="hover:text-green-400">Curriculum</button></li>
              <li><button onClick={() => handleNavClick('admissions')} className="hover:text-green-400">Admissions</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-green-400">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={18} className="text-green-500 shrink-0" /> Greenspan, Nairobi, Kenya</li>
              <li className="flex gap-3 font-semibold"><Phone size={18} className="text-green-500 shrink-0" /> +254 746 129 446</li>
              <li className="flex gap-3"><Mail size={18} className="text-green-500 shrink-0" /> info@bookefarm.sc.ke</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Newsletter</h3>
            <p className="text-xs mb-4">Stay updated with school events and news.</p>
            {isSubscribed ? (
              <div className="bg-green-900/50 p-4 rounded-xl border border-green-500 flex items-center gap-2 text-green-300 animate-in fade-in slide-in-from-bottom-2">
                <CheckCircle2 size={16} />
                <span className="text-xs font-bold">Successfully joined!</span>
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email address" 
                  required
                  className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-green-500 outline-none"
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition-colors">Join</button>
              </form>
            )}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Bookefarm Primary School. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
