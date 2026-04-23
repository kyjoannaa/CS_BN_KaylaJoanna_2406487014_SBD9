'use client'; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BCALandingPage() {
  // navbar
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // slider main banner
  const slideImages = [
    { src: '/images/bca1.png', title: 'Solusi Perbankan Masa Depan Anda.', subtitle: 'Nikmati kemudahan transaksi, investasi, dan gaya hidup dalam satu genggaman.' },
    { src: '/images/bca2.jpeg', title: 'Berbagai Promo Menarik Menanti.', subtitle: 'Gunakan terus layanan BCA dan nikmati keuntungan di berbagai merchant pilihan.' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slideImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // slider gambar layanan lainnya
  const serviceImages = ['/images/bca3.jpg', '/images/bca4.jpeg'];
  const [currentSvcIndex, setCurrentSvcIndex] = useState(0);

  useEffect(() => {
    const svcTimer = setInterval(() => {
      setCurrentSvcIndex((prev) => (prev + 1) % serviceImages.length);
    }, 6000);
    return () => clearInterval(svcTimer);
  }, []);

  // tab kartu debit/kredit
  const [activeTab, setActiveTab] = useState<'debit' | 'kredit' | null>(null);

  const debitCards = [
    { name: 'Paspor Blue', limit: 'Rp 50 - 100 Juta', type: 'GPN & Mastercard', color: 'from-blue-600 to-blue-800' },
    { name: 'Paspor Gold', limit: 'Rp 75 - 125 Juta', type: 'GPN & Mastercard', color: 'from-yellow-400 to-yellow-600', textColor: 'text-slate-900' },
    { name: 'Paspor Platinum', limit: 'Hingga Rp 150 Juta', type: 'GPN & Mastercard', color: 'from-slate-300 to-slate-400', textColor: 'text-slate-900' },
    { name: 'Tahapan Xpresi', limit: 'Sesuai Kebutuhan', type: 'Desain Variatif', color: 'from-purple-500 to-pink-500' },
    { name: 'Simpanan Pelajar', limit: 'Biaya Ringan', type: 'Khusus Pelajar', color: 'from-emerald-400 to-teal-500' },
  ];

  const creditCards = [
    { name: 'BCA Card', desc: 'Platinum & Everyday Card untuk harian', type: 'BCA Card', color: 'from-blue-700 to-slate-800' },
    { name: 'Visa Batman', desc: 'Desain eksklusif & promo gaya hidup', type: 'Visa', color: 'from-slate-900 to-black' },
    { name: 'Visa Corporate', desc: 'Solusi finansial bisnis & perusahaan', type: 'Visa', color: 'from-slate-600 to-slate-800' },
    { name: 'Mastercard Globe', desc: 'Perjalanan & transaksi internasional', type: 'Mastercard', color: 'from-red-600 to-orange-500' },
    { name: 'JCB / Amex', desc: 'Akses premium & lounge bandara', type: 'Premium', color: 'from-zinc-800 to-stone-900' },
  ];

  // scroll ke layanan lainnya
  const scrollToServices = () => {
    const element = document.getElementById('layanan-lainnya');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* navbar */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <Image src={isScrolled ? "/images/LogoBCA_Biru.png" : "/images/LogoBCA_Putih.png"} alt="Logo BCA" width={240} height={80} className="h-10 w-auto object-contain transition-all duration-300" priority />
            </div>
            
            <div className={`hidden md:flex space-x-8 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
              <a href="#" className={`font-medium transition-colors ${isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-200'}`}>Produk & Layanan</a>
              <a href="#" className={`font-medium transition-colors ${isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-200'}`}>Promo</a>
              <a href="#" className={`font-medium transition-colors ${isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-200'}`}>Karir</a>
              <a href="#" className={`font-medium transition-colors ${isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-200'}`}>Tentang Kami</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className={`font-semibold transition ${isScrolled ? 'text-blue-800 hover:text-blue-600' : 'text-white hover:text-slate-200'}`}>Daftar</button>
              <button className={`px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg ${isScrolled ? 'bg-blue-800 hover:bg-blue-900 text-white' : 'bg-white text-blue-900 hover:bg-slate-100'}`}>Login KlikBCA</button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* main section */}
        <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-slate-900">
          {slideImages.map((slide, index) => (
            <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <Image src={slide.src} alt={slide.title} fill className="object-cover" priority={index === 0} />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left mt-16">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">#SenantiasaDiSisiAnda</span>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg max-w-2xl">{slide.title}</h1>
                  <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg mx-auto md:mx-0 drop-shadow-md">{slide.subtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-1">Buka Rekening Online</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-md hidden md:block">❮</button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-md hidden md:block">❯</button>
        </section>

        {/* section kartu */}
        <section className="py-20 bg-white border-b border-slate-100 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Temukan Kartu Pilihanmu</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Berbagai pilihan kartu Debit dan Kredit BCA yang disesuaikan dengan kebutuhan transaksi dan gaya hidup Anda sehari-hari.</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button onClick={() => setActiveTab(activeTab === 'debit' ? null : 'debit')} className={`px-8 py-4 rounded-xl font-bold transition-all border-2 ${activeTab === 'debit' ? 'border-blue-600 bg-blue-50 text-blue-800 shadow-md' : 'border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600'}`}>
                💳 Jelajahi Kartu Debit {activeTab === 'debit' ? '▲' : '▼'}
              </button>
              <button onClick={() => setActiveTab(activeTab === 'kredit' ? null : 'kredit')} className={`px-8 py-4 rounded-xl font-bold transition-all border-2 ${activeTab === 'kredit' ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-md' : 'border-slate-200 text-slate-500 hover:border-orange-300 hover:text-orange-600'}`}>
                💳 Jelajahi Kartu Kredit {activeTab === 'kredit' ? '▲' : '▼'}
              </button>
            </div>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTab ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              
              {/* isi section kredit/debit */}
              {activeTab === 'debit' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                  {debitCards.map((card, idx) => (
                    <div key={idx} className="group flex flex-col items-center">
                      <div className={`w-72 h-44 rounded-2xl bg-gradient-to-br ${card.color} ${card.textColor || 'text-white'} p-6 shadow-lg relative transform transition-all duration-300 ease-out group-hover:-translate-y-4 group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-2xl cursor-pointer border border-white/20`}>
                        <div className="w-10 h-8 bg-yellow-200/50 rounded-md mb-8"></div>
                        <p className="font-mono text-lg tracking-widest opacity-80">**** **** **** 1234</p>
                        <div className="mt-4 flex justify-between items-end">
                          <p className="font-bold text-xl uppercase">{card.name}</p>
                          <span className="text-xs opacity-70 block font-bold italic">BCA</span>
                        </div>
                      </div>
                      <div className="mt-6 text-center px-4">
                        <h3 className="font-bold text-lg text-slate-800">{card.name}</h3>
                        <p className="text-sm text-slate-500 font-medium my-1">{card.type}</p>
                        <span className="inline-block mt-2 bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">Limit: {card.limit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'kredit' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                  {creditCards.map((card, idx) => (
                    <div key={idx} className="group flex flex-col items-center">
                      <div className={`w-72 h-44 rounded-2xl bg-gradient-to-br ${card.color} text-white p-6 shadow-lg relative transform transition-all duration-300 ease-out group-hover:-translate-y-4 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-2xl cursor-pointer border border-white/10`}>
                        <div className="w-10 h-8 bg-zinc-300/30 rounded-md mb-8"></div>
                        <p className="font-mono text-lg tracking-widest opacity-80">**** **** **** 8888</p>
                        <div className="mt-4 flex justify-between items-end">
                          <p className="font-bold text-lg leading-tight w-2/3">{card.name}</p>
                          <p className="text-xs font-bold uppercase opacity-80">{card.type}</p>
                        </div>
                      </div>
                      <div className="mt-6 text-center px-4 max-w-[18rem]">
                        <h3 className="font-bold text-lg text-slate-800">{card.name}</h3>
                        <p className="text-sm text-slate-500 mt-2">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* section layanan lainnya */}
        <section className="relative w-full py-32 overflow-hidden flex items-center justify-center">
          {/* slider background */}
          {serviceImages.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSvcIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
            >
              <Image src={bg} alt="Layanan BCA Background" fill className="object-cover" />
            </div>
          ))}
          {/* overlay biru */}
          <div className="absolute inset-0 bg-blue-950/85 z-10"></div>

          {/* isi tulisan layanan lainnya */}
          <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
              Inovasi Tanpa Batas
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed drop-shadow-md">
              Kami senantiasa hadir memberikan beragam solusi perbankan terintegrasi dan pembiayaan untuk mendukung gaya hidup, merencanakan masa depan, hingga mewujudkan hunian impian Anda.
            </p>
            <button 
              onClick={scrollToServices}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl transform hover:-translate-y-1"
            >
              Lihat Layanan Lainnya ↓
            </button>
          </div>
        </section>

        {/* section mybca dan kpr bca */}
        <section id="layanan-lainnya" className="py-24 bg-slate-100 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              
              {/* hover mybca */}
              <div className="group relative w-full h-80 md:h-96 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200">
                
                {/* tampilan awal */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-500 ease-in-out group-hover:-translate-y-24 group-hover:opacity-80">
                  <div className="w-28 h-28 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:scale-90 transition-transform duration-500 relative overflow-hidden">
                    {}
                    <Image src="/images/mybca.png" alt="myBCA Logo" fill className="object-contain p-2" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-800">myBCA</h3>
                </div>
                
                {/* penjelasan mybca */}
                <div className="absolute bottom-0 left-0 w-full p-8 opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col items-center text-center bg-white">
                  <h4 className="font-bold text-blue-800 mb-2">Satu Akses untuk Semua</h4>
                  <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
                    Platform perbankan terintegrasi dengan single user ID. Akses seluruh rekening, kelola investasi terintegrasi (Welma), transaksi lengkap, hingga buka rekening baru secara daring.
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors w-full shadow-md">
                    Kenali myBCA →
                  </button>
                </div>
              </div>
              
              {/* hover kpr bca */}
              <div className="group relative w-full h-80 md:h-96 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200">
                
                {/* tampilan awal */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-500 ease-in-out group-hover:-translate-y-24 group-hover:opacity-80">
                  <div className="w-28 h-28 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:scale-90 transition-transform duration-500 relative overflow-hidden">
                    {}
                    <Image src="/images/kprbca.jpg" alt="KPR BCA Logo" fill className="object-contain p-2" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-800">KPR BCA</h3>
                </div>
                
                {/* penjelasan kpr bca */}
                <div className="absolute bottom-0 left-0 w-full p-8 opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col items-center text-center bg-white">
                  <h4 className="font-bold text-orange-600 mb-2">Wujudkan Hunian Impian</h4>
                  <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
                    Solusi peminjaman untuk rumah, apartemen, atau ruko (baru/second). Nikmati suku bunga kompetitif, kerjasama developer terpercaya, serta kemudahan top up pinjaman yang praktis.
                  </p>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors w-full shadow-md">
                    Simulasi KPR →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="bg-[#061124] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Image src="/images/LogoBCA_Putih.png" alt="Logo BCA" width={120} height={40} className="h-10 w-auto object-contain" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div>
              <h4 className="text-lg font-semibold mb-6">Kantor Pusat</h4>
              <div className="text-slate-300 space-y-3 leading-relaxed">
                <p>Menara BCA, Grand Indonesia</p>
                <p>Jl. MH Thamrin No. 1</p>
                <p>Jakarta 10310</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Hubungi Kami</h4>
              <div className="space-y-6 text-slate-300">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>Halo BCA 1500888</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>halobca@bca.co.id</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Media Sosial</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 text-slate-300">
                <a href="#" className="flex items-center gap-3 hover:text-white transition group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                  <span>GoodLife BCA</span>
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-white transition group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>Solusi BCA</span>
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-white transition group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span>@goodlifebca</span>
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-white transition group">
                  <svg className="w-4 h-4 ml-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span>@BankBCA</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 PT Bank Central Asia Tbk, All Rights Reserved.</p>
            <p className="text-center md:text-right">Berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK) & Lembaga Penjamin Simpanan (LPS).</p>
          </div>
        </div>
      </footer>
    </div>
  );
}