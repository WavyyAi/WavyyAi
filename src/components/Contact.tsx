import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            Reach Out
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Let's start a conversation about how AI can transform your business
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-slate-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={w-full ${
                isSubmitted
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                  : 'bg-gradient-to-r from-teal-500 to-cyan-500'
              } text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center gap-2}
            >
              {isSubmitted ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;