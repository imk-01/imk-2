import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AutoSuggestSearch from "@/components/AutoSuggestSearch";
import {
  Search,
  Calendar,
  User,
  Clock,
  Eye,
  ArrowRight,
  FileText,
  Image as ImageIcon,
  Users,
  Filter,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [selectedType, setSelectedType] = useState("semua");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Mock search results data
  const searchResults = [
    {
      id: 1,
      type: "berita",
      title: "STIS Meraih Akreditasi A dari BAN-PT untuk Program Studi",
      excerpt:
        "Politeknik Statistika STIS berhasil mempertahankan akreditasi A dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) untuk semua program studi yang ada.",
      url: "/berita/1",
      category: "Akademik",
      date: "2024-11-15",
      author: "Tim Redaksi STIS",
      views: 1247,
      image: "/api/placeholder/400/200",
    },
    {
      id: 2,
      type: "halaman",
      title: "Program Studi D-IV Statistika",
      excerpt:
        "Program Studi Diploma IV Statistika dirancang untuk menghasilkan lulusan yang memiliki kemampuan analisis statistik tingkat lanjut dan mampu mengaplikasikan dalam berbagai bidang.",
      url: "/akademik/div-statistika",
      category: "Akademik",
      date: "2024-01-01",
      author: "STIS",
      views: 2156,
      image: "/api/placeholder/400/200",
    },
    {
      id: 3,
      type: "berita",
      title: "Mahasiswa STIS Juara 1 Kompetisi Data Science Nasional",
      excerpt:
        "Tim mahasiswa STIS berhasil meraih juara 1 dalam kompetisi Data Science tingkat nasional yang diselenggarakan oleh Kementerian Pendidikan.",
      url: "/berita/4",
      category: "Prestasi",
      date: "2024-03-05",
      author: "Humas STIS",
      views: 1580,
      image: "/api/placeholder/400/200",
    },
    {
      id: 4,
      type: "galeri",
      title: "Wisuda Semester Genap 2023/2024",
      excerpt:
        "Upacara wisuda Sarjana Terapan Statistika periode semester genap tahun akademik 2023/2024 dengan 245 lulusan.",
      url: "/galeri/album/wisuda-semester-genap-2023-2024",
      category: "Kegiatan",
      date: "2024-06-23",
      author: "Tim Dokumentasi",
      views: 856,
      image: "/api/placeholder/400/200",
    },
    {
      id: 5,
      type: "halaman",
      title: "Organisasi Kemahasiswaan",
      excerpt:
        "Berbagai organisasi dan unit kegiatan mahasiswa (UKM) yang aktif di lingkungan STIS untuk pengembangan soft skills dan kepemimpinan.",
      url: "/kemahasiswaan/organisasi",
      category: "Kemahasiswaan",
      date: "2024-01-01",
      author: "STIS",
      views: 967,
      image: "/api/placeholder/400/200",
    },
    {
      id: 6,
      type: "berita",
      title: "Seminar Nasional Big Data Analytics dan Machine Learning",
      excerpt:
        "STIS mengadakan seminar nasional dengan tema Big Data Analytics dan Machine Learning yang dihadiri oleh pakar dari berbagai universitas terkemuka.",
      url: "/berita/3",
      category: "Seminar",
      date: "2024-03-10",
      author: "Dr. Ir. Ahmad Fauzi",
      views: 856,
      image: "/api/placeholder/400/200",
    },
  ];

  // Filter results based on search term and filters
  const filteredResults = searchResults.filter((result) => {
    const matchesSearch =
      searchTerm === "" ||
      result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      selectedType === "semua" || result.type === selectedType;
    const matchesCategory =
      selectedCategory === "semua" || result.category === selectedCategory;

    return matchesSearch && matchesType && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentResults = filteredResults.slice(startIndex, endIndex);

  const resultTypes = [
    { id: "semua", label: "Semua", count: searchResults.length },
    {
      id: "berita",
      label: "Berita",
      count: searchResults.filter((r) => r.type === "berita").length,
    },
    {
      id: "halaman",
      label: "Halaman",
      count: searchResults.filter((r) => r.type === "halaman").length,
    },
    {
      id: "galeri",
      label: "Galeri",
      count: searchResults.filter((r) => r.type === "galeri").length,
    },
  ];

  const categories = [
    { id: "semua", label: "Semua Kategori" },
    { id: "Akademik", label: "Akademik" },
    { id: "Prestasi", label: "Prestasi" },
    { id: "Kegiatan", label: "Kegiatan" },
    { id: "Kemahasiswaan", label: "Kemahasiswaan" },
    { id: "Seminar", label: "Seminar" },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "berita":
        return FileText;
      case "galeri":
        return ImageIcon;
      case "halaman":
        return Users;
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
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("q", searchTerm);
    } else {
      params.delete("q");
    }
    setSearchParams(params);
    setCurrentPage(1);
  };

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchTerm(query);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Search Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-3xl text-gray-900 mb-8 text-center">
              Hasil Pencarian
            </h1>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-8">
              <Card className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <AutoSuggestSearch
                    placeholder="Cari berita, halaman, galeri..."
                    onSearch={(query) => {
                      const params = new URLSearchParams(searchParams);
                      if (query) {
                        params.set("q", query);
                      } else {
                        params.delete("q");
                      }
                      setSearchParams(params);
                      setCurrentPage(1);
                    }}
                    className="flex-1"
                    size="lg"
                  />
                </div>
              </Card>
            </form>

            {/* Search Info */}
            {searchTerm && (
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600">
                  Menampilkan{" "}
                  <span className="font-semibold text-stis-blue-600">
                    {filteredResults.length}
                  </span>{" "}
                  hasil untuk{" "}
                  <span className="font-semibold text-gray-900">
                    "{searchTerm}"
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>

              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600 mr-2">Jenis:</span>
                {resultTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedType === type.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedType(type.id);
                      setCurrentPage(1);
                    }}
                    className={
                      selectedType === type.id
                        ? "bg-stis-blue-600 hover:bg-stis-blue-700"
                        : ""
                    }
                  >
                    {type.label} ({type.count})
                  </Button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600 mr-2">Kategori:</span>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setCurrentPage(1);
                    }}
                    className={
                      selectedCategory === category.id
                        ? "bg-stis-orange-600 hover:bg-stis-orange-700"
                        : ""
                    }
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredResults.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">
                  Tidak ada hasil ditemukan
                </h3>
                <p className="text-gray-400 mb-6">
                  Coba gunakan kata kunci yang berbeda atau ubah filter
                  pencarian
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedType("semua");
                    setSelectedCategory("semua");
                    const params = new URLSearchParams();
                    setSearchParams(params);
                  }}
                  variant="outline"
                >
                  Reset Pencarian
                </Button>
              </div>
            ) : (
              <>
                {/* Results Info */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-gray-900">
                    Hasil Pencarian
                  </h2>
                  <span className="text-gray-600">
                    Menampilkan {startIndex + 1}-
                    {Math.min(endIndex, filteredResults.length)} dari{" "}
                    {filteredResults.length} hasil
                  </span>
                </div>

                {/* Results List */}
                <div className="space-y-6">
                  {currentResults.map((result) => {
                    const TypeIcon = getTypeIcon(result.type);
                    return (
                      <Card
                        key={result.id}
                        className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                        onClick={() => (window.location.href = result.url)}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 relative overflow-hidden h-48 md:h-auto">
                            <img
                              src={result.image}
                              alt={result.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <CardContent className="md:w-3/4 p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                  <TypeIcon className="w-4 h-4 text-gray-600" />
                                </div>
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeBadge(result.type)}`}
                                >
                                  {result.type.charAt(0).toUpperCase() +
                                    result.type.slice(1)}
                                </span>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                  {result.category}
                                </span>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center text-sm text-gray-600 mb-1">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {new Date(result.date).toLocaleDateString(
                                    "id-ID",
                                  )}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <Eye className="w-4 h-4 mr-1" />
                                  {result.views.toLocaleString()}
                                </div>
                              </div>
                            </div>

                            <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-stis-blue-600 transition-colors">
                              {result.title}
                            </h3>

                            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                              {result.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <User className="w-4 h-4" />
                                <span>{result.author}</span>
                              </div>
                              <div className="flex items-center text-stis-blue-600 text-sm font-medium group-hover:text-stis-blue-700">
                                <span>Lihat Detail</span>
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2 mt-12">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="disabled:opacity-50"
                    >
                      ← Sebelumnya
                    </Button>

                    <div className="flex items-center space-x-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <Button
                            key={page}
                            variant={
                              currentPage === page ? "default" : "outline"
                            }
                            onClick={() => setCurrentPage(page)}
                            className={
                              currentPage === page
                                ? "bg-stis-blue-600 hover:bg-stis-blue-700"
                                : ""
                            }
                          >
                            {page}
                          </Button>
                        ),
                      )}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="disabled:opacity-50"
                    >
                      Selanjutnya →
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
