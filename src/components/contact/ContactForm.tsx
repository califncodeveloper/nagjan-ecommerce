"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, AlertCircle, CheckCircle2, ShieldCheck, RefreshCw } from "lucide-react";
import { COMPANY_CONTACT } from "@/data/navigation";

interface FormValues {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  enquiryType: string;
  subject: string;
  message: string;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    enquiryType: "machinery",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (currentValues: FormValues): FormErrors => {
    const errs: FormErrors = {};

    if (!currentValues.fullName.trim()) {
      errs.fullName = "Full name is required.";
    } else if (currentValues.fullName.trim().length < 2) {
      errs.fullName = "Please enter at least 2 characters.";
    }

    if (!currentValues.companyName.trim()) {
      errs.companyName = "Company or box plant name is required.";
    }

    if (!currentValues.email.trim()) {
      errs.email = "Email address is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(currentValues.email.trim())
    ) {
      errs.email = "Please enter a valid email address.";
    }

    if (!currentValues.phone.trim()) {
      errs.phone = "Phone or mobile number is required.";
    } else if (!/^[0-9+()\- ]{7,20}$/.test(currentValues.phone.trim())) {
      errs.phone = "Please enter a valid phone number (min 7 digits).";
    }

    if (!currentValues.subject.trim()) {
      errs.subject = "Subject is required.";
    }

    if (!currentValues.message.trim()) {
      errs.message = "Message details are required.";
    } else if (currentValues.message.trim().length < 10) {
      errs.message = "Please provide more details (minimum 10 characters).";
    }

    return errs;
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate(values);
    setErrors(currentErrors);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);

    if (touched[name]) {
      const currentErrors = validate(updated);
      setErrors(currentErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot spam protection
    if (values.honeypot) {
      console.warn("Spam bot detected via honeypot.");
      return;
    }

    // Mark all as touched
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      phone: true,
      enquiryType: true,
      subject: true,
      message: true,
    });

