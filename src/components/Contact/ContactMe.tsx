"use client";

import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebook,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import createMessage from "@/utils/actions/createMessage";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactMe = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("description") as string,
    };

    try {
      const res = await createMessage(data);

      if (res?.success) {
        toast.success("Successfully sent Message");
        (e.target as HTMLFormElement).reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error("Email subject and body are required");
      throw new Error(err.message);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Location",
      value: "Khulna, Bangladesh",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <FaPhoneAlt size={20} />,
      label: "Phone",
      value: "+8801999647103",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
      value: "+8801999647103",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaTelegramPlane size={20} />,
      label: "Telegram",
      value: "+8801999647103",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/RakeshBiswasFB/",
      icon: <FaFacebook size={20} />,
      label: "Facebook",
    },
    {
      href: "https://www.linkedin.com/in/rakeshbiswas0199/",
      icon: <FaLinkedinIn size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Rakesh01999",
      icon: <FaGithub size={20} />,
      label: "GitHub",
    },
    {
      href: "mailto:rbiswas01999@gmail.com",
      icon: <HiMail size={20} />,
      label: "Email",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            Get In Touch
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          />
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 space-y-5">
              <h3 className="text-xl font-bold gradient-text">
                Contact Information
              </h3>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-[var(--text-color)] font-medium">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[var(--text-color)] mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 sm:p-8 space-y-5"
          >
            <h3 className="text-xl font-bold gradient-text text-center">
              Send a Message
            </h3>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5"
              >
                Message
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaPaperPlane size={16} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
