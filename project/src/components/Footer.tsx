import React from 'react';
import { Heart, Globe, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Journey', href: '#journey' },
    { label: 'Solution', href: '#solution' },
    { label: 'Prototype', href: '#prototype' },
    { label: 'Reflection', href: '#reflection' },
    { label: 'Conclusion', href: '#conclusion' },
    { label: 'Resources', href: '#resources' },
  ];

  const socialLinks = [
    { 
      href: 'https://www.linkedin.com/in/younggem/', 
      icon: Linkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    { 
      href: 'https://github.com/Rapheal-Kwabena', 
      icon: Github, 
      label: 'GitHub',
      color: 'hover:text-gray-800'
    },
    { 
      href: 'mailto:raphealasomanikwabena@gmail.com', 
      icon: Mail, 
      label: 'Email',
      color: 'hover:text-red-600'
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding border-b border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display">Rapheal Kwabena Asomani Gadoh</h3>
                    <p className="text-gray-400 text-sm">Entrepreneur & Innovator</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Passionate about using technology to solve environmental and community challenges. 
                  This website showcases my entrepreneurial journey through the ENT 110 course, 
                  from problem identification to prototype development and beyond.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Entrepreneur', 'Tech Innovator', 'Community Builder', 'Problem Solver'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold font-display mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold font-display mb-6">Connect With Me</h4>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <a 
                      href="mailto:raphealasomanikwabena@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      raphealasomanikwabena@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300 text-sm">Ghana, West Africa</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-full bg-gray-800 text-gray-400 transition-colors duration-300 ${link.color}`}
                        title={link.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>© 2024 Rapheal Kwabena Asomani Gadoh</span>
              <span>•</span>
              <span>ENT 110 Portfolio</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for community impact</span>
            </div>
          </motion.div>
          
          {/* Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-800"
          >
            <div className="text-center">
              <p className="text-gray-500 text-xs mb-4">
                This website serves as a comprehensive portfolio for my ENT 110 entrepreneurial journey.
                All materials and documentation represent original work completed as part of the course requirements.
              </p>
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                <span>Built with React & Tailwind CSS</span>
                <span>•</span>
                <span>Hosted with modern web technologies</span>
                <span>•</span>
                <a 
                  href="https://github.com/Rapheal-Kwabena" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-gray-300 transition-colors duration-200"
                >
                  <span>View source code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
