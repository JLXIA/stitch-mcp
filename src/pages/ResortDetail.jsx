import React from 'react';
import { Link } from 'react-router-dom';

const ResortDetail = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* TopAppBar */}
        <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-slate-200 dark:border-slate-800">
          <Link to="/" className="flex size-12 shrink-0 items-center cursor-pointer">
            <span className="material-symbols-outlined text-slate-900 dark:text-white">chevron_left</span>
          </Link>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Zermatt Resort</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-slate-900 dark:text-white">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </header>
        {/* HeaderImage */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-200 dark:bg-slate-800 @[480px]:rounded-xl min-h-[400px] relative"
              data-alt="The majestic Matterhorn peak covered in snow under a clear blue sky"
              style={{backgroundImage: 'linear-gradient(0deg, rgba(16, 25, 34, 0.8) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCZ10iHu0tdpOvYEOSYfmrSFilzyB5WiID8m-Lg-OyCqUdxzKDB7On3lXYWmcV50srzen4Po87ossJ9xKZxvAXhr-pHOywlQsr2y8hkyuLxAh37IaUfn7-cclfH_njkyOS3Mk8BREksTwX4fFcsf6ihAX-HytvgWUMslkU7fLvpRx5Z1DzdTucpPdMZ-VJG-RFB43iG-I6u253DPivp0OZMXJaiwsW7pM_wd9yApToNXvjFnmcqrOTmMIFMja_r3n0C1QeOitqgzpg")'}}
            >
              <div className="flex flex-col p-6 gap-1">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  <p className="text-white/80 text-sm font-medium">Resort Open • 1,620m - 3,883m</p>
                </div>
                <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight">Matterhorn Glacier Paradise</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Stats (Weather) */}
        <div className="flex flex-wrap gap-3 p-4">
          <div className="flex min-w-[100px] flex-1 flex-col gap-2 rounded-xl p-4 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-xl">thermostat</span>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Temp</p>
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight">-5°C</p>
          </div>
          <div className="flex min-w-[100px] flex-1 flex-col gap-2 rounded-xl p-4 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-xl">air</span>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Wind</p>
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight">20km/h NW</p>
          </div>
          <div className="flex min-w-[100px] flex-1 flex-col gap-2 rounded-xl p-4 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-xl">visibility</span>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Visibility</p>
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight">10km</p>
          </div>
        </div>
        {/* SingleButton */}
        <div className="flex px-4 py-2 justify-center">
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-white gap-3 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined">map</span>
            <span className="truncate font-bold text-base">View Trail Map</span>
          </button>
        </div>
        {/* Tabs */}
        <div className="mt-4">
          <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 gap-8">
            <a className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-[13px] pt-4" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Runs (42)</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Lifts (18)</p>
            </a>
          </div>
        </div>
        {/* Runs List */}
        <div className="flex flex-col gap-1 p-4 mb-24">
          {/* Run Item: Blue */}
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 mb-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">B</div>
              <div>
                <p className="text-slate-900 dark:text-white font-semibold">Tuftern</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Easy • 2.4 km</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-green-500">check_circle</span>
          </div>
          {/* Run Item: Red */}
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 mb-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xs">R</div>
              <div>
                <p className="text-slate-900 dark:text-white font-semibold">Rothorn Standard</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Intermediate • 3.1 km</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-green-500">check_circle</span>
          </div>
          {/* Run Item: Black */}
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 mb-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rotate-45 bg-slate-900 flex items-center justify-center text-white font-bold text-[10px]">
                <span className="rotate-[-45deg]">BK</span>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white font-semibold">Obere National</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Expert • 1.8 km</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-amber-500">warning</span>
          </div>
        </div>
        {/* Sticky Footer: Ski Passes */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-50">
          <div className="max-w-md mx-auto flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">Adult Day Pass</p>
              <div className="flex items-baseline gap-1">
                <span className="text-slate-900 dark:text-white text-2xl font-bold">€83.00</span>
                <span className="text-slate-500 dark:text-slate-400 text-xs">/ day</span>
              </div>
            </div>
            <button className="flex-1 max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white font-bold transition-transform active:scale-95 shadow-lg shadow-primary/30">
              Buy Now
            </button>
          </div>
          {/* Safe area spacer for iOS home indicator */}
          <div className="h-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ResortDetail;
