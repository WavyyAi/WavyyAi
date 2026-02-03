import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, TrendingUp, Workflow } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline repetitive tasks with intelligent automation that learns and adapts to your business processes.',
      color: 'text-teal-400',
    },
    {
      icon: Target,
      title: 'Custom Strategy',
      description: 'Tailored AI strategies designed specifically for your industry, challenges, and growth objectives.',
      color: 'text-cyan-400',
    },
    {
      icon: TrendingUp,
      title: 'Intelligent Analytics',
      description: 'Transform raw data into actionable insights with AI-powered analytics that reveal hidden patterns.',
      color: 'text-indigo-400',
    },
    {
      icon: Workflow,
      title: 'Workflow Optimization',
      description: 'Reimagine your workflows with AI-enhanced processes that boost productivity and reduce friction.',
      color: 'text-violet-400',
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to elevate your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900/50 flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-300">
                      <Icon className={`w-8 h-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-teal-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
