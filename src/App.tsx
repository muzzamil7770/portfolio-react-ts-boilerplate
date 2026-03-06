import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, User, Briefcase, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto shadow-2xl shadow-cyan-500/50">
              <User size={64} className="text-slate-900" />
            </div>
          </div>
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Alex Johnson
          </h2>
          <p className="text-2xl text-slate-300 mb-8">Full Stack Developer & Creative Designer</p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I craft elegant digital experiences that combine beautiful design with powerful functionality.
            Passionate about building products that make a difference.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-slate-600 rounded-lg font-semibold hover:border-cyan-500 transition-colors">
              View Work
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            <a href="https://github.com" className="hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={28} />
            </a>
            <a href="mailto:hello@example.com" className="hover:text-cyan-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating
                responsive, user-friendly applications that solve real-world problems.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                My journey in tech started with a curiosity for how things work, and has evolved
                into a passion for building innovative solutions that push boundaries.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open source, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Code className="text-cyan-400" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold">Clean Code</h4>
                </div>
                <p className="text-slate-400">Writing maintainable, scalable code that stands the test of time.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Palette className="text-cyan-400" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold">Design Focus</h4>
                </div>
                <p className="text-slate-400">Creating intuitive interfaces that users love to interact with.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Zap className="text-cyan-400" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold">Performance</h4>
                </div>
                <p className="text-slate-400">Optimizing every pixel and millisecond for the best experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills & Technologies</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'React', level: 95 },
              { name: 'TypeScript', level: 90 },
              { name: 'Node.js', level: 88 },
              { name: 'Tailwind CSS', level: 92 },
              { name: 'PostgreSQL', level: 85 },
              { name: 'AWS', level: 80 },
            ].map((skill) => (
              <div key={skill.name} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Featured Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with real-time inventory management and payment integration.',
                tags: ['React', 'Node.js', 'Stripe'],
              },
              {
                title: 'Task Management App',
                description: 'Collaborative project management tool with real-time updates and team collaboration features.',
                tags: ['TypeScript', 'WebSocket', 'PostgreSQL'],
              },
              {
                title: 'Portfolio Generator',
                description: 'SaaS platform that helps developers create beautiful portfolios in minutes.',
                tags: ['Next.js', 'Tailwind', 'Supabase'],
              },
            ].map((project) => (
              <div key={project.title} className="bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 group">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <Briefcase size={48} className="text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Let's Work Together</span>
          </h3>
          <p className="text-slate-300 mb-12 text-lg">
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
          </p>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50">
            <form className="space-y-6">
              <div className="text-left">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
