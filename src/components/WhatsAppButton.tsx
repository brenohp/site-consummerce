import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5516999999999"
      target="_blank"
      // bottom-6.25 (25px) | right-6.25 (25px) | z-2000 | h-15 (60px) | w-15 (60px)
      className="fixed bottom-6.25 right-6.25 z-2000 flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-[32px] text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-110"
    >
      <FaWhatsapp />
    </Link>
  );
}