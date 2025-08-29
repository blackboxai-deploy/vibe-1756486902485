'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    idNumber: '',
    
    // Address
    address: '',
    city: '',
    province: '',
    postalCode: '',
    
    // Islamic Identity
    religionConfirmation: false,
    islamicPrinciples: false,
    
    // Account Setup
    password: '',
    confirmPassword: '',
    initialDeposit: '',
    accountType: 'wadiah',
    
    // Agreement
    termsAccepted: false,
    privacyAccepted: false,
    shariaCompliance: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit registration
      console.log('Registration data:', formData);
      alert('Registrasi berhasil! Silakan login dengan akun baru Anda.');
      window.location.href = '/login';
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const formatCurrency = (value: string) => {
    if (!value) return '';
    const number = value.replace(/\D/g, '');
    return new Intl.NumberFormat('id-ID').format(parseInt(number));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
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
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Bergabung dengan Koperasi Syariah</h2>
          <p className="text-gray-600">Daftar sebagai anggota dan nikmati layanan keuangan syariah terpercaya</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step <= currentStep
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Data Pribadi</span>
            <span>Alamat</span>
            <span>Konfirmasi Syariah</span>
            <span>Selesai</span>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">
              {currentStep === 1 && "Data Pribadi"}
              {currentStep === 2 && "Alamat Lengkap"}
              {currentStep === 3 && "Konfirmasi Syariah & Akun"}
              {currentStep === 4 && "Konfirmasi Pendaftaran"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Masukkan informasi pribadi Anda dengan benar"}
              {currentStep === 2 && "Isi alamat tempat tinggal sesuai KTP"}
              {currentStep === 3 && "Konfirmasi komitmen syariah dan setup akun"}
              {currentStep === 4 && "Tinjau dan konfirmasi data pendaftaran"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nama Lengkap *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Sesuai KTP"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idNumber">Nomor KTP *</Label>
                      <Input
                        id="idNumber"
                        value={formData.idNumber}
                        onChange={(e) => handleInputChange('idNumber', e.target.value)}
                        placeholder="16 digit"
                        maxLength={16}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="email@contoh.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="08123456789"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Tanggal Lahir *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Jenis Kelamin *</Label>
                      <Select onValueChange={(value) => handleInputChange('gender', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="laki-laki">Laki-laki</SelectItem>
                          <SelectItem value="perempuan">Perempuan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Address */}
              {currentStep === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="address">Alamat Lengkap *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Jalan, nomor rumah, RT/RW"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Kota/Kabupaten *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Contoh: Jakarta Selatan"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province">Provinsi *</Label>
                      <Input
                        id="province"
                        value={formData.province}
                        onChange={(e) => handleInputChange('province', e.target.value)}
                        placeholder="Contoh: DKI Jakarta"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Kode Pos *</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      placeholder="12345"
                      maxLength={5}
                      required
                    />
                  </div>
                </>
              )}

              {/* Step 3: Islamic Confirmation & Account Setup */}
              {currentStep === 3 && (
                <>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-green-800 mb-3">Konfirmasi Komitmen Syariah</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="religion"
                          checked={formData.religionConfirmation}
                          onCheckedChange={(checked) => handleInputChange('religionConfirmation', checked as boolean)}
                        />
                        <Label htmlFor="religion" className="text-sm">
                          Saya adalah seorang Muslim dan berkomitmen untuk mengikuti prinsip-prinsip syariah Islam dalam bermuamalah
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="principles"
                          checked={formData.islamicPrinciples}
                          onCheckedChange={(checked) => handleInputChange('islamicPrinciples', checked as boolean)}
                        />
                        <Label htmlFor="principles" className="text-sm">
                          Saya memahami dan menyetujui bahwa semua transaksi akan dilakukan berdasarkan akad-akad syariah yang halal
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Kata Sandi *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Minimal 8 karakter"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="Ulangi kata sandi"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Jenis Akun Simpanan *</Label>
                    <Select onValueChange={(value) => handleInputChange('accountType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis simpanan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wadiah">
                          <div>
                            <div className="font-medium">Simpanan Wadiah</div>
                            <div className="text-xs text-gray-600">Titipan aman, dapat diambil kapan saja</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="mudharabah">
                          <div>
                            <div className="font-medium">Simpanan Mudharabah</div>
                            <div className="text-xs text-gray-600">Investasi syariah dengan bagi hasil</div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="initialDeposit">Setoran Awal *</Label>
                    <Input
                      id="initialDeposit"
                      value={formData.initialDeposit}
                      onChange={(e) => handleInputChange('initialDeposit', e.target.value.replace(/\D/g, ''))}
                      placeholder="Minimal Rp 100,000"
                      required
                    />
                    <p className="text-sm text-gray-600">
                      Setoran awal minimal: Rp 100,000 untuk Wadiah, Rp 1,000,000 untuk Mudharabah
                    </p>
                  </div>
                </>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <>
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-3">Ringkasan Pendaftaran</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Nama:</strong> {formData.fullName}</p>
                          <p><strong>Email:</strong> {formData.email}</p>
                          <p><strong>Telepon:</strong> {formData.phone}</p>
                        </div>
                        <div>
                          <p><strong>Jenis Akun:</strong> {formData.accountType === 'wadiah' ? 'Simpanan Wadiah' : 'Simpanan Mudharabah'}</p>
                          <p><strong>Setoran Awal:</strong> Rp {formatCurrency(formData.initialDeposit)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) => handleInputChange('termsAccepted', checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          Saya telah membaca dan menyetujui{' '}
                          <Link href="/terms" className="text-green-600 underline">
                            Syarat dan Ketentuan
                          </Link>{' '}
                          Koperasi Syariah
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="privacy"
                          checked={formData.privacyAccepted}
                          onCheckedChange={(checked) => handleInputChange('privacyAccepted', checked as boolean)}
                        />
                        <Label htmlFor="privacy" className="text-sm">
                          Saya menyetujui{' '}
                          <Link href="/privacy" className="text-green-600 underline">
                            Kebijakan Privasi
                          </Link>{' '}
                          dan penggunaan data pribadi saya
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="sharia"
                          checked={formData.shariaCompliance}
                          onCheckedChange={(checked) => handleInputChange('shariaCompliance', checked as boolean)}
                        />
                        <Label htmlFor="sharia" className="text-sm">
                          Saya berkomitmen untuk mematuhi semua aturan dan prinsip syariah dalam setiap transaksi
                        </Label>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="border-gray-300 text-gray-700"
                  >
                    Kembali
                  </Button>
                )}
                <div className={currentStep === 1 ? 'ml-auto' : ''}>
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-8"
                    disabled={
                      currentStep === 4 && (!formData.termsAccepted || !formData.privacyAccepted || !formData.shariaCompliance)
                    }
                  >
                    {currentStep < 4 ? 'Lanjutkan' : 'Daftar Sekarang'}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Keuntungan Menjadi Anggota
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <Badge className="mb-2 bg-green-100 text-green-800">Syariah</Badge>
              <h4 className="font-medium text-green-900">Transaksi Halal</h4>
              <p className="text-sm text-green-700">Bebas riba dan sesuai prinsip Islam</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <Badge className="mb-2 bg-blue-100 text-blue-800">Aman</Badge>
              <h4 className="font-medium text-blue-900">Dana Terjamin</h4>
              <p className="text-sm text-blue-700">Dijamin LPS hingga Rp 2 Miliar</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <Badge className="mb-2 bg-purple-100 text-purple-800">Menguntungkan</Badge>
              <h4 className="font-medium text-purple-900">Bagi Hasil</h4>
              <p className="text-sm text-purple-700">Nisbah kompetitif untuk Mudharabah</p>
            </div>
          </div>
        </div>

        {/* Login Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Sudah menjadi anggota?{' '}
            <Link 
              href="/login" 
              className="text-green-600 hover:text-green-700 font-medium hover:underline"
            >
              Masuk ke akun Anda
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}