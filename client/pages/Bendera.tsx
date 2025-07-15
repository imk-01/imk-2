import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Flag, Ruler, Palette, Award } from "lucide-react";
import Footer from "@/components/Footer"

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
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
      Bendera Politeknik Statistika STIS dan Program Studi
    </h2>

    {/* Info Ukuran Umum */}
    <div className="text-center mb-16">
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Semua bendera memiliki rasio panjang dan lebar sebesar <strong>3:2</strong>, dengan logo Politeknik Statistika STIS ditempatkan di tengah dengan perbandingan ukuran <strong>1:1</strong> terhadap tinggi bendera.
      </p>
    </div>

    {/* Bendera STIS Utama */}
    <div className="flex flex-col items-center mb-16">
      <div className="relative w-[360px] h-[240px] rounded shadow-lg border" style={{ backgroundColor: "rgb(250, 150, 30)" }}>
        <img
          src="/logo_STIS.png"
          alt="Logo STIS"
          className="absolute inset-0 w-[200px] h-[200px] m-auto object-contain"
        />
      </div>
      <h4 className="mt-4 font-bold text-lg text-gray-900">Bendera Utama STIS</h4>
      <p className="text-sm text-gray-600">Warna dasar jingga — RGB (250, 150, 30)</p>
    </div>

    {/* Bendera Prodi */}
    <div className="grid md:grid-cols-3 gap-12">
      {/* D-III Statistika */}
      <div className="text-center">
        <div className="relative w-[300px] h-[200px] mx-auto rounded shadow-md border" style={{ backgroundColor: "rgb(150, 180, 220)" }}>
          <img
            src="/logo_STIS.png"
            alt="Logo STIS"
            className="absolute inset-0 w-[150px] h-[150px] m-auto object-contain"
          />
        </div>
        <h5 className="mt-3 font-semibold text-gray-800">D-III Statistika</h5>
        <p className="text-sm text-gray-600">RGB (150, 180, 220)</p>
      </div>

      {/* D-IV Statistika */}
      <div className="text-center">
        <div className="relative w-[300px] h-[200px] mx-auto rounded shadow-md border" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
          <img
            src="/logo_STIS.png"
            alt="Logo STIS"
            className="absolute inset-0 w-[150px] h-[150px] m-auto object-contain"
          />
        </div>
        <h5 className="mt-3 font-semibold text-gray-800">D-IV Statistika</h5>
        <p className="text-sm text-gray-600">RGB (255, 255, 255)</p>
      </div>

      {/* D-IV Komputasi Statistik */}
      <div className="text-center">
        <div className="relative w-[300px] h-[200px] mx-auto rounded shadow-md border" style={{ backgroundColor: "rgb(255, 255, 0)" }}>
          <img
            src="/logo_STIS.png"
            alt="Logo STIS"
            className="absolute inset-0 w-[150px] h-[150px] m-auto object-contain"
          />
        </div>
        <h5 className="mt-3 font-semibold text-gray-800">D-IV Komputasi Statistik</h5>
        <p className="text-sm text-gray-600">RGB (255, 255, 0)</p>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
