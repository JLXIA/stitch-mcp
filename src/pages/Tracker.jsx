import React from 'react';
import { Link } from 'react-router-dom';

const Tracker = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white min-h-screen flex flex-col">
      {/* Top Status Bar & App Bar */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <span className="material-symbols-outlined">ac_unit</span>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Courchevel, France</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Light Snow • -4°C</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-400 text-xl">signal_cellular_alt</span>
            <span className="material-symbols-outlined text-green-500 text-xl">battery_very_low</span>
          </div>
        </div>
      </header>
      <main className="flex-1 pb-40">
        {/* Stats Grid */}
        <section className="p-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1c2631] shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-lg">vertical_align_bottom</span>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Vertical Drop</p>
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold">2,450m</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1c2631] shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-lg">speed</span>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Max Speed</p>
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold">64 km/h</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1c2631] shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-lg">route</span>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Distance</p>
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold">18.2 km</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1c2631] shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-lg">downhill_skiing</span>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Runs</p>
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold">12</p>
          </div>
        </section>
        {/* Charts Section */}
        <section className="px-4 py-2">
          <div className="bg-white dark:bg-[#1c2631] rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Altitude over Time</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Session: Morning Glory</p>
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Live
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <p className="text-slate-900 dark:text-white tracking-tight text-4xl font-bold">3,200m</p>
                <p className="text-green-500 text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span> +150m
                </p>
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Current Peak Elevation</p>
              <div className="mt-6 h-[200px] w-full relative">
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 150" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#137fec" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#137fec" stopOpacity="0"></stop>
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur result="coloredBlur" stdDeviation="2.5"></feGaussianBlur>
                      <feMerge>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M0 109C18.15 109 18.15 21 36.3 21C54.46 21 54.46 41 72.61 41C90.76 41 90.76 93 108.92 93C127.07 93 127.07 33 145.23 33C163.38 33 163.38 101 181.53 101C199.69 101 199.69 61 217.84 61C236 61 236 45 254.15 45C272.3 45 272.3 121 290.46 121C308.61 121 308.61 149 326.76 149C344.92 149 344.92 1 363.07 1C381.23 1 381.23 81 399.38 81C417.53 81 417.53 129 435.69 129C453.84 129 453.84 25 472 25V150H0V109Z" fill="url(#chartGradient)"></path>
                  <path d="M0 109C18.15 109 18.15 21 36.3 21C54.46 21 54.46 41 72.61 41C90.76 41 90.76 93 108.92 93C127.07 93 127.07 33 145.23 33C163.38 33 163.38 101 181.53 101C199.69 101 199.69 61 217.84 61C236 61 236 45 254.15 45C272.3 45 272.3 121 290.46 121C308.61 121 308.61 149 326.76 149C344.92 149 344.92 1 363.07 1C381.23 1 381.23 81 399.38 81C417.53 81 417.53 129 435.69 129C453.84 129 453.84 25 472 25" filter="url(#glow)" stroke="#137fec" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
                <div className="flex justify-between mt-4">
                  <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">09:00</p>
                  <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">11:00</p>
                  <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">13:00</p>
                  <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Now</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Map Snippet */}
        <section className="p-4">
          <div className="relative h-40 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <img
              alt="Topographic ski map of Courchevel"
              className="w-full h-full object-cover grayscale opacity-50 dark:opacity-30"
              data-alt="Topographic ski map showing slopes and lifts"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtJi7z9StGm2hlP7-a2jYGF5zhlK72ckI-qctHwnD1RuO-y8qf4qjtd2tR87xSpUTOZvKT8W8D64Ec9kx5xNmGr4xaCu2PGFh6u2bvCL1VuM6S8zehl-UlscQ6rvLp7KLEw6nkyDhNm0PlHIMS0ZowZ6HIstlMf71lvfMIpiW-CO8BFNo1d9BXi-8vek1E90VNgGoynFbFiqfMXtfY_MQM7KSDaLR8ke51Fv-VX2f0ZPPk_C5wL1I2Ta67S43UwD_5MSrzovWgvFXP"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="text-white font-bold text-sm">Piste: Grand Couloir</span>
            </div>
          </div>
        </section>
      </main>
      {/* Bottom Fixed Interface */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        {/* Start Tracking Button */}
        <div className="px-6 pb-6 pt-2 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent">
          <button className="flex w-full items-center justify-center rounded-xl h-16 bg-primary text-white gap-3 shadow-[0_8px_30px_rgb(19,127,236,0.4)] active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-3xl font-bold">play_arrow</span>
            <span className="text-lg font-bold tracking-tight">Start Tracking</span>
          </button>
        </div>
        {/* iOS Bottom Nav Bar */}
        <nav className="glass-nav border-t border-slate-800/50 px-6 py-3 pb-8">
          <div className="flex justify-between items-center max-w-md mx-auto">
            <div className="flex flex-col items-center gap-1 text-slate-500">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-[10px] font-bold uppercase">Stats</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-slate-500">
              <span className="material-symbols-outlined">map</span>
              <span className="text-[10px] font-bold uppercase">Map</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-slate-500">
              <span className="material-symbols-outlined">groups</span>
              <span className="text-[10px] font-bold uppercase">Clubs</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-slate-500">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-bold uppercase">Profile</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Tracker;
