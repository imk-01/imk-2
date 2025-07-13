import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

export default function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Polstat STIS Raih Akreditasi Unggul untuk Semua Program Studi",
      excerpt:
        "Politeknik Statistika STIS berhasil meraih akreditasi Unggul dari LAMSAMA untuk ketiga program studinya, membuktikan komitmen terhadap kualitas pendidikan statistik.",
      image: "/akreditasi.png",
      date: "14 April 2025",
      category: "Akademik",
      slug: "akreditasi-unggul-semua-prodi",
    },
    {
      id: 2,
      title: "Pembukaan Pendaftaran Mahasiswa Baru Polstat STIS 2025/2026",
      excerpt:
        "Pendaftaran mahasiswa baru untuk tahun akademik 2025/2026 resmi dibuka dengan sistem seleksi yang komprehensif dan transparan.",
      image: "/pmb.png",
      date: "26 Juni 2025",
      category: "Pendaftaran",
      slug: "pendaftaran-mahasiswa-baru-2025",
    },
    {
      id: 3,
      title: "Worskhop on Machine Learning For Official Statistics",
      excerpt:
        "Diselenggarakan oleh Statistik Indonesia (BPS), United Nation Statistics Division (UNSD), Statistik Institute for Asia dan Pacific (SIAP) yang difasilitasi oleh Regional Hub Indonesia, workshop ini bertujuan untuk meningkatkan kemampuan statistik melalui teknik Machine Learning.",
      image: "/workshop.png",
      date: "13 Februari 2025",
      category: "Seminar",
      slug: "seminar-machine-learning",
    },
    {
      id: 4,
      title: "Mahasiswa Politeknik Statistika STIS Juara 1 Olimpiade Statistika",
      excerpt:
        "Tim mahasiswa STIS berhasil meraih juara 1 dalam Olimpiade Satistika tingkat nasional pada kegiatan Dokter Data 2024 yang diselenggarakan oleh Universitas Diponegoro .",
      image: "/Prestasi.png",
      date: "21 Maret 2025",
      category: "Prestasi",
      slug: "juara-kompetisi-statistical-olympiad",
    },
    {
      id: 5,
      title: "Kemenko PMK dan STIS Perkuat Kolaborasi Riset Modelling Stunting",
      excerpt:
        "Kementerian Koordinator Bidang Pembangunan Manusia dan Kebudayaan (Kemenko PMK) bersama Badan Pusat Statistik (BPS) dan Politeknik Statistika STIS menggelar audiensi terkait pengembangan model analisis data untuk penanggulangan stunting, Rabu (26/2).",
      image: "kerjasama.png",
      date: "27 Februari 2025",
      category: "Kerjasama",
      slug: "kerjasama-stis-kemenko-pmk",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, newsItems.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentNews = newsItems[currentSlide];

  return (
    <div>
      {/* Main Carousel */}
      <section className="relative bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={currentNews.image}
            alt={currentNews.title}
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl">
            {/* News Content */}
            <div className="text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-stis-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
                  {currentNews.category}
                </span>
                <div className="flex items-center text-stis-blue-200 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {currentNews.date}
                </div>
              </div>

              <h1 className="font-display font-bold text-3xl lg:text-5xl leading-tight mb-6">
                {currentNews.title}
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                {currentNews.excerpt}
              </p>

              <Button
                size="lg"
                className="bg-stis-blue-600 hover:bg-stis-blue-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Baca Selengkapnya
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex space-x-3">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-stis-orange-500 scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-stis-orange-500 transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / newsItems.length) * 100}%`,
            }}
          />
        </div>
      </section>

      {/* News List Below */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
              Berita Terkini
            </h3>
            <p className="text-gray-600">
              Informasi terbaru dan terpenting dari STIS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  currentSlide === index
                    ? "ring-2 ring-stis-blue-600 shadow-xl"
                    : ""
                }`}
              >
                <div className="relative h-32 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-stis-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-sm text-gray-900 line-clamp-2 mb-2 group-hover:text-stis-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
