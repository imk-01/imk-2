import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, UserCheck, Crown, Award } from "lucide-react";
import Footer from "@/components/footer";

export default function StrukturOrganisasi() {
  const leadership = [
    {
      position: "Direktur",
      name: "Dr. Ing. Ir. M. Haviz Irfani, M.T.",
      description: "Memimpin dan mengelola seluruh kegiatan institusi",
      icon: Crown,
      color: "bg-stis-blue-600",
    },
    {
      position: "Wakil Direktur Bidang Akademik",
      name: "Dr. Drs. Farid Makhluf, M.Si.",
      description: "Mengelola bidang akademik dan kurikulum",
      icon: Award,
      color: "bg-stis-green-600",
    },
    {
      position: "Wakil Direktur Bidang Umum",
      name: "Ir. Dedi Haryadi, M.Si.",
      description: "Mengelola administrasi umum dan keuangan",
      icon: Building,
      color: "bg-stis-orange-600",
    },
  ];

  const departments = [
    {
      title: "Jurusan Statistika",
      head: "Dr. Dra. Niken Prastyani, M.Si.",
      programs: ["D3 Statistika", "D4 Statistika"],
      staff: 25,
      color: "bg-blue-100 border-blue-300",
    },
    {
      title: "Jurusan Komputasi Statistika",
      head: "Dr. Ing. Ir. Adi Setiawan, M.Kom.",
      programs: ["D4 Komputasi Statistika"],
      staff: 18,
      color: "bg-green-100 border-green-300",
    },
  ];

  const supportUnits = [
    {
      title: "Unit Penelitian dan Pengabdian Masyarakat",
      head: "Dr. Ir. Bambang Suharjo, M.Sc.",
      description:
        "Mengelola kegiatan penelitian dan pengabdian kepada masyarakat",
    },
    {
      title: "Unit Penjaminan Mutu",
      head: "Dr. Dra. Sri Winarni, M.Si.",
      description: "Mengawasi dan menjamin mutu pendidikan",
    },
    {
      title: "Unit Perpustakaan",
      head: "Dra. Siti Nurhasanah, M.Si.",
      description: "Mengelola koleksi dan layanan perpustakaan",
    },
    {
      title: "Unit Teknologi Informasi",
      head: "Ir. Ahmad Fauzi, M.T.",
      description: "Mengelola infrastruktur dan sistem informasi",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Struktur Organisasi
          </h1>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Organisasi dan kepemimpinan Politeknik Statistika STIS dalam
            menjalankan tri dharma perguruan tinggi
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Pimpinan Institusi
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {leadership.map((leader, index) => {
                const Icon = leader.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-8">
                      <div
                        className={`w-20 h-20 ${leader.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">
                        {leader.position}
                      </h3>
                      <p className="font-medium text-stis-blue-600 mb-4">
                        {leader.name}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {leader.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Jurusan
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {departments.map((dept, index) => (
                <Card
                  key={index}
                  className={`border-2 ${dept.color} hover:shadow-xl transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Users className="w-8 h-8 text-stis-blue-600 mr-3" />
                      <h3 className="font-bold text-2xl text-gray-900">
                        {dept.title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-gray-700">
                          Ketua Jurusan:
                        </p>
                        <p className="text-stis-blue-600 font-semibold">
                          {dept.head}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">
                          Program Studi:
                        </p>
                        <ul className="text-gray-600">
                          {dept.programs.map((program, idx) => (
                            <li key={idx}>• {program}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">
                          Jumlah Dosen: {dept.staff} orang
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

      {/* Support Units Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Unit Penunjang
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {supportUnits.map((unit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-stis-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                          {unit.title}
                        </h3>
                        <p className="font-medium text-stis-blue-600 mb-3">
                          Kepala: {unit.head}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {unit.description}
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

      {/* Organizational Chart */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Bagan Organisasi
            </h2>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="bg-stis-blue-600 text-white p-4 rounded-lg inline-block mb-8">
                    <h3 className="font-bold text-lg">DIREKTUR</h3>
                    <p className="text-sm">
                      Dr. Ing. Ir. M. Haviz Irfani, M.T.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-stis-green-600 text-white p-4 rounded-lg">
                      <h4 className="font-bold">WADIR AKADEMIK</h4>
                      <p className="text-sm">Dr. Drs. Farid Makhluf, M.Si.</p>
                    </div>
                    <div className="bg-stis-orange-600 text-white p-4 rounded-lg">
                      <h4 className="font-bold">WADIR UMUM</h4>
                      <p className="text-sm">Ir. Dedi Haryadi, M.Si.</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-4 gap-4">
                    <div className="bg-blue-100 border-2 border-blue-300 p-4 rounded-lg">
                      <h5 className="font-bold text-sm">Jurusan Statistika</h5>
                    </div>
                    <div className="bg-green-100 border-2 border-green-300 p-4 rounded-lg">
                      <h5 className="font-bold text-sm">
                        Jurusan Komputasi Statistika
                      </h5>
                    </div>
                    <div className="bg-yellow-100 border-2 border-yellow-300 p-4 rounded-lg">
                      <h5 className="font-bold text-sm">Unit P2M</h5>
                    </div>
                    <div className="bg-purple-100 border-2 border-purple-300 p-4 rounded-lg">
                      <h5 className="font-bold text-sm">Unit Penunjang</h5>
                    </div>
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
