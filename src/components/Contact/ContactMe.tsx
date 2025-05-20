"use client";

import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import createMessage from "@/utils/actions/createMessage";
import { toast } from "sonner";

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
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error("Email subject and body are required");
      throw new Error(err.message);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Contact Info */}
        <div className="space-y-6 text-gray-800 dark:text-white mt-10">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-cyan-600 dark:text-cyan-400">
            Contact Information
          </h2>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-500" size={22} />
            <p className="text-lg">Khulna, Bangladesh</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-teal-500" size={22} />
            <p className="text-lg">+8801999647103</p>
          </div>

          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-green-500" size={22} />
            <p className="text-lg">+8801999647103</p>
          </div>

          <div className="flex items-center gap-4">
            <FaTelegramPlane className="text-blue-400" size={22} />
            <p className="text-lg">+8801999647103</p>
          </div>

          <div className="flex gap-6 pt-4">
            <a
              href="https://www.linkedin.com/in/rakeshbiswas0199/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-blue-600 transition"
            >
              <FaLinkedinIn size={26} />
            </a>
            <a
              href="https://github.com/Rakesh01999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              <FaGithub size={26} />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sm:p-10 space-y-6 mt-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-cyan-600 dark:text-white">
            Send a Message
          </h2>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Write your message..."
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
              required
            ></textarea>
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
