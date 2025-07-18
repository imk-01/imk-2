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
  openInNewTab?: boolean;
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
      name: "Rencana Strategis 2020-2024 (Reviu)",
      size: "1.5 MB",
      format: "PDF",
      url: "http://stis.ac.id/uploads/RENSTRA%20STIS%202020-2024%20FINAL(14jan2022)_riviu2.pdf",
      openInNewTab: true,
    },
    {
      name: "Rencana Strategis 2020-2024",
      size: "1.1 MB",
      format: "PDF",
      url: "http://stis.ac.id/uploads/sakip/Renstra%20Politeknik%20Statistika%20STIS%202020-2024.pdf",
      openInNewTab: true,    
    },
  ],

  laporanPelayananPublik: [
    // Laporan Utama
    {
      name: "Laporan Tahunan Unit Perpustakaan Tahun 2024",
      size: "410.4 KB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/1.%20Laporan%20Tahunan%20Unit%20Perpustakaan%20Tahun%202024.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Survei Kepuasan Layanan Tahun 2024",
      size: "574.1 KB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/2.%20Laporan%20Survei%20Kepuasan%20Layanan%20Tahun%202024.pdf",
      openInNewTab: true,
    },
    // Unit Perpustakaan
    {
      name: "Laporan PKM 2024",
      size: "1.2 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/3.%20Laporan%20PKM%202024.pdf",
      openInNewTab: true,
    },
    {
      name: "Apresiasi Penggalangan Donasi Bulan Dana PMI",
      size: "448.1 KB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/4.%20Apresiasi%20Penggalangan%20Donasi%20Bulan%20Dana%20PMI.pdf",
      openInNewTab: true,
    },
    {
      name: "Daftar Isi Executive Summary Skripsi KS 2023-2024",
      size: "1.2 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/5.%20Daftar%20Isi%20Executive%20Summary%20Skripsi%20KS%202023-2024.pdf",
      openInNewTab: true,
    },
    // Unit Akademik
    {
      name: "Daftar Executive Summary 2023-2024 Skripsi KS",
      size: "414.3 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/6.%20daftar%20Executive%20Summary%202023-2024%20Skripsi%20KS.pdf",
      openInNewTab: true,
    },
    {
      name: "Prestasi UKM 2024",
      size: "27.6 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/7.%20Prestasi%20UKM2024.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Bulan Juni 2024 Perpustakaan Polstat STIS",
      size: "108.5 KB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/8.%20Laporan%20Bulan%20Juni%202024%20Perpustakaan%20Polstat%20STIS.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Evaluasi Kegiatan Prodi D-IV 2024",
      size: "3.9 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/9.%20Laporan%20Evaluasi%20Kegiatan%20Prodi%20D-IV%202024.pdf",
      openInNewTab: true,
    },
    // Unit Kemahasiswaan
    {
      name: "Laporan Evaluasi Kegiatan Prodi D-IV KS 2024",
      size: "9.0 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/10.%20Laporan%20Evaluasi%20Kegiatan%20Prodi%20D-IV%20KS%202024.docx.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Evaluasi Unit Kegiatan Prodi DIII Stat 2024",
      size: "2.6 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/11.%20Laporan%20Evaluasi%20Unit%20Kegiatan%20Prodi%20DIII%20Stat%202024.docx.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Hasil Pelaksanaan Survei Polstat STIS",
      size: "1.4 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/12.%20Laporan%20Hasil%20Pelaksanaan%20Survei_POLSTATSTIS(1).pdf",
      openInNewTab: true,
    },
    // Unit Keuangan
    {
      name: "Laporan Kegiatan SPD 2024",
      size: "33.8 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/13.%20LAPORAN%20KEGIATAN%20SPD%202024.pptx",
      openInNewTab: true,
    },
    {
      name: "Laporan Kegiatan BAAK 2024",
      size: "381.2 KB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/14.%20Laporan%20Kegiatan%20BAAK%202024%20%20(1).pdf",
      openInNewTab: true,
    },
    // Unit TIK
    {
      name: "Laporan Kegiatan PPPM 2024",
      size: "5.6 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/15.%20Laporan%20Kegiatan%20PPPM%202024.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Kegiatan SPM 2024",
      size: "87.6 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/16.%20Laporan%20Kegiatan%20SPM%202024.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Kegiatan Unit Kegiatan Humas Kerjasama 2024",
      size: "2.7 MB",
      format: "XLSX",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/17.%20Laporan%20Kegiatan%20Unit%20Kegiatan%20Humas%20Kerjasama%202024.pdf",
      openInNewTab: true,
    },
    // PKM dan Alumni
    {
      name: "Laporan Kepuasan Triwulan 2 2024",
      size: "712.4 KB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/18.%20Laporan%20Kepuasan%20Triwulan%202%202024.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Penelitian 2024",
      size: "1.1 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/19.%20Laporan%20Penelitian%202024.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Evaluasi UPK 2024",
      size: "14.0 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/informasi-publik/layanan-publik/2024/20.%20Laporan%20Evaluasi%20UPK%202024.docx.pdf",
      openInNewTab: true,
    },
    {
      name: "Laporan Survei SPKP 2024",
      size: "1.4 MB",
      format: "PDF",
      url: "https://stis.ac.id/media/source/laporan_survei_spkp.pdf",
      openInNewTab: true,
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
    title: "Rencana Strategis",
    description:
      "Dokumen perencanaan strategis institusi untuk periode 2020-2024",
    category: "Perencanaan",
    updated: "Januari 2024",
    href: "/informasi-publik/renstra",
    icon: Target,
    color: "bg-stis-blue-600",
    downloads: documentDownloads.renstra,
  },
  {
    title: "Laporan Pelayanan Publik",
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
