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
  Award,
  GraduationCap,
  Users,
  BookOpen,
  CheckCircle,
  DownloadCloud,
  ChevronDown,
  File,
  FileSpreadsheet,
  Archive,
  Star,
  Shield,
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

export default function AkreditasiDetail() {
  const navigate = useNavigate();

  const documentData = {
    title: "Dokumen Akreditasi",
    category: "Akreditasi",
    publishedAt: "2023-10-20T10:00:00Z",
    updatedAt: "2023-10-20T14:30:00Z",
    views: 4156,
    description:
      "Sertifikat akreditasi institusi dan program studi dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT).",
    downloads: documentDownloads.dokumenAkreditasi,
  };

  const akreditasiProgram = [
    {
      program: "Institusi",
      jenjang: "Politeknik",
      peringkat: "A",
      tanggalTerbit: "15 September 2023",
      berlakuHingga: "15 September 2028",
      nomorSK: "0234/SK/BAN-PT/Ak-PPJ/Pol/IX/2023",
      icon: Shield,
      color: "bg-stis-blue-600",
      description: "Akreditasi institusi untuk keseluruhan politeknik",
    },
    {
      program: "D-III Statistika",
      jenjang: "Diploma Tiga",
      peringkat: "A",
      tanggalTerbit: "20 Agustus 2023",
      berlakuHingga: "20 Agustus 2028",
      nomorSK: "1245/SK/BAN-PT/Ak-PPJ/Dpl-III/VIII/2023",
      icon: GraduationCap,
      color: "bg-stis-green-600",
      description: "Program studi unggulan dengan fokus statistika terapan",
    },
    {
      program: "D-IV Statistika",
      jenjang: "Diploma Empat",
      peringkat: "A",
      tanggalTerbit: "25 Agustus 2023",
      berlakuHingga: "25 Agustus 2028",
      nomorSK: "1278/SK/BAN-PT/Ak-PPJ/Dpl-IV/VIII/2023",
      icon: BookOpen,
      color: "bg-stis-orange-600",
      description:
        "Program sarjana terapan statistika dengan kurikulum terkini",
    },
    {
      program: "D-IV Komputasi Statistika",
      jenjang: "Diploma Empat",
      peringkat: "A",
      tanggalTerbit: "30 Agustus 2023",
      berlakuHingga: "30 Agustus 2028",
      nomorSK: "1289/SK/BAN-PT/Ak-PPJ/Dpl-IV/VIII/2023",
      icon: Users,
      color: "bg-purple-600",
      description: "Program inovatif menggabungkan statistika dan teknologi",
    },
  ];

  const keyMetrics = [
    {
      label: "Jumlah Program Terakreditasi",
      value: "3 Program Studi",
      icon: Award,
    },
    { label: "Peringkat Institusi", value: "A (Unggul)", icon: Star },
    { label: "Masa Berlaku", value: "5 Tahun", icon: Calendar },
    { label: "Lembaga Akreditasi", value: "BAN-PT", icon: Shield },
  ];

  const prosesAkreditasi = [
    {
      tahap: "Evaluasi Diri",
      description: "Penyusunan borang dan dokumen evaluasi diri institusi",
      tanggal: "Januari - Maret 2023",
    },
    {
      tahap: "Visitasi Tim Asesor",
      description: "Kunjungan dan penilaian langsung oleh tim asesor BAN-PT",
      tanggal: "April - Mei 2023",
    },
    {
      tahap: "Evaluasi dan Penilaian",
      description: "Analisis komprehensif oleh tim asesor dan panel ahli",
      tanggal: "Juni - Juli 2023",
    },
    {
      tahap: "Penetapan Hasil",
      description: "Keputusan akhir dan penerbitan sertifikat akreditasi",
      tanggal: "Agustus - September 2023",
    },
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

  const getPeringkatColor = (peringkat: string) => {
    switch (peringkat) {
      case "A":
        return "bg-green-100 text-green-800 border-green-200";
      case "B":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "C":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
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
            <span className="text-gray-900">Akreditasi</span>
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
                      Tersedia {documentData.downloads.length} dokumen
                      akreditasi
                    </span>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-stis-green-600 hover:bg-stis-green-700">
                        <DownloadCloud className="w-4 h-4 mr-2" />
                        Download Sertifikat
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      <DropdownMenuLabel className="text-stis-blue-900 font-semibold">
                        Pilih sertifikat untuk diunduh
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
                  Informasi Akreditasi
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
                  Status Akreditasi Program Studi
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Politeknik Statistika STIS telah berhasil mempertahankan
                    akreditasi A (Unggul) dari Badan Akreditasi Nasional
                    Perguruan Tinggi (BAN-PT) untuk institusi dan seluruh
                    program studi yang diselenggarakan. Pencapaian ini merupakan
                    pengakuan terhadap kualitas pendidikan dan pengelolaan
                    institusi yang memenuhi standar nasional.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    Proses akreditasi dilakukan secara komprehensif dengan
                    mengevaluasi berbagai aspek termasuk visi-misi, tata pamong,
                    mahasiswa, sumber daya manusia, kurikulum, pembiayaan,
                    sarana prasarana, sistem informasi, dan luaran.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  {akreditasiProgram.map((program, index) => {
                    const Icon = program.icon;
                    return (
                      <Card
                        key={index}
                        className="hover:shadow-md transition-shadow duration-200"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center`}
                              >
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-gray-900">
                                  {program.program}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {program.jenjang}
                                </p>
                              </div>
                            </div>
                            <div
                              className={`px-3 py-1 rounded-full text-sm font-bold border ${getPeringkatColor(
                                program.peringkat,
                              )}`}
                            >
                              Peringkat {program.peringkat}
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4">
                            {program.description}
                          </p>

                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-gray-500">
                                Tanggal Terbit
                              </div>
                              <div className="font-medium text-gray-900">
                                {program.tanggalTerbit}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500">
                                Berlaku Hingga
                              </div>
                              <div className="font-medium text-gray-900">
                                {program.berlakuHingga}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500">Nomor SK</div>
                              <div className="font-medium text-gray-900 text-xs">
                                {program.nomorSK}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="bg-stis-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-stis-blue-900 mb-4">
                    Proses Akreditasi 2023
                  </h3>
                  <div className="space-y-4">
                    {prosesAkreditasi.map((tahap, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-stis-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-stis-blue-900">
                            {tahap.tahap}
                          </h4>
                          <p className="text-stis-blue-800 text-sm mb-1">
                            {tahap.description}
                          </p>
                          <span className="text-xs text-stis-blue-600 font-medium">
                            {tahap.tanggal}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-stis-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-stis-green-900 mb-3">
                    Komitmen Berkelanjutan
                  </h3>
                  <p className="text-stis-green-800 leading-relaxed mb-4">
                    STIS berkomitmen untuk terus mempertahankan dan meningkatkan
                    kualitas pendidikan melalui perbaikan berkelanjutan dalam
                    semua aspek penyelenggaraan pendidikan tinggi.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Peningkatan kualitas pembelajaran dan kurikulum",
                      "Pengembangan kompetensi dosen dan tenaga kependidikan",
                      "Perbaikan fasilitas dan infrastruktur pendidikan",
                      "Penguatan sistem penjaminan mutu internal",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-stis-green-800"
                      >
                        <CheckCircle className="w-4 h-4 text-stis-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
                    Download Sertifikat
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
                      href="/informasi-publik/laporan-kinerja"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm text-gray-900">
                        Laporan Kinerja 2023
                      </div>
                      <div className="text-xs text-gray-500">
                        Laporan pencapaian kinerja institusi
                      </div>
                    </a>
                    <a
                      href="/akademik/diii-statistika"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm text-gray-900">
                        Program Studi D3 Statistika
                      </div>
                      <div className="text-xs text-gray-500">
                        Informasi program studi terakreditasi A
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
