import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { beritaList } from "@/data/berita";
import {
  ArrowLeft,
  Calendar,
  User,
  Eye,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Tag,
  ChevronRight,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

export default function BeritaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const berita = beritaList.find((item) => item.id === id);

  if (!berita) {
  return (
    <div className="p-8 text-center text-gray-600">
      <h2 className="text-2xl font-semibold">Berita tidak ditemukan</h2>
      <p className="mt-2">ID berita tidak valid atau tidak tersedia.</p>
      <Button onClick={() => navigate("/berita")} className="mt-4">
        Kembali ke Berita
      </Button>
    </div>
  );
}

const relatedNews = beritaList
  .filter((item) => item.id !== id && item.category === berita.category)
  .slice(0, 3);

  // Sample news data - in real app this would come from API
  /*const newsData = {
    id: id || "1",
    title:
      "STIS Meraih Akreditasi A dari BAN-PT untuk Program Studi Statistika",
    slug: "stis-meraih-akreditasi-a-ban-pt-statistika",
    excerpt:
      "Politeknik Statistika STIS berhasil mempertahankan akreditasi A dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) untuk semua program studi yang ada.",
    content: `
      <p>Jakarta, 15 November 2024 - Politeknik Statistika STIS kembali menorehkan prestasi membanggakan dengan berhasil mempertahankan akreditasi A dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) untuk semua program studi yang ada.</p>
      
      <p>Akreditasi ini merupakan pengakuan terhadap kualitas pendidikan dan pengelolaan institusi yang telah memenuhi standar nasional pendidikan tinggi. Proses akreditasi berlangsung ketat dengan penilaian terhadap berbagai aspek seperti visi-misi, tata pamong, mahasiswa, sumber daya manusia, kurikulum, pembiayaan, sarana prasarana, sistem informasi, dan luaran.</p>
      
      <h3>Komitmen Terhadap Kualitas Pendidikan</h3>
      <p>Direktur STIS, Prof. Dr. Ir. Siswanto, M.Si., menyatakan bahwa pencapaian ini merupakan hasil dari komitmen seluruh civitas akademika STIS dalam meningkatkan kualitas pendidikan statistik di Indonesia. "Akreditasi A ini menjadi motivasi bagi kami untuk terus berinovasi dan memberikan pendidikan terbaik bagi mahasiswa," ujarnya.</p>
      
      <p>STIS telah menunjukkan konsistensi dalam mempertahankan standar pendidikan tinggi sejak berdiri pada tahun 1958. Institusi yang berada di bawah naungan Badan Pusat Statistik (BPS) ini terus mengembangkan kurikulum yang relevan dengan kebutuhan industri dan perkembangan teknologi.</p>
      
      <h3>Program Studi Unggulan</h3>
      <p>Ketiga program studi di STIS, yaitu D-III Statistika, D-IV Statistika, dan D-IV Komputasi Statistika, semuanya meraih akreditasi A. Hal ini menunjukkan bahwa STIS mampu memberikan pendidikan berkualitas di berbagai jenjang dan spesialisasi dalam bidang statistika.</p>
      
      <p>Program D-IV Komputasi Statistika yang relatif baru juga telah membuktikan kualitasnya dengan meraih akreditasi A pada penilaian pertama. Program ini dirancang untuk memenuhi kebutuhan akan tenaga ahli yang menguasai statistika dan teknologi informasi.</p>
      
      <h3>Dampak Bagi Lulusan</h3>
      <p>Akreditasi A ini memberikan jaminan kualitas bagi lulusan STIS dalam memasuki dunia kerja. Alumni STIS yang tersebar di berbagai instansi pemerintah dan swasta dikenal memiliki kompetensi yang kuat dalam bidang statistika dan analisis data.</p>
      
      <p>Dengan semakin tingginya kebutuhan akan ahli statistika di era digital ini, lulusan STIS dengan akreditasi A memiliki daya saing yang tinggi di pasar kerja. Banyak lulusan yang berkarir di BPS, kementerian, BUMN, dan perusahaan swasta besar.</p>
      
      <p>Ke depan, STIS berkomitmen untuk terus meningkatkan kualitas pendidikan dan berkontribusi dalam pengembangan ilmu statistika di Indonesia. Berbagai program pengembangan dosen, peningkatan fasilitas laboratorium, dan kerjasama dengan industri akan terus dilakukan untuk mempertahankan standar pendidikan yang tinggi.</p>
    `,
    author: "Tim Redaksi STIS",
    publishedAt: "2024-11-15T10:00:00Z",
    updatedAt: "2024-11-15T14:30:00Z",
    views: 1247,
    category: "Akademik",
    tags: ["Akreditasi", "BAN-PT", "Kualitas Pendidikan", "Program Studi"],
    featuredImage: "/api/placeholder/800/400",
    relatedNews: [
      {
        id: "2",
        title: "Mahasiswa STIS Juara 1 Kompetisi Data Science Nasional",
        excerpt:
          "Tim mahasiswa STIS berhasil meraih juara 1 dalam kompetisi data science tingkat nasional yang diselenggarakan oleh Universitas Indonesia.",
        image: "/api/placeholder/300/200",
        publishedAt: "2024-11-10T09:00:00Z",
        category: "Prestasi",
      },
      {
        id: "3",
        title: "STIS Luncurkan Program Sertifikasi Data Analyst",
        excerpt:
          "Politeknik Statistika STIS meluncurkan program sertifikasi data analyst untuk meningkatkan kompetensi profesional di bidang analisis data.",
        image: "/api/placeholder/300/200",
        publishedAt: "2024-11-08T11:00:00Z",
        category: "Program",
      },
      {
        id: "4",
        title: "Kerjasama STIS dengan Industri Teknologi Terkemuka",
        excerpt:
          "STIS menjalin kerjasama strategis dengan beberapa perusahaan teknologi terkemuka untuk program magang dan penelitian mahasiswa.",
        image: "/api/placeholder/300/200",
        publishedAt: "2024-11-05T13:00:00Z",
        category: "Kerjasama",
      },
    ],
  };*/

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = berita.title;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          "_blank",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "copy":
        await navigator.clipboard.writeText(url);
        alert("Link berhasil disalin ke clipboard!");
        break;
    }
  };

