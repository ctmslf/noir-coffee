import { Instagram, Send } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">НУАР</h3>
            <p className="text-gray-400">Кофе для тех, кто не спит</p>
          </div>

          <div className="flex gap-6">
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-border text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} НУАР. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
