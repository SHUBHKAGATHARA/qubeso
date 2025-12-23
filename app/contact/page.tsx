"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Clock,
  MessageSquare
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field: string) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field: string) => {
    setFocused({ ...focused, [field]: false });
  };

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-background-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card border border-border text-accent-primary text-sm font-medium mb-6 shadow-soft"
            >
              <Sparkles className="w-4 h-4" />
              Get In Touch
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-primary">
              Let's Start a{" "}
              <span className="text-accent-primary">
                Conversation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
              Have a project in mind? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-background-secondary/50 to-background-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-text-primary mb-6">Contact Information</h2>
                <p className="text-text-muted mb-8">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </motion.div>

              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "kagatharashubham9@gmail.com",
                  subContent: "support@qubesotech.com",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 8799380134",
                  subContent: "Mon - Fri: 9:00 AM - 6:00 PM",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "Dhrol",
                  subContent: "Gujarat, India",
                  color: "from-orange-500 to-amber-500"
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  content: "Mon - Fri: 9:00 AM - 6:00 PM",
                  subContent: "Weekend: By Appointment",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group premium-card p-6 border-2 border-border hover:border-accent-primary/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-text-muted font-medium">{item.content}</p>
                      <p className="text-gray-500 text-sm">{item.subContent}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-brand-secondary rounded-3xl p-8 lg:p-12 shadow-xl"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-text-primary mb-2">Send Us a Message</h2>
                  <div className="w-24 h-1 bg-brand-primary rounded-full" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focused.name || formData.name ? -24 : 12,
                          scale: focused.name || formData.name ? 0.85 : 1,
                          color: focused.name ? "#6172f3" : "#6b7280"
                        }}
                        className="absolute left-4 pointer-events-none font-medium origin-left transition-colors"
                      >
                        Your Name
                      </motion.label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus("name")}
                        onBlur={() => handleBlur("name")}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent-primary focus:outline-none transition-colors bg-white"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focused.email || formData.email ? -24 : 12,
                          scale: focused.email || formData.email ? 0.85 : 1,
                          color: focused.email ? "#6172f3" : "#6b7280"
                        }}
                        className="absolute left-4 pointer-events-none font-medium origin-left transition-colors"
                      >
                        Email Address
                      </motion.label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent-primary focus:outline-none transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focused.phone || formData.phone ? -24 : 12,
                          scale: focused.phone || formData.phone ? 0.85 : 1,
                          color: focused.phone ? "#6172f3" : "#6b7280"
                        }}
                        className="absolute left-4 pointer-events-none font-medium origin-left transition-colors"
                      >
                        Phone Number
                      </motion.label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus("phone")}
                        onBlur={() => handleBlur("phone")}
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent-primary focus:outline-none transition-colors bg-white"
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                      <motion.label
                        animate={{
                          y: focused.subject || formData.subject ? -24 : 12,
                          scale: focused.subject || formData.subject ? 0.85 : 1,
                          color: focused.subject ? "#6172f3" : "#6b7280"
                        }}
                        className="absolute left-4 pointer-events-none font-medium origin-left transition-colors"
                      >
                        Subject
                      </motion.label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus("subject")}
                        onBlur={() => handleBlur("subject")}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent-primary focus:outline-none transition-colors bg-white"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <motion.label
                      animate={{
                        y: focused.message || formData.message ? -24 : 12,
                        scale: focused.message || formData.message ? 0.85 : 1,
                        color: focused.message ? "#6172f3" : "#6b7280"
                      }}
                      className="absolute left-4 pointer-events-none font-medium origin-left transition-colors"
                    >
                      Your Message
                    </motion.label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={() => handleBlur("message")}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent-primary focus:outline-none transition-colors resize-none bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
                    className={`w-full px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${isSubmitted
                        ? "bg-green-500 text-white"
                        : "bg-accent-primary text-white hover:shadow-glow"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-6 h-6" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-brand-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-4">Find Us Here</h2>
            <p className="text-xl text-text-muted">Visit our office for a face-to-face consultation</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gradient-to-br from-brand-100 to-purple-100 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-accent-primary mx-auto mb-4" />
              <p className="text-xl font-semibold text-text-primary">Interactive Map</p>
              <p className="text-text-muted">123 Tech Street, Innovation District</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

