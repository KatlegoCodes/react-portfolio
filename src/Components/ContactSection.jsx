import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Get in touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {" "}
            Ready to bring your ideas to life? Let's discuss how we can work
            together to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Whether you have a project in mind, need design consultation, or
                just want to say hello, I'd love to hear from you. I'm always
                open to discussing new opportunities and creative partnerships.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <motion.div
            className="flex items-center space-x-4 group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <a
                href="mailto:katlegcodes@gmail.com"
                className="text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                katlegcodes@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
              <Phone className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <a
                href="tel:+27620062323"
                className="text-lg text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                +27 620 062 323
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
              <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Location
              </p>
              <p className="text-lg text-gray-800 dark:text-white">
                Johannesburg, South Africa
              </p>
            </div>
          </motion.div>
        </div>
        {/* Social links */}

        <div>
          <h4>Follow Me</h4>
        </div>
      </div>
    </section>
  );
};
