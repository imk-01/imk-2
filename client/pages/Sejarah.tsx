import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Users, Building } from "lucide-react";

export default function Sejarah() {
  const timelineEvents = [
    {
      year: "1958",
      title: "Pendirian Akademi Ilmu Statistik (AIS)",
      description:
        "Pada tanggal 16 September 1958, berdasarkan Keputusan Presiden No. 163 Tahun 1958, didirikan Akademi Ilmu Statistik (AIS) sebagai cikal bakal STIS.",
      icon: Building,
      color: "bg-stis-blue-600",
    },
    {
      year: "1965",
      title: "Perubahan Status Menjadi STIS",
      description:
        "AIS berubah status menjadi Sekolah Tinggi Ilmu Statistik (STIS) berdasarkan Keputusan Presiden No. 19 Tahun 1965.",
      icon: Award,
      color: "bg-stis-green-600",
    },
    {
      year: "1986",
      title: "Pembukaan Program Diploma IV",
      description:
        "STIS membuka program Diploma IV Statistika untuk memenuhi kebutuhan tenaga ahli statistik yang lebih tinggi.",
      icon: Users,
      color: "bg-stis-orange-600",
    },
    {
      year: "2001",
      title: "Perubahan Status Menjadi Politeknik",
      description:
        "Berdasarkan Keputusan Presiden No. 163 Tahun 2001, STIS berubah status menjadi Politeknik Statistika STIS.",
      icon: Building,
      color: "bg-stis-blue-700",
    },
    {
      year: "2015",
      title: "Pembukaan Program D4 Komputasi Statistika",
      description:
        "Polstat STIS membuka program studi baru D4 Komputasi Statistika untuk menghadapi era digital dan big data.",
      icon: Award,
      color: "bg-purple-600",
    },
    {
      year: "2020",
      title: "Akreditasi A untuk Semua Program Studi",
      description:
        "Semua program studi di Polstat STIS meraih akreditasi A dari BAN-PT, menunjukkan komitmen terhadap kualitas pendidikan.",
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
            Perjalanan panjang Politeknik Statistika STIS dalam mengembangkan
            pendidikan statistik di Indonesia selama lebih dari 60 tahun
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
                  Awal Mula Pendirian
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Politeknik Statistika STIS memiliki sejarah panjang yang
                    dimulai dari kebutuhan bangsa Indonesia akan tenaga ahli
                    statistik yang profesional. Pada masa awal kemerdekaan,
                    Indonesia menghadapi tantangan besar dalam membangun sistem
                    statistik nasional yang kredibel dan dapat diandalkan.
                  </p>
                  <p className="mb-4">
                    Melihat kebutuhan tersebut, pemerintah Indonesia pada tahun
                    1958 memutuskan untuk mendirikan institusi pendidikan khusus
                    yang fokus pada pengembangan ilmu statistik. Inilah yang
                    menjadi cikal bakal berdirinya Politeknik Statistika STIS
                    yang kita kenal sekarang.
                  </p>
                  <p>
                    Sejak berdiri, STIS telah mengalami berbagai transformasi
                    dan perkembangan yang signifikan, mulai dari perubahan
                    status kelembagaan hingga pengembangan program studi yang
                    sesuai dengan perkembangan zaman dan kebutuhan industri.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Perjalanan Sejarah
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tonggak-tonggak penting dalam perjalanan STIS menuju institusi
              pendidikan statistik terdepan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className="flex items-start space-x-8">
                    {/* Timeline Line */}
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

                    {/* Content */}
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

      {/* Legacy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                  Warisan dan Kontribusi
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-xl text-stis-blue-600 mb-4">
                      Kontribusi untuk Bangsa
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Selama lebih dari 60 tahun, STIS telah menghasilkan ribuan
                      lulusan yang tersebar di seluruh Indonesia dan
                      berkontribusi dalam pembangunan nasional melalui keahlian
                      di bidang statistik.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Mencetak lebih dari 5.000 alumni</li>
                      <li>• Melayani kebutuhan BPS dan instansi pemerintah</li>
                      <li>• Mengembangkan metodologi statistik Indonesia</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-stis-blue-600 mb-4">
                      Visi ke Depan
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      STIS terus berinovasi dan beradaptasi dengan perkembangan
                      teknologi dan kebutuhan industri modern, khususnya dalam
                      era big data dan artificial intelligence.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Pengembangan kurikulum berbasis teknologi</li>
                      <li>• Kerjasama internasional</li>
                      <li>• Penelitian dan pengabdian masyarakat</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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
