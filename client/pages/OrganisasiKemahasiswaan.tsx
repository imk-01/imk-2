import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import {
  Users,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Award,
  Target,
  Heart,
  BookOpen,
  Megaphone,
  Music,
  Camera,
  Code,
  Globe,
  ChevronRight,
  Star,
} from "lucide-react";

export default function OrganisasiKemahasiswaan() {
  const organizations = [
    {
      id: 1,
      name: "Himpunan Mahasiswa Politeknik Statistika STIS (HIMASTA)",
      description:
        "Organisasi kemahasiswaan tertinggi di STIS yang mewadahi seluruh aspirasi mahasiswa dan mengkoordinir kegiatan kemahasiswaan.",
      logo: "/api/placeholder/150/150",
      established: "1983",
      members: "600+",
      category: "Organisasi Utama",
      activities: [
        "Advokasi mahasiswa",
        "Program sosial masyarakat",
        "Kegiatan akademik",
        "Pengembangan soft skills",
      ],
      contact: {
        email: "himasta@stis.ac.id",
        instagram: "@himasta_stis",
        facebook: "HIMASTA STIS",
      },
      icon: Users,
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Badan Eksekutif Mahasiswa (BEM)",
      description:
        "Lembaga eksekutif kemahasiswaan yang bertanggung jawab menjalankan program kerja dan melaksanakan kebijakan kemahasiswaan.",
      logo: "/api/placeholder/150/150",
      established: "1985",
      members: "50+",
      category: "Lembaga Eksekutif",
      activities: [
        "Eksekusi program kemahasiswaan",
        "Koordinasi dengan pihak kampus",
        "Pengelolaan fasilitas mahasiswa",
        "Event management",
      ],
      contact: {
        email: "bem@stis.ac.id",
        instagram: "@bem_stis",
        facebook: "BEM STIS",
      },
      icon: Target,
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "Unit Kegiatan Mahasiswa Rohani Islam (UKM ROHIS)",
      description:
        "Organisasi keagamaan yang mengembangkan spiritualitas dan kegiatan keislaman di lingkungan kampus STIS.",
      logo: "/api/placeholder/150/150",
      established: "1990",
      members: "150+",
      category: "UKM Keagamaan",
      activities: [
        "Kajian keislaman",
        "Kegiatan sosial keagamaan",
        "Bimbingan spiritual",
        "Pelatihan tilawah",
      ],
      contact: {
        email: "rohis@stis.ac.id",
        instagram: "@rohis_stis",
      },
      icon: Heart,
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "Unit Kegiatan Mahasiswa Jurnalistik (UKM JURNALISTIK)",
      description:
        "Wadah pengembangan minat dan bakat mahasiswa dalam bidang jurnalistik, media, dan komunikasi.",
      logo: "/api/placeholder/150/150",
      established: "1995",
      members: "80+",
      category: "UKM Media",
      activities: [
        "Penerbitan majalah kampus",
        "Liputan kegiatan kampus",
        "Pelatihan jurnalistik",
        "Media sosial kampus",
      ],
      contact: {
        email: "jurnalistik@stis.ac.id",
        instagram: "@jurnalistik_stis",
        twitter: "@jurnalistik_stis",
      },
      icon: Megaphone,
      color: "bg-orange-500",
    },
    {
      id: 5,
      name: "Unit Kegiatan Mahasiswa Seni dan Budaya (UKM SENBUD)",
      description:
        "Organisasi yang mengembangkan kreativitas mahasiswa dalam bidang seni dan pelestarian budaya Indonesia.",
      logo: "/api/placeholder/150/150",
      established: "1992",
      members: "120+",
      category: "UKM Seni",
      activities: [
        "Pertunjukan seni",
        "Festival budaya",
        "Pelatihan musik dan tari",
        "Lomba kreativitas",
      ],
      contact: {
        email: "senbud@stis.ac.id",
        instagram: "@senbud_stis",
        facebook: "UKM Senbud STIS",
      },
      icon: Music,
      color: "bg-pink-500",
    },
    {
      id: 6,
      name: "Unit Kegiatan Mahasiswa Fotografi (UKM FOTO)",
      description:
        "Komunitas penggemar fotografi yang mengembangkan kemampuan visual dan dokumentasi kegiatan kampus.",
      logo: "/api/placeholder/150/150",
      established: "2000",
      members: "60+",
      category: "UKM Hobi",
      activities: [
        "Workshop fotografi",
        "Dokumentasi acara kampus",
        "Pameran foto",
        "Hunting foto bersama",
      ],
      contact: {
        email: "foto@stis.ac.id",
        instagram: "@foto_stis",
      },
      icon: Camera,
      color: "bg-indigo-500",
    },
    {
      id: 7,
      name: "Unit Kegiatan Mahasiswa Teknologi Informasi (UKM TI)",
      description:
        "Wadah pengembangan kemampuan teknologi informasi dan programming untuk mendukung digitalisasi kampus.",
      logo: "/api/placeholder/150/150",
      established: "2005",
      members: "90+",
      category: "UKM Teknologi",
      activities: [
        "Workshop programming",
        "Pengembangan aplikasi kampus",
        "Kompetisi coding",
        "Tech talk dan seminar",
      ],
      contact: {
        email: "ti@stis.ac.id",
        instagram: "@ukm_ti_stis",
        github: "ukm-ti-stis",
      },
      icon: Code,
      color: "bg-cyan-500",
    },
  ];

  const categories = [
    { name: "Semua", count: organizations.length },
    {
      name: "Organisasi Utama",
      count: organizations.filter((org) => org.category === "Organisasi Utama")
        .length,
    },
    {
      name: "UKM",
      count: organizations.filter((org) => org.category.includes("UKM")).length,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stis-blue-900 to-stis-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-16 h-16 text-white mr-4" />
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white">
              Organisasi Kemahasiswaan
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Wadah pengembangan potensi, kreativitas, dan kepemimpinan mahasiswa
            STIS melalui berbagai organisasi dan unit kegiatan mahasiswa
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-stis-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-stis-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-gray-600">Organisasi Aktif</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-stis-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-stis-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Anggota Aktif</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-stis-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-stis-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Kegiatan per Tahun</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Prestasi Diraih</div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Daftar Organisasi & UKM
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {organizations.map((org) => {
                const Icon = org.icon;
                return (
                  <Card
                    key={org.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-16 h-16 ${org.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                            {org.name}
                          </CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="bg-gray-100 px-2 py-1 rounded">
                              {org.category}
                            </span>
                            <span>Est. {org.established}</span>
                            <span>{org.members} anggota</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {org.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Kegiatan Utama:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {org.activities.map((activity, index) => (
                            <div
                              key={index}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <ChevronRight className="w-3 h-3 mr-1" />
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Kontak:
                        </h4>
                        <div className="flex items-center space-x-4">
                          {org.contact.email && (
                            <a
                              href={`mailto:${org.contact.email}`}
                              className="flex items-center text-sm text-gray-600 hover:text-stis-blue-600"
                            >
                              <Mail className="w-4 h-4 mr-1" />
                              Email
                            </a>
                          )}
                          {org.contact.instagram && (
                            <a
                              href={`https://instagram.com/${org.contact.instagram.replace("@", "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-gray-600 hover:text-pink-600"
                            >
                              <Instagram className="w-4 h-4 mr-1" />
                              IG
                            </a>
                          )}
                          {org.contact.facebook && (
                            <a
                              href="#"
                              className="flex items-center text-sm text-gray-600 hover:text-blue-600"
                            >
                              <Facebook className="w-4 h-4 mr-1" />
                              FB
                            </a>
                          )}
                          {org.contact.twitter && (
                            <a
                              href="#"
                              className="flex items-center text-sm text-gray-600 hover:text-blue-400"
                            >
                              <Twitter className="w-4 h-4 mr-1" />
                              Twitter
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
