import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import {
  Camera,
  Calendar,
  Users,
  GraduationCap,
  Award,
  Building,
  Heart,
  Search,
  Filter,
  Download,
} from "lucide-react";
import { useState } from "react";
import { galeriList } from "@/data/galeri"; // Import data

export default function Galeri() {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "semua", label: "Semua", icon: Camera },
    { id: "wisuda", label: "Wisuda", icon: GraduationCap },
    { id: "kegiatan", label: "Kegiatan Kampus", icon: Users },
    { id: "prestasi", label: "Prestasi", icon: Award },
    { id: "fasilitas", label: "Fasilitas", icon: Building },
    { id: "pkkmb", label: "PKKMB", icon: Heart },
  ];

  const filteredGalleries = galeriList.filter((gallery) => {
    const matchesCategory =
      selectedCategory === "semua" || gallery.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      gallery.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gallery.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredGalleries = galeriList.filter((gallery) => gallery.featured);

  // Dynamic gallery statistics
  const totalPhotos = galeriList.reduce(
    (acc, gallery) => acc + gallery.images.length,
    0,
  );
  const totalAlbums = galeriList.length;
  const totalPrestasi = galeriList.filter(
    (gallery) => gallery.category === "prestasi",
  ).length;
  const totalKegiatan = galeriList.filter(
    (gallery) => gallery.category === "kegiatan",
  ).length;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-16 h-16 text-white mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Galeri STIS
            </h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Dokumentasi kegiatan, prestasi, dan momen bersejarah Politeknik
            Statistika STIS dalam foto dan video
          </p>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Galeri Unggulan
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredGalleries.slice(0, 3).map((gallery, index) => (
                <Card
                  key={gallery.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                  onClick={() =>
                    (window.location.href = `/galeri/album/${gallery.slug}`)
                  }
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={gallery.image}
                      alt={gallery.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="bg-stis-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {gallery.images.length} Foto
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                          {gallery.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-stis-orange-600 transition-colors">
                      {gallery.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {gallery.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                      <input
                        type="text"
                        placeholder="Cari galeri, kegiatan, atau deskripsi..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-stis-orange-500 focus:border-stis-orange-500 outline-none transition-colors"
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
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Button
                        key={category.id}
                        variant={
                          selectedCategory === category.id
                            ? "default"
                            : "outline"
                        }
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-2 ${
                          selectedCategory === category.id
                            ? "bg-stis-orange-600 hover:bg-stis-orange-700"
                            : "border-stis-orange-600 text-stis-orange-600 hover:bg-stis-orange-600 hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{category.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-display font-bold text-3xl text-gray-900">
                {selectedCategory === "semua"
                  ? "Semua Galeri"
                  : `Galeri ${
                      categories.find((cat) => cat.id === selectedCategory)
                        ?.label
                    }`}
              </h2>
              <span className="text-gray-600">
                {filteredGalleries.length} galeri ditemukan
              </span>
            </div>

            {filteredGalleries.length === 0 ? (
              <div className="text-center py-16">
                <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">
                  Tidak ada galeri ditemukan
                </h3>
                <p className="text-gray-400">
                  Coba ubah kata kunci pencarian atau pilih kategori lain
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGalleries.map((gallery) => (
                  <Card
                    key={gallery.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                    onClick={() =>
                      (window.location.href = `/galeri/album/${gallery.slug}`)
                    }
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={gallery.image}
                        alt={gallery.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            gallery.category === "wisuda"
                              ? "bg-purple-500 text-white"
                              : gallery.category === "kegiatan"
                              ? "bg-blue-500 text-white"
                              : gallery.category === "prestasi"
                              ? "bg-green-500 text-white"
                              : gallery.category === "fasilitas"
                              ? "bg-orange-500 text-white"
                              : "bg-pink-500 text-white"
                          }`}
                        >
                          {
                            categories.find(
                              (cat) => cat.id === gallery.category,
                            )?.label
                          }
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {gallery.date}
                        </span>
                        <span className="text-sm text-stis-orange-600 font-medium">
                          {gallery.images.length} foto
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-stis-orange-600 transition-colors line-clamp-2">
                        {gallery.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {gallery.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-12">
              Statistik Galeri
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Camera className="w-12 h-12 text-stis-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {totalPhotos}+
                </div>
                <div className="text-gray-600">Total Foto</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Calendar className="w-12 h-12 text-stis-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {totalAlbums}+
                </div>
                <div className="text-gray-600">Album Galeri</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Award className="w-12 h-12 text-stis-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {totalPrestasi}+
                </div>
                <div className="text-gray-600">Momen Prestasi</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {totalKegiatan}+
                </div>
                <div className="text-gray-600">Kegiatan Terdokumentasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}