import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ChevronRight,
  Download,
  File,
  FileSpreadsheet,
  Archive,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { documentDownloads } from "@/data/informasiPublikData";

export default function LaporanPelayananPublikDetail() {
  const navigate = useNavigate();

  const documentData = {
    title: "Laporan Pelayanan Publik 2023",
    category: "Laporan",
    description:
      "Laporan tahunan pelayanan publik dan tingkat kepuasan masyarakat tahun 2023, mencakup berbagai unit pelayanan di Politeknik Statistika STIS.",
    downloads: documentDownloads.laporanPelayananPublik,
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
            <span className="text-gray-900">Laporan Pelayanan Publik</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header */}
            <div className="p-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {documentData.title}
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {documentData.description}
              </p>

              {/* Download Files List */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  File Download ({documentData.downloads.length} dokumen)
                </h2>
                <div className="space-y-3">
                  {documentData.downloads.map((download, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          {getFileIcon(download.format)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {download.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {download.size} • {download.format}
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-stis-green-600 hover:bg-stis-green-700"
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = download.url;
                          link.download = download.name;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simple content */}
              <div className="mt-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Laporan Pelayanan Publik tahun 2023 disusun sebagai bentuk
                    transparansi dan akuntabilitas penyelenggaraan pelayanan
                    publik di Politeknik Statistika STIS. Laporan ini mencakup
                    evaluasi kinerja berbagai unit pelayanan termasuk
                    perpustakaan, akademik, kemahasiswaan, keuangan, teknologi
                    informasi, dan layanan alumni.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Setiap unit pelayanan telah melaksanakan survei kepuasan
                    untuk mengukur tingkat kepuasan pengguna layanan. Hasil
                    survei ini menjadi masukan penting untuk perbaikan kualitas
                    pelayanan di tahun mendatang.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Dokumen-dokumen yang tersedia mencakup laporan utama setiap
                    unit, hasil survei kepuasan, data pendukung, serta kompilasi
                    dan visualisasi data untuk kemudahan analisis.
                  </p>
                </div>
              </div>

              {/* Back to list */}
              <div className="mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => navigate("/informasi-publik")}
                  className="text-stis-blue-600 border-stis-blue-600 hover:bg-stis-blue-50"
                >
                  Kembali ke Informasi Publik
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
