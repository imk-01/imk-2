import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Footer from "@/components/Footer";
import {
  Calendar,
  User,
  Clock,
  Search,
  Filter,
  Tag,
  ChevronRight,
  TrendingUp,
  Eye,
  Share2,
  ArrowRight,
} from "lucide-react";

export default function Berita() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const newsArticles = [
    {
      id: 1,
      title: "Polstat STIS Raih Akreditasi Unggul untuk Semua Program Studi",
      excerpt:
        "Politeknik Statistika STIS berhasil meraih akreditasi Unggul dari LAMSAMA untuk ketiga program studinya, membuktikan komitmen terhadap kualitas pendidikan statistik.",
      content:
        "Ketiga program studi tersebut, yaitu DIV Komputasi Statistik, DIV Statistika, dan DIII Statistika, ...",
      category: "Akademik",
      author: "Humas STIS",
      date: "14 April 2025",
      readTime: "5 menit",
      image: "/akreditasi.png",
      featured: true,
      views: 1250,
      tags: ["Akreditasi", "LAMSAMA", "Program Studi"],
    },
    {
      id: 2,
      title: "Pembukaan Pendaftaran Mahasiswa Baru Polstat STIS 2025/2026",
      excerpt:
        "Pendaftaran mahasiswa baru untuk tahun akademik 2025/2026 resmi dibuka dengan sistem seleksi yang komprehensif dan transparan.",
      content:
        "Politeknik Statistika STIS membuka pendaftaran mahasiswa baru...",
      category: "Pendaftaran",
      author: "Panitia PMB",
      date: "26 Juni 2025",
      readTime: "3 menit",
      image: "/pmb.png",
      featured: true,
      views: 2100,
      tags: ["PMB", "Pendaftaran", "Mahasiswa Baru"],
    },
    {
      id: 3,
      title: "Worskhop on Machine Learning For Official Statistics",
      excerpt:
        "Diselenggarakan oleh Statistik Indonesia (BPS), United Nation Statistics Division (UNSD), Statistik Institute for Asia dan Pacific (SIAP) yang difasilitasi oleh Regional Hub Indonesia, workshop ini bertujuan untuk meningkatkan kemampuan statistik melalui teknik Machine Learning.",
      content: "Dalam era digital yang berkembang pesat...",
      category: "Seminar",
      author: "Humas STIS",
      date: "13 Februari 2025",
      readTime: "4 menit",
      image: "/workshop.png",
      featured: false,
      views: 856,
      tags: ["Big Data", "Machine Learning", "Seminar"],
    },
    {
      id: 4,
      title: "Mahasiswa Politeknik Statistika STIS Juara 1 Olimpiade Statistika",
      excerpt:
        "Tim mahasiswa STIS berhasil meraih juara 1 dalam Olimpiade Satistika tingkat nasional pada kegiatan Dokter Data 2024 yang diselenggarakan oleh Universitas Diponegoro.",
      content: "Prestasi membanggakan kembali diraih oleh mahasiswa...",
      category: "Prestasi",
      author: "Humas STIS",
      date: "21 Maret 2025",
      readTime: "3 menit",
      image: "Prestasi.png",
      featured: true,
      views: 1580,
      tags: ["Olimpiade", "Kompetisi", "Prestasi"],
    },
    {
      id: 5,
      title: "Kemenko PMK dan STIS Perkuat Kolaborasi Riset Modelling Stunting",
      excerpt:
        "Kementerian Koordinator Bidang Pembangunan Manusia dan Kebudayaan (Kemenko PMK) bersama Badan Pusat Statistik (BPS) dan Politeknik Statistika STIS menggelar audiensi terkait pengembangan model analisis data untuk penanggulangan stunting, Rabu (26/2).",
      content: "Sebagai bagian dari program pengembangan kompetensi...",
      category: "Kerjasama",
      author: "Humas STIS",
      date: "27 Februari 2025",
      readTime: "4 menit",
      image: "/kerjasama.png",
      featured: false,
      views: 723,
      tags: ["Riset", "Kemenko PMK", "Kompetensi"],
    },
    {
      id: 6,
      title: "BPS Dorong Revolusi Data, Targetkan Peringkat 20 NSO Terbaik Dunia",
      excerpt:
        "Politeknik Statistika STIS menyelenggarakan kuliah umum bertajuk “Driving Data Revolution: Modernizing Official Statistics for Better Decision Making”",
      content: "Dalam upaya meningkatkan kualitas pendidikan...",
      category: "Seminar",
      author: "Humas STIS",
      date: "23 Juni 2025",
      readTime: "6 menit",
      image: "/kulum.png",
      featured: false,
      views: 1124,
      tags: ["BPS", "Data", "Revolusi"],
    },
    {
      id: 7,
      title: "Kegiatan Praktikum Official Statistics dan Laboratorium Survei",
      excerpt:
        "Program Studi Diploma III Statistika Politeknik Statistika STIS menyelenggarakan kegiatan Praktikum Official Statistics dan Laboratorium Survei (praktikum ubinan) di Sawah Abadi Jakarta Timur pada Rabu (11/6).",
      content: "Komitmen STIS dalam mendukung pendidikan berkualitas...",
      category: "Akademik",
      author: "Humas STIS",
      date: "12 Juni 2025",
      readTime: "3 menit",
      image: "/ubinan.png",
      featured: false,
      views: 967,
      tags: ["Praktikum", "Ubinan", "Mahasiswa"],
    },
    {
      id: 8,
      title: "Call for Papers – ICDSOS 2025 The 3rd International Conference on Data Science and Official Statistics",
      excerpt:
        "Politeknik Statistika STIS proudly presents ICDSOS 2025 Politeknik Statistika STIS proudly presents ICDSOS 2025, an international conference with the theme: “From Data to Impact: Leveraging Innovation in Data Science and Official Statistics for Data-Driven Policy Making and Global Competitiveness.”",
      content: "Dalam rangka meningkatkan kualitas pembelajaran...",
      category: "Pengumuman",
      author: "Humas STIS",
      date: "4 Juni 2025",
      readTime: "4 menit",
      image: "/icdsos.png",
      featured: false,
      views: 634,
      tags: ["Papers", "Teknologi", "ICDSOS"],
    },
  ];

  const filteredNews = newsArticles.filter((news) => {
    const matchesSearch =
      searchTerm === "" ||
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "Semua" || news.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const categories = [
    { name: "Semua", count: newsArticles.length },
    {
      name: "Akademik",
      count: newsArticles.filter((news) => news.category === "Akademik").length,
    },
    {
      name: "Prestasi",
      count: newsArticles.filter((news) => news.category === "Prestasi").length,
    },
    {
      name: "Pendaftaran",
      count: newsArticles.filter((news) => news.category === "Pendaftaran")
        .length,
    },
    {
      name: "Seminar",
      count: newsArticles.filter((news) => news.category === "Seminar").length,
    },
    {
      name: "Pengumuman",
      count: newsArticles.filter((news) => news.category === "Pengumuman").length,
    },
    {
      name: "Kerjasama",
      count: newsArticles.filter((news) => news.category === "Kerjasama").length,
    }
  ];

  const featuredNews = newsArticles.filter((news) => news.featured);
  const popularNews = newsArticles
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Berita STIS
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Informasi terkini seputar kegiatan, prestasi, dan perkembangan
            Politeknik Statistika STIS
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Berita Utama
            </h2>

            {featuredNews.length > 0 && (
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Main Featured Article */}
                <div className="lg:col-span-2">
                  <Card
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() =>
                      (window.location.href = `/berita/${featuredNews[0].id}`)
                    }
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={featuredNews[0].image}
                        alt={featuredNews[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-stis-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                          {featuredNews[0].category}
                        </span>
                        <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-3">
                          {featuredNews[0].title}
                        </h3>
                        <div className="flex items-center text-gray-200 text-sm space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {featuredNews[0].date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredNews[0].readTime}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {featuredNews[0].views.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Side Featured Articles */}
                <div className="space-y-6">
                  {featuredNews.slice(1, 3).map((news, index) => (
                    <Card
                      key={news.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() =>
                        (window.location.href = `/berita/${news.id}`)
                      }
                    >
                      <div className="flex">
                        <div className="w-1/3 relative overflow-hidden">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="w-2/3 p-4">
                          <span className="bg-stis-blue-100 text-stis-blue-800 px-2 py-1 rounded text-xs font-semibold mb-2 inline-block">
                            {news.category}
                          </span>
                          <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-stis-orange-600 transition-colors line-clamp-2">
                            {news.title}
                          </h4>
                          <div className="flex items-center text-gray-500 text-xs space-x-3">
                            <span>{news.date}</span>
                            <span>{news.readTime}</span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Search */}
                  <div className="flex-1 w-full">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Cari berita, kategori, atau tag..."
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="pl-10 pr-4 py-3 w-full"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 font-medium whitespace-nowrap">
                      Kategori:
                    </span>
                  </div>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedCategory === category.name
                          ? "default"
                          : "outline"
                      }
                      onClick={() => handleFilterChange(category.name)}
                      className={`${
                        selectedCategory === category.name
                          ? "bg-stis-orange-600 hover:bg-stis-orange-700"
                          : "border-stis-orange-600 text-stis-orange-600 hover:bg-stis-orange-600 hover:text-white"
                      }`}
                    >
                      {category.name}
                      <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Button>
                  ))}
                </div>

                {/* Search Results Info */}
                {(searchTerm || selectedCategory !== "Semua") && (
                  <div className="mt-4 p-3 bg-stis-orange-50 rounded-lg">
                    <p className="text-stis-orange-800 text-sm">
                      Menampilkan {filteredNews.length} dari{" "}
                      {newsArticles.length} berita
                      {searchTerm && ` untuk "${searchTerm}"`}
                      {selectedCategory !== "Semua" &&
                        ` dalam kategori "${selectedCategory}"`}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* News Articles */}
              <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-display font-bold text-2xl text-gray-900">
                    Semua Berita
                  </h2>
                  <span className="text-gray-600 text-sm">
                    {filteredNews.length} artikel
                  </span>
                </div>

                {filteredNews.length === 0 ? (
                  <div className="text-center py-16">
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-500 mb-2">
                      Tidak ada berita ditemukan
                    </h3>
                    <p className="text-gray-400">
                      Coba ubah kata kunci pencarian atau pilih kategori lain
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Items per page and pagination controls */}
                    <div className="flex flex-col lg:flex-row justify-between items-center p-4 bg-gray-50 rounded-lg mb-6">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <span className="text-sm text-gray-600">
                          Tampilkan:
                        </span>
                        <div className="flex items-center space-x-2">
                          {[5, 10, 25].map((count) => (
                            <Button
                              key={count}
                              variant={
                                itemsPerPage === count ? "default" : "outline"
                              }
                              size="sm"
                              onClick={() => handleItemsPerPageChange(count)}
                              className={
                                itemsPerPage === count
                                  ? "bg-stis-orange-600 hover:bg-stis-orange-700"
                                  : ""
                              }
                            >
                              {count}
                            </Button>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          berita per halaman
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Menampilkan {startIndex + 1}-
                        {Math.min(endIndex, filteredNews.length)} dari{" "}
                        {filteredNews.length} berita
                      </div>
                    </div>

                    {currentNews.map((news) => (
                      <Card
                        key={news.id}
                        className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 relative overflow-hidden h-48 md:h-auto">
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <CardContent className="md:w-2/3 p-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="bg-stis-orange-100 text-stis-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                                {news.category}
                              </span>
                              <div className="flex items-center text-gray-500 text-sm space-x-3">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {news.date}
                                </div>
                                <div className="flex items-center">
                                  <Eye className="w-4 h-4 mr-1" />
                                  {news.views.toLocaleString()}
                                </div>
                              </div>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-stis-orange-600 transition-colors">
                              {news.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {news.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <User className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                  {news.author}
                                </span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm text-gray-600">
                                  {news.readTime}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="text-stis-orange-600 hover:text-stis-orange-700"
                                >
                                  <Share2 className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  className="bg-stis-orange-600 hover:bg-stis-orange-700"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.location.href = `/berita/${news.id}`;
                                  }}
                                >
                                  Baca Selengkapnya
                                  <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {news.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                >
                                  <Tag className="w-3 h-3 inline mr-1" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center space-x-2 mt-8 p-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="disabled:opacity-50 border-stis-orange-600 text-stis-orange-600 hover:bg-stis-orange-600 hover:text-white"
                        >
                          ← Sebelumnya
                        </Button>

                        <div className="flex items-center space-x-1">
                          {Array.from(
                            { length: Math.min(totalPages, 7) },
                            (_, i) => {
                              let page;
                              if (totalPages <= 7) {
                                page = i + 1;
                              } else {
                                if (currentPage <= 4) {
                                  page = i + 1;
                                } else if (currentPage >= totalPages - 3) {
                                  page = totalPages - 6 + i;
                                } else {
                                  page = currentPage - 3 + i;
                                }
                              }

                              return (
                                <Button
                                  key={page}
                                  variant={
                                    currentPage === page ? "default" : "outline"
                                  }
                                  size="sm"
                                  onClick={() => setCurrentPage(page)}
                                  className={
                                    currentPage === page
                                      ? "bg-stis-orange-600 hover:bg-stis-orange-700"
                                      : "border-stis-orange-600 text-stis-orange-600 hover:bg-stis-orange-600 hover:text-white"
                                  }
                                >
                                  {page}
                                </Button>
                              );
                            },
                          )}
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="disabled:opacity-50 border-stis-orange-600 text-stis-orange-600 hover:bg-stis-orange-600 hover:text-white"
                        >
                          Selanjutnya →
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Popular News */}
                <Card className="p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="flex items-center text-xl">
                      <TrendingUp className="w-6 h-6 text-stis-orange-600 mr-2" />
                      Berita Populer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      {popularNews.map((news, index) => (
                        <div
                          key={news.id}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() =>
                            (window.location.href = `/berita/${news.id}`)
                          }
                        >
                          <span className="bg-stis-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                              {news.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-500 space-x-2">
                              <span>{news.date}</span>
                              <span>•</span>
                              <span>{news.views.toLocaleString()} views</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-xl">Kategori Berita</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-3">
                      {categories.slice(1).map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-stis-orange-50 cursor-pointer transition-colors"
                          onClick={() => setSelectedCategory(category.name)}
                        >
                          <span className="text-gray-700 font-medium">
                            {category.name}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="bg-stis-orange-100 text-stis-orange-800 px-2 py-1 rounded text-xs font-semibold">
                              {category.count}
                            </span>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
