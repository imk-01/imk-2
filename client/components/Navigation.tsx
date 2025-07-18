import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AutoSuggestSearch from "@/components/AutoSuggestSearch";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      title: "Beranda",
      href: "/",
      icon: Home,
    },
    {
      title: "Profil",
      href: "/profil",
      subItems: [
        { title: "Lambang", href: "/profil/lambang" },
        { title: "Bendera", href: "/profil/bendera" },
        { title: "Visi dan Misi", href: "/profil/visi-misi" },
        { title: "Sejarah Singkat", href: "/profil/sejarah" },
        { title: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
      ],
    },
    {
      title: "Akademik",
      href: "/akademik",
      subItems: [
        {
          title: "Program Studi DIII Statistika",
          href: "/akademik/diii-statistika",
        },
        {
          title: "Program Studi DIV Statistika",
          href: "/akademik/div-statistika",
        },
        {
          title: "Program Studi DIV Komputasi Statistika",
          href: "/akademik/div-komputasi",
        },
        { title: "Kalender Akademik", href: "/akademik/kalender" },
      ],
    },
    {
      title: "Kemahasiswaan",
      href: "/kemahasiswaan",
      subItems: [
        {
          title: "Organisasi Kemahasiswaan",
          href: "/kemahasiswaan/organisasi",
        },
        { title: "Dewan Perwakilan Mahasiswa", href: "/kemahasiswaan/senat" },
        { title: "Prestasi Mahasiswa", href: "/kemahasiswaan/prestasi" },
      ],
    },
    {
      title: "Berita",
      href: "/berita",
    },
    {
      title: "Galeri",
      href: "/galeri",
    },
    {
      title: "Informasi Publik",
      href: "/informasi-publik",
    },
    {
      title: "Layanan",
      href: "/layanan",
      subItems: [
        { title: "Portal Direktori Layanan", href: "https://layanan.stis.ac.id/", newTab: true },
        { title: "SIMPUS", href: "https://simpus.stis.ac.id/", newTab: true },
        {
          title: "Prosedur Legalisir Ijazah/Transkrip",
          href: "/layanan/legalisir",
        },
        { title: "Sistem Penerimaan Mahasiswa Baru", href: "/layanan/spmb" },
        { title: "Webinar", href: "/layanan/webinar" },
        { title: "Lembaga Sertifikasi Profesi", href: "https://lsp.stis.ac.id/", newTab: true },
        {
          title: "Pusat Penelitian dan Pengabdian kepada Masyarakat",
          href: "https://pppm.stis.ac.id/", newTab: true,
        },
        { title: "Satuan Penjamin Mutu", href: "https://spm.stis.ac.id/", newTab: true },
      ],
    },
    {
      title: "SPMB 2025",
      href: "/spmb-2025",
      highlight: true,
    },
  ];

  const isActive = (href: string, hasSubItems: boolean = false) => {
    if (href === "/") return location.pathname === "/";
    if (
      href === "/berita" &&
      (location.pathname.startsWith("/berita/") || location.pathname === "/berita")
    ) return true;
    if (
      href === "/galeri" &&
      (location.pathname.startsWith("/galeri/") || location.pathname === "/galeri")
    ) return true;
    if (href === "/kemahasiswaan" && location.pathname.startsWith("/kemahasiswaan")) return true;
    if (href === "/akademik" && location.pathname.startsWith("/akademik")) return true;
    if (href === "/profil" && location.pathname.startsWith("/profil")) return true;
    if (href === "/layanan" && location.pathname.startsWith("/layanan")) return true;
    if (href === "/informasi-publik" && location.pathname.startsWith("/informasi-publik")) return true;
    if (hasSubItems) return location.pathname.startsWith(href);
    return location.pathname === href;
  };

  const isSubItemActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top Bar */}
      {/*
      <div className="bg-stis-blue-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(021) 8191437</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@stis.ac.id</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Jl. Otto Iskandardinata No.64C, Jakarta Timur</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-stis-orange-400 transition-colors">
              Bahasa Indonesia
            </a>
            <span>|</span>
            <a href="#" className="hover:text-stis-orange-400 transition-colors">
              English
            </a>
          </div>
        </div>
      </div>
      */}

      {/* Main Navigation */}
      <nav ref={navRef} className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/logo_STIS.png" alt="Logo STIS" className="w-10 h-10" />
              <div>
                <h1 className="font-display font-bold text-lg lg:text-xl text-stis-blue-900 leading-tight">
                  Politeknik Statistika STIS
                </h1>
                {/*
                <p className="text-sm text-gray-600">
                  Sekolah Tinggi Ilmu Statistik
                </p>
                */}
              </div>
            </div>
            <div className="flex items-center space-x-4 lg:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
            <div className="hidden lg:flex items-center">
              <AutoSuggestSearch
                placeholder="Cari berita, pengumuman..."
                onSearch={(query) => {
                  window.location.href = `/search?q=${encodeURIComponent(query)}`;
                }}
                className="w-80"
                size="md"
              />
            </div>
          </div>

          {/* Desktop Horizontal Menu */}
          <div className="hidden lg:flex items-center justify-center py-3 border-t border-gray-100">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const itemIsActive = isActive(item.href, !!item.subItems);

                return (
                  <div key={index} className="relative group">
                    {/* MODIFIED: Re-introducing conditional rendering */}
                    {item.subItems ? (
                      // RENDER AS BUTTON if it has sub-items (not a link)
                      <button
                        type="button"
                        className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 cursor-default ${item.highlight
                            ? "bg-stis-orange-500 text-white hover:bg-stis-orange-600"
                            : itemIsActive
                              ? "bg-stis-blue-600 text-white"
                              : "text-gray-700 hover:text-stis-blue-600 hover:bg-stis-blue-50"
                          }`}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.title}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                    ) : (
                      // RENDER AS <a> TAG if it has NO sub-items (is a link)
                      <a
                        href={item.href}
                        className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${item.highlight
                            ? "bg-stis-orange-500 text-white hover:bg-stis-orange-600"
                            : itemIsActive
                              ? "bg-stis-blue-600 text-white"
                              : "text-gray-700 hover:text-stis-blue-600 hover:bg-stis-blue-50"
                          }`}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.title}</span>
                      </a>
                    )}

                    {/* Dropdown Menu (no change here) */}
                    {item.subItems && (
                      <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-lg py-2 border border-gray-100 z-50 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            target={subItem.newTab ? "_blank" : "_self"}
                            rel={subItem.newTab ? "noopener noreferrer" : ""}
                            className={`block px-4 py-3 text-sm transition-colors ${isSubItemActive(subItem.href)
                                ? "bg-stis-blue-600 text-white"
                                : "text-gray-700 hover:bg-stis-blue-50 hover:text-stis-blue-600"
                              }`}
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Search & Menu Panel (No changes needed here) */}
          {isSearchOpen && (
            <div className="lg:hidden py-4 border-t">
              <AutoSuggestSearch
                placeholder="Cari berita, pengumuman..."
                onSearch={(query) => {
                  window.location.href = `/search?q=${encodeURIComponent(query)}`;
                }}
                className="w-full"
                size="md"
              />
            </div>
          )}
          {isMenuOpen && (
            <div className="lg:hidden border-t py-4">
              <div className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const itemIsActive = isActive(item.href, !!item.subItems);
                  return (
                    <div key={index}>
                      <a
                        href={item.href}
                        className={`flex items-center space-x-3 font-medium py-3 px-3 rounded-md transition-colors ${item.highlight
                            ? "bg-stis-orange-500 text-white hover:bg-stis-orange-600"
                            : itemIsActive
                              ? "bg-stis-blue-600 text-white"
                              : "text-gray-700 hover:text-stis-blue-600 hover:bg-stis-blue-50"
                          }`}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                        <span>{item.title}</span>
                      </a>
                      {item.subItems && (
                        <div className="ml-8 mt-2 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              target={subItem.newTab ? "_blank" : "_self"}
                              rel={subItem.newTab ? "noopener noreferrer" : ""}
                              className={`block py-2 px-3 text-sm rounded-md transition-colors ${isSubItemActive(subItem.href)
                                  ? "bg-stis-blue-600 text-white"
                                  : "text-gray-600 hover:text-stis-blue-600 hover:bg-stis-blue-50"
                                }`}
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}