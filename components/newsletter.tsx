import { Button } from "./ui/button";
import { useAtomValue } from "jotai";
import { newsletterSlugAtom } from "@/store/newsletter";
import { sendEmail } from "@/actions/send-email";

export function Newsletter() {
  const slug = useAtomValue(newsletterSlugAtom);

  const handleSend = async () => {
    await sendEmail({
      slug: slug,
      subject: "Motivation",
      content: "i am testing this newsletter app",
    });
  };
  return (
    <>
      <div className="flex items-center py-4">
        <h2 className="text-2xl tracking-tight">Welcome</h2>
        <Button onClick={handleSend}>Send Email</Button>
      </div>
    </>
  );
}
