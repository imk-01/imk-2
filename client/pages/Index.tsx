import Navigation from "@/components/Navigation";
import NewsCarousel from "@/components/NewsCarousel";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
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
  BadgeCheck,
  GraduationCapIcon,
  Building2
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
        "Pendidikan vokasi yang berkualitas dalam rangka menghasilkan lulusan yang unggul dalam manajemen kegiatan statistika di lapangan, melaksanakan quality control kegiatan official statistics di lapangan, memetakan wilayah kerja statistik, dan melakukan analisis data official statistics sesuai dengan perkembangan Teknologi, Informasi dan Komunikasi (TIK).",
      duration: "3 Tahun",
      accreditation: "Unggul",
      image: "/d3.png",
      href: "/akademik/diii-statistika"
    },
    {
      title: "D4 Statistika",
      description:
        "Pendidikan dan pengajaran untuk menghasilkan ahli statistika terapan, khususnya official statistics, yang berkualitas dalam rangka menghasilkan lulusan yang unggul dalam perancangan survei dan sensus, analisis data, ilmuwan data pemerintahan dan penjaminan kualitas data.",
      duration: "4 Tahun",
      accreditation: "Unggul",
      image: "/st.png",
      href: "/akademik/div-statistika"
    },
    {
      title: "D4 Komputasi Statistika",
      description:
        "Program studi yang berkualitas dan unggul di bidang komputasi statistik, khususnya untuk menghasilkan statistik resmi negara (official statistics), sesuai dengan perkembangan sains dan teknologi yang memberikan kontribusi nyata terhadap Sistem Statistik Nasional maupun Internasional.",
      duration: "4 Tahun",
      accreditation: "Unggul",
      image: "/ks.png",
      href: "/akademik/div-komputasi"
    },
  ];

  const news = [
    {
      title: "BPS Dorong Revolusi Data, Targetkan Peringkat 20 NSO Terbaik Dunia",
      excerpt:
        "Politeknik Statistika STIS menyelenggarakan kuliah umum bertajuk “Driving Data Revolution: Modernizing Official Statistics for Better Decision Making”",
      date: "23 Juni 2025",
      category: "Seminar",
      image: "/kulum.png",
    },
    {
      title: "Kegiatan Praktikum Official Statistics dan Laboratorium Survei",
      excerpt:
        "Program Studi Diploma III Statistika Politeknik Statistika STIS menyelenggarakan kegiatan Praktikum Official Statistics dan Laboratorium Survei (praktikum ubinan) di Sawah Abadi Jakarta Timur pada Rabu (11/6).",
      date: "12 Juni 2025",
      category: "Akademik",
      image: "/ubinan.png",
    },
    {
      title: "Call for Papers – ICDSOS 2025 The 3rd International Conference on Data Science and Official Statistics ",
      excerpt:
        "Politeknik Statistika STIS proudly presents ICDSOS 2025 Politeknik Statistika STIS proudly presents ICDSOS 2025, an international conference with the theme: “From Data to Impact: Leveraging Innovation in Data Science and Official Statistics for Data-Driven Policy Making and Global Competitiveness.”",
      date: "4 Juni 2025",
      category: "Pengumuman",
      image: "/icdsos.png",
    },
  ];

  const quickServices = [
    {
      title: "Daftar STIS",
      description: "Pendaftaran mahasiswa baru Polstat STIS",
      icon: School,
      href: "https://spmb.stis.ac.id",
      color: "bg-stis-blue-600",
    },
    {
      title: "Permohonan Kerjasama",
      description: "Naskah perjanjian kerja sama",
      icon: FileText,
      href: "https://layanan.stis.ac.id/layanan/2",
      color: "bg-stis-green-600",
    },
    {
      title: "Peminjaman Bahan Pustaka",
      description: "Akses koleksi buku dan jurnal online",
      icon: BookOpen,
      href: "https://layanan.stis.ac.id/layanan/13",
      color: "bg-stis-orange-600",
    },
    {
      title: "Sertifikasi Kompetensi Data Scientist",
      description: "Uji Kompetensi Sertifikasi Ilmuwan Data (Data Scientist)",
      icon: BadgeCheck,
      href: "https://layanan.stis.ac.id/layanan/26",
      color: "bg-stis-blue-700",
    },
    {
      title: "Sertifikasi Kompetensi Associate Data Scientist",
      description: "Uji Kompetensi Sertifikasi Ilmuwan Data Madya (Associate Data Scientist)",
      icon: GraduationCapIcon,
      href: "https://layanan.stis.ac.id/layanan/27",
      color: "bg-purple-600",
    },
    {
      title: "Permohonan Kunjungan Eksternal",
      description: "Kegiatan Kunjungan Eksternal",
      icon: Building2,
      href: "https://layanan.stis.ac.id/layanan/5",
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
              Politeknik Statistika STIS dalam angka
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
                <a
                  href={service.href}
                  target={service.href.startsWith("http") ? "_blank" : undefined}
                  rel={service.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  key={index}
                  className="block group"
                >
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
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-2">
              Program Studi
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-stis-blue-500 to-stis-blue-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
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
                  <Link to={program.href}>
                  <Button
                    variant="outline"
                    className="w-full border-stis-blue-600 text-stis-blue-600 hover:bg-stis-blue-600 hover:text-white"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  </Link>
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
            <Link to="/berita">
            <Button
              variant="outline"
              className="border-stis-blue-600 text-stis-blue-600 hover:bg-stis-blue-600 hover:text-white"
            >
              Lihat Semua Berita
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
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
              Bergabunglah menjadi bagian dari Politeknik Statistika STIS.
            </p>
      <div className="flex justify-center">
        <Button
          asChild
          size="lg"
          className="bg-stis-orange-500 hover:bg-stis-orange-600 text-white px-8 py-4 text-lg font-semibold"
        >
          <a
            href="https://spmb.stis.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            Daftar Sekarang
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
