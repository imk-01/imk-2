import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  FileText,
  Image as ImageIcon,
  Users,
  ChevronRight,
} from "lucide-react";

interface SearchSuggestion {
  id: string;
  title: string;
  type: "berita" | "halaman" | "galeri" | "dokumen";
  url: string;
  excerpt?: string;
}

interface AutoSuggestSearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AutoSuggestSearch: React.FC<AutoSuggestSearchProps> = ({
  placeholder = "Cari berita, halaman, galeri...",
  onSearch,
  className = "",
  size = "md",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mock data for suggestions
  const mockSuggestions: SearchSuggestion[] = [
    {
      id: "1",
      title: "STIS Meraih Akreditasi A dari BAN-PT",
      type: "berita",
      url: "/berita/1",
      excerpt:
        "Politeknik Statistika STIS berhasil mempertahankan akreditasi A...",
    },
    {
      id: "2",
      title: "Program Studi D-IV Statistika",
      type: "halaman",
      url: "/akademik/div-statistika",
      excerpt:
        "Program studi diploma IV dengan fokus analisis statistik lanjut...",
    },
    {
      id: "3",
      title: "Wisuda Semester Genap 2023/2024",
      type: "galeri",
      url: "/galeri/album/wisuda-semester-genap-2023-2024",
      excerpt:
        "Dokumentasi upacara wisuda semester genap dengan 245 lulusan...",
    },
    {
      id: "4",
      title: "Organisasi Kemahasiswaan",
      type: "halaman",
      url: "/kemahasiswaan/organisasi",
      excerpt: "Berbagai organisasi dan UKM aktif di lingkungan STIS...",
    },
    {
      id: "5",
      title: "Mahasiswa STIS Juara 1 Kompetisi Data Science",
      type: "berita",
      url: "/berita/4",
      excerpt:
        "Tim mahasiswa STIS berhasil meraih juara 1 kompetisi tingkat nasional...",
    },
    {
      id: "6",
      title: "Senat Mahasiswa",
      type: "halaman",
      url: "/kemahasiswaan/senat",
      excerpt:
        "Lembaga perwakilan mahasiswa dengan fungsi legislatif dan pengawasan...",
    },
    {
      id: "7",
      title: "PKKMB Mahasiswa Baru 2024",
      type: "galeri",
      url: "/galeri/album/pkkmb-mahasiswa-baru-2024",
      excerpt:
        "Masa Perkenalan Kehidupan Kampus Mahasiswa Baru angkatan 2024...",
    },
    {
      id: "8",
      title: "Rencana Strategis 2024-2029",
      type: "dokumen",
      url: "/informasi-publik/renstra",
      excerpt: "Dokumen perencanaan strategis STIS untuk periode 2024-2029...",
    },
    {
      id: "9",
      title: "Seminar Nasional Big Data Analytics",
      type: "berita",
      url: "/berita/3",
      excerpt:
        "STIS mengadakan seminar nasional dengan tema Big Data Analytics...",
    },
    {
      id: "10",
      title: "Prestasi Mahasiswa",
      type: "halaman",
      url: "/kemahasiswaan/prestasi",
      excerpt:
        "Kebanggaan STIS atas pencapaian gemilang mahasiswa dalam berbagai kompetisi...",
    },
  ];

  const filterSuggestions = (query: string): SearchSuggestion[] => {
    if (!query.trim()) return [];

    return mockSuggestions
      .filter(
        (suggestion) =>
          suggestion.title.toLowerCase().includes(query.toLowerCase()) ||
          suggestion.excerpt?.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 6); // Limit to 6 suggestions
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setActiveSuggestion(-1);

    if (value.trim()) {
      const filtered = filterSuggestions(value);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveSuggestion((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (activeSuggestion >= 0) {
          handleSuggestionClick(suggestions[activeSuggestion]);
        } else {
          handleSearch();
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        break;
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    window.location.href = suggestion.url;
    setShowSuggestions(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "berita":
        return FileText;
      case "galeri":
        return ImageIcon;
      case "halaman":
        return Users;
      case "dokumen":
        return FileText;
      default:
        return FileText;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "berita":
        return "bg-blue-100 text-blue-800";
      case "galeri":
        return "bg-green-100 text-green-800";
      case "halaman":
        return "bg-purple-100 text-purple-800";
      case "dokumen":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Scroll active suggestion into view
  useEffect(() => {
    if (activeSuggestion >= 0 && suggestionRefs.current[activeSuggestion]) {
      suggestionRefs.current[activeSuggestion]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [activeSuggestion]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const inputSize = {
    sm: "py-2",
    md: "py-3",
    lg: "py-4",
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          ref={inputRef}
          type="search"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (searchTerm.trim() && suggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          className={`pl-10 pr-12 ${inputSize[size]} w-full`}
        />
        <Button
          type="button"
          size="sm"
          onClick={handleSearch}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-stis-blue-600 hover:bg-stis-blue-700 h-8 px-3"
        >
          <Search className="w-3 h-3" />
        </Button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-80 overflow-y-auto">
          {suggestions.map((suggestion, index) => {
            const TypeIcon = getTypeIcon(suggestion.type);
            return (
              <div
                key={suggestion.id}
                ref={(el) => (suggestionRefs.current[index] = el)}
                className={`flex items-start space-x-3 p-3 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors ${
                  index === activeSuggestion
                    ? "bg-stis-blue-50"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TypeIcon className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {suggestion.title}
                    </h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTypeBadge(suggestion.type)}`}
                    >
                      {suggestion.type}
                    </span>
                  </div>
                  {suggestion.excerpt && (
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {suggestion.excerpt}
                    </p>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AutoSuggestSearch;
