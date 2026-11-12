"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Boxes,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  RefreshCw,
  Send,
  Layers,
  Wrench,
  ChevronDown,
  Info,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/navigation";
import { MachineryItem } from "@/types/machinery";
import { SparePart } from "@/types/spare-parts";

export interface RequestQuoteEngineProps {
  initialProductSlug?: string;
  initialPartSlug?: string;
  initialSku?: string;
  matchedProduct: MachineryItem | null;
  matchedPart: SparePart | null;
  allMachinery: MachineryItem[];
  allSpareParts: SparePart[];
}

type EnquiryCategory = "machinery" | "spare-parts" | "service" | "general";

interface QuoteFormValues {
  enquiryType: EnquiryCategory;
  // Contact
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  plantLocation: string;

  // Machinery fields
  selectedMachineId: string;
  customMachineName: string;
  workingWidth: string;
  productionSpeedTarget: string;
  steamBoilerStatus: string;
  timeline: string;

  // Spare parts fields
  selectedPartId: string;
  customPartSku: string;
  machineBrandForPart: string;
  partDimensions: string;
  partQuantity: string;

  // General / Service
  serviceType: string;
  message: string;

  // Honeypot anti-spam
  honeypot: string;
}

interface QuoteFormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  plantLocation?: string;
  selectedMachineId?: string;
  selectedPartId?: string;
  message?: string;
}

