import {
  Target,
  Users,
  BookOpen,
  FileText,
  BarChart3,
  TrendingUp,
  Globe,
  Shield,
  Award,
} from "lucide-react";

export interface DownloadFile {
  name: string;
  size: string;
  format: string;
  url: string;
}

export interface PublicDocument {
  title: string;
  description: string;
  category: string;
  updated: string;
  href: string;
  icon: any;
  color: string;
  downloads: DownloadFile[];
}

// Document downloads - define once, use everywhere
export const documentDownloads = {
  renstra: [
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

  laporanPelayananPublik: [
    // Laporan Utama
    {
      name: "Laporan Pelayanan Publik 2023",
      size: "1.8 MB",
      format: "PDF",
      url: "/docs/laporan-pelayanan-2023.pdf",
    },
    {
      name: "Ringkasan Eksekutif Laporan Pelayanan",
      size: "650 KB",
      format: "PDF",
      url: "/docs/ringkasan-pelayanan-2023.pdf",
    },
    // Unit Perpustakaan
    {
      name: "Laporan Tahunan Unit Perpustakaan 2023",
      size: "980 KB",
      format: "PDF",
      url: "/docs/laporan-perpustakaan-2023.pdf",
    },
    {
      name: "Data Kunjungan Perpustakaan 2023",
      size: "420 KB",
      format: "XLSX",
      url: "/docs/data-kunjungan-perpus-2023.xlsx",
    },
    {
      name: "Survei Kepuasan Layanan Perpustakaan",
      size: "750 KB",
      format: "PDF",
      url: "/docs/survei-perpustakaan-2023.pdf",
    },
    // Unit Akademik
    {
      name: "Laporan Pelayanan Akademik 2023",
      size: "1.2 MB",
      format: "PDF",
      url: "/docs/laporan-akademik-2023.pdf",
    },
    {
      name: "Survei Kepuasan Mahasiswa terhadap Layanan Akademik",
      size: "890 KB",
      format: "PDF",
      url: "/docs/survei-akademik-2023.pdf",
    },
    {
      name: "Data Layanan Akademik Semester Ganjil",
      size: "340 KB",
      format: "XLSX",
      url: "/docs/data-akademik-ganjil-2023.xlsx",
    },
    {
      name: "Data Layanan Akademik Semester Genap",
      size: "385 KB",
      format: "XLSX",
      url: "/docs/data-akademik-genap-2023.xlsx",
    },
    // Unit Kemahasiswaan
    {
      name: "Laporan Pelayanan Kemahasiswaan 2023",
      size: "950 KB",
      format: "PDF",
      url: "/docs/laporan-kemahasiswaan-2023.pdf",
    },
    {
      name: "Survei Kepuasan Layanan Kemahasiswaan",
      size: "680 KB",
      format: "PDF",
      url: "/docs/survei-kemahasiswaan-2023.pdf",
    },
    {
      name: "Data Kegiatan Kemahasiswaan 2023",
      size: "290 KB",
      format: "XLSX",
      url: "/docs/data-kemahasiswaan-2023.xlsx",
    },
    // Unit Keuangan
    {
      name: "Laporan Pelayanan Keuangan 2023",
      size: "780 KB",
      format: "PDF",
      url: "/docs/laporan-keuangan-2023.pdf",
    },
    {
      name: "Survei Kepuasan Layanan Keuangan",
      size: "520 KB",
      format: "PDF",
      url: "/docs/survei-keuangan-2023.pdf",
    },
    // Unit TIK
    {
      name: "Laporan Pelayanan Teknologi Informasi 2023",
      size: "1.1 MB",
      format: "PDF",
      url: "/docs/laporan-tik-2023.pdf",
    },
    {
      name: "Survei Kepuasan Layanan TIK",
      size: "640 KB",
      format: "PDF",
      url: "/docs/survei-tik-2023.pdf",
    },
    {
      name: "Data Penggunaan Sistem Informasi",
      size: "450 KB",
      format: "XLSX",
      url: "/docs/data-sistem-informasi-2023.xlsx",
    },
    // PKM dan Alumni
    {
      name: "Laporan PKM (Pengabdian kepada Masyarakat) 2023",
      size: "1.3 MB",
      format: "PDF",
      url: "/docs/laporan-pkm-2023.pdf",
    },
    {
      name: "Laporan Layanan Alumni 2023",
      size: "850 KB",
      format: "PDF",
      url: "/docs/laporan-alumni-2023.pdf",
    },
    {
      name: "Data Tracer Study Alumni 2023",
      size: "380 KB",
      format: "XLSX",
      url: "/docs/tracer-study-2023.xlsx",
    },
    // Data Kompilasi
    {
      name: "Kompilasi Data Kepuasan Pelayanan 2023",
      size: "720 KB",
      format: "XLSX",
      url: "/docs/kompilasi-kepuasan-2023.xlsx",
    },
    {
      name: "Grafik dan Visualisasi Data Pelayanan",
      size: "2.1 MB",
      format: "PDF",
      url: "/docs/visualisasi-pelayanan-2023.pdf",
    },
    // Dokumen Lengkap
    {
      name: "Semua Dokumen Laporan Pelayanan Publik 2023",
      size: "18.5 MB",
      format: "ZIP",
      url: "/docs/semua-laporan-pelayanan-2023.zip",
    },
  ],

  peraturanAkademik: [
    {
      name: "Peraturan Akademik Lengkap 2024",
      size: "3.2 MB",
      format: "PDF",
      url: "/docs/peraturan-akademik-2024.pdf",
    },
    {
      name: "Peraturan Kemahasiswaan 2024",
      size: "1.5 MB",
      format: "PDF",
      url: "/docs/peraturan-kemahasiswaan-2024.pdf",
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
    {
      name: "Peraturan Tugas Akhir dan PKL",
      size: "1.1 MB",
      format: "PDF",
      url: "/docs/peraturan-tugas-akhir-pkl.pdf",
    },
    {
      name: "Pedoman Penilaian dan Evaluasi",
      size: "980 KB",
      format: "PDF",
      url: "/docs/pedoman-penilaian-evaluasi.pdf",
    },
  ],

  perjanjianKinerja: [
    {
      name: "Perjanjian Kinerja 2024",
      size: "1.2 MB",
      format: "PDF",
      url: "/docs/perjanjian-kinerja-2024.pdf",
    },
  ],

  indikatorKinerjaUtama: [
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

  laporanKinerja: [
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

  perjanjianKerjaSama: [
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

  maklumatPelayanan: [
    {
      name: "Maklumat Pelayanan 2024",
      size: "800 KB",
      format: "PDF",
      url: "/docs/maklumat-pelayanan-2024.pdf",
    },
  ],

  dokumenAkreditasi: [
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
};

// Main document configuration that uses the shared downloads
export const publicDocuments: PublicDocument[] = [
  {
    title: "Rencana Strategis 2024-2029",
    description:
      "Dokumen perencanaan strategis institusi untuk periode 2024-2029",
    category: "Perencanaan",
    updated: "Januari 2024",
    href: "/informasi-publik/renstra",
    icon: Target,
    color: "bg-stis-blue-600",
    downloads: documentDownloads.renstra,
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
    downloads: documentDownloads.laporanPelayananPublik,
  },
  {
    title: "Peraturan Akademik Terbaru",
    description: "Kumpulan peraturan akademik dan kemahasiswaan yang berlaku",
    category: "Regulasi",
    updated: "Februari 2024",
    href: "/informasi-publik/peraturan",
    icon: BookOpen,
    color: "bg-stis-orange-600",
    downloads: documentDownloads.peraturanAkademik,
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
    downloads: documentDownloads.perjanjianKinerja,
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
    downloads: documentDownloads.indikatorKinerjaUtama,
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
    downloads: documentDownloads.laporanKinerja,
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
    downloads: documentDownloads.perjanjianKerjaSama,
  },
  {
    title: "Maklumat Pelayanan",
    description: "Standar pelayanan publik dan komitmen kualitas layanan STIS",
    category: "Pelayanan",
    updated: "Januari 2024",
    href: "/informasi-publik/maklumat",
    icon: Shield,
    color: "bg-emerald-600",
    downloads: documentDownloads.maklumatPelayanan,
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
    downloads: documentDownloads.dokumenAkreditasi,
  },
];
