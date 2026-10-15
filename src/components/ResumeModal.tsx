import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  X,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  FileText,
  CheckCircle2,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personalInfo } = portfolioData;
  const [zoom, setZoom] = useState<number>(100);
  const [viewMode, setViewMode] = useState<'document' | 'embed'>('document');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 15, 175));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 15, 60));
  const handleZoomReset = () => setZoom(100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-midnight/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-5xl h-[94vh] bg-cardNavy rounded-2xl shadow-2xl border border-borderNavy flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-deepNavy border-b border-borderNavy shrink-0">
          {/* Title & Document Badge */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-royalBlue/20 text-skyBlue border border-royalBlue/30 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h2
                id="resume-modal-title"
                className="text-sm sm:text-base font-bold text-offWhite truncate"
              >
                {personalInfo.name} — Resume
              </h2>
              <p className="text-[11px] text-mutedGray flex items-center gap-1.5 truncate">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified Curriculum Vitae • 1 Page</span>
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center bg-cardNavy p-0.5 rounded-lg border border-borderNavy text-xs">
              <button
                type="button"
                onClick={() => setViewMode('document')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'document'
                    ? 'bg-royalBlue text-white shadow-sm'
                    : 'text-coolGray hover:text-offWhite'
                }`}
                title="Crisp high-resolution document view"
              >
                Document
              </button>
              <button
                type="button"
                onClick={() => setViewMode('embed')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'embed'
                    ? 'bg-royalBlue text-white shadow-sm'
                    : 'text-coolGray hover:text-offWhite'
                }`}
                title="Native PDF viewer with browser toolbar"
              >
                PDF Embed
              </button>
            </div>

            {/* Zoom Controls (Active in document view) */}
            {viewMode === 'document' && (
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
                  disabled={zoom >= 175}
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
            )}

            {/* Open in New Tab Button */}
            <a
              href={personalInfo.contact.resumeDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-cardNavy hover:bg-cardNavy/80 text-coolGray hover:text-offWhite border border-borderNavy hover:border-skyBlue transition-all text-xs font-medium inline-flex items-center gap-1.5"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-skyBlue" />
              <span className="hidden md:inline">Open in Tab</span>
            </a>

            {/* Download PDF Button */}
            <a
              href={personalInfo.contact.resumeDownloadPath}
              download={personalInfo.contact.resumeFileName}
              className="px-3 py-1.5 rounded-lg bg-royalBlue hover:bg-royalBlue-hover text-white text-xs font-semibold shadow-glow-blue transition-all inline-flex items-center gap-1.5"
              title="Download PDF to your computer"
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

        {/* Modal Viewer Body */}
        <div className="flex-1 overflow-auto bg-midnight/80 p-3 sm:p-6 flex items-center justify-center">
          {viewMode === 'document' ? (
            <div
              className="transition-all duration-150 ease-out flex justify-center w-full"
              style={{
                width: `${zoom}%`,
                maxWidth: zoom > 100 ? `${zoom}%` : '850px',
              }}
            >
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-borderNavy/80 transition-shadow hover:shadow-cyan-500/10">
                <picture>
                  <source
                    srcSet={personalInfo.contact.resumePreviewImage}
                    type="image/webp"
                  />
                  <img
                    src={personalInfo.contact.resumePreviewFallback}
                    alt={`${personalInfo.name} Resume`}
                    className="w-full h-auto object-contain block select-text"
                    loading="eager"
                  />
                </picture>
              </div>
            </div>
          ) : (
            <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden bg-white shadow-xl border border-borderNavy">
              <iframe
                src={`${personalInfo.contact.resumeDownloadPath}#toolbar=1&navpanes=0`}
                title={`${personalInfo.name} Resume Document`}
                className="w-full h-full min-h-[70vh] border-0"
              />
            </div>
          )}
        </div>

        {/* Modal Footer info strip */}
        <div className="px-4 sm:px-6 py-2.5 bg-deepNavy border-t border-borderNavy flex flex-wrap items-center justify-between gap-3 text-xs text-mutedGray shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              Official Resume of <strong className="text-offWhite">{personalInfo.name}</strong> • B.E. Computer Science & Engineering
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-skyBlue bg-cardNavy px-2 py-0.5 rounded border border-borderNavy">
              {personalInfo.contact.resumeFileName}
            </span>
            <button
              onClick={onClose}
              className="text-xs text-coolGray hover:text-offWhite underline underline-offset-2"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
