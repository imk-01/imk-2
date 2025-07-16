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
            Visi & Misi Politeknik Statistika STIS
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
            <Card className="mb-12 overflow-hidden rounded-2xl shadow-lg">
  {/* VISI Header */}
  <div className="bg-gradient-to-r from-stis-blue-600/90 to-stis-blue-700/90 text-white px-8 py-6 rounded-t-2xl">
    <div className="flex items-center space-x-3">
      <h2 className="font-display font-bold text-3xl tracking-tight">VISI</h2>
    </div>
  </div>

  {/* VISI Content */}
  <CardContent className="bg-white px-10 py-10">
    <blockquote className="relative text-center font-serif text-2xl text-gray-800 italic leading-loose max-w-3xl mx-auto">
      <span className="text-5xl absolute -left-6 top-0 text-stis-blue-200 select-none">“</span>
      Menjadi Perguruan Tinggi Vokasi di Bidang Statistika Resmi Negara yang Unggul dan Berkelas Dunia
      <span className="text-5xl absolute -right-6 bottom-0 text-stis-blue-200 select-none">”</span>
    </blockquote>
  </CardContent>
</Card>

<Card className="overflow-hidden rounded-2xl shadow-lg">
  {/* MISI Header */}
  <div className="bg-gradient-to-r from-stis-green-600/90 to-stis-green-700/90 text-white px-8 py-6 rounded-t-2xl">
    <div className="flex items-center space-x-3">
      <h2 className="font-display font-bold text-3xl tracking-tight">MISI</h2>
    </div>
  </div>

  {/* MISI Content */}
  <CardContent className="bg-white px-10 py-10 space-y-8">
    {[
      "Menyelenggarakan Tri Dharma Perguruan Tinggi (pendidikan, penelitian, dan pengabdian masyarakat) yang berkualitas untuk menunjang penyelenggaraan kegiatan statistik resmi negara.",
      "Menyelenggarakan sistem tata kelola pendidikan tinggi vokasi berbasis teknologi informasi yang efektif dan efisien.",
    ].map((item, index) => (
      <div key={index} className="flex items-start gap-6">
        <div className="w-10 h-10 min-w-10 bg-stis-green-600 text-white rounded-full flex items-center justify-center font-semibold shadow-md text-lg">
          {index + 1}
        </div>
        <p className="text-gray-800 text-lg leading-relaxed">{item}</p>
      </div>
    ))}
  </CardContent>
</Card>

          </div>
        </div>
      </section>

{/* Goals Section (Tujuan) */}
<section className="pt-15 pb-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900">
        Tujuan Politeknik Statistika STIS
      </h2>
    </div>

    <div className="max-w-4xl mx-auto space-y-8">
      {[
        "Menghasilkan lulusan yang berkualitas, unggul, dan memiliki integritas.",
        "Menghasilkan penelitian yang bermanfaat dalam pengembangan dan penelitian ilmu statistik dan komputasi statistik.",
        "Menghasilkan karya pengabdian kepada masyarakat yang dapat meningkatkan pemahaman masyarakat tentang pemanfaatan statistik dan meningkatkan kesejahteraan masyarakat."
      ].map((item, index) => (
        <div key={index} className="flex items-start gap-6">
          <div className="min-w-12 min-h-12 w-12 h-12 bg-stis-blue-600 text-white rounded-full flex items-center justify-center text-base font-semibold shadow-md">
            {index + 1}
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



      <Footer />
    </div>
  );
}
