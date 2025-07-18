import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Download,
  Eye,
  ChevronRight,
  FileText,
  TrendingUp,
  BarChart3,
  Target,
  Award,
  Users,
  CheckCircle,
  DownloadCloud,
  ChevronDown,
  File,
  FileSpreadsheet,
  Archive,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { documentDownloads } from "@/data/informasiPublikData";

export default function LaporanKinerjaDetail() {
  const navigate = useNavigate();

  const documentData = {
    title: "Laporan Kinerja 2023",
    category: "Laporan",
    publishedAt: "2024-03-15T09:00:00Z",
    updatedAt: "2024-03-15T11:30:00Z",
    views: 3241,
    description:
      "Laporan pencapaian kinerja institusi berdasarkan target yang ditetapkan dalam perjanjian kinerja tahun 2023.",
    downloads: documentDownloads.laporanKinerja,
  };

  const kinerjaUtama = [
    {
      title: "Kualitas Pendidikan",
      achievement: "95.2%",
      target: "90%",
      status: "Tercapai",
      description: "Tingkat kepuasan mahasiswa terhadap proses pembelajaran",
      icon: Award,
      color: "bg-stis-green-600",
      trend: "up",
    },
    {
      title: "Employability Rate",
      achievement: "98.7%",
      target: "95%",
      status: "Tercapai",
      description: "Persentase lulusan yang bekerja dalam 6 bulan",
      icon: Users,
      color: "bg-stis-blue-600",
      trend: "up",
    },
    {
      title: "Publikasi Ilmiah",
      achievement: "156",
      target: "120",
      status: "Tercapai",
      description:
        "Jumlah publikasi dosen di jurnal nasional dan internasional",
      icon: FileText,
      color: "bg-stis-orange-600",
      trend: "up",
    },
    {
      title: "Kerjasama Institusi",
      achievement: "24",
      target: "20",
      status: "Tercapai",
      description: "Jumlah MoU aktif dengan berbagai institusi",
      icon: Target,
      color: "bg-purple-600",
      trend: "up",
    },
  ];

  const keyMetrics = [
    {
      label: "Periode Laporan",
      value: "Januari - Desember 2023",
      icon: Calendar,
    },
    { label: "Indikator Kinerja", value: "24 Indikator", icon: BarChart3 },
    { label: "Tingkat Capaian", value: "97.3%", icon: TrendingUp },
    { label: "Status Overall", value: "Sangat Baik", icon: Award },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getFileIcon = (format: string) => {
    switch (format.toLowerCase()) {
      case "pdf":
        return <File className="w-4 h-4 text-red-600" />;
      case "xlsx":
      case "xls":
        return <FileSpreadsheet className="w-4 h-4 text-green-600" />;
      case "zip":
        return <Archive className="w-4 h-4 text-orange-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Tercapai":
        return "bg-green-100 text-green-800";
      case "Sebagian Tercapai":
        return "bg-yellow-100 text-yellow-800";
      case "Tidak Tercapai":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
            <a href="/informasi-publik" className="hover:text-stis-blue-600">
              Informasi Publik
            </a>
            <ChevronRight size={16} />
            <span className="text-gray-900">Laporan Kinerja</span>
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
                    {documentData.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{formatDate(documentData.publishedAt)}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{documentData.views.toLocaleString()} views</span>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {documentData.title}
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {documentData.description}
                </p>

                {/* Download Actions */}
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="text-sm text-gray-600">
                    <span>
                      Tersedia {documentData.downloads.length} format dokumen
                    </span>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-stis-green-600 hover:bg-stis-green-700">
                        <DownloadCloud className="w-4 h-4 mr-2" />
                        Download Laporan
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      <DropdownMenuLabel className="text-stis-blue-900 font-semibold">
                        Pilih dokumen untuk diunduh
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {documentData.downloads.map((download, index) => (
                        <DropdownMenuItem
                          key={index}
                          className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-stis-blue-50"
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = download.url;
                            link.download = download.name;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        >
                          <div className="flex-shrink-0">
                            {getFileIcon(download.format)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 truncate">
                              {download.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {download.size} • {download.format}
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-stis-green-600 flex-shrink-0" />
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="p-6 border-b bg-gray-50">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Informasi Laporan
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {keyMetrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg"
                      >
                        <div className="w-10 h-10 bg-stis-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-stis-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">
                            {metric.label}
                          </div>
                          <div className="font-semibold text-gray-900">
                            {metric.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Capaian Kinerja Utama 2023
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Laporan Kinerja Politeknik Statistika STIS tahun 2023
                    menunjukkan pencapaian yang sangat memuaskan dengan tingkat
                    capaian keseluruhan sebesar 97.3%. Pencapaian ini merupakan
                    hasil dari komitmen seluruh civitas akademika dalam
                    menjalankan program dan kegiatan sesuai dengan target yang
                    telah ditetapkan.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    Evaluasi kinerja dilakukan berdasarkan 24 indikator kinerja
                    utama yang mencakup aspek pendidikan, penelitian, pengabdian
                    masyarakat, dan tata kelola institusi. Berikut adalah
                    capaian pada empat indikator kinerja utama:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {kinerjaUtama.map((kinerja, index) => {
                    const Icon = kinerja.icon;
                    return (
                      <Card
                        key={index}
                        className="hover:shadow-md transition-shadow duration-200"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className={`w-12 h-12 ${kinerja.color} rounded-xl flex items-center justify-center`}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                kinerja.status,
                              )}`}
                            >
                              {kinerja.status}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {kinerja.title}
                          </h3>

                          <p className="text-gray-600 text-sm mb-4">
                            {kinerja.description}
                          </p>

                          <div className="flex items-end justify-between">
                            <div>
                              <div className="text-2xl font-bold text-gray-900">
                                {kinerja.achievement}
                              </div>
                              <div className="text-xs text-gray-500">
                                Target: {kinerja.target}
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Activity className="w-4 h-4 text-stis-green-600" />
                              <span className="text-sm text-stis-green-600 font-medium">
                                {(
                                  (parseFloat(kinerja.achievement) /
                                    parseFloat(kinerja.target)) *
                                  100
                                ).toFixed(1)}
                                %
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="bg-stis-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-stis-blue-900 mb-3">
                    Metodologi Evaluasi
                  </h3>
                  <p className="text-stis-blue-800 leading-relaxed mb-4">
                    Evaluasi kinerja dilakukan dengan menggunakan metode
                    balanced scorecard yang mencakup empat perspektif utama:
                    finansial, pelanggan, proses bisnis internal, serta
                    pembelajaran dan pertumbuhan.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Pengumpulan data secara berkala setiap triwulan",
                      "Analisis trend dan perbandingan dengan tahun sebelumnya",
                      "Validasi data oleh unit internal audit",
                      "Review dan verifikasi oleh pimpinan institusi",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-stis-blue-800"
                      >
                        <CheckCircle className="w-4 h-4 text-stis-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stis-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-stis-green-900 mb-3">
                    Rekomendasi dan Tindak Lanjut
                  </h3>
                  <p className="text-stis-green-800 leading-relaxed">
                    Berdasarkan hasil evaluasi kinerja 2023, beberapa area yang
                    perlu mendapat perhatian khusus di tahun 2024 meliputi
                    peningkatan kualitas penelitian, pengembangan infrastruktur
                    teknologi informasi, dan penguatan kerjasama internasional
                    untuk mendukung pencapaian target yang lebih ambisius.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Download Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Download className="w-5 h-5 mr-2 text-stis-green-600" />
                    Download Laporan
                  </h3>
                  <div className="space-y-3">
                    {documentData.downloads.map((download, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start text-left h-auto p-3"
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = download.url;
                          link.download = download.name;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                      >
                        <div className="flex items-center space-x-3 w-full">
                          {getFileIcon(download.format)}
                          <div className="flex-1 text-left">
                            <div className="font-medium text-sm">
                              {download.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {download.size} • {download.format}
                            </div>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Documents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Dokumen Terkait
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="/informasi-publik/renstra"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm text-gray-900">
                        Rencana Strategis 2024-2029
                      </div>
                      <div className="text-xs text-gray-500">
                        Dokumen perencanaan strategis institusi
                      </div>
                    </a>
                    <a
                      href="/informasi-publik/perjanjian-kinerja"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm text-gray-900">
                        Perjanjian Kinerja 2024
                      </div>
                      <div className="text-xs text-gray-500">
                        Target kinerja tahun berjalan
                      </div>
                    </a>
                    <a
                      href="/informasi-publik/iku"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm text-gray-900">
                        Indikator Kinerja Utama
                      </div>
                      <div className="text-xs text-gray-500">
                        KPI dan target pencapaian institusi
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
