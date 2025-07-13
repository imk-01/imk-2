import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Trophy } from "lucide-react";
import Footer from "@/components/Footer";

export default function VisiMisi() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Visi & Misi STIS
          </h1>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Landasan filosofis dan arah pengembangan Politeknik Statistika STIS
            dalam mencapai visi menjadi institusi pendidikan statistik terdepan
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 overflow-hidden">
              <div className="bg-gradient-to-r from-stis-blue-600 to-stis-blue-700 text-white p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-12 h-12 mr-4" />
                  <h2 className="font-display font-bold text-3xl">VISI</h2>
                </div>
              </div>
              <CardContent className="p-8">
                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed text-center italic">
                  "Menjadi institusi pendidikan tinggi statistik terdepan yang
                  menghasilkan lulusan berkualitas tinggi, berkarakter, dan
                  mampu bersaing di tingkat nasional dan internasional dalam
                  bidang statistik dan komputasi statistik"
                </blockquote>
              </CardContent>
            </Card>

            {/* Mission Section */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-stis-green-600 to-stis-green-700 text-white p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-12 h-12 mr-4" />
                  <h2 className="font-display font-bold text-3xl">MISI</h2>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-stis-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Menyelenggarakan pendidikan tinggi bidang statistik dan
                        komputasi statistik yang berkualitas, relevan, dan
                        sesuai dengan perkembangan ilmu pengetahuan dan
                        teknologi.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-stis-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Menghasilkan lulusan yang memiliki kompetensi tinggi,
                        berintegritas, dan berkarakter mulia dalam bidang
                        statistik dan komputasi statistik.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-stis-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Melaksanakan penelitian dan pengabdian kepada masyarakat
                        yang inovatif dan bermanfaat untuk kemajuan bangsa dan
                        negara.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-stis-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        4
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Mengembangkan kerjasama dengan berbagai pihak dalam
                        negeri dan luar negeri untuk meningkatkan kualitas
                        pendidikan dan penelitian.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-stis-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        5
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Menyelenggarakan tata kelola institusi yang baik,
                        transparan, dan akuntabel untuk mendukung pencapaian
                        visi dan misi.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-stis-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        6
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Membangun budaya akademik yang kondusif untuk
                        pengembangan ilmu pengetahuan dan teknologi di bidang
                        statistik.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Nilai-Nilai STIS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nilai-nilai fundamental yang menjadi pedoman dalam setiap kegiatan
              di Politeknik Statistika STIS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-stis-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Keunggulan
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Berkomitmen untuk selalu memberikan yang terbaik dalam setiap
                  aspek pendidikan dan pelayanan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-stis-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Integritas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas
                  dalam setiap tindakan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-stis-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Profesionalisme
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjalankan tugas dengan standar tinggi, kompeten, dan
                  bertanggung jawab
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  Inovasi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mendorong kreativitas dan pengembangan ide-ide baru untuk
                  kemajuan institusi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
