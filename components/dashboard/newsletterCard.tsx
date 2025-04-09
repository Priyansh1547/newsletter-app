import { AlertTriangle } from "lucide-react";

export default function CreateNewsletterCard() {
  return (
    <div className="w-80 h-52 rounded-xl border border-neutral-200 bg-white hover:bg-gray-50 transition-all duration-200 cursor-pointer flex flex-col justify-between p-4 space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
          <AlertTriangle className="w-4 h-4 text-gray-500" />
        </div>
        <p className="text-sm text-gray-500">
          enjoyed-rhino-96.clerk.accounts.dev
        </p>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-gray-400 font-medium">Free Plan</p>
        <h3 className="text-base font-semibold tracking-tight text-gray-800">
          PRIYANSH PATEL
        </h3>
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-gray-50 border border-neutral-200 px-3 py-1 rounded-md">
          <div className="w-2 h-2 pt-2 rounded-full bg-black"></div>
          Active{" "}
        </span>
      </div>
    </div>
  );
}
