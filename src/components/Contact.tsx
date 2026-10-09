import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject line.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedStatus(null);
      return;
    }

    setErrors({});

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Jeeva,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;

    setSubmittedStatus(
      `Opening your default email client with your prefilled message to ${personalInfo.contact.email}. If it did not open automatically, you can also write directly to ${personalInfo.contact.email}.`
    );
  };

  /* Shared input classes */
  const baseInput =
    'w-full px-4 py-2.5 rounded-xl bg-midnight border text-sm text-offWhite placeholder:text-mutedGray focus:outline-none focus:ring-2 focus:ring-royalBlue transition-colors';

  return (
    <section id="contact" className="py-20 bg-deepNavy border-t border-borderNavy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royalBlue/10 border border-royalBlue/30 text-skyBlue text-xs font-semibold tracking-wide uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &amp; Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-offWhite tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-royalBlue mx-auto rounded-full mt-3 mb-4" />
          <p className="text-coolGray text-base sm:text-lg leading-relaxed">
            Interested in discussing an entry-level IT opportunity or technical project? Feel free to reach out.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-cardNavy rounded-2xl p-6 sm:p-7 border border-borderNavy shadow-card space-y-5">
              <h3 className="text-lg font-bold text-offWhite">
                Contact Information
              </h3>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-deepNavy border border-transparent hover:border-borderNavy transition-all group"
              >
                <div className="p-3 rounded-xl bg-royalBlue/10 text-royalBlue border border-royalBlue/20 group-hover:bg-royalBlue group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-mutedGray uppercase tracking-wider block">
                    Email Address
                  </span>
                  <span className="text-sm font-bold text-offWhite group-hover:text-skyBlue transition-colors break-all">
                    {personalInfo.contact.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.contact.rawPhone}`}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-deepNavy border border-transparent hover:border-borderNavy transition-all group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-mutedGray uppercase tracking-wider block">
                    Phone Number
                  </span>
                  <span className="text-sm font-bold text-offWhite group-hover:text-emerald-400 transition-colors">
                    {personalInfo.contact.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3 rounded-xl">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-mutedGray uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-sm font-bold text-offWhite">
                    {personalInfo.contact.location}
                  </span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-borderNavy">
                <span className="text-xs font-semibold text-mutedGray uppercase tracking-wider block mb-3">
                  Online Profiles
                </span>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-midnight border border-borderNavy hover:border-skyBlue/50 text-coolGray hover:text-offWhite text-sm font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-skyBlue" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-mutedGray group-hover:text-skyBlue transition-colors" />
                  </a>

                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-midnight border border-borderNavy hover:border-offWhite/30 text-coolGray hover:text-offWhite text-sm font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-offWhite" />
                      <span>GitHub Portfolio</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-mutedGray group-hover:text-offWhite transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-cardNavy rounded-2xl p-6 sm:p-8 border border-borderNavy shadow-card">
              <div className="flex items-center gap-2 mb-2 text-offWhite font-bold text-lg">
                <MessageSquare className="w-5 h-5 text-skyBlue" />
                <span>Send a Direct Message</span>
              </div>
              <p className="text-xs text-mutedGray mb-6">
                Fill in the details below. Submitting will validate your fields and open your default email application with the pre-filled inquiry.
              </p>

              {submittedStatus && (
                <div className="mb-6 p-4 rounded-xl bg-royalBlue/10 border border-royalBlue/30 text-xs sm:text-sm text-skyBlue flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-skyBlue shrink-0 mt-0.5" />
                  <span>{submittedStatus}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-coolGray uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Recruiter / HR Name"
                      className={`${baseInput} ${errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-borderNavy'}`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-coolGray uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. recruiter@company.com"
                      className={`${baseInput} ${errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-borderNavy'}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-coolGray uppercase tracking-wider mb-1.5">
                    Subject Line <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Opportunity: Entry-Level Software Engineer"
                    className={`${baseInput} ${errors.subject ? 'border-rose-500 ring-1 ring-rose-500' : 'border-borderNavy'}`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-coolGray uppercase tracking-wider mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Write your message or inquiry here..."
                    className={`${baseInput} resize-none ${errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-borderNavy'}`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-royalBlue hover:bg-royalBlue-hover rounded-xl shadow-glow-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-skyBlue focus:ring-offset-2 focus:ring-offset-cardNavy"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

              {/* Transparency Note */}
              <div className="mt-6 pt-4 border-t border-borderNavy text-[11px] text-mutedGray flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-skyBlue shrink-0" />
                <span>Client-validated form triggers direct mail delivery via standard mailto protocol to ensure delivery without unconfigured third-party server dependencies.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
