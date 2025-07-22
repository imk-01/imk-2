import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
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
    title: "Laporan Pelayanan Publik 2024",
    category: "Laporan",
    description:
      "Laporan Pelayanan Publik tahun 2024 disusun sebagai bentuk transparansi dan akuntabilitas penyelenggaraan pelayanan publik di Politeknik Statistika STIS. Laporan ini mencakup evaluasi kinerja berbagai unit pelayanan termasuk perpustakaan, akademik, kemahasiswaan, keuangan, teknologi informasi, dan layanan alumni.",
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

              <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                {documentData.description}
              </p>

              {/* Download Files List */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Unduh Dokumen ({documentData.downloads.length} dokumen)
                </h2>
                <div className="space-y-3">
                 {documentData.downloads.map((download, index) => {
                    const downloadContent = (
                        <>
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
                            <div className="bg-stis-green-600 hover:bg-stis-green-700 text-white rounded-md h-9 px-3 py-2 text-sm font-medium inline-flex items-center">
                                <Download className="w-4 h-4 mr-2" />
                                Unduh
                            </div>
                        </>
                    );

                    return (
                        <a
                            key={index}
                            href={download.url}
                            target={download.openInNewTab ? "_blank" : "_self"}
                            rel={download.openInNewTab ? "noopener noreferrer" : ""}
                            download={!download.openInNewTab ? download.name : undefined}
                            className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow duration-200"
                        >
                            {downloadContent}
                        </a>
                    );
                })}
                </div>
              </div>

              {/* Back to list */}
              <div className="mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => navigate("/informasi-publik")}
                  className="text-stis-blue-600 border-stis-blue-600 hover:bg-stis-blue-50 hover:text-stis-blue-600" // Perubahan di sini
                >
                  Kembali ke Informasi Publik
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
}
