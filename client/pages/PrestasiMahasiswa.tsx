import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Medal,
  Star,
  Calendar,
  Users,
  MapPin,
  Award,
  Target,
  TrendingUp,
  Crown,
  Gift,
  ChevronRight,
  ExternalLink,
  Filter,
  Globe,
} from "lucide-react";
import { useState } from "react";

export default function PrestasiMahasiswa() {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedYear, setSelectedYear] = useState("semua");

  const achievements = [
    {
      id: 1,
      title: "Juara 1 Kompetisi Data Science Nasional 2024",
      category: "akademik",
      level: "nasional",
      year: "2024",
      date: "15 Maret 2024",
      organizer: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      location: "Jakarta",
      participants: [
        "Ahmad Fauzi (D-IV Komputasi Statistika)",
        "Sari Dewi (D-IV Statistika)",
        "Budi Pratama (D-III Statistika)",
      ],
      description:
        "Tim mahasiswa STIS berhasil meraih juara 1 dalam kompetisi data science tingkat nasional dengan project analisis prediksi kemiskinan menggunakan machine learning.",
      prize: "Rp 25.000.000 + Sertifikat + Trophy",
      image: "/api/placeholder/400/300",
      featured: true,
    },
    {
      id: 2,
      title: "Juara 2 Lomba Karya Tulis Ilmiah Statistika",
      category: "akademik",
      level: "nasional",
      year: "2024",
      date: "22 Februari 2024",
      organizer: "Asosiasi Ahli Statistika Indonesia (AASI)",
      location: "Bandung",
      participants: [
        "Maya Sari (D-IV Statistika)",
        "Rizki Hakim (D-IV Komputasi Statistika)",
      ],
      description:
        "Karya tulis dengan tema 'Implementasi Big Data dalam Analisis Sosial Ekonomi Masyarakat' meraih juara 2 tingkat nasional.",
      prize: "Rp 15.000.000 + Sertifikat + Plakat",
      image: "/api/placeholder/400/300",
      featured: true,
    },
    {
      id: 3,
      title: "Juara 1 Futsal Antar Perguruan Tinggi Se-Jakarta",
      category: "olahraga",
      level: "regional",
      year: "2024",
      date: "10 Januari 2024",
      organizer: "LIMA Jakarta",
      location: "Jakarta",
      participants: ["Tim Futsal STIS (11 pemain)", "Pelatih: Dedi Kurniawan"],
      description:
        "Tim futsal STIS berhasil mengalahkan 15 perguruan tinggi lainnya dan meraih juara 1 turnamen futsal antar PT se-Jakarta.",
      prize: "Trophy + Medali + Uang Pembinaan",
      image: "/api/placeholder/400/300",
      featured: false,
    },
    {
      id: 4,
      title: "Juara 3 Programming Contest Java",
      category: "teknologi",
      level: "nasional",
      year: "2023",
      date: "5 November 2023",
      organizer: "Oracle Indonesia",
      location: "Surabaya",
      participants: [
        "Andi Nugroho (D-IV Komputasi Statistika)",
        "Lisa Permata (D-IV Komputasi Statistika)",
      ],
      description:
        "Kompetisi programming dengan fokus pada pengembangan aplikasi berbasis Java untuk solusi statistik dan data analysis.",
      prize: "Rp 10.000.000 + Sertifikat Oracle",
      image: "/api/placeholder/400/300",
      featured: false,
    },
    {
      id: 5,
      title: "Best Paper Award - Seminar Nasional Statistika",
      category: "akademik",
      level: "nasional",
      year: "2023",
      date: "20 Oktober 2023",
      organizer: "Institut Teknologi Bandung",
      location: "Bandung",
      participants: [
        "Dr. Susi Purnama (Dosen Pembimbing)",
        "Febri Handayani (D-IV Statistika)",
      ],
      description:
        "Paper penelitian tentang 'Analisis Multivariate untuk Prediksi Inflasi Indonesia' meraih penghargaan best paper.",
      prize: "Sertifikat + Publikasi Jurnal",
      image: "/api/placeholder/400/300",
      featured: true,
    },
    {
      id: 6,
      title: "Juara 1 Bola Voli Putri Antar Politeknik",
      category: "olahraga",
      level: "nasional",
      year: "2023",
      date: "15 September 2023",
      organizer: "Politeknik Negeri Jakarta",
      location: "Jakarta",
      participants: ["Tim Bola Voli Putri STIS (8 pemain)"],
      description:
        "Tim bola voli putri STIS berhasil meraih juara 1 pada turnamen antar politeknik se-Indonesia.",
      prize: "Trophy + Medali Emas + Uang Pembinaan",
      image: "/api/placeholder/400/300",
      featured: false,
    },
  ];

  const categories = [
    { id: "semua", label: "Semua Kategori", count: achievements.length },
    {
      id: "akademik",
      label: "Akademik",
      count: achievements.filter((a) => a.category === "akademik").length,
    },
    {
      id: "olahraga",
      label: "Olahraga",
      count: achievements.filter((a) => a.category === "olahraga").length,
    },
    {
      id: "teknologi",
      label: "Teknologi",
      count: achievements.filter((a) => a.category === "teknologi").length,
    },
  ];

  const years = [
    { id: "semua", label: "Semua Tahun" },
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" },
    { id: "2022", label: "2022" },
  ];

  const filteredAchievements = achievements.filter((achievement) => {
    const matchesCategory =
      selectedCategory === "semua" || achievement.category === selectedCategory;
    const matchesYear =
      selectedYear === "semua" || achievement.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  const stats = [
    {
      label: "Total Prestasi",
      value: "50+",
      icon: Trophy,
      color: "bg-yellow-500",
    },
    { label: "Prestasi 2024", value: "15", icon: Medal, color: "bg-blue-500" },
    {
      label: "Tingkat Nasional",
      value: "30",
      icon: Star,
      color: "bg-green-500",
    },
    {
      label: "Total Hadiah",
      value: "500Jt+",
      icon: Gift,
      color: "bg-purple-500",
    },
  ];

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "internasional":
        return "bg-red-100 text-red-800";
      case "nasional":
        return "bg-blue-100 text-blue-800";
      case "regional":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "akademik":
        return Target;
      case "olahraga":
        return Trophy;
      case "teknologi":
        return TrendingUp;
      default:
        return Award;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-orange-900 to-stis-orange-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-16 h-16 text-white mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Prestasi Mahasiswa
            </h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Kebanggaan STIS atas pencapaian gemilang mahasiswa dalam berbagai
            kompetisi akademik, olahraga, dan teknologi
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 font-medium">Filter:</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Kategori:</span>
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={
                            selectedCategory === category.id
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => setSelectedCategory(category.id)}
                          className={
                            selectedCategory === category.id
                              ? "bg-stis-orange-600 hover:bg-stis-orange-700"
                              : "border-stis-orange-600 text-stis-orange-600 hover:bg-stis-orange-600 hover:text-white"
                          }
                        >
                          {category.label} ({category.count})
                        </Button>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Tahun:</span>
                      {years.map((year) => (
                        <Button
                          key={year.id}
                          variant={
                            selectedYear === year.id ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setSelectedYear(year.id)}
                          className={
                            selectedYear === year.id
                              ? "bg-stis-blue-600 hover:bg-stis-blue-700"
                              : "border-stis-blue-600 text-stis-blue-600 hover:bg-stis-blue-600 hover:text-white"
                          }
                        >
                          {year.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-display font-bold text-3xl text-gray-900">
                Daftar Prestasi
              </h2>
              <span className="text-gray-600">
                {filteredAchievements.length} prestasi ditemukan
              </span>
            </div>

            {filteredAchievements.length === 0 ? (
              <div className="text-center py-16">
                <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">
                  Tidak ada prestasi ditemukan
                </h3>
                <p className="text-gray-400">
                  Coba ubah filter kategori atau tahun
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredAchievements.map((achievement) => {
                  const CategoryIcon = getCategoryIcon(achievement.category);
                  return (
                    <Card
                      key={achievement.id}
                      className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                        achievement.featured
                          ? "ring-2 ring-stis-orange-200"
                          : ""
                      }`}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3 relative">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                          {achievement.featured && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-stis-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                                <Crown className="w-3 h-3 mr-1" />
                                Featured
                              </span>
                            </div>
                          )}
                          <div className="absolute top-4 right-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelBadge(achievement.level)}`}
                            >
                              {achievement.level.charAt(0).toUpperCase() +
                                achievement.level.slice(1)}
                            </span>
                          </div>
                        </div>
                        <CardContent className="md:w-2/3 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-stis-orange-100 rounded-lg flex items-center justify-center">
                                <CategoryIcon className="w-5 h-5 text-stis-orange-600" />
                              </div>
                              <div>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                                  {achievement.category
                                    .charAt(0)
                                    .toUpperCase() +
                                    achievement.category.slice(1)}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center text-sm text-gray-600 mb-1">
                                <Calendar className="w-4 h-4 mr-1" />
                                {achievement.date}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="w-4 h-4 mr-1" />
                                {achievement.location}
                              </div>
                            </div>
                          </div>

                          <h3 className="font-bold text-xl text-gray-900 mb-3">
                            {achievement.title}
                          </h3>

                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {achievement.description}
                          </p>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Penyelenggara:
                              </h4>
                              <p className="text-sm text-gray-600">
                                {achievement.organizer}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Hadiah:
                              </h4>
                              <p className="text-sm text-gray-600">
                                {achievement.prize}
                              </p>
                            </div>
                          </div>

                          <div className="border-t pt-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Peserta:
                            </h4>
                            <div className="space-y-1">
                              {achievement.participants.map(
                                (participant, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center text-sm text-gray-600"
                                  >
                                    <ChevronRight className="w-3 h-3 mr-1" />
                                    {participant}
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-stis-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">
                    Politeknik Statistika STIS
                  </h3>
                  <p className="text-gray-400">Sekolah Tinggi Ilmu Statistik</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Politeknik Statistika STIS adalah institusi pendidikan tinggi
                yang mengkhususkan diri dalam bidang statistik dan komputasi
                statistik, berkomitmen menghasilkan lulusan berkualitas tinggi.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Globe className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Star className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Program Studi</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    D3 Statistika
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    D4 Statistika
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
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
                <li>Email: info@stis.ac.id</li>
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
    </div>
  );
}
