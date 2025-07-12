import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Calendar,
  CheckCircle,
  Download,
  Star,
  Trophy,
  TrendingUp,
  Shield,
  Target,
  Users,
  BookOpen,
  Search,
  Heart,
} from "lucide-react";

export default function AkreditasiSTIS() {
  const accreditationHistory = [
    {
      program: "Program Studi D3 Statistika",
      year: "2020",
      grade: "A (Unggul)",
      validUntil: "2025",
      assessor: "BAN-PT",
      certificate: "123/SK/BAN-PT/Akred/Dipl-III/V/2020",
    },
    {
      program: "Program Studi D4 Statistika",
      year: "2021",
      grade: "A (Unggul)",
      validUntil: "2026",
      assessor: "BAN-PT",
      certificate: "456/SK/BAN-PT/Akred/Dipl-IV/VI/2021",
    },
    {
      program: "Program Studi D4 Komputasi Statistika",
      year: "2022",
      grade: "A (Unggul)",
      validUntil: "2027",
      assessor: "BAN-PT",
      certificate: "789/SK/BAN-PT/Akred/Dipl-IV/VII/2022",
    },
    {
      program: "Akreditasi Institusi",
      year: "2019",
      grade: "B (Baik Sekali)",
      validUntil: "2024",
      assessor: "BAN-PT",
      certificate: "101/SK/BAN-PT/Akred-Inst/VIII/2019",
    },
  ];

  const qualityStandards = [
    {
      aspect: "Visi, Misi, Tujuan dan Strategi",
      score: "3.8",
      status: "Unggul",
      icon: Target,
    },
    {
      aspect: "Tata Pamong, Tata Kelola dan Kerjasama",
      score: "3.7",
      status: "Unggul",
      icon: Shield,
    },
    {
      aspect: "Mahasiswa",
      score: "3.6",
      status: "Baik Sekali",
      icon: Users,
    },
    {
      aspect: "Sumber Daya Manusia",
      score: "3.8",
      status: "Unggul",
      icon: Award,
    },
    {
      aspect: "Keuangan, Sarana dan Prasarana",
      score: "3.5",
      status: "Baik Sekali",
      icon: TrendingUp,
    },
    {
      aspect: "Pendidikan",
      score: "3.9",
      status: "Unggul",
      icon: BookOpen,
    },
    {
      aspect: "Penelitian",
      score: "3.4",
      status: "Baik Sekali",
      icon: Search,
    },
    {
      aspect: "Pengabdian kepada Masyarakat",
      score: "3.6",
      status: "Baik Sekali",
      icon: Heart,
    },
    {
      aspect: "Luaran dan Capaian Tridharma",
      score: "3.7",
      status: "Unggul",
      icon: Trophy,
    },
  ];

  const achievements = [
    {
      title: "Konsistensi Akreditasi A",
      description:
        "Semua program studi mempertahankan akreditasi A selama 5 tahun terakhir",
      year: "2020-2025",
    },
    {
      title: "Peningkatan Skor Akreditasi",
      description:
        "Rata-rata skor akreditasi meningkat dari 3.2 menjadi 3.7 dalam periode 2015-2022",
      year: "2015-2022",
    },
    {
      title: "Recognition Internasional",
      description:
        "Mendapat pengakuan dari berbagai universitas partner di Asia Tenggara",
      year: "2023",
    },
  ];

  const getGradeColor = (grade: string) => {
    if (grade.includes("A")) return "text-green-600 bg-green-100";
    if (grade.includes("B")) return "text-blue-600 bg-blue-100";
    return "text-gray-600 bg-gray-100";
  };

  const getStatusColor = (status: string) => {
    if (status === "Unggul") return "text-green-600";
    if (status === "Baik Sekali") return "text-blue-600";
    return "text-gray-600";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-green-900 to-stis-green-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-16 h-16 text-stis-orange-400 mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Akreditasi STIS
            </h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Status akreditasi dan penjaminan mutu Politeknik Statistika STIS
            dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT)
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Status Akreditasi Terkini
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {accreditationHistory.map((item, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardHeader className="bg-gradient-to-r from-stis-green-600 to-stis-green-700 text-white">
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{item.program}</span>
                      <Award className="w-6 h-6" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Peringkat:</span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(
                            item.grade,
                          )}`}
                        >
                          {item.grade}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Tahun Akreditasi:</span>
                        <span className="font-semibold text-gray-900">
                          {item.year}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Berlaku Hingga:</span>
                        <span className="font-semibold text-stis-blue-600">
                          {item.validUntil}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Lembaga:</span>
                        <span className="font-semibold text-gray-900">
                          {item.assessor}
                        </span>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-2">
                          No. Sertifikat:
                        </p>
                        <p className="text-sm font-mono text-gray-700">
                          {item.certificate}
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

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Standar Mutu Akreditasi
            </h2>

            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 font-bold text-gray-900">
                          Aspek Penilaian
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-gray-900">
                          Skor
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-gray-900">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {qualityStandards.map((standard, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-4 px-6 font-medium text-gray-900">
                            {standard.aspect}
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className="bg-stis-blue-100 text-stis-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                              {standard.score}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span
                              className={`font-semibold ${getStatusColor(
                                standard.status,
                              )}`}
                            >
                              {standard.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-stis-green-50 px-8 py-4 rounded-lg">
                <Star className="w-8 h-8 text-stis-green-600" />
                <div className="text-left">
                  <p className="font-bold text-xl text-stis-green-800">
                    Rata-rata Skor: 3.67
                  </p>
                  <p className="text-stis-green-600">Status: Unggul (A)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Pencapaian Akreditasi
            </h2>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-stis-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-xl text-gray-900">
                            {achievement.title}
                          </h3>
                          <span className="bg-stis-blue-100 text-stis-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
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

      {/* Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Dokumen Akreditasi
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Sertifikat Akreditasi Institusi
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Sertifikat akreditasi institusi dari BAN-PT
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-stis-green-600 text-stis-green-600 hover:bg-stis-green-600 hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Sertifikat Program Studi
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Sertifikat akreditasi semua program studi
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-stis-green-600 text-stis-green-600 hover:bg-stis-green-600 hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      ZIP
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Laporan Evaluasi Diri
                      </h3>
                      <p className="text-gray-600 text-sm">
                        LED untuk akreditasi institusi dan program studi
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-stis-green-600 text-stis-green-600 hover:bg-stis-green-600 hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Matriks Penilaian
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Detail penilaian dari assessor BAN-PT
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-stis-green-600 text-stis-green-600 hover:bg-stis-green-600 hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      XLS
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                statistik.
              </p>
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
