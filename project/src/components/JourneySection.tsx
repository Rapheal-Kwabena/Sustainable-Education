import React from 'react';
import { MapPin, Users, Search, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import ContentViewer from './ContentViewer';

const JourneySection: React.FC = () => {
  const journeySteps = [
    {
      icon: Search,
      title: 'Problem Discovery',
      description: 'Identified environmental and community challenges through research and observation',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Empathy Mapping',
      description: 'Deep dive into understanding user needs, pain points, and motivations',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Stakeholder Analysis',
      description: 'Mapped all key stakeholders and their relationships to the problem',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Root Cause Analysis',
      description: 'Applied 5 Whys and Fishbone diagram to identify core issues',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const documents = [
    {
      title: 'Root Cause Analysis (Fishbone Diagram)',
      description: 'Comprehensive analysis using 5 Whys and Fishbone methodology to identify core problem causes',
      url: 'https://drive.google.com/file/d/your-fishbone-link/view',
      type: 'pdf' as const,
    },
    {
      title: 'Empathy Map',
      description: 'Visual representation of user thoughts, feelings, actions, and pain points',
      url: 'https://drive.google.com/file/d/your-empathy-map-link/view',
      type: 'pdf' as const,
    },
    {
      title: 'Stakeholder Analysis',
      description: 'Detailed mapping of all stakeholders and their influence on the problem space',
      url: 'https://drive.google.com/file/d/your-stakeholder-analysis-link/view',
      type: 'pdf' as const,
    },
  ];

  return (
    <section id="journey" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            My Entrepreneurial Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how I identified, analyzed, and approached solving real-world problems through 
            systematic research, empathy mapping, and strategic analysis.
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-gray-800 mb-10 text-center"
          >
            The Discovery Process
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${step.color} p-8 text-white text-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="w-8 h-1 bg-white/50 mx-auto mb-4"></div>
                    <span className="text-2xl font-bold">Step {index + 1}</span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold font-display text-gray-800 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-800 mb-6 text-center">
            The Story Behind the Journey
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              As a young innovator from Ghana, I've witnessed firsthand the environmental and social challenges 
              that affect communities across Africa and beyond. My entrepreneurial journey began with a simple 
              but powerful realization: <strong>technology can be a force for positive change</strong> when applied 
              thoughtfully to real-world problems.
            </p>
            <p className="mb-6">
              Through the ENT 110 course, I learned to approach problems systematically, starting with deep 
              empathy for the people affected. I conducted interviews, observed behaviors, and listened to 
              stories that helped me understand not just what problems exist, but why they persist and who 
              they impact most.
            </p>
            <p className="mb-6">
              The empathy mapping process revealed insights I never expected. Stakeholder analysis showed me 
              the complex web of relationships involved in any meaningful change. And the root cause analysis 
              helped me dig deeper than surface-level symptoms to find the core issues that needed addressing.
            </p>
            <p>
              This journey taught me that <strong>sustainable solutions require understanding</strong> - not just 
              of the problem, but of the people, systems, and relationships involved in both the problem and 
              the solution.
            </p>
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
            Research Documents & Analysis
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

export default JourneySection;