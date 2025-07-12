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
  TrendingUp,
} from "lucide-react";

export default function D4Statistika() {
  const curriculum = [
    {
      semester: "Semester 1",
      courses: [
        "Matematika Dasar",
        "Statistika Dasar",
        "Pengantar Ekonomi",
        "Bahasa Indonesia",
        "Bahasa Inggris",
        "Komputer dan Pemrograman",
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        "Kalkulus dan Aljabar Linear",
        "Statistika Matematika I",
        "Ekonomi Mikro",
        "Akuntansi dan Keuangan",
        "Metodologi Penelitian",
        "Algoritma dan Struktur Data",
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        "Statistika Matematika II",
        "Metode Survei Lanjutan",
        "Ekonomi Makro",
        "Demografi dan Kependudukan",
        "Analisis Regresi",
        "Sistem Basis Data",
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        "Statistika Nonparametrik",
        "Sampling dan Estimasi",
        "Ekonometrika Lanjutan",
        "Statistika Sosial Ekonomi",
        "Analisis Multivariat",
        "Sistem Informasi Manajemen",
      ],
    },
    {
      semester: "Semester 5",
      courses: [
        "Analisis Runtun Waktu",
        "Pengendalian Mutu Statistik",
        "Riset Operasi",
        "Statistika Industri",
        "Data Mining",
        "Manajemen Proyek",
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        "Analisis Survival",
        "Statistika Bayesian",
        "Simulasi dan Pemodelan",
        "Evaluasi Program",
        "Business Intelligence",
        "Seminar Proposal",
      ],
    },
    {
      semester: "Semester 7",
      courses: [
        "Machine Learning",
        "Big Data Analytics",
        "Statistika Lingkungan",
        "Praktik Kerja Lapangan",
        "Tugas Akhir I",
      ],
    },
    {
      semester: "Semester 8",
      courses: [
        "Etika Profesi",
        "Kewirausahaan",
        "Tugas Akhir II",
        "Seminar Hasil",
      ],
    },
  ];

  const competencies = [
    {
      title: "Metodologi Penelitian",
      description:
        "Menguasai metodologi penelitian statistik dan mampu merancang penelitian yang valid dan reliabel",
      icon: BookOpen,
    },
    {
      title: "Analisis Data Lanjutan",
      description:
        "Mahir dalam analisis statistik kompleks menggunakan software statistik modern dan teknik big data",
      icon: TrendingUp,
    },
    {
      title: "Konsultasi Statistik",
      description:
        "Mampu memberikan konsultasi statistik dan mengkomunikasikan hasil analisis kepada stakeholder",
      icon: Users,
    },
    {
      title: "Manajemen Data",
      description:
        "Terampil dalam manajemen data besar, data cleaning, dan pengembangan sistem informasi statistik",
      icon: Target,
    },
  ];

  const careerProspects = [
    "Statistisi Senior di BPS dan K/L",
    "Data Scientist di perusahaan teknologi",
    "Business Analyst di konsultan manajemen",
    "Research Manager di lembaga riset",
    "Quality Assurance Manager di industri",
    "Statistical Consultant",
    "Academic Researcher",
    "Government Policy Analyst",
  ];

  const advantages = [
    "Kurikulum yang mengintegrasikan teori dan praktik industri",
    "Dosen berpengalaman dengan kualifikasi S2/S3",
    "Fasilitas laboratorium komputer yang lengkap",
    "Kerjasama dengan berbagai institusi dan industri",
    "Program magang di instansi pemerintah dan swasta",
    "Peluang melanjutkan ke program magister",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-green-800 to-stis-green-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-stis-orange-400 mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              D4 Statistika
            </h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Program Diploma IV Statistika yang menghasilkan Sarjana Terapan
            Statistika dengan kompetensi tinggi dalam metodologi statistik dan
            aplikasinya
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <Clock className="w-12 h-12 text-stis-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    4 Tahun
                  </h3>
                  <p className="text-gray-600">Durasi Studi</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-stis-blue-600 mx-auto mb-4" />
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
                    144 SKS
                  </h3>
                  <p className="text-gray-600">Total SKS</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    S.Tr.Stat
                  </h3>
                  <p className="text-gray-600">Gelar Lulusan</p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <h2 className="font-display font-bold text-3xl text-gray-900 mb-6 text-center">
                  Tentang Program D4 Statistika
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Program Diploma IV Statistika STIS dirancang untuk
                    menghasilkan Sarjana Terapan Statistika (S.Tr.Stat) yang
                    memiliki kompetensi tinggi dalam metodologi statistik,
                    analisis data, dan aplikasinya dalam berbagai bidang.
                    Program ini menggabungkan pendidikan teori yang kuat dengan
                    praktik aplikatif yang relevan dengan kebutuhan industri.
                  </p>
                  <p className="mb-4">
                    Kurikulum D4 Statistika dirancang lebih mendalam dibanding
                    D3, dengan penekanan pada kemampuan penelitian, analisis
                    data kompleks, dan pengembangan metodologi statistik.
                    Mahasiswa akan dibekali dengan kemampuan menggunakan
                    software statistik canggih, big data analytics, machine
                    learning, dan business intelligence.
                  </p>
                  <p>
                    Lulusan D4 Statistika memiliki kompetensi setara dengan
                    Sarjana (S1) dan dapat langsung melanjutkan ke program
                    Magister. Program ini sangat diminati oleh instansi
                    pemerintah dan perusahaan swasta yang membutuhkan tenaga
                    ahli statistik dengan kemampuan analitis tinggi.
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
                        <div className="w-12 h-12 bg-stis-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {curriculum.map((sem, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="bg-stis-green-600 text-white">
                    <CardTitle className="text-center text-sm">
                      {sem.semester}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {sem.courses.map((course, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 text-xs leading-relaxed"
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

      {/* Career and Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Career Prospects */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="font-bold text-2xl text-stis-green-600 mb-6">
                    Prospek Karier
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
                </CardContent>
              </Card>

              {/* Program Advantages */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="font-bold text-2xl text-stis-blue-600 mb-6">
                    Keunggulan Program
                  </h3>
                  <ul className="space-y-3">
                    {advantages.map((advantage, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
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
