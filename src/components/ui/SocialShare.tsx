"use client";

import { Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    // Ensure we have an absolute URL for sharing
    if (typeof window !== "undefined" && !url.startsWith("http")) {
      setCurrentUrl(`${window.location.origin}${url.startsWith("/") ? url : `/${url}`}`);
    }
  }, [url]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold tracking-widest uppercase text-muted mr-2">
        Share
      </span>
      
      {/* X / Twitter Share */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-gray-50 border border-gray-100 text-primary hover:text-white hover:bg-black hover:border-black transition-all duration-300"
        aria-label="Share on X"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* LinkedIn Share */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-gray-50 border border-gray-100 text-primary hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
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
