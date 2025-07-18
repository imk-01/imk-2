import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  FileText,
  Download,
  Calendar,
  Users,
  BarChart3,
  Shield,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  CheckCircle,
  Globe,
  Search,
  Filter,
  ChevronDown,
  Eye,
  DownloadCloud,
  File,
  FileSpreadsheet,
  Archive,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export default function InformasiPublik() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

    const publicDocuments = [
    {
      title: "Rencana Strategis 2024-2029",
      description:
        "Dokumen perencanaan strategis institusi untuk periode 2024-2029",
      category: "Perencanaan",
      updated: "Januari 2024",
      href: "/informasi-publik/renstra",
      icon: Target,
      color: "bg-stis-blue-600",
      downloads: [
        {
          name: "Renstra 2024-2029 (Bahasa Indonesia)",
          size: "2.5 MB",
          format: "PDF",
          url: "/docs/renstra-2024-2029-id.pdf",
        },
        {
          name: "Strategic Plan 2024-2029 (English)",
          size: "2.8 MB",
          format: "PDF",
          url: "/docs/strategic-plan-2024-2029-en.pdf",
        },
        {
          name: "Ringkasan Eksekutif",
          size: "850 KB",
          format: "PDF",
          url: "/docs/renstra-ringkasan.pdf",
        },
      ],
    },
        {
      title: "Laporan Pelayanan Publik 2023",
      description:
        "Laporan tahunan pelayanan publik dan tingkat kepuasan masyarakat",
      category: "Laporan",
      updated: "Maret 2024",
      href: "/informasi-publik/laporan-pelayanan",
      icon: Users,
      color: "bg-stis-green-600",
      downloads: [
        {
          name: "Laporan Pelayanan Publik 2023",
          size: "1.8 MB",
          format: "PDF",
          url: "/docs/laporan-pelayanan-2023.pdf",
        },
        {
          name: "Data Kepuasan Pelayanan",
          size: "450 KB",
          format: "XLSX",
          url: "/docs/data-kepuasan-2023.xlsx",
        },
        {
          name: "Grafik dan Visualisasi",
          size: "2.1 MB",
          format: "PDF",
          url: "/docs/visualisasi-pelayanan-2023.pdf",
        },
      ],
    },
        {
      title: "Peraturan Akademik Terbaru",
      description: "Kumpulan peraturan akademik dan kemahasiswaan yang berlaku",
      category: "Regulasi",
      updated: "Februari 2024",
      href: "/informasi-publik/peraturan",
      icon: BookOpen,
      color: "bg-stis-orange-600",
      downloads: [
        {
          name: "Peraturan Akademik Lengkap",
          size: "3.2 MB",
          format: "PDF",
          url: "/docs/peraturan-akademik-2024.pdf",
        },
        {
          name: "Peraturan Kemahasiswaan",
          size: "1.5 MB",
          format: "PDF",
          url: "/docs/peraturan-kemahasiswaan.pdf",
        },
        {
          name: "Panduan Akademik Mahasiswa",
          size: "2.8 MB",
          format: "PDF",
          url: "/docs/panduan-akademik-mhs.pdf",
        },
        {
          name: "SK Direktur terkait Akademik",
          size: "850 KB",
          format: "ZIP",
          url: "/docs/sk-direktur-akademik.zip",
        },
      ],
    },
        {
      title: "Perjanjian Kinerja 2024",
      description:
        "Dokumen perjanjian kinerja institusi dengan Kementerian Pendidikan",
      category: "Kontrak",
      updated: "Januari 2024",
      href: "/informasi-publik/perjanjian-kinerja",
      icon: FileText,
      color: "bg-purple-600",
      downloads: [
        {
          name: "Perjanjian Kinerja 2024",
          size: "1.2 MB",
          format: "PDF",
          url: "/docs/perjanjian-kinerja-2024.pdf",
        },
      ],
    },
    {
      title: "Indikator Kinerja Utama",
      description:
        "Key Performance Indicators (KPI) dan target pencapaian institusi",
      category: "Monitoring",
      updated: "Desember 2023",
      href: "/informasi-publik/iku",
      icon: BarChart3,
      color: "bg-indigo-600",
      downloads: [
        {
          name: "IKU 2024-2029",
          size: "950 KB",
          format: "PDF",
          url: "/docs/iku-2024-2029.pdf",
        },
        {
          name: "Target dan Realisasi IKU",
          size: "650 KB",
          format: "XLSX",
          url: "/docs/target-realisasi-iku.xlsx",
        },
      ],
    },
    {
      title: "Laporan Kinerja 2023",
      description:
        "Laporan pencapaian kinerja institusi berdasarkan target yang ditetapkan",
      category: "Laporan",
      updated: "Maret 2024",
      href: "/informasi-publik/laporan-kinerja",
      icon: TrendingUp,
      color: "bg-teal-600",
      downloads: [
        {
          name: "Laporan Kinerja 2023 Lengkap",
          size: "2.1 MB",
          format: "PDF",
          url: "/docs/laporan-kinerja-2023.pdf",
        },
        {
          name: "Ringkasan Eksekutif",
          size: "450 KB",
          format: "PDF",
          url: "/docs/ringkasan-lapkin-2023.pdf",
        },
        {
          name: "Data Pendukung",
          size: "1.2 MB",
          format: "XLSX",
          url: "/docs/data-lapkin-2023.xlsx",
        },
      ],
    },
    {
      title: "Perjanjian Kerja Sama",
      description:
        "Dokumen kerjasama dengan berbagai institusi dalam dan luar negeri",
      category: "Kerjasama",
      updated: "Februari 2024",
      href: "/informasi-publik/kerja-sama",
      icon: Globe,
      color: "bg-cyan-600",
      downloads: [
        {
          name: "MoU Universitas Dalam Negeri",
          size: "2.8 MB",
          format: "ZIP",
          url: "/docs/mou-universitas-dn.zip",
        },
        {
          name: "MoU Universitas Luar Negeri",
          size: "1.9 MB",
          format: "ZIP",
          url: "/docs/mou-universitas-ln.zip",
        },
        {
          name: "MoU Industri dan Pemerintah",
          size: "1.1 MB",
          format: "ZIP",
          url: "/docs/mou-industri-pemerintah.zip",
        },
        {
          name: "Semua Dokumen Kerjasama",
          size: "5.8 MB",
          format: "ZIP",
          url: "/docs/semua-mou.zip",
        },
      ],
    },
    {
      title: "Maklumat Pelayanan",
      description:
        "Standar pelayanan publik dan komitmen kualitas layanan STIS",
      category: "Pelayanan",
      updated: "Januari 2024",
      href: "/informasi-publik/maklumat",
      icon: Shield,
      color: "bg-emerald-600",
      downloads: [
        {
          name: "Maklumat Pelayanan 2024",
          size: "800 KB",
          format: "PDF",
          url: "/docs/maklumat-pelayanan-2024.pdf",
        },
      ],
    },
        {
      title: "Dokumen Akreditasi",
      description:
        "Sertifikat akreditasi institusi dan program studi dari BAN-PT",
      category: "Akreditasi",
      updated: "Oktober 2023",
      href: "/informasi-publik/akreditasi",
      icon: Award,
      color: "bg-amber-600",
      downloads: [
        {
          name: "Sertifikat Akreditasi Institusi",
          size: "1.2 MB",
          format: "PDF",
          url: "/docs/akreditasi-institusi.pdf",
        },
        {
          name: "Akreditasi D3 Statistika",
          size: "950 KB",
          format: "PDF",
          url: "/docs/akreditasi-d3-statistika.pdf",
        },
        {
          name: "Akreditasi D4 Statistika",
          size: "980 KB",
          format: "PDF",
          url: "/docs/akreditasi-d4-statistika.pdf",
        },
        {
          name: "Akreditasi D4 Komputasi Statistika",
          size: "1.1 MB",
          format: "PDF",
          url: "/docs/akreditasi-d4-komstat.pdf",
        },
        {
          name: "Semua Dokumen Akreditasi",
          size: "4.2 MB",
          format: "ZIP",
          url: "/docs/akreditasi-lengkap.zip",
        },
      ],
    },
  ];

  const filteredDocuments = publicDocuments.filter((doc) => {
    const matchesSearch =
      searchTerm === "" ||
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Semua" || doc.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { name: "Semua", count: publicDocuments.length },
    {
      name: "Perencanaan",
      count: publicDocuments.filter((doc) => doc.category === "Perencanaan")
        .length,
    },
    {
      name: "Laporan",
      count: publicDocuments.filter((doc) => doc.category === "Laporan").length,
    },
    {
      name: "Regulasi",
      count: publicDocuments.filter((doc) => doc.category === "Regulasi")
        .length,
    },
    {
      name: "Pelayanan",
      count: publicDocuments.filter((doc) => doc.category === "Pelayanan")
        .length,
    },
  ];

  const stats = [
    {
      label: "Total Dokumen",
      value: publicDocuments.length.toString(),
      icon: FileText,
    },
    {
      label: "Kategori",
      value: new Set(
        publicDocuments.map((doc) => doc.category),
      ).size.toString(),
      icon: BookOpen,
    },
    {
      label: "Update Terakhir",
      value: "Maret 2024",
      icon: Calendar,
    },
    {
      label: "Total Download",
      value: "2,500+",
      icon: Download,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-16 h-16 text-stis-orange-400 mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Informasi Publik
            </h1>
          </div>
          <p className="text-xl text-stis-blue-100 max-w-3xl mx-auto">
            Akses transparan terhadap informasi dan dokumen resmi Politeknik
            Statistika STIS sesuai dengan Undang-Undang Keterbukaan Informasi
            Publik
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 text-stis-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Search */}
                  <div className="flex-1 w-full">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Cari dokumen, kategori, atau deskripsi..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-3 w-full"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 font-medium whitespace-nowrap">
                      Kategori:
                    </span>
                  </div>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedCategory === category.name
                          ? "default"
                          : "outline"
                      }
                      onClick={() => setSelectedCategory(category.name)}
                      className={`${
                        selectedCategory === category.name
                          ? "bg-stis-blue-600 hover:bg-stis-blue-700"
                          : "border-stis-blue-600 text-stis-blue-600 hover:bg-stis-blue-600 hover:text-white"
                      }`}
                    >
                      {category.name}
                      <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Button>
                  ))}
                </div>

                {/* Search Results Info */}
                {(searchTerm || selectedCategory !== "Semua") && (
                  <div className="mt-4 p-3 bg-stis-blue-50 rounded-lg">
                    <p className="text-stis-blue-800 text-sm">
                      Menampilkan {filteredDocuments.length} dari{" "}
                      {publicDocuments.length} dokumen
                      {searchTerm && ` untuk "${searchTerm}"`}
                      {selectedCategory !== "Semua" &&
                        ` dalam kategori "${selectedCategory}"`}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Dokumen Publik
            </h2>

            {filteredDocuments.length === 0 ? (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">
                  Tidak ada dokumen ditemukan
                </h3>
                <p className="text-gray-400">
                  Coba ubah kata kunci pencarian atau pilih kategori lain
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDocuments.map((doc, index) => {
                  const Icon = doc.icon;
                  return (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div
                            className={`w-14 h-14 ${doc.color} rounded-xl flex items-center justify-center mb-4`}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="text-right">
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                              {doc.category}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-lg group-hover:text-stis-blue-600 transition-colors">
                          {doc.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {doc.description}
                        </p>
                                                <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Update: {doc.updated}</span>
                            <span>
                              {doc.downloads?.length} file{doc.downloads?.length !== 1 ? 's' : ''}
                            </span>
                          </div>
                        </div>
                                                <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-stis-blue-600 hover:bg-stis-blue-700"
                            onClick={() => (window.location.href = doc.href)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Lihat Detail
                          </Button>

                          {doc.downloads && doc.downloads.length === 1 ? (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-stis-green-600 text-stis-green-600 hover:bg-stis-green-600 hover:text-white"
                              onClick={() => {
                                const link = document.createElement('a');
                                link.href = doc.downloads[0].url;
                                link.download = doc.downloads[0].name;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                          ) : (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-stis-green-600 text-stis-green-600 hover:bg-stis-green-600 hover:text-white"
                                >
                                  <DownloadCloud className="w-4 h-4 mr-1" />
                                  <ChevronDown className="w-3 h-3" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-80">
                                <DropdownMenuLabel className="text-stis-blue-900 font-semibold">
                                  Pilih dokumen untuk diunduh
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {doc.downloads?.map((download, downloadIndex) => {
                                  const getFileIcon = (format: string) => {
                                    switch (format.toLowerCase()) {
                                      case 'pdf':
                                        return <File className="w-4 h-4 text-red-600" />;
                                      case 'xlsx':
                                      case 'xls':
                                        return <FileSpreadsheet className="w-4 h-4 text-green-600" />;
                                      case 'zip':
                                        return <Archive className="w-4 h-4 text-orange-600" />;
                                      default:
                                        return <FileText className="w-4 h-4 text-gray-600" />;
                                    }
                                  };

                                  return (
                                    <DropdownMenuItem
                                      key={downloadIndex}
                                      className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-stis-blue-50"
                                      onClick={() => {
                                        const link = document.createElement('a');
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
                                  );
                                })}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-stis-blue-50 to-stis-green-50">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <Shield className="w-12 h-12 text-stis-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-4">
                      Keterbukaan Informasi Publik
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Sebagai institusi publik, Politeknik Statistika STIS
                      berkomitmen untuk memberikan akses informasi yang
                      transparan kepada masyarakat sesuai dengan UU No. 14 Tahun
                      2008 tentang Keterbukaan Informasi Publik.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-stis-green-600" />
                        <span>
                          Semua dokumen telah melalui proses verifikasi
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-stis-green-600" />
                        <span>Update berkala sesuai regulasi yang berlaku</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-stis-green-600" />
                        <span>
                          Akses gratis untuk seluruh masyarakat Indonesia
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    <Footer />

    </div>
  );
}
