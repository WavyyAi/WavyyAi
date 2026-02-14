import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔥 REAL SUBMIT FUNCTION
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    try {
      await emailjs.send(
        "service_lyh0uxq",
        "template_rwsnptp",
        templateParams,
        "7mwVH44PGougAuhTs",
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Email failed:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
        >
          <div className="space-y-6">
            {/* NAME */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-white"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-white"
              />
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-slate-400" />
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-white resize-none"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              type="submit"
              disabled={loading || isSubmitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all
              ${
                isSubmitted
                  ? "bg-green-500"
                  : "bg-gradient-to-r from-teal-500 to-cyan-500"
              }`}
            >
              {loading ? (
                "Sending..."
              ) : isSubmitted ? (
                "Message Sent!"
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
