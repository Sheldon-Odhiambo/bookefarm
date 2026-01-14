
import React, { useState } from 'react';
import Layout from './components/Layout';
import Assistant from './components/Assistant';
import { 
  BookOpen, 
  Users, 
  ShieldCheck, 
  Palette, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  ChevronRight,
  Star,
  Trophy,
  Music,
  Code,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate email sending logic
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const renderHome = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1577891720206-8805b6e27305?auto=format&fit=crop&q=80&w=1600" 
          alt="Happy primary students learning" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-900/40 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl text-white">
              <span className="bg-blue-600/90 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block shadow-lg">Welcome to Bookefarm</span>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight drop-shadow-md">Learn.<br/>Strive.<br/>Excel.</h1>
              <p className="text-xl mb-8 text-white/90 font-medium leading-relaxed">Nurturing holistic development in a safe, inspiring environment where every child discovers their unique brilliance. Nairobi's premier choice for CBC education.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActiveSection('admissions')}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Enroll Your Child
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition-all transform hover:-translate-y-1"
                >
                  Visit Our School
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen className="text-green-600" />, title: "CBC Curriculum", desc: "Competency Based learning focusing on practical life skills and discovery." },
              { icon: <Users className="text-blue-600" />, title: "Qualified Staff", desc: "Our educators are certified and deeply passionate about early childhood." },
              { icon: <ShieldCheck className="text-yellow-600" />, title: "Safe Environment", desc: "Gated campus with dedicated security and nurturing class monitors." },
              { icon: <Palette className="text-pink-600" />, title: "Co-curricular", desc: "From swimming to chess, we believe in development beyond books." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group bg-white">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-50 group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Strip Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=60&w=400" alt="Students" className="h-64 w-full object-cover rounded-xl" />
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=60&w=400" alt="Learning" className="h-64 w-full object-cover rounded-xl" />
        <img src="https://images.unsplash.com/photo-1522661060204-85641e59ed7a?auto=format&fit=crop&q=60&w=400" alt="Playground" className="h-64 w-full object-cover rounded-xl" />
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=60&w=400" alt="Library" className="h-64 w-full object-cover rounded-xl" />
      </section>

      {/* Headteacher Welcome */}
      <section className="py-24 bg-green-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                   alt="Head Teacher Dr. Sarah Wambui" 
                   className="rounded-3xl shadow-2xl border-8 border-white" 
                />
                <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-3xl shadow-2xl max-w-[240px] text-white">
                  <p className="font-bold text-lg italic leading-tight">"Our mission is to unlock the potential in every child."</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full font-bold text-sm mb-4">A Message from Management</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Welcome to Our Family</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>As the Head Teacher of Bookefarm Primary School, it is my pleasure to welcome you to a community where learning is an adventure and safety is our priority.</p>
                <p>We believe in a holistic approach to education, blending academic excellence with character development and creative exploration. Every child here is seen, heard, and valued.</p>
                <div className="pt-4 border-t border-green-100">
                  <p className="font-bold text-2xl text-green-800">Dr. Sarah Wambui</p>
                  <p className="text-green-600 font-medium italic">PhD in Educational Leadership — Head Teacher</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveSection('about')}
                className="mt-10 flex items-center gap-2 font-bold text-green-600 hover:text-green-700 transition-colors group"
              >
                Learn more about our values <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Parents Say</h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mrs. Otieno", role: "Parent, Grade 4", text: "My daughter has grown so much in confidence since joining Bookefarm. The teachers truly care about her individual progress." },
              { name: "Mr. Kimani", role: "Parent, PP2", text: "The CBC implementation here is excellent. My kids are learning practical life skills every day and are actually excited for school." },
              { name: "Dr. Hassan", role: "Parent, Grade 1", text: "Safe, clean, and extremely professional. The best choice for primary education in Nairobi East. Highly recommend." }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center font-bold text-green-700">{t.name[0]}</div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="animate-in fade-in duration-700">
      <div className="bg-green-700 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=40&w=800" className="w-full h-full object-cover" alt="" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 relative">Our Story</h1>
        <p className="max-w-2xl mx-auto px-4 text-xl opacity-90 relative">Rooted in excellence, growing in integrity. Discover the heart of Bookefarm.</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-slate-800">Our Background</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded in 2015, Bookefarm Primary School was born out of a vision to provide world-class primary education to families in Greenspan and the larger Eastlands area of Nairobi. We started with just 20 students and a dedicated team of three teachers. Today, we stand as a vibrant center of learning excellence, serving over 300 students.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="p-4 bg-slate-50 rounded-2xl"><p className="text-3xl font-bold text-green-600">2015</p><p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Established</p></div>
               <div className="p-4 bg-slate-50 rounded-2xl"><p className="text-3xl font-bold text-green-600">300+</p><p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Students</p></div>
               <div className="p-4 bg-slate-50 rounded-2xl"><p className="text-3xl font-bold text-green-600">100%</p><p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">CBC Compliant</p></div>
               <div className="p-4 bg-slate-50 rounded-2xl"><p className="text-3xl font-bold text-green-600">1:20</p><p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Teacher Ratio</p></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-50 p-12 rounded-[2rem] border border-green-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Star size={100} fill="currentColor" /></div>
              <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
                 <CheckCircle className="text-green-600" /> Our Vision
              </h3>
              <p className="text-xl text-green-900/80 italic leading-relaxed">"To be a leading center of educational excellence in Africa where every learner is empowered to achieve their full unique potential."</p>
            </div>
            <div className="bg-blue-50 p-12 rounded-[2rem] border border-blue-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><BookOpen size={100} fill="currentColor" /></div>
              <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
                <CheckCircle className="text-blue-600" /> Our Mission
              </h3>
              <p className="text-xl text-blue-900/80 italic leading-relaxed">"To provide a safe, learner-centered environment that fosters academic rigor, character integrity, and creative innovation through CBC."</p>
            </div>
          </div>

          <div className="bg-slate-50 p-16 rounded-[3rem] text-center border border-slate-100 shadow-inner">
            <h2 className="text-4xl font-bold mb-10 text-slate-800">Our Core Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Discipline', color: 'bg-green-600 text-white shadow-green-200' },
                { label: 'Excellence', color: 'bg-blue-600 text-white shadow-blue-200' },
                { label: 'Integrity', color: 'bg-yellow-500 text-white shadow-yellow-200' },
                { label: 'Care', color: 'bg-pink-600 text-white shadow-pink-200' },
              ].map((v, i) => (
                <div key={i} className={`p-8 rounded-3xl font-bold text-xl shadow-xl transition-transform hover:-translate-y-2 cursor-default ${v.color}`}>
                  {v.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAcademics = () => (
    <div className="animate-in fade-in duration-700">
      <div className="bg-blue-600 py-24 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Academic Excellence</h1>
        <p className="max-w-2xl mx-auto px-4 text-xl opacity-90">Competency Based Curriculum (CBC) delivered with passion and precision.</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">Curriculum Spotlight</div>
              <h2 className="text-4xl font-bold mb-8 text-slate-800">The CBC Journey at Bookefarm</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We fully embrace the 2-6-3-3-3 Competency Based Curriculum. Our approach is learner-centered, focusing on what the child can do rather than just what they know. We prepare learners for a fast-changing world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Early Years (PP1 - Grade 3)",
                  "Middle School (Grade 4 - 6)",
                  "Practical Assessment Labs",
                  "Integrated ICT Skills",
                  "Environmental Stewardship",
                  "Community Service Projects"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                    <CheckCircle className="text-green-500 shrink-0" size={24} />
                    {item}
                  </div>
                ))}
              </div>
              <button className="mt-12 bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-blue-700 transition-all flex items-center gap-3 transform hover:-translate-y-1">
                <Calendar size={22} /> Download Term 2 Dates (PDF)
              </button>
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" alt="Student" />
                 <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl mt-12 hover:scale-105 transition-transform duration-500" alt="Learning" />
              </div>
              <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-xl w-full h-48 object-cover" alt="Classroom" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAdmissions = () => (
    <div className="animate-in fade-in duration-700">
      <div className="bg-green-600 py-24 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Join Bookefarm</h1>
        <p className="max-w-2xl mx-auto px-4 text-xl opacity-90">Start your child's journey to success today. Admissions for 2024/2025 are now open!</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-12 text-slate-800">Admission Process</h2>
            <div className="space-y-12">
              {[
                { step: "01", title: "Enquiry", desc: "Fill out our online form or visit the school in Greenspan to speak with an admissions officer." },
                { step: "02", title: "Friendly Assessment", desc: "We conduct a relaxed assessment to understand your child's learning level and social needs." },
                { step: "03", title: "Documentation", desc: "Submit the required documents: Birth certificate, clinical record, and previous school reports." },
                { step: "04", title: "Welcome Home", desc: "Complete enrollment by paying the registration fee and receiving your starter kit!" }
              ].map((s, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-6xl font-black text-green-100 group-hover:text-green-200 transition-colors">{s.step}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">{s.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-yellow-50 p-8 rounded-3xl border border-yellow-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-yellow-600"><Star size={60} fill="currentColor" /></div>
              <h4 className="font-bold text-xl text-yellow-800 mb-4 italic">Fee Structure Policy</h4>
              <p className="text-lg text-yellow-900/80 leading-relaxed">Our fee structures are competitive and all-inclusive. To ensure clarity for your specific needs, please fill the enquiry form to receive the detailed structure for your child's grade level.</p>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl sticky top-24 h-fit">
            <h3 className="text-3xl font-bold mb-8 text-slate-800">Online Admission Enquiry</h3>
            {isSent ? (
              <div className="py-12 text-center animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Enquiry Received!</h4>
                <p className="text-gray-600">Our admissions officer will contact you within 24 hours at the number provided.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Parent's Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="Enter your name" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="07xx xxx xxx" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Child's Age & Target Grade</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="e.g. 7 years / Grade 2" required />
                </div>
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-green-700 shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:bg-gray-400"
                >
                  {isSending ? (
                    <><Loader2 className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={20} /> Submit Enquiry</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );

  const renderLife = () => (
    <div className="animate-in fade-in duration-700">
      <div className="bg-yellow-500 py-24 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Life at Bookefarm</h1>
        <p className="max-w-2xl mx-auto px-4 text-xl opacity-90">Growing talents, building character, and making memories beyond the classroom.</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Trophy className="text-yellow-600" />, 
                title: "Sports & Athletics", 
                image: "https://images.unsplash.com/photo-1522661060204-85641e59ed7a?auto=format&fit=crop&q=80&w=400",
                items: ["Football Academy", "Swimming Coaching", "Track & Field", "Internal Sports Days"] 
              },
              { 
                icon: <Music className="text-pink-600" />, 
                title: "Music & Drama", 
                image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=400",
                items: ["School Choir", "Instrumental Music", "Drama Festivals", "Talent Shows"] 
              },
              { 
                icon: <Code className="text-blue-600" />, 
                title: "Clubs & Discovery", 
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
                items: ["Coding & Robotics Club", "Chess Masterclass", "Eco-Watchers Club", "Young Bakers"] 
              }
            ].map((club, i) => (
              <div key={i} className="bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="h-48 relative overflow-hidden">
                   <img src={club.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={club.title} />
                   <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 -mt-16 relative z-10">{club.icon}</div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-800">{club.title}</h3>
                  <ul className="space-y-4 text-gray-600 font-medium">
                    {club.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 justify-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderGallery = () => (
    <div className="animate-in fade-in duration-700">
      <div className="bg-gray-800 py-24 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
        <p className="max-w-2xl mx-auto px-4 text-xl opacity-90">A visual celebration of our world of learning and laughter.</p>
      </div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {[
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1577891720206-8805b6e27305?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1522661060204-85641e59ed7a?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1587653999061-f93333333333?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600"
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-3xl group relative cursor-pointer break-inside-avoid shadow-lg">
                <img 
                  src={img} 
                  alt={`Bookefarm Moment ${i}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold bg-green-700 px-4 py-2 rounded-full shadow-xl">View Larger</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="animate-in fade-in duration-700">
      <div className="bg-slate-900 py-24 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto px-4 text-xl opacity-90">We'd love to hear from you. Get in touch with our friendly front-office team.</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-10 text-slate-800">Get In Touch</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <div className="bg-green-100 p-4 rounded-2xl text-green-700 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm"><MapPin size={28} /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-slate-800">Our Location</h4>
                    <p className="text-lg text-gray-600">Greenspan Mall Area, Phase 4, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="bg-blue-100 p-4 rounded-2xl text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm"><Phone size={28} /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-slate-800">Call Us Directly</h4>
                    <p className="text-lg text-blue-600 font-bold">+254 746 129 446</p>
                    <p className="text-sm text-gray-500">Available 7:00 AM — 5:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-700 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300 shadow-sm"><Mail size={28} /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-slate-800">Email Enquiries</h4>
                    <p className="text-lg text-gray-600">info@bookefarm.sc.ke</p>
                    <p className="text-sm text-gray-500">We respond to all emails within 4 hours.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 w-full h-80 bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl relative flex items-center justify-center border-8 border-white">
                <img 
                   src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&q=80&w=800" 
                   className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" 
                   alt="Map background"
                />
                <div className="text-center p-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl z-10 border border-white">
                  <MapPin size={56} className="mx-auto mb-4 text-red-500 animate-bounce" />
                  <p className="font-bold text-2xl text-slate-800">Find Us In Greenspan</p>
                  <p className="text-gray-600">Next to Phase 4 Gate, Nairobi</p>
                  <a href="https://maps.google.com" target="_blank" className="mt-4 inline-block text-blue-600 font-bold hover:underline">Open in Google Maps</a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-inner relative overflow-hidden">
              <h3 className="text-3xl font-bold mb-8 text-slate-800">Send Us an Email Message</h3>
              {isSent ? (
                <div className="py-20 text-center animate-in zoom-in duration-300">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-green-200">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-800 mb-4">Message Sent!</h4>
                  <p className="text-xl text-gray-600">Thank you for contacting Bookefarm. We have received your email and will get back to you shortly.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Full Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input type="email" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="Admissions Enquiry, Feedback, etc." />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message Content</label>
                    <textarea rows={6} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none resize-none transition-all" placeholder="How can we help you today?" required></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-xl hover:bg-black shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 disabled:bg-gray-400"
                  >
                    {isSending ? (
                      <><Loader2 className="animate-spin" /> Delivering Email...</>
                    ) : (
                      <><Send size={24} /> Send Official Email</>
                    )}
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-4 italic">By clicking send, your enquiry will be delivered directly to the administration inbox.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'academics': return renderAcademics();
      case 'admissions': return renderAdmissions();
      case 'life': return renderLife();
      case 'gallery': return renderGallery();
      case 'contact': return renderContact();
      default: return renderHome();
    }
  };

  return (
    <Layout activeSection={activeSection} onNavigate={setActiveSection}>
      {renderContent()}
      <Assistant />
    </Layout>
  );
};

export default App;
