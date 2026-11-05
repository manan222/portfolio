"use client";

import { useActionState, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions"; // Adjust path to your actions file if needed

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [success, setSuccess] = useState(false);

  // Next.js Server Action Hook
  const [state, formAction, isPending] = useActionState(sendEmail, {
    success: false,
    error: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle successful submission feedback
  useEffect(() => {
    if (state.success) {
      setSuccess(true);
      setForm(INITIAL_FORM);
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [state.success]);

  return (
    <motion.form
      action={formAction}
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h2 className="mb-8 text-3xl font-bold text-white">Send Message</h2>

      {/* Name */}
      <div className="mb-6">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />
      </div>

      {/* Subject */}
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Project Discussion"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />
      </div>

      {/* Message */}
      <div className="mb-8">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />
      </div>

      {/* Success Message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400"
        >
          ✅ Thank you! Your message has been sent successfully.
        </motion.div>
      )}

      {/* Error Message */}
      {state.error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400"
        >
          ❌ {state.error}
        </motion.div>
      )}

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? (
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span>Sending...</span>
          </div>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </motion.form>
  );
}