import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl">downhill_skiing</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Alps Resorts</h1>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="User profile avatar close up"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyfN8mUseg-wSyhe-dKif1lzBtugbcSXvq5e8th-k-81hQhnh-ye8b3GBLuU7qEqkIpoNqpBS7cOEO3_Om6FcpCExznDmTByHCwA8bF90oFBepHeNvO--jl0rxJ8jFeG7OqgeRFmYTSD-hlRoxBb8wNKcqFxI2MGdrj4a-nc78Pg0zL7WkK3_TbY_c9gLNUZG6eEvBG3jEi9sxy2u93UCrrY_DwFHB9abyGVnBPDNoTBADFTLJv9PrzttDXJ26Sd69J0v5XEnsuvkV"
                alt="User profile"
              />
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="mb-4">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-stretch rounded-xl h-12 bg-slate-200/50 dark:bg-slate-800/50 border border-transparent focus-within:border-primary/50 transition-all">
              <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="w-full bg-transparent border-none focus:ring-0 text-base font-normal placeholder:text-slate-500 dark:placeholder:text-slate-400 px-3" placeholder="Search resorts..." type="text" />
              <div className="flex items-center pr-4">
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">tune</span>
              </div>
            </div>
          </label>
        </div>
        {/* Filter Chips */}
        <div className="flex gap-3 pb-2 overflow-x-auto no-scrollbar">
          <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 shadow-lg shadow-primary/20 cursor-pointer">
            <span className="text-white text-sm font-medium">Nearby</span>
          </div>
          <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 px-5 cursor-pointer">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Deepest Snow</span>
          </div>
          <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 px-5 cursor-pointer">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Most Lifts</span>
          </div>
          <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 px-5 cursor-pointer">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Top Rated</span>
          </div>
        </div>
      </header>
      <main className="px-4 pb-24">
        {/* Featured Section Header */}
        <div className="flex items-center justify-between pt-4 pb-4">
          <h2 className="text-2xl font-bold tracking-tight">Popular Resorts</h2>
          <button className="text-primary text-sm font-semibold">See all</button>
        </div>
        {/* Resort Cards List */}
        <div className="flex flex-col gap-6">
          {/* Chamonix Card */}
          <Link to="/detail" className="relative group overflow-hidden rounded-2xl aspect-[4/5] block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Snow covered peaks of Chamonix mountain" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq1YdWzBS_fo2aIe_7wSk51oH21GZ7u8kbjT9D2n6aM1lxwrSn8GKI2bA17uhrL76ru-XPx9dvnYlqjPpBwcek3gvsYq4v8nR4Aa4gFV4iuRj6aYisRxYcfZs-_6BgyWXYGo8V3OVGK4RSudrgEjjxbo8dVnsSzlYystqTKAlziRvH6l4jcEXyDvzsblYH7zbWXvgo8pIYlUjm5Cw5WqbZFQ1KyspdbFGdmfVxVG4oe6hWr4oJXKJ5XqNVFhW786ZqQOvV-1tOx-XM')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
            {/* Status Badges Top */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="glass-card px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>ac_unit</span>
                <span className="text-white text-sm font-bold tracking-tight">150cm Powder</span>
              </div>
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-white text-xl">favorite</span>
              </div>
            </div>
            {/* Info Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">Chamonix</h3>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">device_thermostat</span>
                      <span className="text-sm font-medium">-5°C</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">settings_input_component</span>
                      <span className="text-sm font-medium">45/52 Lifts Open</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary hover:bg-primary/90 text-white p-3 rounded-xl transition-colors shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
          {/* Zermatt Card */}
          <Link to="/detail" className="relative group overflow-hidden rounded-2xl aspect-[4/5] block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Iconic Matterhorn peak in Zermatt winter" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBH8i_HGJWbLGbCx9JPzYCP8MGlu4Prv9Rp0XLJCDn0rsz1wkfiFdkNhXnwL6jTCh0LgLp-mkXf9_xfACPhYFQuk-NCDNWTrWpfxZdlj13DT0upr0eyilb7hGCRKEFohMzCkZHtwc3485R8ol_Xcl_8-0w07yKe-rAjN06iDbxbUgPiJN-zXGWpmBS7De8UyO__KW7Csj27f0yALbsiKxQo36-yAJqYaUH3vrNaUtAOkUlEpOwXR0opHDGje-0LJJc0ur_ZD970OFQK')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="glass-card px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>ac_unit</span>
                <span className="text-white text-sm font-bold tracking-tight">120cm Packed</span>
              </div>
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-white text-xl">favorite</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">Zermatt</h3>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">device_thermostat</span>
                      <span className="text-sm font-medium">-8°C</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">settings_input_component</span>
                      <span className="text-sm font-medium">38/54 Lifts Open</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary hover:bg-primary/90 text-white p-3 rounded-xl transition-colors shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
          {/* St. Anton Card */}
          <Link to="/detail" className="relative group overflow-hidden rounded-2xl aspect-[4/5] block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Ski resort village of St Anton in snow" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYM9QQtoqcKhTCKmEVmZrRQzFlIajlu-PipoYWErlejKbYBjME6Y4rTG6E_bpu0VENQgALt1_AV56qgd8lgMFvXVWgS5wFyZd3APS1zXIwd2Rp_Uo5af8Xtk78Mv5kn2wswlrCiEqBOLWi1QQhM3zBWCO6i7rTHd0CViiCLbNvAfXhTgkU_ehah6i8F7-jvTn5FtxJ2SjP5sRzxvh3cPe2eKi8FPunDYprv-BNzN9bxw7yurKuwmztIF1Ta_2aOrak0II95eTfHkZC')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="glass-card px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>ac_unit</span>
                <span className="text-white text-sm font-bold tracking-tight">180cm Fresh</span>
              </div>
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-white text-xl">favorite</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">St. Anton</h3>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">device_thermostat</span>
                      <span className="text-sm font-medium">-3°C</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">settings_input_component</span>
                      <span className="text-sm font-medium">70/88 Lifts Open</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary hover:bg-primary/90 text-white p-3 rounded-xl transition-colors shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
      {/* Bottom Navigation (iOS Style) */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-6 pb-4">
        <Link to="/" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Explore</span>
        </Link>
        <Link to="/tracker" className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined text-[28px]">explore</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Tracking</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined text-[28px]">map</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Maps</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined text-[28px]">person</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
        </div>
      </nav>
      <div className="h-1 bg-background-dark dark:bg-slate-700 w-32 rounded-full absolute bottom-1 left-1/2 -translate-x-1/2"></div>
    </div>
  );
};

export default Home;
