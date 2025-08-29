'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  const [user] = useState({
    name: 'Ahmad Syarif',
    memberId: 'A001234',
    joinDate: '15 Januari 2023',
    membershipType: 'Premium'
  });

  // Mock data
  const savingsData = {
    wadiah: {
      balance: 15750000,
      lastTransaction: '2024-01-15'
    },
    mudharabah: {
      balance: 25000000,
      profit: 450000,
      profitRate: 4.2,
      lastProfit: '2024-01-01'
    }
  };

  const financingData = {
    murabaha: {
      principal: 50000000,
      remaining: 35000000,
      monthlyPayment: 2500000,
      nextPayment: '2024-02-01'
    }
  };

  const recentTransactions = [
    { id: 1, type: 'Setor Wadiah', amount: 1000000, date: '2024-01-15', status: 'Berhasil' },
    { id: 2, type: 'Bagi Hasil Mudharabah', amount: 450000, date: '2024-01-01', status: 'Berhasil' },
    { id: 3, type: 'Cicilan Murabaha', amount: -2500000, date: '2023-12-01', status: 'Berhasil' },
    { id: 4, type: 'Setor Mudharabah', amount: 5000000, date: '2023-11-20', status: 'Berhasil' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KS</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                  <p className="text-xs text-gray-600">Koperasi Syariah</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                {user.membershipType}
              </Badge>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-600">ID: {user.memberId}</p>
              </div>
              <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                Keluar
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Assalamu'alaikum, {user.name.split(' ')[0]}
              </h1>
              <p className="text-gray-600">
                Selamat datang di dashboard syariah Anda. Anggota sejak {formatDate(user.joinDate)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Tanggal Hijriah Hari Ini</p>
              <p className="text-lg font-semibold text-green-700">15 Rajab 1445 H</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-green-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-green-700">Total Simpanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {formatCurrency(savingsData.wadiah.balance + savingsData.mudharabah.balance)}
              </div>
              <p className="text-sm text-gray-600">Wadiah + Mudharabah</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-emerald-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-emerald-700">Bagi Hasil Bulan Ini</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {formatCurrency(savingsData.mudharabah.profit)}
              </div>
              <p className="text-sm text-gray-600">Nisbah {savingsData.mudharabah.profitRate}%</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-700">Sisa Pembiayaan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {formatCurrency(financingData.murabaha.remaining)}
              </div>
              <p className="text-sm text-gray-600">dari {formatCurrency(financingData.murabaha.principal)}</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-700">Cicilan Berikutnya</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {formatCurrency(financingData.murabaha.monthlyPayment)}
              </div>
              <p className="text-sm text-gray-600">Jatuh tempo: {formatDate(financingData.murabaha.nextPayment)}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Overview */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Rekening Syariah</CardTitle>
                <CardDescription>
                  Kelola simpanan dan pembiayaan syariah Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="savings" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="savings">Simpanan</TabsTrigger>
                    <TabsTrigger value="financing">Pembiayaan</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="savings" className="space-y-4 mt-6">
                    {/* Wadiah Account */}
                    <div className="border rounded-lg p-4 bg-green-50/50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-green-700">Simpanan Wadiah</h3>
                          <p className="text-sm text-gray-600">Akad Wadiah Yad Dhamanah</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        {formatCurrency(savingsData.wadiah.balance)}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Terakhir diperbarui: {formatDate(savingsData.wadiah.lastTransaction)}
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Setor Dana
                        </Button>
                        <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                          Tarik Dana
                        </Button>
                      </div>
                    </div>

                    {/* Mudharabah Account */}
                    <div className="border rounded-lg p-4 bg-emerald-50/50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-emerald-700">Simpanan Mudharabah</h3>
                          <p className="text-sm text-gray-600">Investasi Syariah Bagi Hasil</p>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800">Menguntungkan</Badge>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {formatCurrency(savingsData.mudharabah.balance)}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span>Bagi hasil: +{formatCurrency(savingsData.mudharabah.profit)}</span>
                        <span>•</span>
                        <span>Nisbah: {savingsData.mudharabah.profitRate}%</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          Tambah Investasi
                        </Button>
                        <Button size="sm" variant="outline" className="border-emerald-600 text-emerald-600">
                          Lihat Laporan
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="financing" className="space-y-4 mt-6">
                    {/* Murabaha Financing */}
                    <div className="border rounded-lg p-4 bg-blue-50/50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-blue-700">Pembiayaan Murabaha</h3>
                          <p className="text-sm text-gray-600">Pembelian Kendaraan</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">Berjalan</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Plafon Awal</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {formatCurrency(financingData.murabaha.principal)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Sisa Kewajiban</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {formatCurrency(financingData.murabaha.remaining)}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Progress Pembayaran</span>
                          <span className="text-sm font-medium text-gray-900">
                            {Math.round(((financingData.murabaha.principal - financingData.murabaha.remaining) / financingData.murabaha.principal) * 100)}%
                          </span>
                        </div>
                        <Progress 
                          value={((financingData.murabaha.principal - financingData.murabaha.remaining) / financingData.murabaha.principal) * 100}
                          className="h-2"
                        />
                      </div>

                      <div className="bg-white rounded-lg p-3 mb-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-600">Cicilan Berikutnya</p>
                            <p className="font-semibold text-gray-900">
                              {formatCurrency(financingData.murabaha.monthlyPayment)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Jatuh Tempo</p>
                            <p className="font-semibold text-red-600">
                              {formatDate(financingData.murabaha.nextPayment)}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Bayar Cicilan
                        </Button>
                        <Button size="sm" variant="outline" className="border-blue-600 text-blue-600">
                          Jadwal Cicilan
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Transaksi Terkini</CardTitle>
                    <CardDescription>
                      Aktivitas keuangan syariah Anda
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                    Lihat Semua
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.amount > 0 
                            ? 'bg-green-100' 
                            : 'bg-red-100'
                        }`}>
                          <span className="text-lg">
                            {transaction.amount > 0 ? '💰' : '💳'}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.type}</p>
                          <p className="text-sm text-gray-600">{formatDate(transaction.date)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          transaction.amount > 0 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}{formatCurrency(Math.abs(transaction.amount))}
                        </p>
                        <Badge 
                          variant="outline" 
                          className="text-xs bg-green-50 text-green-700 border-green-200"
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Aksi Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-green-600 hover:bg-green-700" size="lg">
                  <span className="mr-3">💰</span>
                  Setor Simpanan
                </Button>
                <Button className="w-full justify-start" variant="outline" size="lg">
                  <span className="mr-3">📝</span>
                  Ajukan Pembiayaan
                </Button>
                <Button className="w-full justify-start" variant="outline" size="lg">
                  <span className="mr-3">📊</span>
                  Laporan Keuangan
                </Button>
                <Button className="w-full justify-start" variant="outline" size="lg">
                  <span className="mr-3">🧮</span>
                  Kalkulator Zakat
                </Button>
              </CardContent>
            </Card>

            {/* Islamic Calendar */}
            <Card className="border-2 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-700">Kalender Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-green-800">15</div>
                  <div className="text-sm text-green-600">Rajab 1445 H</div>
                  <div className="text-xs text-gray-600">27 Januari 2024 M</div>
                </div>
                
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-sm font-medium text-gray-900 mb-1">Pengingat Syariah</p>
                  <p className="text-xs text-gray-600">
                    • Zakat Fitrah: Menjelang Ramadan
                    <br />
                    • Bagi Hasil: Setiap awal bulan
                    <br />
                    • Evaluasi Portfolio: Setiap 3 bulan
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Bantuan & Dukungan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <span>📞</span>
                  <div>
                    <p className="font-medium">Customer Service</p>
                    <p className="text-gray-600">(021) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <span>💬</span>
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-gray-600">Tersedia 24/7</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <span>📧</span>
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-gray-600">support@koperasisyariah.id</p>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" size="sm">
                  Hubungi Kami
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}