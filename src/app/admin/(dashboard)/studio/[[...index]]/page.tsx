"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../../sanity.config";

export default function StudioPage() {
  return (
    <div className="h-[calc(100vh-120px)] w-full bg-white rounded-lg shadow border border-gray-100 relative">
      <NextStudio config={config} />
    </div>
  );
}
