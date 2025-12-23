"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Our Services", path: "/services" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Blog", path: "/blog" },
    ],
    Support: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQs", path: "/contact" },
      { name: "Privacy Policy", path: "/" },
      { name: "Terms of Service", path: "/" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "Github" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background-secondary to-white text-text-primary relative border-t border-border">
      {/* Premium gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-30" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-premium">
                  <span className="text-white font-bold text-xl">Q</span>
                </div>
                <span className="text-xl font-bold text-text-heading">QUBESO TECH</span>
              </div>
              <p className="text-text-muted leading-relaxed">
                Transforming ideas into premium digital experiences with cutting-edge technology and expert craftsmanship.
              </p>
            </motion.div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-background-secondary hover:bg-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-border hover:border-brand-primary"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-text-heading">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-text-muted hover:text-brand-primary transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-text-heading">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-text-muted group-hover:text-brand-primary mt-1 flex-shrink-0 transition-colors" />
                <a href="mailto:kagatharashubham9@gmail.com" className="text-text-muted hover:text-brand-primary transition-colors">
                  kagatharashubham9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-text-muted group-hover:text-brand-primary mt-1 flex-shrink-0 transition-colors" />
                <a href="tel:+918799380134" className="text-text-muted hover:text-brand-primary transition-colors">
                  +91 8799380134
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-text-muted group-hover:text-brand-primary mt-1 flex-shrink-0 transition-colors" />
                <span className="text-text-muted group-hover:text-brand-primary transition-colors">
                  Dhrol, Gujarat, India
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} QUBESO TECH. All rights reserved.
            </p>
            <p className="text-text-muted text-sm">
              Built with ❤️ using Next.js & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
