"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../../sanity.config";

export default function StudioPage() {
  return (
    <div className="h-[80vh] w-full bg-white rounded-lg overflow-hidden shadow border border-gray-100">
      <NextStudio config={config} />
    </div>
  );
}
