import SettingsComponent from "@/components/setting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Stack Mail",
  description: "Settings page stack mail",
};

export default function Settings() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-14 pt-16">
        <div className="space-y-4">
          <div className="flex flex-row justify-between items-center">
            <div className="space-y-1">
              <h1 className="truncate text-4xl font-medium tracking-tight">
                Settings
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You can manage your account Settings here
              </p>
            </div>
          </div>

          <SettingsComponent />
        </div>
      </div>
    </>
  );
}
