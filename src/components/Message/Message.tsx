"use client";

import { useEffect, useState } from "react";
import Messagefetch from "@/utils/actions/Messagefetch";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

interface MessageData {
  email: string;
  name: string;
  message: string;
}

const Message = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const data = await Messagefetch();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
      setLoading(false);
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            Messages
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {/* Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                    <FaUser size={14} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-color)]">
                    {msg.name}
                  </h3>
                </div>

                {/* Message */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                  {msg.message}
                </p>

                {/* Email */}
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <FaEnvelope size={12} className="text-cyan-500" />
                  <span>{msg.email}</span>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <FaCommentDots size={40} className="text-[var(--text-secondary)] mx-auto mb-4" />
              <p className="text-[var(--text-secondary)]">No messages available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