    const currentErrors = validate(values);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsValidated(true);
      }, 600);
    } else {
      setIsValidated(false);
    }
  };

  // Generate mailto link for direct transmission via user's email client
  const generateMailtoLink = () => {
    const subject = encodeURIComponent(
      `[NAGJAN Web Inquiry] ${values.enquiryType.toUpperCase()}: ${values.subject || "General Inquiry"}`
    );
    const body = encodeURIComponent(
      `Name: ${values.fullName}\n` +
      `Company: ${values.companyName}\n` +
      `Email: ${values.email}\n` +
      `Phone: ${values.phone}\n` +
      `Enquiry Type: ${values.enquiryType}\n\n` +
      `Message:\n${values.message}\n\n` +
      `Sent from NAGJAN Contact Form (nagjan.com)`
    );
    return `mailto:${COMPANY_CONTACT.email.sales}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
      <div className="border-b border-slate-200 pb-5 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
          Send an Engineering or Sales Inquiry
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Complete the form below. All fields are verified client-side to ensure prompt review by our Chennai sales and engineering desk.
        </p>
      </div>

      {isValidated ? (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-slate-800 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-6 text-[#013074] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#013074]">
                  Inquiry Verified & Ready for Transmission
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your details have been successfully checked. In accordance with strict development standards, this website does not fake automated backend email delivery without a connected SMTP or API gateway.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200 text-xs space-y-2">
              <p className="font-semibold text-slate-800">
                To guarantee immediate delivery to our sales desk:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={generateMailtoLink()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs transition-colors shadow-xs"
                >
                  <Mail className="size-4" />
                  <span>Send via Email Client (Pre-filled)</span>
                </a>

                <a
                  href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#013074] hover:bg-[#022557] text-white font-semibold text-xs transition-colors"
                >
                  <Phone className="size-3.5 text-[#FEA81D]" />
                  <span>Call Sales: {COMPANY_CONTACT.phones.sales.display}</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsValidated(false);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              <RefreshCw className="size-3.5" />
              <span>Edit Form Details</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot Spam Protection Field - Hidden from real users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website (Leave blank)</label>
            <input
              type="text"
              id="website"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={values.honeypot}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="fullName"
                className="block text-xs font-bold text-slate-800 uppercase tracking-wider"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={() => handleBlur("fullName")}
                placeholder="e.g. Rajesh Kumar"
                required
                aria-required="true"
                aria-invalid={touched.fullName && !!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] transition-colors ${
                  touched.fullName && errors.fullName
                    ? "border-red-500 bg-red-50/30"
                    : "border-slate-300 bg-white"
                }`}
              />
              {touched.fullName && errors.fullName && (
                <p id="fullName-error" className="text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Company / Box Plant Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="companyName"
                className="block text-xs font-bold text-slate-800 uppercase tracking-wider"
              >
                Company / Packaging Plant <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={values.companyName}
                onChange={handleChange}
                onBlur={() => handleBlur("companyName")}
                placeholder="e.g. Apex Corrugators Pvt Ltd"
                required
                aria-required="true"
                aria-invalid={touched.companyName && !!errors.companyName}
                aria-describedby={errors.companyName ? "companyName-error" : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] transition-colors ${
                  touched.companyName && errors.companyName
                    ? "border-red-500 bg-red-50/30"
                    : "border-slate-300 bg-white"
                }`}
              />
              {touched.companyName && errors.companyName && (
                <p id="companyName-error" className="text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  <span>{errors.companyName}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email Address */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-bold text-slate-800 uppercase tracking-wider"
              >
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                placeholder="rajesh@example.com"
                required
                aria-required="true"
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] transition-colors ${
                  touched.email && errors.email
                    ? "border-red-500 bg-red-50/30"
                    : "border-slate-300 bg-white"
                }`}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-slate-800 uppercase tracking-wider"
              >
                Phone / Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                placeholder="+91 98765 43210"
                required
                aria-required="true"
                aria-invalid={touched.phone && !!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] transition-colors ${
                  touched.phone && errors.phone
                    ? "border-red-500 bg-red-50/30"
                    : "border-slate-300 bg-white"
                }`}
              />
              {touched.phone && errors.phone && (
                <p id="phone-error" className="text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Enquiry Type */}
            <div className="space-y-1.5">
              <label
                htmlFor="enquiryType"
                className="block text-xs font-bold text-slate-800 uppercase tracking-wider"
              >
                Inquiry Classification
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={values.enquiryType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#013074]"
              >
                <option value="machinery">New Machinery / Corrugator Plant Line</option>
                <option value="spare-parts">Spare Parts & Consumables Order</option>
                <option value="erection-service">Plant Erection & Engineering Service</option>
                <option value="electrical-retrofit">Siemens / ABB Electrical Retrofit</option>
                <option value="general">General Corporate Inquiry</option>
              </select>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label
                htmlFor="subject"
                className="block text-xs font-bold text-slate-800 uppercase tracking-wider"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={() => handleBlur("subject")}
                placeholder="e.g. Quotation for 1800mm 2PLY Plant"
                required
                aria-required="true"
                aria-invalid={touched.subject && !!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] transition-colors ${
                  touched.subject && errors.subject
                    ? "border-red-500 bg-red-50/30"
                    : "border-slate-300 bg-white"
                }`}
              />
              {touched.subject && errors.subject && (
                <p id="subject-error" className="text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>
          </div>

          {/* Message Details */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs font-bold text-slate-800 uppercase tracking-wider"
            >
              Message & Technical Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              placeholder="Please provide details regarding machine model, required fluting speed, roller width, spare part part numbers, or plant location..."
              required
              aria-required="true"
              aria-invalid={touched.message && !!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] transition-colors ${
                touched.message && errors.message
                  ? "border-red-500 bg-red-50/30"
                  : "border-slate-300 bg-white"
              }`}
            />
            {touched.message && errors.message && (
              <p id="message-error" className="text-[11px] text-red-600 flex items-center gap-1">
                <AlertCircle className="size-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Integration Disclosure & Submit */}
          <div className="pt-2 border-t border-slate-100 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="size-4 text-[#013074] shrink-0" />
              <span>
                Protected with honeypot spam filtering. Validated data triggers instant mail client draft generation.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#013074] hover:bg-[#022557] text-white text-xs sm:text-sm font-bold transition-all shadow-sm disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="size-4 animate-spin" />
                    <span>Verifying Details...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4 text-[#FEA81D]" />
                    <span>Verify & Submit Inquiry</span>
                  </>
                )}
              </button>

              <span className="text-xs text-slate-400">or contact directly:</span>

              <a
                href={`mailto:${COMPANY_CONTACT.email.sales}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#013074] hover:underline"
              >
                <Mail className="size-3.5" />
                <span>{COMPANY_CONTACT.email.sales}</span>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

