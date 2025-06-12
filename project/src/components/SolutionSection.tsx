import React from 'react';
import { Lightbulb, Target, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ContentViewer from './ContentViewer';

const SolutionSection: React.FC = () => {
  const solutionFeatures = [
    {
      icon: Target,
      title: 'Problem-Focused',
      description: 'Directly addresses root causes identified through our analysis',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Zap,
      title: 'Technology-Driven',
      description: 'Leverages modern technology for scalable impact',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: CheckCircle,
      title: 'User-Centered',
      description: 'Designed with deep empathy for end-user needs',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'Novel approach to persistent challenges',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
  ];

  const documents = [
    {
      title: 'Solution Statement',
      description: 'Comprehensive solution proposal addressing identified root causes',
      url: 'https://drive.google.com/file/d/your-solution-statement-link/view',
      type: 'pdf' as const,
    },
    {
      title: 'Solution Mind Map',
      description: 'Visual representation of solution components and their relationships',
      url: 'https://drive.google.com/file/d/your-mind-map-link/view',
      type: 'image' as const,
    },
  ];

  return (
    <section id="solution" className="section-padding bg-white">
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
            The Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            After thorough analysis and understanding of the root causes, I developed a comprehensive 
            solution that addresses the core issues while being practical and scalable.
          </p>
        </motion.div>

        {/* Solution Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold font-display text-gray-800 mb-6">
              Sustainable Community Technology Platform
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              My solution centers around creating a comprehensive technology platform that connects 
              communities with resources, education, and tools needed to address environmental challenges 
              while fostering economic opportunities. The platform integrates mobile technology, 
              community engagement, and sustainable practices to create lasting positive impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Community', 'Technology', 'Sustainability', 'Impact'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-2xl font-bold gradient-text">{index + 1}</div>
                  <div className="text-sm font-medium text-gray-700">{item}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Solution Features */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-gray-800 mb-10 text-center"
          >
            Key Solution Principles
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100"
                >
                  <div className={`w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h4 className="text-xl font-bold font-display text-gray-800 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Solution Components */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-8 text-center">
            Solution Components
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold font-display text-gray-800">Core Features</h4>
              <ul className="space-y-4">
                {[
                  'Mobile-first platform for accessibility',
                  'Community resource mapping and sharing',
                  'Environmental monitoring tools',
                  'Education and training modules',
                  'Economic opportunity marketplace',
                  'Progress tracking and analytics'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 gradient-bg rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold font-display text-gray-800">Expected Impact</h4>
              <ul className="space-y-4">
                {[
                  'Increased community engagement in environmental initiatives',
                  'Improved access to sustainable technologies',
                  'Enhanced economic opportunities for local communities',
                  'Better environmental monitoring and awareness',
                  'Strengthened community resilience and collaboration',
                  'Measurable environmental improvements'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Documents Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-10 text-center">
            Solution Documentation
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ContentViewer {...doc} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;