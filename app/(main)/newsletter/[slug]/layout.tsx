import { Suspense } from "react";
import { AppLayoutShell } from "./AppLayoutShell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppLayoutShell>{children}</AppLayoutShell>
    </Suspense>
  );
}
