// app/components/Footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050404] border-t-2 border-[#FFD700] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-[#FFD700] font-bold text-xl mb-4">
            Voltera Investments
          </h3>
          <p className="text-[#FFE066]">
            Driving Djibouti’s green transportation with a comprehensive EV &
            Digital Mobility ecosystem.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#FFD700] font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#FFE066] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#FFE066] transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/units" className="hover:text-[#FFE066] transition">
                Units
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FFE066] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-[#FFD700] font-bold text-xl mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4 text-[#FFD700]">
            <a href="#" className="hover:text-[#FFE066]">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#FFE066]">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-[#FFE066]">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-[#FFE066]">
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-[#FFE066] text-sm">
            &copy; {new Date().getFullYear()} Voltera Investments SARL. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
