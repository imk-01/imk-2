import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import {
  Target,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  Globe,
  Download,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function RencanaStrategis() {
  const strategicGoals = [
    {
      title: "Peningkatan Kualitas Pendidikan",
      description:
        "Mengembangkan kurikulum yang adaptif dengan perkembangan teknologi dan kebutuhan industri",
      targets: [
        "Akreditasi A untuk semua program studi",
        "Integrasi teknologi digital dalam pembelajaran",
        "Peningkatan kompetensi dosen",
      ],
      icon: BookOpen,
      color: "bg-stis-blue-600",
    },
    {
      title: "Penguatan Penelitian dan Inovasi",
      description:
        "Meningkatkan kapasitas penelitian yang berkualitas dan aplikatif untuk pembangunan nasional",
      targets: [
        "Peningkatan publikasi internasional",
        "Pengembangan pusat riset unggulan",
        "Kerjasama penelitian dengan industri",
      ],
      icon: TrendingUp,
      color: "bg-stis-green-600",
    },
    {
      title: "Pengembangan SDM Berkualitas",
      description:
        "Menghasilkan lulusan yang kompeten dan siap berkontribusi dalam era digital",
      targets: [
        "Peningkatan employability rate 95%",
        "Pengembangan soft skills mahasiswa",
        "Program magang dan praktik industri",
      ],
      icon: Users,
      color: "bg-stis-orange-600",
    },
    {
      title: "Penguatan Tata Kelola Institusi",
      description:
        "Implementasi good governance untuk meningkatkan efektivitas dan transparansi",
      targets: [
        "Digitalisasi sistem administrasi",
        "Implementasi ISO 9001:2015",
        "Peningkatan akuntabilitas keuangan",
      ],
      icon: Award,
      color: "bg-purple-600",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Fase Konsolidasi",
      achievements: [
        "Implementasi kurikulum berbasis KKNI",
        "Peningkatan fasilitas laboratorium",
        "Penguatan sistem informasi akademik",
      ],
    },
    {
      year: "2025",
      title: "Fase Pengembangan",
      achievements: [
        "Pembukaan program magister terapan",
        "Kerjasama internasional",
        "Pusat keunggulan data science",
      ],
    },
    {
      year: "2026",
      title: "Fase Konsolidasi Lanjutan",
      achievements: [
        "Akreditasi institusi A",
        "Recognition sebagai CoE regional",
        "Sustainability program terpadu",
      ],
    },
    {
      year: "2029",
      title: "Fase Transformasi",
      achievements: [
        "Leading institution di Asia Tenggara",
        "Digital university ecosystem",
        "Global research collaboration",
      ],
    },
  ];

  const kpis = [
    {
      indicator: "Akreditasi Program Studi",
      target: "A (Unggul)",
      current: "A",
    },
    { indicator: "Akreditasi Institusi", target: "A (Unggul)", current: "B" },
    { indicator: "Employability Rate", target: "95%", current: "92%" },
    {
      indicator: "Publikasi Internasional",
      target: "50/tahun",
      current: "35/tahun",
    },
    {
      indicator: "Kerjasama Industri",
      target: "25 institusi",
      current: "18 institusi",
    },
    {
      indicator: "Kepuasan Stakeholder",
      target: "4.5/5.0",
      current: "4.2/5.0",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-16 h-16 text-stis-orange-400 mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Rencana Strategis
            </h1>
          </div>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Roadmap pengembangan Politeknik Statistika STIS 2024-2029 menuju
            institusi pendidikan statistik terdepan di Asia Tenggara
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
                      Dokumen Rencana Strategis 2024-2029
                    </h2>
                    <p className="text-gray-600">
                      Unduh dokumen lengkap Renstra STIS dalam format PDF
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

      {/* Vision Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-8">
              Visi Strategis 2029
            </h2>
            <Card className="p-8 bg-gradient-to-r from-stis-blue-50 to-stis-green-50">
              <CardContent className="p-0">
                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed italic mb-6">
                  "Menjadi institusi pendidikan tinggi statistik terdepan di
                  Asia Tenggara yang menghasilkan lulusan berkualitas dunia dan
                  berkontribusi dalam pembangunan berkelanjutan"
                </blockquote>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-stis-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Global Recognition
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Diakui secara internasional
                    </p>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 text-stis-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Excellence
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Standar keunggulan tinggi
                    </p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-stis-orange-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Impact
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Dampak nyata bagi masyarakat
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Tujuan Strategis
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {strategicGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 ${goal.color} rounded-xl flex items-center justify-center`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl text-gray-900">
                          {goal.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {goal.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Target Utama:
                        </h4>
                        <ul className="space-y-2">
                          {goal.targets.map((target, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-gray-700 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-stis-green-600 flex-shrink-0 mt-0.5" />
                              <span>{target}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Roadmap 2024-2029
            </h2>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-8">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-stis-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {milestone.year}
                      </span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-1 h-24 bg-stis-blue-200 mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl text-gray-900 mb-4">
                        {milestone.title}
                      </h3>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-3 text-gray-700"
                          >
                            <CheckCircle className="w-5 h-5 text-stis-green-600 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Key Performance Indicators (KPI)
            </h2>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 font-bold text-gray-900">
                          Indikator Kinerja
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-gray-900">
                          Target 2029
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-gray-900">
                          Capaian 2024
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-gray-900">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {kpis.map((kpi, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-4 px-6 font-medium text-gray-900">
                            {kpi.indicator}
                          </td>
                          <td className="py-4 px-6 text-center font-semibold text-stis-blue-600">
                            {kpi.target}
                          </td>
                          <td className="py-4 px-6 text-center font-semibold text-stis-green-600">
                            {kpi.current}
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                              On Track
                            </span>
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

      <Footer />
    </div>
  );
}
