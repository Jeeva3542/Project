import React, { useState, useEffect } from 'react';
import type { VerifiedCertificate } from '../data/portfolioData';
import {
  X,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Award,
  Calendar,
  Building,
  CheckCircle2,
  UserCheck,
  ShieldCheck,
} from 'lucide-react';

interface CertificateModalProps {
  certificate: VerifiedCertificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [zoom, setZoom] = useState<number>(100);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      setZoom(100);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 20, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 20, 60));
  const handleZoomReset = () => setZoom(100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-midnight/92 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[94vh] bg-cardNavy rounded-2xl shadow-2xl border border-borderNavy flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-deepNavy border-b border-borderNavy shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-royalBlue/20 text-skyBlue border border-royalBlue/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-skyBlue" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-royalBlue/20 text-skyBlue border border-royalBlue/30">
                  {certificate.badge}
                </span>
                <span className="text-[11px] text-mutedGray hidden sm:inline">•</span>
                <span className="text-[11px] text-mutedGray hidden sm:inline">{certificate.issuer}</span>
              </div>
              <h2
                id="certificate-modal-title"
                className="text-sm sm:text-base font-bold text-offWhite truncate max-w-xl"
              >
                {certificate.title}
              </h2>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center bg-cardNavy border border-borderNavy rounded-lg px-1 py-0.5 text-xs">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= 60}
                className="p-1 rounded text-coolGray hover:text-offWhite disabled:opacity-40 transition-colors"
                aria-label="Zoom out"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-1.5 text-[11px] font-mono text-mutedGray min-w-[40px] text-center">
                {zoom}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= 200}
                className="p-1 rounded text-coolGray hover:text-offWhite disabled:opacity-40 transition-colors"
                aria-label="Zoom in"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleZoomReset}
                className="p-1 rounded text-coolGray hover:text-skyBlue transition-colors border-l border-borderNavy/60 ml-0.5"
                aria-label="Reset zoom"
                title="Reset Zoom (100%)"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Open Image in New Tab */}
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-cardNavy hover:bg-cardNavy/80 text-coolGray hover:text-offWhite border border-borderNavy hover:border-skyBlue transition-all text-xs font-medium inline-flex items-center gap-1.5"
              title="Open full resolution image in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-skyBlue" />
              <span className="hidden md:inline">Open Tab</span>
            </a>

            {/* Download Certificate */}
            <a
              href={certificate.image}
              download={`${certificate.id}.jpg`}
              className="px-3 py-1.5 rounded-lg bg-royalBlue hover:bg-royalBlue-hover text-white text-xs font-semibold shadow-glow-blue transition-all inline-flex items-center gap-1.5"
              title="Download certificate image"
            >
              <Download className="w-3.5 h-3.5 text-skyBlue" />
              <span>Download</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-coolGray hover:text-offWhite hover:bg-cardNavy border border-transparent hover:border-borderNavy transition-colors ml-1"
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Canvas: High-Res Image View */}
        <div className="flex-1 overflow-auto bg-midnight/90 p-3 sm:p-6 flex items-center justify-center min-h-[350px]">
          <div
            className="transition-all duration-150 ease-out flex justify-center w-full"
            style={{
              width: `${zoom}%`,
              maxWidth: zoom > 100 ? `${zoom}%` : '820px',
            }}
          >
            <div className="relative bg-cardNavy rounded-xl shadow-2xl overflow-hidden border border-borderNavy/80 p-2">
              <picture>
                <source srcSet={certificate.image} type="image/webp" />
                <img
                  src={certificate.imageFallback}
                  alt={certificate.title}
                  className="w-full h-auto object-contain rounded-lg max-h-[68vh] mx-auto block shadow-md"
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Modal Footer: Certificate Details & Verification Credentials */}
        <div className="px-4 sm:px-6 py-4 bg-deepNavy border-t border-borderNavy space-y-3 shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            {/* Recipient */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-cardNavy border border-borderNavy">
              <UserCheck className="w-4 h-4 text-skyBlue shrink-0" />
              <div className="truncate">
                <span className="text-[10px] text-mutedGray block">Awarded To</span>
                <span className="font-bold text-offWhite truncate block">
                  {certificate.recipientName} {certificate.regNo ? `(${certificate.regNo})` : ''}
                </span>
              </div>
            </div>

            {/* Organization */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-cardNavy border border-borderNavy">
              <Building className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] text-mutedGray block">Organization</span>
                <span className="font-bold text-offWhite truncate block">
                  {certificate.organization}
                </span>
              </div>
            </div>

            {/* Date / Duration */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-cardNavy border border-borderNavy">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] text-mutedGray block">Issue Date / Period</span>
                <span className="font-bold text-offWhite truncate block">
                  {certificate.duration || certificate.issueDate}
                </span>
              </div>
            </div>

            {/* Verification Status */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-cardNavy border border-borderNavy">
              <ShieldCheck className="w-4 h-4 text-skyBlue shrink-0" />
              <div className="truncate">
                <span className="text-[10px] text-mutedGray block">Authenticity</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Original
                </span>
              </div>
            </div>
          </div>

          {/* Description & Skills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs pt-1 border-t border-borderNavy/50">
            <p className="text-mutedGray text-[11px] leading-relaxed max-w-2xl">
              {certificate.description}
            </p>
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {certificate.skills.map((s, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-midnight border border-borderNavy text-[10px] font-mono text-skyBlue"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
