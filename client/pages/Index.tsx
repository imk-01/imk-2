import Navigation from "@/components/Navigation";
import NewsCarousel from "@/components/NewsCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Users,
  GraduationCap,
  BarChart3,
  ArrowRight,
  Award,
  BookOpen,
  Globe,
  Star,
  ChevronRight,
  Download,
  FileText,
  UserCheck,
  MessageSquare,
  School,
} from "lucide-react";

export default function Index() {
  const stats = [
    {
      number: "60+",
      label: "Tahun Pengalaman",
      icon: Calendar,
      color: "text-stis-blue-600",
    },
    {
      number: "5000+",
      label: "Alumni",
      icon: Users,
      color: "text-stis-green-600",
    },
    {
      number: "3",
      label: "Program Studi",
      icon: GraduationCap,
      color: "text-stis-orange-600",
    },
    {
      number: "95%",
      label: "Tingkat Kelulusan",
      icon: BarChart3,
      color: "text-stis-blue-600",
    },
  ];

  const programs = [
    {
      title: "D3 Statistika",
      description:
        "Program Diploma 3 Statistika yang mempersiapkan tenaga ahli statistik yang kompeten di bidang pengumpulan, pengolahan, dan analisis data.",
      duration: "3 Tahun",
      accreditation: "A",
      image: "/api/placeholder/400/250",
    },
    {
      title: "D4 Statistika",
      description:
        "Program Diploma 4 Statistika yang menghasilkan sarjana terapan dengan keahlian mendalam dalam metodologi statistik dan aplikasinya.",
      duration: "4 Tahun",
      accreditation: "A",
      image: "/api/placeholder/400/250",
    },
    {
      title: "D4 Komputasi Statistika",
      description:
        "Program yang menggabungkan ilmu statistik dengan teknologi komputasi untuk menghasilkan data scientist yang handal.",
      duration: "4 Tahun",
      accreditation: "A",
      image: "/api/placeholder/400/250",
    },
  ];

  const news = [
    {
      title: "Workshop Machine Learning untuk Mahasiswa",
      excerpt:
        "STIS mengadakan workshop intensif Machine Learning dengan pembicara dari industri teknologi terkemuka.",
      date: "25 Maret 2024",
      category: "Workshop",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Kunjungan Industri ke BPS Provinsi DKI Jakarta",
      excerpt:
        "Mahasiswa semester akhir melakukan kunjungan industri untuk memahami praktik statistik di lapangan.",
      date: "22 Maret 2024",
      category: "Akademik",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Launching Program Magang Bersertifikat",
      excerpt:
        "STIS meluncurkan program magang bersertifikat bekerjasama dengan berbagai instansi pemerintah dan swasta.",
      date: "18 Maret 2024",
      category: "Pengumuman",
      image: "/api/placeholder/300/200",
    },
  ];

  const quickServices = [
    {
      title: "Daftar STIS",
      description: "Pendaftaran mahasiswa baru Polstat STIS",
      icon: School,
      href: "/spmb-2025",
      color: "bg-stis-blue-600",
    },
    {
      title: "Legalisir Dokumen",
      description: "Layanan legalisir ijazah dan transkrip",
      icon: FileText,
      href: "/layanan/legalisir",
      color: "bg-stis-green-600",
    },
    {
      title: "Perpustakaan Digital",
      description: "Akses koleksi buku dan jurnal online",
      icon: BookOpen,
      href: "/layanan/simpus",
      color: "bg-stis-orange-600",
    },
    {
      title: "Download Center",
      description: "Unduh formulir dan dokumen penting",
      icon: Download,
      href: "/layanan/download",
      color: "bg-stis-blue-700",
    },
    {
      title: "Berikan Feedback",
      description: "Sampaikan saran dan masukan untuk STIS",
      icon: MessageSquare,
      href: "/feedback",
      color: "bg-purple-600",
    },
    {
      title: "Webinar",
      description: "Ikuti webinar dan seminar online",
      icon: UserCheck,
      href: "/layanan/webinar",
      color: "bg-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* News Carousel */}
      <NewsCarousel />

      {/* Campus Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Statistik Kampus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pencapaian Politeknik Statistika STIS dalam angka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Layanan Cepat
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Akses layanan utama STIS dengan mudah dan cepat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center justify-center text-stis-blue-600 font-semibold group-hover:text-stis-blue-700">
                      Akses Sekarang
                      <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Program Studi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih program studi yang sesuai dengan minat dan bakat Anda untuk
              berkarir di bidang statistik
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-stis-blue-500 to-stis-blue-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="bg-stis-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {program.duration}
                        </span>
                      </div>
                      <div className="bg-stis-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Akreditasi {program.accreditation}
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-stis-blue-600 transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-stis-blue-600 text-stis-blue-600 hover:bg-stis-blue-600 hover:text-white"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Berita & Pengumuman Terbaru
              </h2>
              <p className="text-xl text-gray-600">
                Informasi terkini seputar kegiatan STIS
              </p>
            </div>
            <Button
              variant="outline"
              className="border-stis-blue-600 text-stis-blue-600 hover:bg-stis-blue-600 hover:text-white"
            >
              Lihat Semua Berita
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute top-4 left-4">
                    <span className="bg-stis-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {article.date}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-stis-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-stis-blue-600 font-semibold group-hover:text-stis-blue-700">
                    Baca Selengkapnya
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-stis-blue-900 to-stis-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mb-6">
              Siap Menjadi Bagian dari STIS?
            </h2>
            <p className="text-xl text-stis-blue-100 mb-8 leading-relaxed">
              Bergabunglah dengan ribuan alumni STIS yang telah berkarir sukses
              di berbagai instansi pemerintah dan swasta di seluruh Indonesia.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-stis-orange-500 hover:bg-stis-orange-600 text-white px-8 py-4 text-lg font-semibold"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
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