const categoryCounts = beritaList.reduce<Record<string, number>>((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {});

const categories = [
  { name: "Semua", count: beritaList.length },
  ...Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count,
  })),
];


  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center space-x-1 text-gray-700 hover:text-stis-blue-600 hover:bg-stis-blue-50 font-medium px-3 py-2 rounded-md transition-colors duration-200"
            >
              <ArrowLeft size={16} />
              <span>Kembali</span>
            </Button>
            <ChevronRight size={16} />
            <a href="/berita" className="hover:text-stis-blue-600">
              Berita
            </a>
            <ChevronRight size={16} />
            <span className="text-gray-900">Detail Berita</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <span className="bg-stis-blue-100 text-stis-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {berita.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{formatDate(berita.publishedAt)}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{berita.views.toLocaleString()} views</span>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {berita.title}
                </h1>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User size={16} />
                    <span>Oleh: {berita.author}</span>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 mr-2">Bagikan:</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("facebook")}
                      className="p-2"
                    >
                      <Facebook size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("twitter")}
                      className="p-2"
                    >
                      <Twitter size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("linkedin")}
                      className="p-2"
                    >
                      <Linkedin size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("copy")}
                      className="p-2"
                    >
                      <Copy size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative">
                <img
                  src={berita.image}
                  alt={berita.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className="prose prose-lg max-w-none text-gray-800 space-y-6 text-justify">
                    {berita.content
                    .split(/\n\s*\n/) // pisahkan berdasarkan 1 baris kosong (2 newline)
                    .map((paragraph, idx) => (
                    <p key={idx} className="mb-0">{paragraph.trim()}</p>
                    ))}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center space-x-2">
                    <Tag size={16} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Tags:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {berita.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Update Info */}
                <div className="mt-4 text-sm text-gray-500">
                  Terakhir diperbarui: {formatDate(berita.publishedAt)}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related News */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Berita Terkait
                </h3>
                <div className="space-y-4">
                  {relatedNews.map((news) => (
                    <div key={news.id} className="group cursor-pointer">
                      <div className="flex space-x-3">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-stis-blue-600 transition-colors line-clamp-2 mb-1">
                            {news.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span className="bg-gray-100 px-2 py-0.5 rounded">
                              {news.category}
                            </span>
                            <span>{formatDate(news.publishedAt)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Kategori Berita
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={`/berita?category=${category.name.toLowerCase()}`}
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
