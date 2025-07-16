import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Users, Building } from "lucide-react";
import Footer from "@/components/Footer";

export default function Sejarah() {
  const timelineEvents = [
    {
      year: "1958",
      title: "Pendirian Akademi Ilmu Statistik (AIS)",
      description:
        "Perdana Menteri Ir. H. Djuanda mengeluarkan SK No. 377/PM/1958 tentang pendirian AIS untuk mendidik tenaga statistik semi-ahli. AIS mendapat dukungan dari PBB melalui Statistical Research and Development Centre.",
      icon: Building,
      color: "bg-stis-blue-600",
    },
    {
      year: "1964",
      title: "Didirikannya PTIS",
      description:
        "BPS mendirikan Perguruan Tinggi Ilmu Statistik (PTIS) untuk meningkatkan pendidikan lulusan AIS, dengan bantuan dosen dari PBB. Namun, PTIS ditutup pada 1965 saat Indonesia keluar dari PBB.",
      icon: Users,
      color: "bg-stis-green-600",
    },
    {
      year: "1997–1998",
      title: "STIS Didirikan",
      description:
        "Dengan persetujuan Ditjen Dikti melalui surat No. 295/D/T/97 dan Keppres No. 163 Tahun 1998, STIS resmi berdiri dengan dua jurusan: Statistika dan Komputasi Statistik.",
      icon: Award,
      color: "bg-stis-orange-600",
    },
    {
      year: "2012–2016",
      title: "Transformasi Menjadi Politeknik Statistika STIS",
      description:
        "UU No. 12 Tahun 2012 mendorong perubahan bentuk kelembagaan STIS menjadi Politeknik. SK No. 429/KPT/I/2016 dari Menristekdikti menyetujui pembukaan program studi baru dalam rangka transformasi.",
      icon: Building,
      color: "bg-stis-blue-700",
    },
    {
      year: "2017",
      title: "Persetujuan Perubahan Status",
      description:
        "Menteri PAN-RB menyetujui perubahan status STIS menjadi Politeknik. Peraturan Kepala BPS No. 87 Tahun 2017 resmi menetapkan struktur organisasi baru Polstat STIS.",
      icon: Award,
      color: "bg-purple-600",
    },
    {
      year: "2018",
      title: "Peluncuran Resmi Polstat STIS",
      description:
        "Politeknik Statistika STIS resmi diluncurkan pada 28 Maret 2018 sebagai bentuk baru dari Sekolah Tinggi Ilmu Statistik.",
      icon: Award,
      color: "bg-stis-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Sejarah STIS
          </h1>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Perjalanan panjang Politeknik Statistika STIS dalam membangun pendidikan statistik di Indonesia
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                  Latar Belakang dan Perkembangan
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
                  <p className="mb-4">
                    Politeknik Statistika STIS adalah perguruan tinggi kedinasan di lingkungan Badan Pusat Statistik (BPS). Pembinaan secara fungsional dilakukan oleh Kepala BPS, sementara pembinaan teknis akademik dilakukan oleh Menteri yang membidangi pendidikan tinggi.
                  </p>
                  <p className="mb-4">
                    Sejarahnya dimulai dari pendirian Akademi Ilmu Statistik (AIS) pada tahun 1958 melalui SK Perdana Menteri Ir. H. Djuanda. AIS didirikan untuk mendidik tenaga pelaksana statistik dan didukung oleh PBB melalui UNDP.
                  </p>
                  <p className="mb-4">
                    Pada 1964, BPS membuka PTIS dengan lulusan AIS sebagai mahasiswa. PTIS sempat tutup pada 1965, namun AIS tetap beroperasi. Pada 1997–1998, STIS resmi berdiri dengan dua jurusan.
                  </p>
                  <p className="mb-4">
                    STIS kemudian bertransformasi menjadi Politeknik Statistika STIS sesuai dengan UU No. 12 Tahun 2012 dan berbagai keputusan pemerintah. Launching resmi Polstat STIS dilakukan pada 28 Maret 2018.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pt-15 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Perjalanan Sejarah
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tonggak-tonggak penting dalam perjalanan Polstat STIS sebagai institusi pendidikan statistik nasional
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className="flex items-start space-x-8">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {index < timelineEvents.length - 1 && (
                        <div className="w-1 h-24 bg-gray-300 mt-4"></div>
                      )}
                    </div>

                    <div className="flex-1 pb-8">
                      <Card className="hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4">
                            <span className="text-3xl font-bold text-stis-blue-600 mr-4">
                              {event.year}
                            </span>
                            <Calendar className="w-5 h-5 text-gray-500" />
                          </div>
                          <h3 className="font-bold text-xl text-gray-900 mb-4">
                            {event.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
