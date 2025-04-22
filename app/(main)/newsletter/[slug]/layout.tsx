import { AppLayoutShell } from "./AppLayoutShell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayoutShell>{children}</AppLayoutShell>;
}
