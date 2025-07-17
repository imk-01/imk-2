import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import {
  Calendar,
  Download,
  Clock,
  BookOpen,
  GraduationCap,
  Users,
  AlertCircle,
} from "lucide-react";

export default function KalenderAkademik() {
  const academicEvents = [
    {
      month: "Agustus 2024",
      events: [
        {
          date: "26-30",
          event: "Masa Perkenalan Kehidupan Kampus Mahasiswa Baru (PKKMB)",
          type: "orientasi",
        },
      ],
    },
    {
      month: "September 2024",
      events: [
        {
          date: "2",
          event: "Perkuliahan Semester Ganjil 2024/2025 Dimulai",
          type: "kuliah",
        },
        {
          date: "16-22",
          event: "Minggu Tenang (Tidak ada kegiatan kemahasiswaan)",
          type: "tenang",
        },
      ],
    },
    {
      month: "Oktober 2024",
      events: [
        {
          date: "7-12",
          event: "Ujian Tengah Semester (UTS) Semester Ganjil",
          type: "ujian",
        },
        {
          date: "21-26",
          event: "Minggu Tenang Pasca UTS",
          type: "tenang",
        },
      ],
    },
    {
      month: "November 2024",
      events: [
        {
          date: "18-23",
          event: "Minggu Tenang Pra UAS",
          type: "tenang",
        },
        {
          date: "25-30",
          event: "Ujian Akhir Semester (UAS) Semester Ganjil",
          type: "ujian",
        },
      ],
    },
    {
      month: "Desember 2024",
      events: [
        {
          date: "2-7",
          event: "UAS Semester Ganjil (Lanjutan)",
          type: "ujian",
        },
        {
          date: "16-31",
          event: "Libur Semester Ganjil",
          type: "libur",
        },
      ],
    },
    {
      month: "Januari 2025",
      events: [
        {
          date: "1-12",
          event: "Libur Semester Ganjil (Lanjutan)",
          type: "libur",
        },
        {
          date: "13",
          event: "Perkuliahan Semester Genap 2024/2025 Dimulai",
          type: "kuliah",
        },
        {
          date: "27-31",
          event: "Minggu Tenang",
          type: "tenang",
        },
      ],
    },
    {
      month: "Maret 2025",
      events: [
        {
          date: "3-8",
          event: "Ujian Tengah Semester (UTS) Semester Genap",
          type: "ujian",
        },
        {
          date: "17-22",
          event: "Minggu Tenang Pasca UTS",
          type: "tenang",
        },
      ],
    },
    {
      month: "April 2025",
      events: [
        {
          date: "14-19",
          event: "Praktik Kerja Lapangan (PKL) Mahasiswa",
          type: "pkl",
        },
      ],
    },
    {
      month: "Mei 2025",
      events: [
        {
          date: "5-10",
          event: "Minggu Tenang Pra UAS",
          type: "tenang",
        },
        {
          date: "12-17",
          event: "Ujian Akhir Semester (UAS) Semester Genap",
          type: "ujian",
        },
        {
          date: "26-31",
          event: "Sidang Tugas Akhir Mahasiswa Tingkat Akhir",
          type: "sidang",
        },
      ],
    },
    {
      month: "Juni 2025",
      events: [
        {
          date: "2-7",
          event: "Sidang Tugas Akhir (Lanjutan)",
          type: "sidang",
        },
        {
          date: "16-21",
          event: "Libur Semester Genap",
          type: "libur",
        },
        {
          date: "23",
          event: "Wisuda Sarjana Terapan Statistika",
          type: "wisuda",
        },
      ],
    },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "orientasi":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "kuliah":
        return "bg-green-100 text-green-800 border-green-200";
      case "ujian":
        return "bg-red-100 text-red-800 border-red-200";
      case "tenang":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "libur":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "pkl":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "sidang":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "wisuda":
        return "bg-pink-100 text-pink-800 border-pink-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const importantDates = [
    {
      title: "Batas Akhir Pengajuan Cuti Akademik",
      date: "30 September 2024",
      icon: Clock,
      color: "text-orange-600",
    },
    {
      title: "Pendaftaran Seminar Proposal TA",
      date: "1-15 Oktober 2024",
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      title: "Pelaksanaan PKL Mahasiswa",
      date: "1-31 Maret 2025",
      icon: Users,
      color: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-16 h-16 text-white mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Kalender Akademik
            </h1>
          </div>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Jadwal lengkap kegiatan akademik Politeknik Statistika STIS untuk
            tahun akademik 2024/2025
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="font-bold text-2xl text-gray-900 mb-4">
                  Download Kalender Akademik
                </h2>
                <p className="text-gray-600 mb-6">
                  Unduh kalender akademik dalam format PDF untuk kemudahan akses
                  offline
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-stis-blue-600 hover:bg-stis-blue-700">
                    <Download className="w-4 h-4 mr-2" />
                    Kalender Akademik 2024/2025
                  </Button>
                  <Button
                    variant="outline"
                    className="border-stis-green-600 text-stis-green-600 hover:bg-stis-green-600 hover:text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Kalender Libur Nasional
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Calendar Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Jadwal Kegiatan Akademik 2024/2025
            </h2>

            <div className="space-y-8">
              {academicEvents.map((monthData, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="bg-stis-blue-600 text-white">
                    <CardTitle className="text-xl font-bold">
                      {monthData.month}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {monthData.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg border-l-4 border-stis-blue-400 bg-white shadow-sm"
                        >
                          <div className="flex-shrink-0">
                            <span className="inline-block bg-stis-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold min-w-[80px] text-center">
                              {event.date}
                            </span>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium text-gray-900 leading-tight">
                              {event.event}
                            </h4>
                          </div>
                          <div className="flex-shrink-0">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getEventColor(
                                event.type,
                              )}`}
                            >
                              {event.type.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-xl text-gray-900 mb-6 text-center">
                  Keterangan Jenis Kegiatan
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-4 h-4 bg-blue-200 rounded-full"></span>
                    <span className="text-sm text-gray-700">Orientasi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-4 h-4 bg-green-200 rounded-full"></span>
                    <span className="text-sm text-gray-700">Perkuliahan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-4 h-4 bg-red-200 rounded-full"></span>
                    <span className="text-sm text-gray-700">Ujian</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-4 h-4 bg-yellow-200 rounded-full"></span>
                    <span className="text-sm text-gray-700">Minggu Tenang</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-4 h-4 bg-purple-200 rounded-full"></span>
                    <span className="text-sm text-gray-700">Libur</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-4 h-4 bg-orange-200 rounded-full"></span>
                    <span className="text-sm text-gray-700">PKL</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-4 h-4 bg-indigo-200 rounded-full"></span>
                    <span className="text-sm text-gray-700">Sidang</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-4 h-4 bg-pink-200 rounded-full"></span>
                    <span className="text-sm text-gray-700">Wisuda</span>
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
