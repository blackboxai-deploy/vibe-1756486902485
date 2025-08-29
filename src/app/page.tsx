'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Koperasi Syariah</h1>
                <p className="text-xs text-gray-600">Simpan Pinjam Syariah</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Masuk
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Daftar Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 text-sm px-4 py-2">
            ✨ Sesuai Prinsip Syariah Islam
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Koperasi <span className="text-green-600">Simpan Pinjam</span>
            <br />
            <span className="text-emerald-600">Syariah Terpercaya</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan sistem keuangan yang halal dan berkah. 
            Kami menyediakan layanan simpan pinjam yang sepenuhnya mematuhi prinsip syariah Islam 
            dengan transparansi dan keadilan untuk semua anggota.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                Bergabung Sekarang
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f992df5a-7513-4b7b-bcfa-c32cae5aa1a2.png" 
              alt="Islamic cooperative financial institution modern building with Islamic architecture elements"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan Syariah Terlengkap
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Semua produk dan layanan kami telah tersertifikasi halal oleh Dewan Pengawas Syariah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Simpanan Wadiah */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <CardTitle className="text-xl text-green-700">Simpanan Wadiah</CardTitle>
                <CardDescription>
                  Simpanan amanah dengan akad wadiah yang aman dan terjamin syariah
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bebas biaya administrasi bulanan</li>
                  <li>• Dapat diambil sewaktu-waktu</li>
                  <li>• Mendapat bonus sesuai kebijakan</li>
                  <li>• Dijamin keamanan dananya</li>
                </ul>
              </CardContent>
            </Card>

            {/* Simpanan Mudharabah */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded"></div>
                </div>
                <CardTitle className="text-xl text-emerald-700">Simpanan Mudharabah</CardTitle>
                <CardDescription>
                  Investasi syariah dengan sistem bagi hasil yang menguntungkan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sistem bagi hasil yang adil</li>
                  <li>• Nisbah kompetitif</li>
                  <li>• Investasi halal dan berkah</li>
                  <li>• Laporan transparan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pembiayaan Murabahah */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <CardTitle className="text-xl text-blue-700">Pembiayaan Murabahah</CardTitle>
                <CardDescription>
                  Pembiayaan syariah untuk kebutuhan barang dengan akad jual beli
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tanpa bunga (riba)</li>
                  <li>• Margin yang transparan</li>
                  <li>• Proses cepat dan mudah</li>
                  <li>• Sesuai prinsip syariah</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pembiayaan Musyarakah */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                </div>
                <CardTitle className="text-xl text-purple-700">Pembiayaan Musyarakah</CardTitle>
                <CardDescription>
                  Kemitraan usaha dengan sistem bagi hasil yang saling menguntungkan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Partnership bisnis syariah</li>
                  <li>• Bagi hasil sesuai kontribusi</li>
                  <li>• Mendukung pengembangan UMKM</li>
                  <li>• Pembinaan usaha berkelanjutan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Zakat Management */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-yellow-600 rounded"></div>
                </div>
                <CardTitle className="text-xl text-yellow-700">Manajemen Zakat</CardTitle>
                <CardDescription>
                  Perhitungan dan penyaluran zakat yang akurat dan tepat sasaran
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Kalkulasi zakat otomatis</li>
                  <li>• Penyaluran tersertifikasi</li>
                  <li>• Laporan penyaluran transparan</li>
                  <li>• Mudah dan terpercaya</li>
                </ul>
              </CardContent>
            </Card>

            {/* Konsultasi Syariah */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-teal-600 rounded"></div>
                </div>
                <CardTitle className="text-xl text-teal-700">Konsultasi Syariah</CardTitle>
                <CardDescription>
                  Bimbingan dan konsultasi keuangan syariah dari para ahli
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Konsultasi gratis untuk anggota</li>
                  <li>• Tim ahli syariah berpengalaman</li>
                  <li>• Solusi keuangan islami</li>
                  <li>• Edukasi finansial syariah</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Islamic Principles Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Prinsip Syariah Yang Kami Junjung</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Berkomitmen penuh mengikuti ajaran Islam dalam setiap transaksi dan layanan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bebas Riba</h3>
              <p className="opacity-90">Tidak ada bunga dalam semua transaksi keuangan</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Adil & Transparan</h3>
              <p className="opacity-90">Semua prosedur dan biaya dijelaskan dengan jelas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gotong Royong</h3>
              <p className="opacity-90">Saling membantu dalam kebaikan dan ketakwaan</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Halal & Berkah</h3>
              <p className="opacity-90">Hanya berinvestasi pada sektor yang halal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mulai Perjalanan Keuangan Syariah Anda
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Bergabunglah dengan ribuan anggota yang telah merasakan manfaat 
            keuangan syariah yang berkah dan penuh keberkahan
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg w-full sm:w-auto">
                Daftar Gratis Sekarang
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-12 py-4 text-lg w-full sm:w-auto">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KS</span>
                </div>
                <div>
                  <h3 className="font-bold">Koperasi Syariah</h3>
                  <p className="text-xs text-gray-400">Simpan Pinjam Syariah</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Lembaga keuangan syariah terpercaya yang berkomitmen memberikan layanan terbaik
                sesuai prinsip Islam.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Simpanan Wadiah</li>
                <li>Simpanan Mudharabah</li>
                <li>Pembiayaan Murabahah</li>
                <li>Pembiayaan Musyarakah</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Tentang Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Profil Koperasi</li>
                <li>Visi & Misi</li>
                <li>Dewan Pengawas Syariah</li>
                <li>Laporan Keuangan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 info@koperasisyariah.id</p>
                <p>📞 (021) 1234-5678</p>
                <p>📍 Jakarta, Indonesia</p>
                <p>🕐 Senin - Jumat: 08:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Koperasi Simpan Pinjam Syariah. Seluruh hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}