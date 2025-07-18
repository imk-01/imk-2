import "./global.css";


import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AutoScrollToTop from "@/components/AutoScrollToTop";
import HelpdeskButton from "@/components/HelpdeskButton";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VisiMisi from "./pages/VisiMisi";
import Sejarah from "./pages/Sejarah";
import Lambang from "./pages/Lambang";
import Bendera from "./pages/Bendera";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import D3Statistika from "./pages/D3Statistika";
import D4Statistika from "./pages/D4Statistika";
import D4KomputasiStatistika from "./pages/D4KomputasiStatistika";
import KalenderAkademik from "./pages/KalenderAkademik";
import Kemahasiswaan from "./pages/Kemahasiswaan";
import Galeri from "./pages/Galeri";
import RencanaStrategis from "./pages/RencanaStrategis";
import AkreditasiSTIS from "./pages/AkreditasiSTIS";
import MaklumatPelayanan from "./pages/MaklumatPelayanan";
import InformasiPublik from "./pages/InformasiPublik";
import Berita from "./pages/Berita";
import BeritaDetail from "./pages/BeritaDetail";
import GaleriAlbum from "./pages/GaleriAlbum";
import OrganisasiKemahasiswaan from "./pages/OrganisasiKemahasiswaan";
import SenatMahasiswa from "./pages/SenatMahasiswa";
import PrestasiMahasiswa from "./pages/PrestasiMahasiswa";
import SearchResults from "./pages/SearchResults";
import ProsedurLegalisir from "./pages/ProsedurLegalisir";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AutoScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profil/lambang" element={<Lambang />} />
          <Route path="/profil/bendera" element={<Bendera />} />
          <Route path="/profil/visi-misi" element={<VisiMisi />} />
          <Route path="/profil/sejarah" element={<Sejarah />} />
          <Route
            path="/profil/struktur-organisasi"
            element={<StrukturOrganisasi />}
          />
          <Route path="/profil/*" element={<NotFound />} />
          <Route path="/akademik/diii-statistika" element={<D3Statistika />} />
          <Route path="/akademik/div-statistika" element={<D4Statistika />} />
          <Route
            path="/akademik/div-komputasi"
            element={<D4KomputasiStatistika />}
          />
          <Route path="/akademik/kalender" element={<KalenderAkademik />} />
          <Route path="/akademik/*" element={<NotFound />} />
          <Route
            path="/kemahasiswaan/organisasi"
            element={<OrganisasiKemahasiswaan />}
          />
          <Route path="/kemahasiswaan/senat" element={<SenatMahasiswa />} />
          <Route
            path="/kemahasiswaan/prestasi"
            element={<PrestasiMahasiswa />}
          />
          <Route path="/kemahasiswaan/*" element={<NotFound />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/galeri/album/:slug" element={<GaleriAlbum />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/informasi-publik" element={<InformasiPublik />} />
          <Route
            path="/informasi-publik/renstra"
            element={<RencanaStrategis />}
          />
          <Route
            path="/informasi-publik/akreditasi"
            element={<AkreditasiSTIS />}
          />
          <Route
            path="/informasi-publik/maklumat"
            element={<MaklumatPelayanan />}
          />
          <Route path="/informasi-publik/*" element={<NotFound />} />
          <Route path="/layanan/legalisir" element={<ProsedurLegalisir />} />
          <Route path="/layanan/*" element={<NotFound />} />
          <Route path="/spmb-2025" element={<NotFound />} />
          <Route path="/feedback" element={<NotFound />} />
          <Route path="/berita" element={<NotFound />} />
          <Route path="/kontak" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <HelpdeskButton />
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
