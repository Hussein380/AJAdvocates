import Link from "next/link";
import { FileText, Briefcase, Settings } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-2xl font-semibold leading-6 text-primary">Dashboard Overview</h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Manage your website content, blog posts, careers, and settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Sanity Studio Link */}
        <div className="overflow-hidden rounded-lg bg-white shadow border border-gray-100">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Content Management</dt>
                  <dd>
                    <div className="text-lg font-medium text-primary">Sanity Studio</div>
                    <div className="text-sm text-gray-400 mt-1">Manage Blogs & Careers here</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <a href="http://localhost:3333" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:text-accent/80">
                Open Studio <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
