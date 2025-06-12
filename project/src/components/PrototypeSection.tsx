import React from 'react';
import { Smartphone, Monitor, Tablet, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ContentViewer from './ContentViewer';

const PrototypeSection: React.FC = () => {
  const prototypeFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for smartphones to ensure accessibility in communities with limited technology access',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Users,
      title: 'Community-Centered',
      description: 'Built around community needs and feedback from real users',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: Monitor,
      title: 'Dashboard Analytics',
      description: 'Comprehensive monitoring and reporting for community leaders',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: Tablet,
      title: 'Responsive Interface',
      description: 'Works seamlessly across all device types and screen sizes',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
  ];

  const documents = [
    {
      title: 'Low-Fidelity Prototype Walkthrough',
      description: 'Complete video demonstration of the prototype features and user flows',
      url: 'https://drive.google.com/file/d/your-low-fi-prototype-link/view',
      type: 'video' as const,
    },
    {
      title: 'User Feedback Summary',
      description: 'Comprehensive analysis of user testing feedback and iterations',
      url: 'https://drive.google.com/file/d/your-user-feedback-link/view',
      type: 'pdf' as const,
    },
  ];

  return (
    <section id="prototype" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            Prototype Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to interactive prototype - see how I transformed ideas into a tangible, 
            testable solution through iterative design and user feedback.
          </p>
        </motion.div>

        {/* Prototype Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold font-display text-gray-800 mb-4">
              Interactive Community Platform
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The low-fidelity prototype demonstrates core functionality of the community platform, 
              showcasing user flows, key features, and the overall user experience design.
            </p>
          </div>

          {/* Prototype Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '12', label: 'Screen Designs', color: 'text-blue-600' },
              { number: '5', label: 'User Flows', color: 'text-green-600' },
              { number: '8', label: 'Core Features', color: 'text-purple-600' },
              { number: '15', label: 'User Tests', color: 'text-orange-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className={`text-3xl font-bold font-display ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prototype Features */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-gray-800 mb-10 text-center"
          >
            Prototype Highlights
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prototypeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
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

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-8 text-center">
            Design & Development Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h4 className="text-xl font-bold font-display text-gray-800 mb-3">Wireframing</h4>
              <p className="text-gray-600">
                Started with low-fidelity wireframes to map out user flows and core functionality 
                without getting distracted by visual design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h4 className="text-xl font-bold font-display text-gray-800 mb-3">User Testing</h4>
              <p className="text-gray-600">
                Conducted multiple rounds of user testing with community members to validate 
                concepts and gather feedback for improvements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h4 className="text-xl font-bold font-display text-gray-800 mb-3">Iteration</h4>
              <p className="text-gray-600">
                Refined the prototype based on user feedback, focusing on usability and 
                addressing real user needs and pain points.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-8 text-center">
            Key Insights from Prototyping
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold font-display text-gray-800 mb-4">What Worked Well</h4>
              <ul className="space-y-3">
                {[
                  'Simple, intuitive navigation that users could understand immediately',
                  'Visual feedback and progress indicators that kept users engaged',
                  'Community-focused features that resonated with target users',
                  'Mobile-first approach that matched real-world usage patterns'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold font-display text-gray-800 mb-4">Areas for Improvement</h4>
              <ul className="space-y-3">
                {[
                  'Need for offline functionality in areas with poor connectivity',
                  'More localization options for different languages and cultures',
                  'Enhanced onboarding process for first-time users',
                  'Better integration with existing community communication channels'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
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
            Prototype Documentation
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

export default PrototypeSection;