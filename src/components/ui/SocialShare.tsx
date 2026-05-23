"use client";

import { Link as LinkIcon, Check } from "lucide-react";
import { useState, useEffect } from "react";

// Raw SVG for Twitter / X
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

// Raw SVG for LinkedIn
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(`${window.location.origin}${url.startsWith('/') ? '' : '/'}${url}`);
    }
  }, [url]);

  const shareToTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const shareToLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const copyToClipboard = () => {
    if (!fullUrl) return;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold tracking-widest uppercase text-muted mr-2">
        Share
      </span>
      
      {/* X / Twitter Share */}
      <button 
        onClick={shareToTwitter}
        className="p-2.5 rounded-full bg-gray-50 border border-gray-100 text-primary hover:text-white hover:bg-black hover:border-black transition-all duration-300"
        aria-label="Share on X"
      >
        <TwitterIcon className="w-4 h-4" />
      </button>

      {/* LinkedIn Share */}
      <button 
        onClick={shareToLinkedIn}
        className="p-2.5 rounded-full bg-gray-50 border border-gray-100 text-primary hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon className="w-4 h-4" />
      </button>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="p-2.5 rounded-full bg-gray-50 border border-gray-100 text-primary hover:text-accent hover:bg-champagne/30 hover:border-champagne transition-all duration-300"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-600" />
        ) : (
          <LinkIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
