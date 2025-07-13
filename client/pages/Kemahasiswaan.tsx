import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import {
  Users,
  Award,
  GraduationCap,
  Heart,
  Trophy,
  Star,
  Target,
  BookOpen,
  Globe,
  Crown,
} from "lucide-react";

export default function Kemahasiswaan() {
  const organizations = [
    {
      name: "BEM STIS",
      fullName: "Badan Eksekutif Mahasiswa",
      description:
        "Organisasi tertinggi mahasiswa yang mengkoordinasikan seluruh kegiatan kemahasiswaan di STIS",
      icon: Crown,
      color: "bg-stis-blue-600",
    },
    {
      name: "HIMASTAT",
      fullName: "Himpunan Mahasiswa Statistika",
      description:
        "Organisasi kemahasiswaan yang menaungi mahasiswa program studi statistika",
      icon: BookOpen,
      color: "bg-stis-green-600",
    },
    {
      name: "HIMAKOM",
      fullName: "Himpunan Mahasiswa Komputasi Statistika",
      description:
        "Organisasi mahasiswa program studi komputasi statistika yang fokus pada teknologi dan data science",
      icon: Target,
      color: "bg-purple-600",
    },
    {
      name: "UKM OLAHRAGA",
      fullName: "Unit Kegiatan Mahasiswa Olahraga",
      description:
        "Wadah pengembangan bakat dan minat mahasiswa di bidang olahraga",
      icon: Trophy,
      color: "bg-stis-orange-600",
    },
  ];

  const achievements = [
    {
      title: "Juara 1 Kompetisi Data Science Nasional",
      year: "2024",
      category: "Akademik",
      description:
        "Tim mahasiswa STIS berhasil meraih juara 1 dalam kompetisi data science tingkat nasional yang diselenggarakan oleh Kementerian Pendidikan",
      team: "Tim DataMiners STIS",
    },
    {
      title: "Juara 2 Lomba Statistika Terapan",
      year: "2024",
      category: "Akademik",
      description:
        "Prestasi gemilang dalam lomba statistika terapan yang diikuti oleh seluruh PTN di Indonesia",
      team: "Tim Statistika STIS",
    },
    {
      title: "Juara 1 Futsal Antar Perguruan Tinggi",
      year: "2023",
      category: "Olahraga",
      description:
        "Tim futsal STIS berhasil menjadi juara di turnamen futsal antar perguruan tinggi se-Jabodetabek",
      team: "Tim Futsal STIS",
    },
    {
      title: "Best Paper Award Seminar Nasional",
      year: "2023",
      category: "Penelitian",
      description:
        "Makalah penelitian mahasiswa STIS meraih penghargaan best paper dalam seminar nasional statistika",
      team: "Mahasiswa Tingkat Akhir",
    },
  ];

  const senateActivities = [
    {
      title: "Sidang Pleno Senat Mahasiswa",
      description:
        "Forum tertinggi mahasiswa untuk membahas kebijakan kemahasiswaan",
      frequency: "Bulanan",
    },
    {
      title: "Mediasi Mahasiswa",
      description:
        "Layanan mediasi untuk menyelesaikan konflik antar mahasiswa",
      frequency: "Sesuai kebutuhan",
    },
    {
      title: "Advokasi Mahasiswa",
      description:
        "Pembelaan hak-hak mahasiswa dalam berbagai kebijakan kampus",
      frequency: "Berkelanjutan",
    },
    {
      title: "Program Aspirasi Mahasiswa",
      description:
        "Penampungan dan penyaluran aspirasi mahasiswa kepada pihak kampus",
      frequency: "Mingguan",
    },
  ];

  const alumniStats = [
    {
      category: "BPS Pusat & Daerah",
      percentage: "65%",
      count: "3,250",
      icon: Target,
    },
    {
      category: "Kementerian/Lembaga",
      percentage: "20%",
      count: "1,000",
      icon: BookOpen,
    },
    {
      category: "Perusahaan Swasta",
      percentage: "12%",
      count: "600",
      icon: Globe,
    },
    {
      category: "Wirausaha/Lainnya",
      percentage: "3%",
      count: "150",
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-green-900 to-stis-green-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-16 h-16 text-stis-orange-400 mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Kemahasiswaan
            </h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Kehidupan kampus yang dinamis dengan berbagai organisasi, prestasi,
            dan kegiatan pengembangan diri mahasiswa STIS
          </p>
        </div>
      </section>

      {/* Organisasi Kemahasiswaan */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Organisasi Kemahasiswaan
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {organizations.map((org, index) => {
                const Icon = org.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-16 h-16 ${org.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-gray-900 mb-2">
                            {org.name}
                          </h3>
                          <p className="font-medium text-stis-blue-600 mb-3">
                            {org.fullName}
                          </p>
                          <p className="text-gray-600 leading-relaxed">
                            {org.description}
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

      {/* Senat Mahasiswa */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Senat Mahasiswa
            </h2>

            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-stis-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-4">
                    Senat Mahasiswa STIS
                  </h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Badan legislatif mahasiswa yang bertugas mengawasi jalannya
                    pemerintahan mahasiswa, membuat peraturan kemahasiswaan, dan
                    menjadi wadah aspirasi seluruh mahasiswa STIS
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {senateActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
                    >
                      <h4 className="font-bold text-lg text-gray-900 mb-3">
                        {activity.title}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {activity.description}
                      </p>
                      <span className="inline-block bg-stis-blue-100 text-stis-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {activity.frequency}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prestasi Mahasiswa */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Prestasi Mahasiswa
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-stis-orange-500 to-stis-orange-600 text-white">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">
                        {achievement.title}
                      </CardTitle>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                        {achievement.year}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Trophy className="w-5 h-5 text-stis-orange-500 mr-2" />
                      <span className="text-sm font-medium text-stis-orange-600">
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex items-center text-stis-blue-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">
                        {achievement.team}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Alumni STIS
            </h2>

            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="text-center mb-12">
                  <h3 className="font-bold text-2xl text-gray-900 mb-4">
                    Sebaran Alumni (5,000+ Lulusan)
                  </h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Alumni STIS tersebar di seluruh Indonesia dan berkontribusi
                    dalam pembangunan bangsa melalui keahlian statistik
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {alumniStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200"
                      >
                        <Icon className="w-12 h-12 text-stis-blue-600 mx-auto mb-4" />
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          {stat.percentage}
                        </div>
                        <div className="text-lg font-semibold text-stis-blue-600 mb-2">
                          {stat.count} orang
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {stat.category}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="font-bold text-xl text-stis-green-600 mb-6">
                    Komunitas Alumni
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-stis-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Ikatan Alumni STIS (IAS) yang aktif di seluruh Indonesia
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-stis-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Program mentoring dan career guidance untuk mahasiswa
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-stis-green-600 flex-shrink-0 mt-0.5" />
                      <span>Alumni gathering rutin di berbagai daerah</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-stis-green-600 flex-shrink-0 mt-0.5" />
                      <span>Scholarship fund untuk mahasiswa berprestasi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="font-bold text-xl text-stis-blue-600 mb-6">
                    Kontribusi Alumni
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Memimpin unit statistik di berbagai K/L dan Pemda
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Berkontribusi dalam penyusunan kebijakan nasional
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Pionir dalam pengembangan sistem statistik Indonesia
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Menjadi data scientist di perusahaan multinasional
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
