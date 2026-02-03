import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow Solutions',
      content: 'WavyyAi transformed our operations with their intelligent automation. The implementation was seamless, and the results exceeded our expectations. Our team is now 40% more productive.',
      avatar: 'SC',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Innovation, Retail Dynamics',
      content: 'The AI analytics platform WavyyAi built for us has been a game-changer. We finally understand our customers at a deeper level, and it shows in our retention numbers.',
      avatar: 'MJ',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Founder, Creative Pulse Agency',
      content: "Working with WavyyAi felt like having a strategic partner, not just a vendor. They took time to understand our vision and delivered an AI solution that truly amplifies our creative process.",
      avatar: 'ER',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'David Park',
      role: 'Operations Director, LogiStream',
      content: 'The predictive optimization system has saved us hundreds of thousands in operational costs. WavyyAi made AI accessible and practical for our entire team.',
      avatar: 'DP',
      color: 'from-violet-500 to-indigo-500',
    },
  ];

  return (
    <section id="testimonials" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            Voices of Trust
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Hear from the leaders who've transformed their businesses with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-teal-500/20 group-hover:text-teal-500/40 transition-colors duration-300" />

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
