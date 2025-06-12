import React from 'react';
import { ArrowDown, Sparkles, Globe, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToJourney = () => {
    const element = document.getElementById('journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border-4 border-white/30 border-t-white flex items-center justify-center mr-4"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold font-display">
                Rapheal Kwabena
                <br />
                <span className="text-4xl md:text-6xl text-white/90">Asomani Gadoh</span>
              </h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Passionate young innovator from Ghana, focused on solving environmental 
              and community problems through innovative technology solutions
            </motion.p>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 card-hover">
              <Globe className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
              <p className="text-sm text-white/80">Solving problems that matter to communities worldwide</p>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <Code className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Tech Innovation</h3>
              <p className="text-sm text-white/80">Leveraging technology for sustainable solutions</p>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <Sparkles className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Creative Design</h3>
              <p className="text-sm text-white/80">User-centered approach to problem solving</p>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mb-12"
          >
            <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 font-display">My Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To identify, analyze, and solve real-world problems through entrepreneurial innovation, 
                creating sustainable solutions that empower communities and protect our environment. 
                This website showcases my journey through the ENT 110 course, documenting every step 
                from problem identification to prototype development.
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToJourney}
            className="group bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>Explore My Journey</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
