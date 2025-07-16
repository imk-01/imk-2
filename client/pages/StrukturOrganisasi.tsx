import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

export default function StrukturOrganisasi() {
  const director = {
    position: "Direktur",
    name: "Dr. Erni Tri Astuti, M.Math.",
    image: "/erni.jpeg"
  };

  const viceDirectors = [
    {
      position: "Wakil Direktur I",
      name: "Prof. Setia Pramana, Ph.D",
      image: "/setia.jpg"
    },
    {
      position: "Wakil Direktur II",
      name: "Prof. Dr. Hardius Usman, M.Si",
      image: "/hardius.jpg"
    },
    {
      position: "Wakil Direktur III",
      name: "Yunarso Anang, Ph.D",
      image: "/anang.png"
    },
  ];

  const programs = [
    {
      title: "Program Studi D4 Statistika",
      head: "Dr. Azka Ubaidillah, S.ST., M.Si",
      secretary: "Nofita Istiana, SST., M.Stat",
    },
    {
      title: "Program Studi D4 Komputasi Statistika",
      head: "Ibnu Santoso, SST., M.T.",
      secretary: "Dr. Eng. Lya Huliyyatus Suadaa, SST., M.T.",
    },
    {
      title: "Program Studi D3 Statistika",
      head: "Agung Priyo Utomo, S.Si., M.T",
      secretary: "Aisyah Fitri Yuniash, S.ST, SE., M.Si",
    },
  ];

  const supportUnits = [
    {
      title: "Unit Teknologi Informasi",
      head: [
        "Farid Ridho, SST., M.T",
        "Sri Herwanto Dwi Hatmo, S.Si., MA."
      ],
    },
    {
      title: "Unit Perpustakaan",
      head: "Achmad Prasetyo, S.Si., M.M",
    },
    {
      title: "Unit Pembinaan Kemahasiswaan",
      head: "Wahyudin, S.Si., MAP, MPP",
      secretary: "Liza Kurnia Sari, S.Si., M.Stat",
    },
    {
      title: "Hubungan Masyarakat dan Kerjasama",
      head: "Avi R.Widya, SST., M.Si",
    },
    {
      title: "Satuan Penjamin Mutu",
      head: "Nucke Widowati K.P., S.Si, M.Sc, Ph.D",
      secretary: "Efri Diah Utami, SST., M.Stat",
    },
    {
      title: "Satuan Pengawas Internal",
      head: "Hesti Wulan Sari, S.E",
    },
    {
      title: "Bagian Administrasi Umum",
      head: "Bambang Nurcahyo, S.E., M.M",
    },
    {
      title: "Tim Administrasi Akademik & Kemahasiswaan",
      head: "Nurseto Wisnumurti, S.Si., M.Stat",
    },
    {
      title: "Pusat Penelitian dan Pengabdian kepada Masyarakat",
      head: "Dr. Eng. Arie Wahyu Wijayanto, SST., M.T.",
      secretary: "Wahyuni Andriana Sofa, SST, MIDEC",
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
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Pimpinan Institusi
            </h2>

            {/* Direktur */}
            <div className="mb-12 flex justify-center">
              <Card className="text-center w-full max-w-sm">
                <CardContent className="p-6">
                  <img src={director.image} alt={director.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="font-bold text-xl text-gray-900 mb-1">
                    {director.position}
                  </h3>
                  <p className="text-stis-blue-600 font-medium mb-2">
                    {director.name}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Wakil Direktur */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {viceDirectors.map((person, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <img src={person.image} alt={person.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"/>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">
                      {person.position}
                    </h3>
                    <p className="text-stis-blue-600 font-medium mb-2">
                      {person.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Program Studi
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="text-left">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-700">
                      Ketua: <span className="text-stis-blue-600 font-semibold">{program.head}</span>
                    </p>
                    {program.secretary && (
                      <p className="text-gray-700">
                        Sekretaris: <span className="text-stis-blue-600 font-semibold">{program.secretary}</span>
                      </p>
                    )}
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
              Unit dan Layanan Pendukung
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {supportUnits.map((unit, index) => (
                <Card key={index} className="text-left">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {unit.title}
                    </h3>
                    <p className="text-gray-700">
                      Ketua:
                      {Array.isArray(unit.head) ? (
                        <span className="block text-stis-blue-600 font-medium">
                          {unit.head.map((name, i) => (
                            <div key={i}>{name}</div>
                          ))}
                        </span>
                      ) : (
                        <span className="text-stis-blue-600 font-medium"> {unit.head}</span>
                      )}
                    </p>
                    {unit.secretary && (
                      <p className="text-gray-700">
                        Sekretaris: <span className="text-stis-blue-600 font-medium">{unit.secretary}</span>
                      </p>
                    )}
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
              Bagan Organisasi Lengkap
            </h2>
            <div className="overflow-x-auto">
              <img
                src="/struktur-jabatan-2024.png"
                alt="Bagan Organisasi Politeknik Statistika STIS"
                className="w-full h-auto rounded shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
