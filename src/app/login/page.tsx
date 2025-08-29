'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Login attempt:', formData);
    // Redirect to dashboard after successful login
    window.location.href = '/dashboard';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">KS</span>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-gray-900">Koperasi Syariah</h1>
              <p className="text-sm text-gray-600">Simpan Pinjam Syariah</p>
            </div>
          </Link>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang Kembali</h2>
          <p className="text-gray-600">Masuk ke akun syariah Anda</p>
        </div>

        {/* Login Form */}
        <Card className="border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-green-700">Masuk</CardTitle>
            <CardDescription className="text-center">
              Gunakan kredensial anggota Anda untuk mengakses dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email atau Nomor Anggota</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contoh@email.com atau A001234"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Kata Sandi</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Masukkan kata sandi"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember"
                    checked={formData.remember}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, remember: checked as boolean }))
                    }
                  />
                  <Label htmlFor="remember" className="text-sm">
                    Ingat saya
                  </Label>
                </div>
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-green-600 hover:text-green-700 hover:underline"
                >
                  Lupa kata sandi?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                size="lg"
              >
                Masuk ke Dashboard
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Atau</span>
              </div>
            </div>

            {/* Demo Accounts */}
            <div className="space-y-3">
              <p className="text-sm text-gray-600 text-center font-medium">Akun Demo untuk Testing:</p>
              
              <div className="grid grid-cols-1 gap-2">
                <Button
                  variant="outline"
                  className="text-left justify-start border-blue-200 hover:bg-blue-50"
                  onClick={() => setFormData({
                    email: 'anggota@demo.com',
                    password: 'demo123',
                    remember: false
                  })}
                  type="button"
                >
                  <div className="text-left">
                    <div className="font-medium text-blue-700">👤 Demo Anggota</div>
                    <div className="text-xs text-blue-600">anggota@demo.com</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="text-left justify-start border-purple-200 hover:bg-purple-50"
                  onClick={() => setFormData({
                    email: 'admin@demo.com',
                    password: 'admin123',
                    remember: false
                  })}
                  type="button"
                >
                  <div className="text-left">
                    <div className="font-medium text-purple-700">⚙️ Demo Admin</div>
                    <div className="text-xs text-purple-600">admin@demo.com</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Register Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Belum menjadi anggota?{' '}
                <Link 
                  href="/register" 
                  className="text-green-600 hover:text-green-700 font-medium hover:underline"
                >
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-2 text-green-700 mb-2">
              <span className="text-lg">🛡️</span>
              <span className="font-medium">Keamanan Tingkat Bank</span>
            </div>
            <p className="text-sm text-green-600">
              Data Anda dilindungi dengan enkripsi 256-bit dan autentikasi dua faktor
            </p>
          </div>
          
          <div className="mt-4 text-xs text-gray-500">
            <p>© 2024 Koperasi Simpan Pinjam Syariah</p>
            <p>Terdaftar dan diawasi oleh Kementerian Koperasi dan UKM RI</p>
          </div>
        </div>
      </div>
    </div>
  );
}