import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  FileText,
  Mail,
  MapPin,
  Phone,
  Calendar,
  CheckCircle,
  AlertCircle,
  Download,
  Send,
  Clock,
  Users,
  FileCheck,
  Shield,
  ArrowRight,
  Info,
} from "lucide-react";

export default function ProsedurLegalisir() {
  const persyaratan = [
    {
      icon: FileText,
      title: "Surat Permohonan",
      description:
        "Surat permohonan legalisir kepada Direktur Polstat STIS sesuai format",
      required: true,
    },
    {
      icon: GraduationCap,
      title: "Fotokopi Ijazah/Transkrip",
      description:
        "Fotokopi dokumen yang akan dilegalisir dengan kualitas jelas",
      required: true,
    },
    {
      icon: Users,
      title: "Identitas Pemohon",
      description: "KTP/identitas diri yang masih berlaku",
      required: true,
    },
    {
      icon: FileCheck,
      title: "Dokumen Pendukung",
      description:
        "Surat tugas atau surat keterangan dari instansi (jika diperlukan)",
      required: false,
    },
  ];

  const prosedur = [
    {
      step: 1,
      title: "Pengajuan Permohonan",
      description: "Kirimkan surat permohonan melalui email atau pos",
      details: [
        "Email: alumni@stis.ac.id (gunakan email pribadi)",
        "Pos: Politeknik Statistika STIS, Jl. Otto Iskandardinata No. 64C, Jakarta Timur 13330",
        "Sertakan semua persyaratan yang diperlukan",
      ],
      icon: Send,
      color: "bg-stis-blue-600",
    },
    {
      step: 2,
      title: "Verifikasi Dokumen",
      description: "Tim verifikasi akan memeriksa kelengkapan dokumen",
      details: [
        "Verifikasi identitas pemohon",
        "Validasi dokumen ijazah/transkrip",
        "Pengecekan masa penugasan di BPS",
      ],
      icon: FileCheck,
      color: "bg-stis-orange-600",
    },
    {
      step: 3,
      title: "Proses Legalisir",
      description: "Dokumen akan diproses dalam waktu 6 hari kerja",
      details: [
        "Pemberian cap dan tanda tangan resmi",
        "Pencatatan dalam sistem legalisir",
        "Persiapan untuk pengiriman",
      ],
      icon: Shield,
      color: "bg-stis-green-600",
    },
    {
      step: 4,
      title: "Pengambilan/Pengiriman",
      description: "Dokumen yang sudah dilegalisir dapat diambil atau dikirim",
      details: [
        "Email: Scan dokumen dikirim via email",
        "Kampus: Diambil langsung di kampus",
        "Pos: Dikirim ke alamat pemohon (gratis)",
      ],
      icon: Download,
      color: "bg-purple-600",
    },
  ];

  const ketentuan = [
    {
      title: "Masa Penugasan ≥ 4 Tahun",
      description:
        "Maksimal 5 lembar untuk ijazah dan transkrip (Bahasa Indonesia & Inggris)",
      icon: CheckCircle,
      color: "text-stis-green-600",
    },
    {
      title: "Masa Penugasan < 4 Tahun",
      description:
        "Maksimal 2 lembar ijazah; transkrip hanya untuk izin belajar",
      icon: AlertCircle,
      color: "text-stis-orange-600",
    },
  ];

  const kontak = {
    telepon: "(021) 8508812 atau (021) 8191437 EXT 207",
    email: "alumni@stis.ac.id",
    alamat: "Jl. Otto Iskandardinata No. 64C, Jakarta Timur 13330",
    jamKerja: "08:00 - 16:00 WIB (Senin - Jumat)",
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-stis-orange-400 mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Prosedur Legalisir
            </h1>
          </div>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto mb-8">
            Panduan lengkap untuk mengajukan legalisir ijazah dan transkrip
            Politeknik Statistika STIS
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge
              variant="secondary"
              className="bg-stis-orange-100 text-stis-orange-800 px-4 py-2"
            >
              <Clock className="w-4 h-4 mr-2" />
              Proses 6 Hari Kerja
            </Badge>
            <Badge
              variant="secondary"
              className="bg-stis-green-100 text-stis-green-800 px-4 py-2"
            >
              <Mail className="w-4 h-4 mr-2" />
              Gratis Pengiriman
            </Badge>
          </div>
        </div>
      </section>

      {/* Persyaratan Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Persyaratan Legalisir
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {persyaratan.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-stis-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-stis-blue-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg flex items-center">
                            {item.title}
                            {item.required && (
                              <Badge
                                variant="destructive"
                                className="ml-2 text-xs"
                              >
                                Wajib
                              </Badge>
                            )}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Ketentuan Khusus */}
            <Card className="bg-gradient-to-r from-stis-blue-50 to-stis-green-50 border-l-4 border-stis-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center text-stis-blue-900">
                  <Info className="w-6 h-6 mr-3" />
                  Ketentuan Jumlah Legalisir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {ketentuan.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon
                          className={`w-6 h-6 ${item.color} flex-shrink-0 mt-1`}
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prosedur Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Langkah-langkah Prosedur
            </h2>

            <div className="space-y-8">
              {prosedur.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === prosedur.length - 1;

                return (
                  <div key={index} className="relative">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                          {/* Step Number & Icon */}
                          <div className="flex items-center space-x-4 flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-r from-stis-blue-600 to-stis-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                              {step.step}
                            </div>
                            <div
                              className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center`}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="font-bold text-xl text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {step.description}
                            </p>
                            <ul className="space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="flex items-start space-x-2 text-sm text-gray-700"
                                >
                                  <CheckCircle className="w-4 h-4 text-stis-green-600 flex-shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Arrow for next step */}
                    {!isLast && (
                      <div className="flex justify-center my-6">
                        <ArrowRight className="w-8 h-8 text-stis-blue-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Informasi Kontak
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-stis-blue-900">
                    <Phone className="w-6 h-6 mr-3" />
                    Telepon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium mb-2">
                    {kontak.telepon}
                  </p>
                  <p className="text-sm text-gray-600">
                    Konfirmasi penerimaan surat pos minimal 1 hari kerja setelah
                    pengiriman
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-stis-blue-900">
                    <Mail className="w-6 h-6 mr-3" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium mb-2">
                    {kontak.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    Gunakan email pribadi, bukan email BPS
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-stis-blue-900">
                    <MapPin className="w-6 h-6 mr-3" />
                    Alamat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium mb-2">
                    {kontak.alamat}
                  </p>
                  <p className="text-sm text-gray-600">
                    Untuk pengiriman surat dan pengambilan langsung
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-stis-blue-900">
                    <Clock className="w-6 h-6 mr-3" />
                    Jam Kerja
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium mb-2">
                    {kontak.jamKerja}
                  </p>
                  <p className="text-sm text-gray-600">
                    Khusus hari kerja, tidak melayani hari libur
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-stis-blue-600 to-stis-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4">
              Siap Mengajukan Legalisir?
            </h3>
            <p className="text-stis-blue-100 mb-8 leading-relaxed">
              Pastikan semua persyaratan telah lengkap sebelum mengirimkan
              permohonan. Tim kami siap membantu proses legalisir Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-stis-orange-600 hover:bg-stis-orange-700 text-white border-none"
                onClick={() => window.open(`mailto:${kontak.email}`, "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Kirim Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stis-blue-700"
                onClick={() =>
                  window.open(`tel:${kontak.telepon.split(" ")[0]}`, "_blank")
                }
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
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
                statistik.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Layanan Alumni</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Legalisir Ijazah
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Surat Keterangan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Database Alumni
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
                <li>Email: alumni@stis.ac.id</li>
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
