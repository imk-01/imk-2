import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import {
  Shield,
  Clock,
  CheckCircle,
  Users,
  Phone,
  Mail,
  Download,
  AlertTriangle,
  Heart,
  Star,
} from "lucide-react";

export default function MaklumatPelayanan() {
  const serviceStandards = [
    {
      service: "Legalisir Ijazah/Transkrip",
      requirement: "Ijazah/transkrip asli, fotokopi, identitas",
      time: "3 hari kerja",
      cost: "Gratis",
      responsibleUnit: "Bagian Akademik",
      quality: "100% akurat, sesuai dokumen asli",
    },
    {
      service: "Surat Keterangan Mahasiswa",
      requirement: "KTM, formulir permohonan",
      time: "1 hari kerja",
      cost: "Gratis",
      responsibleUnit: "Bagian Kemahasiswaan",
      quality: "Data valid dan terkini",
    },
    {
      service: "Surat Keterangan Lulus",
      requirement: "Identitas, bukti kelulusan",
      time: "2 hari kerja",
      cost: "Gratis",
      responsibleUnit: "Bagian Akademik",
      quality: "Sesuai data akademik resmi",
    },
    {
      service: "Informasi Akademik",
      requirement: "Identitas pemohon",
      time: "Langsung",
      cost: "Gratis",
      responsibleUnit: "Bagian Akademik",
      quality: "Informasi lengkap dan akurat",
    },
    {
      service: "Konsultasi Akademik",
      requirement: "Perjanjian konsultasi",
      time: "30 menit",
      cost: "Gratis",
      responsibleUnit: "Dosen Pembimbing",
      quality: "Panduan profesional dan konstruktif",
    },
  ];

  const serviceCommitments = [
    {
      title: "Pelayanan Prima",
      description:
        "Memberikan pelayanan terbaik dengan sikap ramah, profesional, dan berorientasi pada kepuasan pengguna",
      icon: Star,
      color: "text-stis-blue-600",
    },
    {
      title: "Transparansi",
      description:
        "Memberikan informasi yang jelas tentang prosedur, waktu, dan biaya pelayanan",
      icon: Shield,
      color: "text-stis-green-600",
    },
    {
      title: "Akuntabilitas",
      description:
        "Bertanggung jawab penuh atas kualitas pelayanan dan menindaklanjuti keluhan/saran",
      icon: CheckCircle,
      color: "text-stis-orange-600",
    },
    {
      title: "Responsivitas",
      description:
        "Merespon kebutuhan dan keluhan masyarakat dengan cepat dan tepat",
      icon: Clock,
      color: "text-purple-600",
    },
  ];

  const rightsDuties = {
    rights: [
      "Mendapatkan pelayanan sesuai standar yang ditetapkan",
      "Memperoleh informasi yang jelas dan akurat",
      "Menyampaikan keluhan dan saran",
      "Mendapatkan kompensasi jika pelayanan tidak sesuai standar",
      "Diperlakukan dengan hormat dan tidak diskriminatif",
    ],
    duties: [
      "Menyampaikan informasi secara jujur dan lengkap",
      "Mematuhi prosedur pelayanan yang ditetapkan",
      "Menghormati petugas pelayanan",
      "Menjaga ketertiban dan keamanan lingkungan",
      "Memberikan feedback konstruktif untuk perbaikan pelayanan",
    ],
  };

  const complaintProcess = [
    {
      step: "1",
      title: "Penerimaan Keluhan",
      description: "Keluhan dapat disampaikan melalui berbagai saluran resmi",
      details: ["Kotak saran", "Email resmi", "Telepon", "Datang langsung"],
    },
    {
      step: "2",
      title: "Verifikasi dan Analisis",
      description: "Tim akan memverifikasi dan menganalisis keluhan",
      details: ["Verifikasi data", "Analisis masalah", "Identifikasi solusi"],
    },
    {
      step: "3",
      title: "Tindak Lanjut",
      description: "Pelaksanaan perbaikan sesuai temuan analisis",
      details: ["Perbaikan proses", "Koordinasi unit terkait", "Monitoring"],
    },
    {
      step: "4",
      title: "Konfirmasi",
      description: "Konfirmasi penyelesaian kepada pengadu",
      details: ["Laporan hasil", "Konfirmasi kepuasan", "Follow up"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-stis-orange-400 mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Maklumat Pelayanan
            </h1>
          </div>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Komitmen Politeknik Statistika STIS dalam memberikan pelayanan
            berkualitas kepada seluruh civitas akademika dan masyarakat
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h2 className="font-bold text-xl text-gray-900 mb-2">
                      Dokumen Maklumat Pelayanan Resmi
                    </h2>
                    <p className="text-gray-600">
                      Unduh dokumen lengkap maklumat pelayanan STIS
                    </p>
                  </div>
                  <Button className="bg-stis-blue-600 hover:bg-stis-blue-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Commitments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Komitmen Pelayanan
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {serviceCommitments.map((commitment, index) => {
                const Icon = commitment.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-8">
                      <Icon
                        className={`w-16 h-16 mx-auto mb-4 ${commitment.color}`}
                      />
                      <h3 className="font-bold text-xl text-gray-900 mb-4">
                        {commitment.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {commitment.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Standar Pelayanan
            </h2>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-stis-blue-600 text-white">
                      <tr>
                        <th className="text-left py-4 px-6 font-bold">
                          Jenis Pelayanan
                        </th>
                        <th className="text-left py-4 px-6 font-bold">
                          Persyaratan
                        </th>
                        <th className="text-center py-4 px-6 font-bold">
                          Waktu
                        </th>
                        <th className="text-center py-4 px-6 font-bold">
                          Biaya
                        </th>
                        <th className="text-left py-4 px-6 font-bold">
                          Unit Penanggung Jawab
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceStandards.map((service, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-4 px-6 font-medium text-gray-900">
                            {service.service}
                          </td>
                          <td className="py-4 px-6 text-gray-700 text-sm">
                            {service.requirement}
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className="bg-stis-green-100 text-stis-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {service.time}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className="bg-stis-blue-100 text-stis-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {service.cost}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-gray-700 font-medium">
                            {service.responsibleUnit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rights and Duties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Hak dan Kewajiban
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Rights */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-stis-green-600 text-white">
                  <CardTitle className="flex items-center">
                    <Heart className="w-6 h-6 mr-3" />
                    Hak Pengguna Layanan
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {rightsDuties.rights.map((right, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-stis-green-600 flex-shrink-0 mt-0.5" />
                        <span>{right}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Duties */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-stis-orange-600 text-white">
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    Kewajiban Pengguna Layanan
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {rightsDuties.duties.map((duty, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-stis-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Saluran Pengaduan
            </h2>

            <Card className="p-8 bg-gradient-to-r from-stis-blue-50 to-stis-green-50">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-stis-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Telepon
                    </h4>
                    <p className="text-gray-600">(021) 8191437</p>
                    <p className="text-sm text-gray-500">
                      Senin-Jumat: 08.00-16.00
                    </p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-stis-green-600 mx-auto mb-3" />
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Email
                    </h4>
                    <p className="text-gray-600">pengaduan@stis.ac.id</p>
                    <p className="text-sm text-gray-500">
                      Respon maksimal 2x24 jam
                    </p>
                  </div>
                  <div className="text-center">
                    <AlertTriangle className="w-12 h-12 text-stis-orange-600 mx-auto mb-3" />
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      Kotak Saran
                    </h4>
                    <p className="text-gray-600">Lobby Gedung Utama</p>
                    <p className="text-sm text-gray-500">
                      Tersedia 24 jam setiap hari
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
