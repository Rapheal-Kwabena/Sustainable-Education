import React from 'react';
import { Heart, Brain, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import ContentViewer from './ContentViewer';

const ReflectionSection: React.FC = () => {
  const reflectionAreas = [
    {
      icon: Heart,
      title: 'Empathy & Understanding',
      description: 'Learning to truly listen and understand user needs beyond surface-level observations',
      insights: [
        'Real problems are often different from perceived problems',
        'User stories reveal emotional and cultural context',
        'Empathy mapping uncovers unspoken needs and motivations',
      ],
      color: 'text-red-600',
      bg: 'bg-red-100',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'Systems Thinking',
      description: 'Understanding complex relationships between stakeholders, problems, and solutions',
      insights: [
        'Every problem exists within a complex ecosystem',
        'Root cause analysis reveals deeper systemic issues',
        'Solutions must consider unintended consequences',
      ],
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'The importance of involving communities in both problem definition and solution design',
      insights: [
        'Communities are experts in their own challenges',
        'Co-creation leads to more sustainable solutions',
        'Cultural context shapes how solutions are received',
      ],
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Iterative Design',
      description: 'Embracing failure as learning and the power of continuous improvement',
      insights: [
        'First ideas are rarely the best ideas',
        'User feedback is invaluable for refinement',
        'Prototyping reveals assumptions and gaps',
      ],
      color: 'text-orange-600',
      bg: 'bg-orange-100',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  const documents = [
    {
      title: 'User Testing Notes',
      description: 'Detailed documentation of user testing sessions, feedback, and iterations',
      url: 'https://drive.google.com/file/d/your-testing-notes-link/view',
      type: 'pdf' as const,
    },
  ];

  return (
    <section id="reflection" className="section-padding bg-white">
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
            Reflection & Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The most valuable part of this journey wasn't just creating a solution, but the insights 
            and growth that came from deep reflection on the process, challenges, and learnings.
          </p>
        </motion.div>

        {/* Personal Reflection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold font-display text-gray-800 mb-4">
              Personal Growth & Transformation
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This entrepreneurial journey has fundamentally changed how I approach problems, 
              understand communities, and think about sustainable solutions.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold font-display text-gray-800 mb-4">Before This Journey</h4>
                <ul className="space-y-2">
                  <li>• Focused primarily on technical solutions</li>
                  <li>• Made assumptions about user needs</li>
                  <li>• Approached problems individually</li>
                  <li>• Limited stakeholder consideration</li>
                  <li>• Solution-first thinking</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold font-display text-gray-800 mb-4">After This Journey</h4>
                <ul className="space-y-2">
                  <li>• Balances human and technical needs</li>
                  <li>• Validates assumptions through research</li>
                  <li>• Sees problems as systemic challenges</li>
                  <li>• Maps comprehensive stakeholder ecosystems</li>
                  <li>• Embraces problem-first methodology</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Learning Areas */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-gray-800 mb-10 text-center"
          >
            Four Pillars of Learning
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reflectionAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${area.gradient} p-6 text-white`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold font-display">{area.title}</h4>
                        <p className="text-white/90 text-sm mt-1">{area.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Key Insights:</h5>
                    <ul className="space-y-2">
                      {area.insights.map((insight, insightIndex) => (
                        <li key={insightIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm leading-relaxed">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-8 text-center">
            Challenges & How I Overcame Them
          </h3>
          
          <div className="space-y-8">
            {[
              {
                challenge: 'Language and Cultural Barriers',
                solution: 'Partnered with local community leaders and used visual communication methods',
                learning: 'Cultural sensitivity is crucial for meaningful engagement',
              },
              {
                challenge: 'Limited Access to Technology',
                solution: 'Designed mobile-first, low-bandwidth solutions with offline capabilities',
                learning: 'Constraints can drive more innovative and inclusive design',
              },
              {
                challenge: 'Complex Stakeholder Relationships',
                solution: 'Created detailed stakeholder maps and held individual conversations',
                learning: 'Every stakeholder has valid concerns that need addressing',
              },
              {
                challenge: 'Balancing Idealism with Practicality',
                solution: 'Focused on MVP approach with clear success metrics',
                learning: 'Perfect is the enemy of good - start small and iterate',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">Challenge</h4>
                    <p className="text-gray-700 text-sm">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600 mb-2">Solution</h4>
                    <p className="text-gray-700 text-sm">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-600 mb-2">Learning</h4>
                    <p className="text-gray-700 text-sm">{item.learning}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-8 text-center">
            Applying These Lessons Forward
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold font-display text-gray-800 mb-4">In Future Projects</h4>
              <ul className="space-y-3">
                {[
                  'Always start with deep user research and empathy building',
                  'Map stakeholders comprehensively before designing solutions',
                  'Prototype early and test frequently with real users',
                  'Design for the most constrained use cases first',
                  'Build community partnerships from the beginning'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold font-display text-gray-800 mb-4">In My Career</h4>
              <ul className="space-y-3">
                {[
                  'Advocate for user-centered design in all technology projects',
                  'Bring systems thinking to complex organizational challenges',
                  'Champion inclusive design that considers diverse perspectives',
                  'Practice continuous learning and iteration mindset',
                  'Build bridges between communities and technology solutions'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
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
            Reflection Documentation
          </h3>
          <div className="flex justify-center">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="max-w-md"
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

export default ReflectionSection;