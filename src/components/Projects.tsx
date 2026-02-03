import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Brain, MessageSquare, BarChart3 } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      icon: Brain,
      title: 'Neural Customer Insights',
      description: 'Built an AI-powered analytics platform that helps a retail chain understand customer behavior patterns, resulting in a 34% increase in customer retention.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Support Bot',
      description: 'Deployed a conversational AI assistant for a SaaS company, reducing support ticket volume by 60% while maintaining 95% customer satisfaction.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Creative Content Engine',
      description: 'Developed an AI content generation system for a marketing agency, streamlining their workflow and enabling 3x faster campaign delivery.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: BarChart3,
      title: 'Predictive Operations Suite',
      description: 'Created a machine learning model for supply chain optimization, helping a logistics company reduce costs by 28% and improve delivery times.',
      color: 'from-violet-500 to-indigo-500',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Transforming businesses with intelligent solutions that deliver real results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
