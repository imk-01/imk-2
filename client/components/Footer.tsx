import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img
                        src="/logo_STIS.png"
                        alt="Logo STIS"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">
                    Politeknik Statistika STIS
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Politeknik Statistika STIS adalah institusi pendidikan tinggi
                yang mengkhususkan diri dalam bidang statistik dan komputasi
                statistik, berkomitmen menghasilkan lulusan berkualitas tinggi.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/polstatstis/" target="_blank" rel="noopener noreferrer">
                    <img src="/Instagram.png" alt="Instagram" className="w-7 h-7 hover:opacity-80 transition" />
                </a>
                 <a href="https://www.facebook.com/PolstatSTIS/" target="_blank" rel="noopener noreferrer">
                    <img src="/Facebook.png" alt="Facebook" className="w-7 h-7 hover:opacity-80 transition" />
                </a>
                <a href="https://www.youtube.com/channel/UCwmpr4lmrApoGRpq4TcmsvA" target="_blank" rel="noopener noreferrer">
                    <img src="/yt.png" alt="YouTube" className="w-15 h-7 hover:opacity-80 transition" />
                </a>
                <a href="https://x.com/STISJKT" target="_blank" rel="noopener noreferrer">
                    <img src="/x.png" alt="X (Twitter)" className="w-7 h-7 hover:opacity-80 transition" />
                </a>
                </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Program Studi</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/akademik/diii-statistika" className="hover:text-white transition-colors">
                    D3 Statistika
                  </a>
                </li>
                <li>
                  <a href="/akademik/div-statistika" className="hover:text-white transition-colors">
                    D4 Statistika
                  </a>
                </li>
                <li>
                  <a href="/akademik/div-komputasi" className="hover:text-white transition-colors">
                    D4 Komputasi Statistika
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Jl. Otto Iskandardinata No.64C</li>
                <li>Jakarta Timur 13330</li>
                <li>Telepon: (021) 8191437</li>
                <li>Email: humas@stis.ac.id</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Politeknik Statistika STIS. Seluruh hak cipta
              dilindungi.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;