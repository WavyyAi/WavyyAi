import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-gradient-radial from-teal-900/20 via-transparent to-transparent"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to WavyyAi
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            WavyyAi bridges the gap between human creativity and artificial intelligence.
            We design bespoke AI solutions that feel natural, not robotic, helping your
            business flow more efficiently. Our mission is to make advanced technology
            accessible, calming, and incredibly powerful for teams of all sizes.
          </motion.p>

          <motion.button
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-teal-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Work
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
        >
          <ArrowDown className="w-8 h-8 text-teal-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
