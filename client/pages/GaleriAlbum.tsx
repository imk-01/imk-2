import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Eye,
  Download,
  Share2,
  ChevronRight,
  ChevronLeft,
  X,
  ZoomIn,
  Image as ImageIcon,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { galeriList } from "@/data/galeri"; // Import data

export default function GaleriAlbum() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Find album data by slug from the imported galeriList
  const albumData = galeriList.find((album) => album.slug === slug);

  // Handle case where album is not found
  if (!albumData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Album tidak ditemukan</h1>
          <p className="text-gray-600 mt-4">
            Album yang Anda cari tidak ada.
          </p>
          <Button onClick={() => navigate("/galeri")} className="mt-8">
            Kembali ke Galeri
          </Button>
        </div>
      </div>
    );
  }

  // Related albums (example logic, adjust as needed)
  const relatedAlbums = galeriList
    .filter((album) => album.id !== albumData.id)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage > 0 ? selectedImage - 1 : albumData.images.length - 1,
      );
    } else {
      setSelectedImage(
        selectedImage < albumData.images.length - 1 ? selectedImage + 1 : 0,
      );
    }
  };

  const downloadImage = (imageUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${albumData.title} - ${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <a href="/galeri" className="hover:text-stis-blue-600">
              Galeri
            </a>
            <ChevronRight size={16} />
            <span className="text-gray-900">Album</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Album Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <img
                src={albumData.image}
                alt={albumData.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {albumData.title}
              </h1>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {albumData.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{formatDate(albumData.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ImageIcon size={16} />
                  <span>{albumData.images.length} foto</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Foto dalam Album
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Download Semua</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {albumData.images.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative cursor-pointer rounded-lg overflow-hidden bg-gray-100"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn
                        size={24}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                      <h3 className="text-sm font-medium mb-1">
                        {image.title}
                      </h3>
                      <p className="text-xs opacity-90 line-clamp-2">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Albums */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Album Lainnya
                </h3>
                <div className="space-y-4">
                  {relatedAlbums.map((album) => (
                    <div
                      key={album.id}
                      className="group cursor-pointer"
                      onClick={() => navigate(`/galeri/album/${album.slug}`)}
                    >
                      <div className="flex space-x-3">
                        <img
                          src={album.image}
                          alt={album.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-stis-blue-600 transition-colors line-clamp-2 mb-1">
                            {album.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{album.images.length} foto</span>
                            <span>•</span>
                            <span>{formatDate(album.date)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Share Album */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Bagikan Album
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Share2 size={16} className="mr-2" />
                    Salin Link
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Download size={16} className="mr-2" />
                    Download Album
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            >
              <X size={24} />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateImage("prev")}
              className="absolute left-4 text-white hover:bg-white/20 z-10"
            >
              <ChevronLeft size={32} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateImage("next")}
              className="absolute right-4 text-white hover:bg-white/20 z-10"
            >
              <ChevronRight size={32} />
            </Button>

            {/* Image */}
            <div className="flex flex-col items-center max-h-full">
              <img
                src={albumData.images[selectedImage].url}
                alt={albumData.images[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-white text-center mt-4 px-4">
                <h3 className="text-lg font-medium mb-2">
                  {albumData.images[selectedImage].title}
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  {albumData.images[selectedImage].caption}
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <span>
                    {selectedImage + 1} dari {albumData.images.length}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      downloadImage(
                        albumData.images[selectedImage].url,
                        albumData.images[selectedImage].title,
                      )
                    }
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    <Download size={16} className="mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}