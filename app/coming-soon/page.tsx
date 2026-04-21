import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Coming Soon | Alwahaa Technical Services LLC",
  description:
    "Our new website is launching soon. Meanwhile, reach us on WhatsApp or call our Dubai office for quotes and inquiries.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ComingSoon />;
}
