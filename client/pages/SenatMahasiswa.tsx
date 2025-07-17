import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import {
  Users,
  Calendar,
  BookOpen,
  Scale,
  Megaphone,
  FileText,
  Award,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Target,
  Gavel,
  Shield,
  Globe,
  Star,
} from "lucide-react";

export default function SenatMahasiswa() {
  const senatStructure = [
    {
      position: "Ketua DPM",
      name: "Sultan Hadi Prabowo",
      program: "D-IV Statistika",
      period: "2024-2025",
      image: "/ketua-dpm.png",
      responsibilities: [
        "Memimpin rapat dpm",
        "Koordinasi dengan pimpinan kampus",
        "Representasi mahasiswa",
      ],
    },
    {
      position: "Wakil Ketua DPM",
      name: "Kilat Tri Prasetyo",
      program: "D-IV Komputasi Statistika",
      period: "2024-2025",
      image: "/wakilketua-dpm.png",
      responsibilities: [
        "Mendampingi ketua dpm",
        "Koordinasi internal dpm",
        "Pengawasan program kerja",
      ],
    },
    {
      position: "Sekretaris",
      name: "Johana H. Br Nainggolan",
      program: "D-III Statistika",
      period: "2024-2025",
      image: "/sekretaris-dpm.png",
      responsibilities: [
        "Administrasi dpm",
        "Notulensi rapat",
        "Dokumentasi kegiatan",
      ],
    },
    {
      position: "Bendahara",
      name: "Faradilla Chairin Ninda",
      program: "D-IV Statistika",
      period: "2024-2025",
      image: "/bendahara-dpm.png",
      responsibilities: [
        "Pengelolaan keuangan",
        "Laporan keuangan",
        "Anggaran kegiatan",
      ],
    },
  ];

  const functions = [
    {
      title: "Fungsi Legislatif",
      description:
        "Membuat dan mengesahkan peraturan yang berkaitan dengan kehidupan kemahasiswaan",
      icon: FileText,
      color: "bg-blue-500",
      items: [
        "Penyusunan AD/ART kemahasiswaan",
        "Penetapan kebijakan mahasiswa",
        "Persetujuan program kerja organisasi",
      ],
    },
    {
      title: "Fungsi Pengawasan",
      description:
        "Mengawasi jalannya pemerintahan kemahasiswaan dan pelaksanaan kebijakan",
      icon: Shield,
      color: "bg-green-500",
      items: [
        "Pengawasan kinerja BEM",
        "Evaluasi program kemahasiswaan",
        "Monitoring penggunaan dana",
      ],
    },
    {
      title: "Fungsi Aspirasi",
      description:
        "Menampung dan menyalurkan aspirasi mahasiswa kepada pihak kampus",
      icon: Megaphone,
      color: "bg-orange-500",
      items: [
        "Forum diskusi mahasiswa",
        "Penyaluran keluhan dan saran",
        "Dialog dengan pimpinan kampus",
      ],
    },
    {
      title: "Fungsi Advokasi",
      description:
        "Membela kepentingan dan hak-hak mahasiswa dalam berbagai hal",
      icon: Scale,
      color: "bg-purple-500",
      items: [
        "Pendampingan mahasiswa bermasalah",
        "Mediasi konflik kemahasiswaan",
        "Perjuangan hak-hak mahasiswa",
      ],
    },
  ];

  const programs = [
    {
      title: "Forum Aspirasi Mahasiswa",
      description:
        "Kegiatan rutin bulanan untuk menampung aspirasi dan keluhan mahasiswa",
      date: "Setiap minggu pertama",
      status: "ongoing",
      participants: "Semua mahasiswa",
    },
    {
      title: "Rapat Dewan Pleno",
      description:
        "Rapat formal dewan untuk membahas isu-isu strategis kemahasiswaan",
      date: "Setiap bulan",
      status: "scheduled",
      participants: "Anggota dewan",
    },
    {
      title: "Dialog dengan Pimpinan",
      description:
        "Pertemuan berkala dengan direktur dan wakil direktur untuk membahas kepentingan mahasiswa",
      date: "Setiap semester",
      status: "upcoming",
      participants: "Perwakilan mahasiswa",
    },
    {
      title: "Sosialisasi Peraturan",
      description:
        "Program edukasi tentang peraturan dan tata tertib kemahasiswaan",
      date: "Awal semester",
      status: "completed",
      participants: "Mahasiswa baru",
    },
  ];

  const achievements = [
    {
      year: "2024",
      achievement: "Revisi Tata Tertib Kemahasiswaan",
      description:
        "Berhasil merevisi tata tertib kemahasiswaan yang lebih adaptif dengan perkembangan zaman",
    },
    {
      year: "2023",
      achievement: "Program Beasiswa Mahasiswa Berprestasi",
      description:
        "Memperjuangkan penambahan kuota beasiswa untuk mahasiswa berprestasi dari keluarga kurang mampu",
    },
    {
      year: "2023",
      achievement: "Fasilitas WiFi Kampus",
      description:
        "Mengadvokasi peningkatan kualitas dan coverage WiFi di seluruh area kampus",
    },
    {
      year: "2022",
      achievement: "Ruang Diskusi Mahasiswa",
      description:
        "Memperjuangkan penyediaan ruang diskusi dan belajar kelompok untuk mahasiswa",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Gavel className="w-16 h-16 text-white mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Dewan Perwakilan Mahasiswa
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Lembaga perwakilan mahasiswa STIS menjalankan fungsi legislatif di Imapolstat yang menjembatani aspirasi mahasiswa dengan lembaga kampus untuk membangun kualitas pembelajaran yang lebih baik.
          </p>
        </div>
      </section>

      {/* Functions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-12 text-center">
              Fungsi DPM
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {functions.map((func, index) => {
                const Icon = func.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader className="pb-4">
                      <div
                        className={`w-16 h-16 ${func.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {func.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{func.description}</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        {func.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-12 text-center">
              Struktur Organisasi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {senatStructure.map((member, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {member.position}
                    </CardTitle>
                    <h3 className="text-stis-blue-600 font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.program}</p>
                    <p className="text-xs text-gray-500">{member.period}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Tanggung Jawab:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {member.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <Target className="w-3 h-3 text-stis-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-12 text-center">
              Program Kerja
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                          {program.title}
                        </CardTitle>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ml-4 ${
                          program.status === "ongoing"
                            ? "bg-green-100 text-green-800"
                            : program.status === "scheduled"
                              ? "bg-blue-100 text-blue-800"
                              : program.status === "upcoming"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {program.status === "ongoing"
                          ? "Berlangsung"
                          : program.status === "scheduled"
                            ? "Terjadwal"
                            : program.status === "upcoming"
                              ? "Akan Datang"
                              : "Selesai"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {program.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {program.participants}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-12 text-center">
              Pencapaian DPM
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-stis-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-8 h-8 text-stis-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-stis-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {achievement.year}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900">
                            {achievement.achievement}
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
