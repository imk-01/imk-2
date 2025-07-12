import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Book, Globe } from "lucide-react";

export default function Lambang() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6">
            Lambang STIS
          </h1>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Simbol identitas dan filosofi Politeknik Statistika STIS dalam
            mengemban misi pendidikan statistik
          </p>
        </div>
      </section>

      {/* Logo Display */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-64 h-64 mx-auto bg-white shadow-2xl rounded-full flex items-center justify-center mb-8">
                <img
                  src="/api/placeholder/200/200"
                  alt="Logo STIS"
                  className="w-48 h-48"
                />
              </div>
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
                Logo Politeknik Statistika STIS
              </h2>
              <p className="text-xl text-gray-600">
                Lambang yang mencerminkan nilai-nilai dan komitmen institusi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meaning and Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Makna dan Filosofi Lambang
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="font-bold text-2xl text-stis-blue-600 mb-6">
                    Komponen Utama
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Shield className="w-8 h-8 text-stis-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          Perisai Pancasila
                        </h4>
                        <p className="text-gray-700">
                          Melambangkan keteguhan dalam berpegang pada
                          nilai-nilai Pancasila sebagai dasar ideologi bangsa
                          Indonesia.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Star className="w-8 h-8 text-stis-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          Bintang Lima
                        </h4>
                        <p className="text-gray-700">
                          Representasi dari sila pertama Pancasila "Ketuhanan
                          Yang Maha Esa" dan menunjukkan keunggulan institusi.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Book className="w-8 h-8 text-stis-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          Buku Terbuka
                        </h4>
                        <p className="text-gray-700">
                          Simbol ilmu pengetahuan dan pendidikan yang terus
                          berkembang dalam bidang statistik.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Globe className="w-8 h-8 text-stis-blue-700 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          Rantai Emas
                        </h4>
                        <p className="text-gray-700">
                          Melambangkan persatuan dan kekeluargaan seluruh
                          civitas akademika STIS.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="font-bold text-2xl text-stis-green-600 mb-6">
                    Makna Warna
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">
                          Biru
                        </h4>
                        <p className="text-gray-700">
                          Melambangkan kesetiaan, kepercayaan, dan kebijaksanaan
                          dalam menjalankan tugas pendidikan.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">
                          Kuning Emas
                        </h4>
                        <p className="text-gray-700">
                          Simbol kemurnian, kemuliaan, dan pencerahan dalam ilmu
                          pengetahuan statistik.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">
                          Merah
                        </h4>
                        <p className="text-gray-700">
                          Melambangkan keberanian dan semangat dalam menghadapi
                          tantangan dan perubahan zaman.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">
                          Putih
                        </h4>
                        <p className="text-gray-700">
                          Simbol kesucian, kejujuran, dan transparansi dalam
                          menjalankan tugas dan fungsi institusi.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Usage Guidelines */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-gray-900 mb-6 text-center">
                  Pedoman Penggunaan Lambang
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg text-stis-blue-600 mb-4">
                      Aturan Umum
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Lambang harus digunakan dalam proporsi yang benar
                      </li>
                      <li>• Tidak boleh diubah bentuk atau komposisinya</li>
                      <li>
                        • Warna harus sesuai dengan standar yang ditetapkan
                      </li>
                      <li>• Ukuran minimum harus tetap terbaca dengan jelas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-stis-green-600 mb-4">
                      Penggunaan Resmi
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Dokumen resmi institusi</li>
                      <li>• Sertifikat dan ijazah</li>
                      <li>• Media promosi dan publikasi</li>
                      <li>• Seragam dan atribut resmi</li>
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
