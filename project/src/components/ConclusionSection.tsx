import React from 'react';
import { Target, TrendingUp, Handshake, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import ContentViewer from './ContentViewer';

const ConclusionSection: React.FC = () => {
  const achievements = [
    {
      icon: Target,
      title: 'Problem-Solution Fit',
      description: 'Identified real community needs and developed targeted solutions',
      metric: '95% user validation rate',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: TrendingUp,
      title: 'Growth Potential',
      description: 'Designed scalable platform with clear expansion pathways',
      metric: '3 pilot communities ready',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: Handshake,
      title: 'Community Partnerships',
      description: 'Built strong relationships with local leaders and organizations',
      metric: '5 committed partners',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: Rocket,
      title: 'Implementation Ready',
      description: 'Complete prototype with user feedback and iteration cycles',
      metric: 'Ready for MVP launch',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
  ];

  const futureGoals = [
    {
      phase: 'Phase 1: MVP Launch',
      timeline: '3-6 months',
      goals: [
        'Launch pilot program in 3 communities',
        'Onboard 100+ initial users',
        'Validate core feature set',
        'Establish feedback loops'
      ],
    },
    {
      phase: 'Phase 2: Scale & Refine',
      timeline: '6-12 months',
      goals: [
        'Expand to 10 communities',
        'Add advanced analytics features',
        'Implement user-requested features',
        'Build revenue streams'
      ],
    },
    {
      phase: 'Phase 3: Regional Expansion',
      timeline: '12-24 months',
      goals: [
        'Scale across Ghana and neighboring countries',
        'Develop partnerships with NGOs and government',
        'Launch training and certification programs',
        'Achieve financial sustainability'
      ],
    },
  ];

  const documents = [
    {
      title: 'Final Pitch Deck',
      description: 'Comprehensive presentation of the complete entrepreneurial journey and solution',
      url: 'https://drive.google.com/file/d/your-final-pitch-link/view',
      type: 'pdf' as const,
    },
  ];

  return (
    <section id="conclusion" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            Conclusion & Next Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From problem identification to prototype validation, this journey has equipped me with 
            the tools, insights, and connections needed to create meaningful change.
          </p>
        </motion.div>

        {/* Journey Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold font-display text-gray-800 mb-4">
              What I've Accomplished
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through systematic research, empathetic design, and iterative development, 
              I've created a foundation for sustainable community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${achievement.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h4 className="text-lg font-bold font-display text-gray-800 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className={`text-sm font-semibold ${achievement.color} bg-white rounded-full px-3 py-1 inline-block`}>
                    {achievement.metric}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Future Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-10 text-center">
            Future Roadmap
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {futureGoals.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${
                  index === 0 ? 'from-blue-500 to-cyan-500' :
                  index === 1 ? 'from-purple-500 to-pink-500' :
                  'from-green-500 to-emerald-500'
                } p-6 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold font-display">{phase.phase}</h4>
                    <span className="text-2xl font-bold opacity-50">{index + 1}</span>
                  </div>
                  <p className="text-white/90">{phase.timeline}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {phase.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white text-center mb-16"
        >
          <h3 className="text-3xl font-bold font-display mb-6">
            Ready to Make an Impact Together?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm looking for partners, investors, and collaborators who share the vision of 
            using technology to empower communities and solve environmental challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-bold mb-2">Investors</h4>
              <p className="text-white/80 text-sm">
                Join us in scaling sustainable community solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-bold mb-2">Partners</h4>
              <p className="text-white/80 text-sm">
                Collaborate on implementation and expansion
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-bold mb-2">Communities</h4>
              <p className="text-white/80 text-sm">
                Be part of the pilot program and shape the future
              </p>
            </div>
          </div>
          
          <motion.a
            href="mailto:raphealasomanikwabena@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Let's Connect</span>
            <Rocket className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Final Thoughts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-6 text-center">
            Final Reflections
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-center text-xl mb-8 text-gray-600">
              "The greatest lesson from this journey is that meaningful innovation starts with 
              genuine empathy and ends with sustainable impact."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold font-display text-gray-800 mb-4">What Success Looks Like</h4>
                <ul className="space-y-2">
                  <li>• Communities have the tools they need to thrive</li>
                  <li>• Environmental challenges are being addressed systematically</li>
                  <li>• Local economies are strengthened through sustainable practices</li>
                  <li>• Knowledge and resources are shared across communities</li>
                  <li>• The platform continues to evolve based on user needs</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold font-display text-gray-800 mb-4">My Commitment</h4>
                <ul className="space-y-2">
                  <li>• Continue learning from and with communities</li>
                  <li>• Prioritize sustainability over short-term gains</li>
                  <li>• Maintain transparency in all partnerships</li>
                  <li>• Share knowledge and methods with other innovators</li>
                  <li>• Stay true to the values that started this journey</li>
                </ul>
              </div>
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
            Final Presentation
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

export default ConclusionSection;