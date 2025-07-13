import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Flag, Ruler, Palette, Award } from "lucide-react";
import Footer from "@/components/footer"

export default function Bendera() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Bendera STIS
          </h1>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Simbol kebanggaan dan identitas Politeknik Statistika STIS yang
            mencerminkan nilai-nilai luhur institusi
          </p>
        </div>
      </section>

      {/* Flag Display */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="relative mx-auto mb-8">
                <div className="w-96 h-64 mx-auto bg-gradient-to-r from-stis-blue-600 to-stis-blue-800 shadow-2xl rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/api/placeholder/300/200"
                      alt="Bendera STIS"
                      className="w-80 h-52 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
                Bendera Politeknik Statistika STIS
              </h2>
              <p className="text-xl text-gray-600">
                Bendera resmi yang digunakan dalam upacara dan kegiatan formal
                institusi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flag Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Spesifikasi Bendera
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Ruler className="w-8 h-8 text-stis-blue-600 mr-3" />
                    <h3 className="font-bold text-2xl text-stis-blue-600">
                      Dimensi dan Ukuran
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">
                        Perbandingan
                      </span>
                      <span className="text-gray-700">2 : 3</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">
                        Ukuran Standar
                      </span>
                      <span className="text-gray-700">120 cm x 180 cm</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">
                        Ukuran Meja
                      </span>
                      <span className="text-gray-700">20 cm x 30 cm</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Bahan</span>
                      <span className="text-gray-700">Kain Satin/Drill</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Palette className="w-8 h-8 text-stis-green-600 mr-3" />
                    <h3 className="font-bold text-2xl text-stis-green-600">
                      Spesifikasi Warna
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-blue-600 rounded border-2 border-gray-300"></div>
                      <div>
                        <p className="font-medium text-gray-900">Biru STIS</p>
                        <p className="text-sm text-gray-600">#2563EB</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-yellow-500 rounded border-2 border-gray-300"></div>
                      <div>
                        <p className="font-medium text-gray-900">Kuning Emas</p>
                        <p className="text-sm text-gray-600">#EAB308</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-white rounded border-2 border-gray-300"></div>
                      <div>
                        <p className="font-medium text-gray-900">Putih</p>
                        <p className="text-sm text-gray-600">#FFFFFF</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-red-600 rounded border-2 border-gray-300"></div>
                      <div>
                        <p className="font-medium text-gray-900">Merah</p>
                        <p className="text-sm text-gray-600">#DC2626</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Flag Elements */}
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-gray-900 mb-8 text-center">
                  Elemen-Elemen Bendera
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg text-stis-blue-600 mb-4">
                      Bagian Utama
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-stis-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          <strong>Latar Belakang Biru:</strong> Warna dasar
                          bendera yang mencerminkan kesetiaan dan
                          profesionalisme
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          <strong>Lambang STIS:</strong> Ditempatkan di tengah
                          bendera dengan ukuran proporsional
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          <strong>Tulisan "STIS":</strong> Nama institusi di
                          bawah lambang dengan font yang jelas dan formal
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-stis-green-600 mb-4">
                      Filosofi Desain
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-stis-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Desain yang sederhana namun bermakna mendalam
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-stis-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Mencerminkan karakter institusi yang profesional dan
                          akademis
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-stis-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Mudah dikenali dan membedakan dari institusi lain
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Protocol */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Flag className="w-8 h-8 text-stis-orange-600 mr-3" />
                    <h3 className="font-bold text-2xl text-stis-orange-600">
                      Protokol Penggunaan
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Upacara bendera setiap hari Senin</li>
                    <li>• Peringatan hari-hari besar nasional</li>
                    <li>• Acara wisuda dan pelantikan</li>
                    <li>• Kunjungan tamu VIP dan delegasi</li>
                    <li>• Kegiatan resmi institusi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="font-bold text-2xl text-purple-600">
                      Aturan Pemasangan
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Dikibarkan dari terbit hingga terbenam matahari</li>
                    <li>• Posisi tegak dan tidak menyentuh tanah</li>
                    <li>• Diturunkan saat cuaca buruk</li>
                    <li>• Dirawat dan diganti secara berkala</li>
                    <li>• Disimpan dengan cara yang terhormat</li>
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
