"use client";

import { sendEmail } from "@/actions";
import RichTextEditor from "@/components/editor";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];

  const handleSend = async (subject: string, content: string) => {
    const sendMail = sendEmail({
      slug: slug,
      subject: subject,
      content: content,
    });

    toast.promise(sendMail, {
      loading: "Sending email...",
      success: "Email sent successfully!",
      error: "Failed to send email.",
    });

    await sendMail;
  };

  return (
    <div className="max-w-lvh mx-auto py-8">
      <RichTextEditor onClick={handleSend} />
    </div>
  );
}
