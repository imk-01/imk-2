import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Award,
  Users,
  Target,
  CheckCircle,
  Code,
  Database,
  Brain,
} from "lucide-react";

export default function D4KomputasiStatistika() {
  const curriculum = [
    {
      semester: "Semester 1",
      courses: [
        "Matematika Dasar",
        "Statistika Dasar",
        "Pengantar Ilmu Komputer",
        "Bahasa Indonesia",
        "Bahasa Inggris",
        "Pemrograman Dasar",
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        "Kalkulus dan Aljabar Linear",
        "Statistika Matematika I",
        "Pemrograman Berorientasi Objek",
        "Struktur Data dan Algoritma",
        "Basis Data",
        "Jaringan Komputer",
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        "Statistika Matematika II",
        "Metode Numerik",
        "Pemrograman Web",
        "Sistem Operasi",
        "Analisis Regresi",
        "Data Mining Dasar",
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        "Machine Learning",
        "Big Data Analytics",
        "Pemrograman Python/R",
        "Cloud Computing",
        "Analisis Multivariat",
        "Visualisasi Data",
      ],
    },
    {
      semester: "Semester 5",
      courses: [
        "Deep Learning",
        "Natural Language Processing",
        "Time Series Analytics",
        "Distributed Computing",
        "Data Warehouse",
        "Computer Vision",
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        "Advanced Analytics",
        "Artificial Intelligence",
        "Blockchain for Data",
        "IoT and Edge Computing",
        "Research Methodology",
        "Seminar Proposal",
      ],
    },
    {
      semester: "Semester 7",
      courses: [
        "Capstone Project I",
        "Industry Internship",
        "Advanced Machine Learning",
        "Data Ethics and Privacy",
        "Tugas Akhir I",
      ],
    },
    {
      semester: "Semester 8",
      courses: [
        "Capstone Project II",
        "Entrepreneurship",
        "Professional Ethics",
        "Tugas Akhir II",
        "Seminar Hasil",
      ],
    },
  ];

  const competencies = [
    {
      title: "Data Science & Analytics",
      description:
        "Mahir dalam analisis data kompleks menggunakan algoritma machine learning dan artificial intelligence",
      icon: Brain,
    },
    {
      title: "Programming & Development",
      description:
        "Menguasai bahasa pemrograman modern (Python, R, SQL) dan framework untuk data science",
      icon: Code,
    },
    {
      title: "Big Data Technologies",
      description:
        "Terampil menggunakan teknologi big data seperti Hadoop, Spark, dan cloud computing platforms",
      icon: Database,
    },
    {
      title: "Statistical Computing",
      description:
        "Mampu mengembangkan aplikasi dan sistem untuk komputasi statistik yang efisien dan scalable",
      icon: Target,
    },
  ];

  const careerProspects = [
    "Data Scientist di tech companies",
    "Machine Learning Engineer",
    "Big Data Analyst/Engineer",
    "Business Intelligence Developer",
    "AI/ML Research Scientist",
    "Statistical Software Developer",
    "Cloud Data Architect",
    "Data Platform Engineer",
    "Quantitative Analyst (Fintech)",
    "Computer Vision Engineer",
  ];

  const technologies = [
    "Python, R, SQL, Java",
    "TensorFlow, PyTorch, Scikit-learn",
    "Hadoop, Spark, Kafka",
    "AWS, Google Cloud, Azure",
    "Docker, Kubernetes",
    "MongoDB, PostgreSQL, Redis",
    "Tableau, Power BI, D3.js",
    "Git, Jenkins, MLOps",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-16 h-16 text-stis-orange-400 mr-4" />
            <h1 className="font-display font-bold text-3xl lg:text-5xl text-white leading-tight">
              D4 Komputasi Statistika
            </h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Program inovatif yang menggabungkan ilmu statistik dengan teknologi
            komputasi modern untuk menghasilkan data scientist dan AI specialist
            masa depan
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
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
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
                  <Users className="w-12 h-12 text-stis-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    144 SKS
                  </h3>
                  <p className="text-gray-600">Total SKS</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <Brain className="w-12 h-12 text-stis-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    S.Tr.Kom
                  </h3>
                  <p className="text-gray-600">Gelar Lulusan</p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <h2 className="font-display font-bold text-3xl text-gray-900 mb-6 text-center">
                  Tentang Program D4 Komputasi Statistika
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Program D4 Komputasi Statistika adalah program inovatif yang
                    menggabungkan kekuatan ilmu statistik dengan teknologi
                    komputasi terkini. Program ini dirancang untuk menghasilkan
                    lulusan yang menguasai data science, machine learning,
                    artificial intelligence, dan big data analytics.
                  </p>
                  <p className="mb-4">
                    Kurikulum dirancang mengikuti perkembangan industri 4.0 dan
                    era digital, dengan penekanan pada programming, statistical
                    computing, cloud technologies, dan advanced analytics.
                    Mahasiswa akan belajar menggunakan tools dan framework
                    terdepan seperti Python, R, TensorFlow, Hadoop, dan berbagai
                    cloud platforms.
                  </p>
                  <p>
                    Sebagai program termuda di STIS (dibuka 2015), D4 Komputasi
                    Statistika telah terbukti menghasilkan lulusan yang sangat
                    diminati industri teknologi, startup, dan perusahaan
                    multinasional yang membutuhkan expertise di bidang data
                    science dan AI.
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
                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Technologies Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Technology Stack
            </h2>

            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-xl text-purple-600 mb-6">
                      Tools & Technologies
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-3 rounded-lg text-center text-sm font-medium text-gray-700"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-stis-blue-600 mb-6">
                      Fokus Pembelajaran
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Machine Learning & Deep Learning</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Big Data Processing & Analytics</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Cloud Computing & DevOps</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Statistical Software Development</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Data Visualization & BI</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gray-50">
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
                  <CardHeader className="bg-purple-600 text-white">
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

      {/* Career Prospects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Prospek Karier
            </h2>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-xl text-purple-600 mb-6">
                      High-Demand Careers
                    </h3>
                    <ul className="space-y-3">
                      {careerProspects.slice(0, 5).map((career, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-stis-green-600 mb-6">
                      Emerging Opportunities
                    </h3>
                    <ul className="space-y-3">
                      {careerProspects.slice(5).map((career, index) => (
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
                </div>
                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-lg text-purple-800 mb-3">
                    Salary Range (Fresh Graduate)
                  </h4>
                  <p className="text-purple-700">
                    Rp 8-15 juta/bulan untuk posisi entry-level di startup dan
                    tech companies, dengan potensi naik hingga Rp 25+ juta/bulan
                    untuk senior positions dalam 3-5 tahun.
                  </p>
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
