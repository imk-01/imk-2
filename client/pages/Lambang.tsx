import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Book, Globe } from "lucide-react";
import Footer from "@/components/Footer";

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
                  src="/logo_STIS.png"
                  alt="Logo STIS"
                  className="w-70 h-70"
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
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-4xl text-gray-900 mb-12 text-center">
        Makna dan Filosofi Lambang
      </h2>

      {/* Makna Lambang */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 border border-stis-blue-100">
          <h3 className="text-2xl font-bold text-stis-blue-700 mb-4 flex items-center gap-2">
            Makna Lambang
          </h3>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li><span className="font-medium">Lingkaran:</span> adaptif terhadap perkembangan ilmu pengetahuan.</li>
            <li><span className="font-medium">Diagram balok:</span> simbol ilmu statistik.</li>
            <li><span className="font-medium">3 buah balok:</span> Tridharma Perguruan Tinggi.</li>
            <li><span className="font-medium">Tali oval pengikat:</span> kesatuan Tridharma menuju visi STIS.</li>
            <li><span className="font-medium">4 lidah api:</span> semangat dan motivasi sivitas akademika.</li>
            <li><span className="font-medium">Sayap mengembang:</span> visi unggul dan menjulang tinggi.</li>
            <li><span className="font-medium">Mata pena:</span> ketajaman berpikir dalam memaknai data statistik.</li>
          </ul>
        </div>

        {/* Makna Warna */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-stis-green-100">
          <h3 className="text-2xl font-bold text-stis-green-700 mb-4 flex items-center gap-2">
          Makna Warna
          </h3>
          <ol className="space-y-6 text-gray-700 list-decimal pl-6">
      <li>
        <p>
          Warna <span className="font-medium text-blue-600">biru</span>,{" "}
          <span className="font-medium text-green-600">hijau</span>, dan{" "}
          <span className="font-medium text-orange-500">jingga</span> melambangkan tiga kegiatan
          sensus besar yang dilakukan oleh Badan Pusat Statistik:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><span className="font-medium text-blue-600">Biru:</span> Sensus Penduduk</li>
          <li><span className="font-medium text-green-600">Hijau:</span> Sensus Pertanian</li>
          <li><span className="font-medium text-orange-500">Jingga:</span> Sensus Ekonomi</li>
        </ul>
        <p className="mt-2">
          Gradasi warna biru dan jingga menciptakan kesan kampus yang <span className="italic">modern</span> dan <span className="italic">dinamis</span>.
        </p>
      </li>

      <li>
        <p>
          <span className="font-medium text-green-700">Kode warna hijau:</span> RGB{" "}
          <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">180, 232, 0</code><br />
          <span className="font-medium text-blue-700">Kode warna biru:</span> gradasi linear dari{" "}
          <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">27, 68, 156</code> ke{" "}
          <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">0, 143, 213</code><br />
          <span className="font-medium text-orange-600">Kode warna jingga:</span> gradasi sirkuler dari{" "}
          <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">248, 152, 28</code> ke{" "}
          <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">255, 227, 0</code>
        </p>
      </li>

      <li>
        <p>
          Tulisan <span className="font-bold text-gray-800">POLITEKNIK STATISTIKA STIS</span> menggunakan warna{" "}
          <span className="font-medium">putih</span> dengan jenis huruf{" "}
          <span className="font-mono italic">Trebuchet MS</span> dan proporsi <strong>1:1</strong>.
        </p>
        <p className="mt-1">
          Warna putih tersebut melambangkan <span className="italic">kemurnian ilmu statistik</span>.
        </p>
      </li>
    </ol>
        </div>
      </div>

      {/* Penggunaan Lambang */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-stis-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Penggunaan Lambang
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg text-stis-blue-700 mb-3">Pedoman Umum</h4>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Lambang digunakan dalam proporsi dan warna yang benar.</li>
              <li>Tidak boleh diubah bentuk atau distorsi ukuran.</li>
              <li>Harus terbaca jelas, termasuk pada ukuran kecil.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-stis-green-700 mb-3">Konteks Penggunaan</h4>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Digunakan di dokumen resmi institusi.</li>
              <li>Wajib digunakan dalam kegiatan mahasiswa yang mengatasnamakan STIS seperti kop surat, jaket PKL, dan spanduk.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