export function RequestQuoteEngine({
  initialProductSlug,
  initialPartSlug,
  initialSku,
  matchedProduct,
  matchedPart,
  allMachinery,
  allSpareParts,
}: RequestQuoteEngineProps) {
  // Determine initial category
  const initialType: EnquiryCategory = matchedPart
    ? "spare-parts"
    : matchedProduct
    ? "machinery"
    : "machinery";

  const [values, setValues] = useState<QuoteFormValues>({
    enquiryType: initialType,
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    plantLocation: "",

    selectedMachineId: matchedProduct ? matchedProduct.slug : "",
    customMachineName: "",
    workingWidth: "1800mm",
    productionSpeedTarget: "100 m/min",
    steamBoilerStatus: "operational",
    timeline: "1-3_months",

    selectedPartId: matchedPart ? matchedPart.slug : "",
    customPartSku: matchedPart ? matchedPart.sku : initialSku || "",
    machineBrandForPart: "",
    partDimensions: "",
    partQuantity: "1",

    serviceType: "erection",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const activeMachine = allMachinery.find(
    (m) => m.slug === values.selectedMachineId || m.id === values.selectedMachineId
  );

  const activePart = allSpareParts.find(
    (p) => p.slug === values.selectedPartId || p.sku === values.selectedPartId
  );

  const validate = (curValues: QuoteFormValues): QuoteFormErrors => {
    const errs: QuoteFormErrors = {};

    if (!curValues.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }

    if (!curValues.companyName.trim()) {
      errs.companyName = "Company or packaging plant name is required.";
    }

    if (!curValues.email.trim()) {
      errs.email = "Business email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(curValues.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!curValues.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[0-9+()\- ]{7,20}$/.test(curValues.phone.trim())) {
      errs.phone = "Please enter a valid phone number (min 7 digits).";
    }

    if (!curValues.plantLocation.trim()) {
      errs.plantLocation = "Plant city and state are required.";
    }

    if (curValues.enquiryType === "machinery" && !curValues.selectedMachineId && !curValues.customMachineName) {
      errs.selectedMachineId = "Please select a machinery line or specify your requirement.";
    }

    if (curValues.enquiryType === "spare-parts" && !curValues.selectedPartId && !curValues.customPartSku) {
      errs.selectedPartId = "Please select a spare part or enter part SKU.";
    }

    if (!curValues.message.trim()) {
      errs.message = "Please describe your project scope or specifications.";
    } else if (curValues.message.trim().length < 10) {
      errs.message = "Please provide at least 10 characters of technical context.";
    }

    return errs;
  };

  const handleBlur = (field: keyof QuoteFormValues) => {
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

  const handleTypeChange = (newType: EnquiryCategory) => {
    setValues((prev) => ({
      ...prev,
      enquiryType: newType,
    }));
    setIsValidated(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (values.honeypot) {
      console.warn("Spam honeypot triggered.");
      return;
    }

    // Mark all as touched
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      phone: true,
      plantLocation: true,
      selectedMachineId: true,
      selectedPartId: true,
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

  // Generate mailto link with structured RFQ details
  const generateMailtoRfq = () => {
    let subjectLine = "";
    let specDetails = "";

    if (values.enquiryType === "machinery") {
      const machineName = activeMachine ? `${activeMachine.model} - ${activeMachine.name}` : values.customMachineName || "Custom Line";
      subjectLine = `[RFQ - Machinery] ${machineName} - ${values.companyName}`;
      specDetails =
        `Machine Selected: ${machineName}\n` +
        `Working Width: ${values.workingWidth}\n` +
        `Target Speed: ${values.productionSpeedTarget}\n` +
        `Boiler Status: ${values.steamBoilerStatus}\n` +
        `Timeline: ${values.timeline}\n`;
    } else if (values.enquiryType === "spare-parts") {
      const partName = activePart ? `${activePart.sku} - ${activePart.name}` : values.customPartSku || "Custom Part";
      subjectLine = `[RFQ - Spare Part] ${partName} - ${values.companyName}`;
      specDetails =
        `Spare Part: ${partName}\n` +
        `Quantity Required: ${values.partQuantity}\n` +
        `Machine Brand Installed On: ${values.machineBrandForPart || "Not specified"}\n` +
        `Shaft / Sizing Dimensions: ${values.partDimensions || "Standard OEM"}\n`;
    } else {
      subjectLine = `[Inquiry - ${values.serviceType.toUpperCase()}] ${values.companyName}`;
      specDetails = `Service Type: ${values.serviceType}\n`;
    }

    const bodyText =
      `OFFICIAL RFQ INQUIRY - NAGJAN PACKAGING MACHINERY\n` +
      `====================================================\n\n` +
      `CLIENT INFORMATION:\n` +
      `Name: ${values.fullName}\n` +
      `Company: ${values.companyName}\n` +
      `Email: ${values.email}\n` +
      `Phone: ${values.phone}\n` +
      `Plant City & State: ${values.plantLocation}\n\n` +
      `TECHNICAL SPECIFICATIONS & REQUIREMENTS:\n` +
      specDetails +
      `\nMESSAGE / SCOPE OF WORK:\n` +
      `${values.message}\n\n` +
      `Dispatched via NAGJAN Request Quote Engine (nagjan.com)\n`;

    return `mailto:${COMPANY_CONTACT.email.sales}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyText)}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Category Selection Tabs */}
      <div className="bg-slate-100 border-b border-slate-200 p-2 sm:p-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => handleTypeChange("machinery")}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            values.enquiryType === "machinery"
              ? "bg-[#013074] text-white shadow-xs"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
          }`}
        >
          <Layers className="size-4 text-[#FEA81D]" />
          <span>Machinery Quotation</span>
        </button>

        <button
          type="button"
          onClick={() => handleTypeChange("spare-parts")}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            values.enquiryType === "spare-parts"
              ? "bg-[#013074] text-white shadow-xs"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
          }`}
        >
          <Boxes className="size-4 text-[#FEA81D]" />
          <span>Spare Parts Enquiry</span>
        </button>

        <button
          type="button"
          onClick={() => handleTypeChange("service")}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            values.enquiryType === "service"
              ? "bg-[#013074] text-white shadow-xs"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
          }`}
        >
          <Wrench className="size-4 text-[#FEA81D]" />
          <span>Engineering Service / PMC</span>
        </button>
      </div>

      {/* Prefill Info Banner */}
      {values.enquiryType === "machinery" && activeMachine && (
        <div className="bg-blue-50/80 border-b border-blue-200 px-6 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[#013074] shrink-0" />
            <span className="text-slate-800">
              Selected Machinery: <strong>{activeMachine.name}</strong> ({activeMachine.model})
            </span>
          </div>
          <Link
            href={`/products/${activeMachine.slug}`}
            className="text-[#013074] font-semibold hover:underline shrink-0"
          >
            Review Specs
          </Link>
        </div>
      )}

      {values.enquiryType === "spare-parts" && activePart && (
        <div className="bg-amber-50/80 border-b border-amber-200 px-6 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-amber-700 shrink-0" />
            <span className="text-slate-800">
              Selected Spare Part: <strong>{activePart.name}</strong> (SKU: {activePart.sku})
            </span>
          </div>
          <Link
            href={`/spare-parts/${activePart.slug}`}
            className="text-amber-900 font-semibold hover:underline shrink-0"
          >
            Review Part
          </Link>
        </div>
      )}

      {/* Form Content */}
      <div className="p-6 sm:p-10">
        {isValidated ? (
          /* Submission Prepared / Verified State */
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-6 text-[#013074] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#013074]">
                    Quotation Request Verified & Ready for Transmission
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your RFQ data has been validated. In compliance with strict engineering integrity standards, this portal does not display a false automated delivery confirmation without a connected production mail server.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200 text-xs space-y-3">
                <p className="font-semibold text-slate-900 text-sm">
                  Choose your preferred transmission channel:
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={generateMailtoRfq()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs transition-colors shadow-xs"
                  >
                    <Mail className="size-4" />
                    <span>Generate & Open Pre-Filled RFQ Email</span>
                  </a>

                  {values.enquiryType === "spare-parts" ? (
                    <a
                      href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#013074] hover:bg-[#022557] text-white font-bold text-xs transition-colors"
                    >
                      <Phone className="size-3.5 text-[#FEA81D]" />
                      <span>Call Spares Hotline: {COMPANY_CONTACT.phones.service.display}</span>
                    </a>
                  ) : (
                    <a
                      href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#013074] hover:bg-[#022557] text-white font-bold text-xs transition-colors"
                    >
                      <Phone className="size-3.5 text-[#FEA81D]" />
                      <span>Call Sales Desk: {COMPANY_CONTACT.phones.sales.display}</span>
                    </a>
                  )}
                </div>

                <p className="text-[11px] text-slate-500">
                  Clicking the button above opens your desktop or mobile email app with all plant, model, and dimension details neatly formatted for immediate processing by Mount Kailash Printpack Machines.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsValidated(false)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                <RefreshCw className="size-3.5" />
                <span>Modify Specifications or Form Details</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Form */
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Honeypot Spam Protection */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
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

            {/* Section 1: Customer & Company Details */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-2">
                1. Customer & Plant Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="fullName" className="text-xs font-semibold text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={() => handleBlur("fullName")}
                    placeholder="e.g. Anand Sharma"
                    required
                    aria-required="true"
                    aria-invalid={touched.fullName && !!errors.fullName}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] ${
                      touched.fullName && errors.fullName
                        ? "border-red-500 bg-red-50/30"
                        : "border-slate-300"
                    }`}
                  />
                  {touched.fullName && errors.fullName && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="companyName" className="text-xs font-semibold text-slate-700">
                    Company / Box Factory Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={values.companyName}
                    onChange={handleChange}
                    onBlur={() => handleBlur("companyName")}
                    placeholder="e.g. Premier Packaging Industries"
                    required
                    aria-required="true"
                    aria-invalid={touched.companyName && !!errors.companyName}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] ${
                      touched.companyName && errors.companyName
                        ? "border-red-500 bg-red-50/30"
                        : "border-slate-300"
                    }`}
                  />
                  {touched.companyName && errors.companyName && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      <span>{errors.companyName}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    placeholder="anand@company.com"
                    required
                    aria-required="true"
                    aria-invalid={touched.email && !!errors.email}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] ${
                      touched.email && errors.email
                        ? "border-red-500 bg-red-50/30"
                        : "border-slate-300"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                    Phone / Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    placeholder="+91 98400 12345"
                    required
                    aria-required="true"
                    aria-invalid={touched.phone && !!errors.phone}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] ${
                      touched.phone && errors.phone
                        ? "border-red-500 bg-red-50/30"
                        : "border-slate-300"
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="plantLocation" className="text-xs font-semibold text-slate-700">
                    Plant City & State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="plantLocation"
                    name="plantLocation"
                    value={values.plantLocation}
                    onChange={handleChange}
                    onBlur={() => handleBlur("plantLocation")}
                    placeholder="e.g. Coimbatore, Tamil Nadu"
                    required
                    aria-required="true"
                    aria-invalid={touched.plantLocation && !!errors.plantLocation}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] ${
                      touched.plantLocation && errors.plantLocation
                        ? "border-red-500 bg-red-50/30"
                        : "border-slate-300"
                    }`}
                  />
                  {touched.plantLocation && errors.plantLocation && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      <span>{errors.plantLocation}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2A: Machinery Quotation Specific Fields */}
            {values.enquiryType === "machinery" && (
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-2">
                  2. Machinery Technical Parameters
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="selectedMachineId" className="text-xs font-semibold text-slate-700">
                      Target Machinery Model <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="selectedMachineId"
                      name="selectedMachineId"
                      value={values.selectedMachineId}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#013074]"
                    >
                      <option value="">-- Select from 18 Catalogued Models --</option>
                      {allMachinery.map((m) => (
                        <option key={m.id} value={m.slug}>
                          {m.model} — {m.name}
                        </option>
                      ))}
                      <option value="custom">Other / Custom Plant Configuration</option>
                    </select>
                    {touched.selectedMachineId && errors.selectedMachineId && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="size-3" />
                        <span>{errors.selectedMachineId}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="workingWidth" className="text-xs font-semibold text-slate-700">
                      Required Working Width
                    </label>
                    <select
                      id="workingWidth"
                      name="workingWidth"
                      value={values.workingWidth}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#013074]"
                    >
                      <option value="1400mm">1400 mm (55 Inch)</option>
                      <option value="1600mm">1600 mm (63 Inch)</option>
                      <option value="1800mm">1800 mm (71 Inch - Standard 2PLY)</option>
                      <option value="2000mm">2000 mm (78 Inch)</option>
                      <option value="2200mm">2200 mm (86 Inch)</option>
                      <option value="custom">Custom Width</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="productionSpeedTarget" className="text-xs font-semibold text-slate-700">
                      Design Speed Target
                    </label>
                    <select
                      id="productionSpeedTarget"
                      name="productionSpeedTarget"
                      value={values.productionSpeedTarget}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#013074]"
                    >
                      <option value="60-80 m/min">60 – 80 m/min</option>
                      <option value="100 m/min">100 m/min (WJ-100 Standard)</option>
                      <option value="120-150 m/min">120 – 150 m/min (High Speed)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="steamBoilerStatus" className="text-xs font-semibold text-slate-700">
                      Steam Boiler Availability
                    </label>
                    <select
                      id="steamBoilerStatus"
                      name="steamBoilerStatus"
                      value={values.steamBoilerStatus}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#013074]"
                    >
                      <option value="operational">Boiler Operational (0.8 - 1.2 MPa)</option>
                      <option value="planned">Boiler Planned with New Plant</option>
                      <option value="electric_heating">Electric / Gas Heating Preferred</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="timeline" className="text-xs font-semibold text-slate-700">
                      Procurement Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={values.timeline}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#013074]"
                    >
                      <option value="immediate">Immediate (Ready Order)</option>
                      <option value="1-3_months">1 – 3 Months</option>
                      <option value="3-6_months">3 – 6 Months</option>
                      <option value="budgetary">Budgetary / Feasibility Study</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2B: Spare Parts Specific Fields */}
            {values.enquiryType === "spare-parts" && (
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-2">
                  2. Spare Part Specifications & Sizing
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="selectedPartId" className="text-xs font-semibold text-slate-700">
                      Catalogued Spare Part SKU
                    </label>
                    <select
                      id="selectedPartId"
                      name="selectedPartId"
                      value={values.selectedPartId}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#013074]"
                    >
                      <option value="">-- Select from 25 Verified SKUs --</option>
                      {allSpareParts.map((p) => (
                        <option key={p.id} value={p.slug}>
                          {p.sku} — {p.name}
                        </option>
                      ))}
                      <option value="custom">Other / Custom Dimensional Part</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="partQuantity" className="text-xs font-semibold text-slate-700">
                      Quantity Required
                    </label>
                    <input
                      type="number"
                      id="partQuantity"
                      name="partQuantity"
                      min={1}
                      value={values.partQuantity}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="machineBrandForPart" className="text-xs font-semibold text-slate-700">
                      Existing Machine Make / Brand
                    </label>
                    <input
                      type="text"
                      id="machineBrandForPart"
                      name="machineBrandForPart"
                      value={values.machineBrandForPart}
                      onChange={handleChange}
                      placeholder="e.g. NAGJAN WJ-100 / Huayu / Standard Indian"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="partDimensions" className="text-xs font-semibold text-slate-700">
                      Dimensions (OD / ID / Thickness / Flute)
                    </label>
                    <input
                      type="text"
                      id="partDimensions"
                      name="partDimensions"
                      value={values.partDimensions}
                      onChange={handleChange}
                      placeholder="e.g. OD:100mm, ID:20mm, 1.2mm thick"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Section 2C: Service Specific Fields */}
            {values.enquiryType === "service" && (
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-2">
                  2. Service Engagement Classification
                </h3>

                <div className="space-y-1">
                  <label htmlFor="serviceType" className="text-xs font-semibold text-slate-700">
                    Required Service
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={values.serviceType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#013074]"
                  >
                    <option value="erection">On-Site Machine Erection & Commissioning</option>
                    <option value="foundation">Foundation Drawings & Civil Installation Blueprints</option>
                    <option value="electrical_retrofit">Siemens / ABB Electrical Drive Retrofit</option>
                    <option value="pmc">Preventive Maintenance Contract (PMC)</option>
                    <option value="inspection">Machine Health Inspection & Troubleshooting</option>
                  </select>
                </div>
              </div>
            )}

            {/* Section 3: Technical Notes / Scope */}
            <div className="space-y-1.5 pt-2">
              <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                Detailed Scope of Inquiry & Notes <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                placeholder="Specify your cardboard fluting target, reel stand capacity, flute profile (Narrow / Broad / E-flute), or any urgent spares requirements..."
                required
                aria-required="true"
                aria-invalid={touched.message && !!errors.message}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] ${
                  touched.message && errors.message
                    ? "border-red-500 bg-red-50/30"
                    : "border-slate-300"
                }`}
              />
              {touched.message && errors.message && (
                <p className="text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit & Integrity Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="size-4 text-[#013074] shrink-0" />
                <span>Zero fake delivery promises. RFQ verified for sales desk review.</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="size-4 animate-spin" />
                      <span>Validating Details...</span>
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      <span>Validate & Submit RFQ</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

