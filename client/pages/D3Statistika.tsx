import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Award,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";

export default function D3Statistika() {
  const curriculum = [
    {
      semester: "Semester 1",
      courses: [
        "Matematika Dasar",
        "Statistika Dasar",
        "Pengantar Ekonomi",
        "Bahasa Indonesia",
        "Bahasa Inggris",
        "Komputer",
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        "Matematika Lanjutan",
        "Statistika Matematika I",
        "Ekonomi Mikro",
        "Akuntansi",
        "Metodologi Penelitian",
        "Algoritma Pemrograman",
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        "Statistika Matematika II",
        "Metode Survei",
        "Ekonomi Makro",
        "Demografi",
        "Statistika Nonparametrik",
        "Basis Data",
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        "Regresi Terapan",
        "Sampling",
        "Ekonometrika",
        "Statistika Sosial",
        "Sistem Informasi Statistik",
        "Analisis Runtun Waktu",
      ],
    },
    {
      semester: "Semester 5",
      courses: [
        "Analisis Multivariat",
        "Pengendalian Mutu Statistik",
        "Statistika Industri",
        "Praktik Kerja Lapangan",
        "Tugas Akhir",
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        "Analisis Data Kategorik",
        "Statistika Terapan",
        "Seminar",
        "Tugas Akhir (Lanjutan)",
      ],
    },
  ];

  const competencies = [
    {
      title: "Pengumpulan Data",
      description:
        "Mampu merancang dan melaksanakan survei statistik dengan metodologi yang tepat",
      icon: Users,
    },
    {
      title: "Pengolahan Data",
      description:
        "Terampil mengolah data menggunakan software statistik modern",
      icon: BookOpen,
    },
    {
      title: "Analisis Statistik",
      description:
        "Mampu melakukan analisis data dengan metode statistik yang sesuai",
      icon: Target,
    },
    {
      title: "Interpretasi Hasil",
      description:
        "Dapat menginterpretasikan hasil analisis dan membuat rekomendasi",
      icon: CheckCircle,
    },
  ];

  const careerProspects = [
    "Statistisi di Badan Pusat Statistik (BPS)",
    "Analis Data di Kementerian/Lembaga Pemerintah",
    "Market Research Analyst di perusahaan swasta",
    "Quality Control Analyst di industri manufaktur",
    "Data Analyst di perbankan dan keuangan",
    "Research Assistant di lembaga penelitian",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-stis-orange-400 mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              D3 Statistika
            </h1>
          </div>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Program Diploma III Statistika yang mempersiapkan tenaga ahli madya
            statistik yang kompeten dan profesional
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <Clock className="w-12 h-12 text-stis-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    3 Tahun
                  </h3>
                  <p className="text-gray-600">Durasi Studi</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-stis-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Akreditasi A
                  </h3>
                  <p className="text-gray-600">BAN-PT</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-stis-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    120 SKS
                  </h3>
                  <p className="text-gray-600">Total SKS</p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <h2 className="font-display font-bold text-3xl text-gray-900 mb-6 text-center">
                  Tentang Program D3 Statistika
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Program Diploma III Statistika STIS dirancang untuk
                    menghasilkan tenaga ahli madya di bidang statistik yang
                    memiliki kompetensi dalam pengumpulan, pengolahan, analisis,
                    dan interpretasi data statistik. Program ini menggabungkan
                    teori statistik dengan aplikasi praktis dalam berbagai
                    bidang.
                  </p>
                  <p className="mb-4">
                    Lulusan D3 Statistika akan memiliki kemampuan untuk
                    merancang survei, mengolah data menggunakan software
                    statistik, melakukan analisis data, dan menyajikan hasil
                    analisis dalam bentuk yang mudah dipahami. Program ini juga
                    menekankan pada pengembangan soft skills seperti komunikasi,
                    kerja tim, dan pemecahan masalah.
                  </p>
                  <p>
                    Dengan kurikulum yang selalu mengikuti perkembangan ilmu
                    statistik dan kebutuhan industri, lulusan D3 Statistika STIS
                    sangat diminati oleh berbagai instansi pemerintah dan
                    perusahaan swasta.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Kompetensi Lulusan
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {competencies.map((competency, index) => {
                const Icon = competency.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-stis-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gray-900 mb-3">
                            {competency.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {competency.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Kurikulum
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curriculum.map((sem, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="bg-stis-blue-600 text-white">
                    <CardTitle className="text-center">
                      {sem.semester}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {sem.courses.map((course, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 text-sm leading-relaxed"
                        >
                          • {course}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Prospek Karier
            </h2>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-xl text-stis-blue-600 mb-6">
                      Peluang Kerja
                    </h3>
                    <ul className="space-y-3">
                      {careerProspects.map((career, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-stis-green-600 flex-shrink-0 mt-0.5" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-stis-green-600 mb-6">
                      Kelebihan Lulusan
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Langsung siap kerja dengan skill praktis</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Memahami aplikasi statistik dalam dunia nyata
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Kemampuan komunikasi data yang baik</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Pengalaman praktik kerja lapangan</span>
                      </li>
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
