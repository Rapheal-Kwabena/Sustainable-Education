import React from 'react';
import { FileText, BarChart3, Video, Calendar, DollarSign, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ContentViewer from './ContentViewer';

const ResourcesSection: React.FC = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive project documentation and analysis',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Business Planning',
      description: 'Financial models and business strategy documents',
      color: 'text-green-600',
      bg: 'bg-green-100',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Video,
      title: 'Media Content',
      description: 'Video demonstrations and presentations',
      color: 'text-red-600',
      bg: 'bg-red-100',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Calendar,
      title: 'Project Management',
      description: 'Timeline tracking and project organization',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  const resources = [
    {
      title: 'Lean Canvas',
      description: 'Complete business model canvas outlining key partnerships, value propositions, and revenue streams',
      url: 'https://drive.google.com/file/d/your-lean-canvas-link/view',
      type: 'pdf' as const,
      category: 'Business Planning',
    },
    {
      title: 'Project Budget & Financial Model',
      description: 'Detailed budget breakdown and financial projections for the first 3 years',
      url: 'https://drive.google.com/file/d/your-budget-link/view',
      type: 'pdf' as const,
      category: 'Business Planning',
    },
    {
      title: 'Final MVP Demo Video',
      description: 'Comprehensive walkthrough of the final minimum viable product and its features',
      url: 'https://drive.google.com/file/d/your-final-mvp-video-link/view',
      type: 'video' as const,
      category: 'Media Content',
    },
    {
      title: 'Project Management Board',
      description: 'Trello/Asana board showing project timeline, tasks, and milestones',
      url: 'https://drive.google.com/file/d/your-project-board-screenshot-link/view',
      type: 'image' as const,
      category: 'Project Management',
    },
    {
      title: 'Complete Project Portfolio',
      description: 'All project documents, research, and deliverables in one comprehensive folder',
      url: 'https://drive.google.com/drive/folders/your-complete-portfolio-folder',
      type: 'link' as const,
      category: 'Documentation',
    },
    {
      title: 'Research Bibliography',
      description: 'Comprehensive list of all sources, interviews, and research materials used',
      url: 'https://drive.google.com/file/d/your-bibliography-link/view',
      type: 'pdf' as const,
      category: 'Documentation',
    },
  ];

  const additionalLinks = [
    {
      title: 'GitHub Repository',
      description: 'Source code for prototype and related technical assets',
      url: 'https://github.com/Rapheal-Kwabena/community-platform-prototype',
      icon: '💻',
    },
    {
      title: 'Project Website',
      description: 'Live demonstration site for the community platform',
      url: 'https://community-platform-demo.netlify.app',
      icon: '🌐',
    },
    {
      title: 'Community Survey Results',
      description: 'Raw data and analysis from community needs assessment',
      url: 'https://forms.google.com/results/community-survey',
      icon: '📊',
    },
    {
      title: 'Partner Contact List',
      description: 'Directory of community partners and stakeholders',
      url: 'https://drive.google.com/file/d/partner-contacts/view',
      icon: '📞',
    },
  ];

  return (
    <section id="resources" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
            Additional Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access all project materials, business documents, and supporting resources 
            that demonstrate the complete entrepreneurial journey from concept to implementation.
          </p>
        </motion.div>

        {/* Resource Categories Overview */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-gray-800 mb-10 text-center"
          >
            Resource Categories
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white text-center`}>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold font-display">{category.title}</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Main Resources Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-10 text-center">
            Core Project Resources
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ContentViewer {...resource} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-10 text-center">
            Quick Links & References
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 flex items-center space-x-4 group"
              >
                <div className="text-3xl">{link.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold font-display text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-200">
                    {link.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{link.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Resource Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-6">
            Complete Project Archive
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            This comprehensive collection represents months of research, design, development, 
            and iteration. Every document tells part of the story of how a simple idea evolved 
            into a viable solution for real community challenges.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { number: '25+', label: 'Documents', icon: '📄' },
              { number: '50+', label: 'Hours Research', icon: '🔍' },
              { number: '15', label: 'User Interviews', icon: '👥' },
              { number: '3', label: 'Iterations', icon: '🔄' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.a
            href="https://drive.google.com/drive/folders/your-master-folder"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            <span>Access Complete Archive</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;