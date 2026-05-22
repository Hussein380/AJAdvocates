"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    practiceArea: "corporate-commercial-law",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message details";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message details must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        practiceArea: "corporate-commercial-law",
        subject: "",
        message: "",
      });
    } catch (err) {
      setSubmitError("Failed to submit form. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 text-center flex flex-col items-center gap-4 rounded-sm animate-fade-in">
        <CheckCircle2 className="w-12 h-12 text-emerald-600" />
        <h3 className="text-lg font-serif font-bold text-primary">
          Consultation Request Sent
        </h3>
        <p className="text-sm text-brand-gray leading-relaxed max-w-sm">
          Thank you for reaching out to OJ Advocates LLP. A legal professional will review your consultation request and contact you within 24 business hours.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-2 text-sm font-semibold text-accent hover:text-accent-hover tracking-wider uppercase underline underline-offset-4"
        >
          Submit another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      {submitError && (
        <div className="bg-red-50 border border-red-200 p-4 text-sm text-red-600 rounded-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 bg-gray-50 border ${
              errors.name ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-accent"
            } rounded-sm outline-none text-sm font-sans text-brand-gray transition-colors`}
          />
          {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 bg-gray-50 border ${
              errors.email ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-accent"
            } rounded-sm outline-none text-sm font-sans text-brand-gray transition-colors`}
          />
          {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>}
        </div>
      </div>

      {/* Row 2: Phone & Practice Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+254 700 000 000"
            className={`w-full px-4 py-3 bg-gray-50 border ${
              errors.phone ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-accent"
            } rounded-sm outline-none text-sm font-sans text-brand-gray transition-colors`}
          />
          {errors.phone && <span className="text-[10px] text-red-500 font-semibold">{errors.phone}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="practiceArea" className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Relevant Legal Practice
          </label>
          <select
            id="practiceArea"
            name="practiceArea"
            value={formData.practiceArea}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-accent rounded-sm outline-none text-sm font-sans text-brand-gray transition-colors cursor-pointer"
          >
            <option value="corporate-commercial-law">Corporate & Commercial Law</option>
            <option value="litigation-dispute-resolution">Litigation & Dispute Resolution</option>
            <option value="intellectual-property">Intellectual Property</option>
            <option value="employment-labour-law">Employment & Labor Law</option>
            <option value="real-estate-property-law">Real Estate & Property Law</option>
            <option value="family-law">Family Law</option>
            <option value="general-consultation">Other / General Consultation</option>
          </select>
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-wider text-primary">
          Subject / Title <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Summary of legal inquiry"
          className={`w-full px-4 py-3 bg-gray-50 border ${
            errors.subject ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-accent"
          } rounded-sm outline-none text-sm font-sans text-brand-gray transition-colors`}
        />
        {errors.subject && <span className="text-[10px] text-red-500 font-semibold">{errors.subject}</span>}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-primary">
          Case Brief / Message Details <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe the legal query or consultation objectives..."
          className={`w-full px-4 py-3 bg-gray-50 border ${
            errors.message ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-accent"
          } rounded-sm outline-none text-sm font-sans text-brand-gray transition-colors resize-none`}
        />
        {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message}</span>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-accent disabled:bg-gray-400 text-white text-sm font-bold uppercase tracking-widest py-4 rounded-sm transition-all duration-300 shadow-md cursor-pointer disabled:cursor-not-allowed mt-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-white" />
            Transmitting Request...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit Consultation Request
          </>
        )}
      </button>
    </form>
  );
}
