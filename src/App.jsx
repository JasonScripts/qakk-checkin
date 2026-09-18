import React, { useState } from 'react';

export default function QakkWorkerApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [language, setLanguage] = useState('EN');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eventName, setEventName] = useState('');
  const [clientName, setClientName] = useState('');
  const [startTime, setStartTime] = useState(null);

  const dictionary = {
    EN: {
      brand: "Qakk",
      title1: "Work",
      title2: "Time",
      subtitle: "Track your time, get more done.",
      emailPlaceholder: "Email address",
      passwordPlaceholder: "Password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      loginBtn: "Log In →",
      or: "or",
      ssoBtn: "Sign in with SSO",
      eventPlaceholder: "Event Name (e.g. Gala)",
      clientPlaceholder: "Client / Company",
      checkInBtn: "Check In →",
      checkOutBtn: "Log Out",
      currentEventLbl: "ACTIVE SHIFT",
      clientLbl: "Client",
      startedAtLbl: "Started at",
      statusOnline: "Online",
      statusOffline: "Ready"
    },
    DA: {
      brand: "Qakk",
      title1: "Work",
      title2: "Time",
      subtitle: "Spor din tid, få mere fra hånden.",
      emailPlaceholder: "E-mailadresse",
      passwordPlaceholder: "Adgangskode",
      rememberMe: "Husk mig",
      forgotPassword: "Glemt adgangskode?",
      loginBtn: "Log ind →",
      or: "eller",
      ssoBtn: "Log ind med SSO",
      eventPlaceholder: "Begivenhedsnavn",
      clientPlaceholder: "Kunde / Virksomhed",
      checkInBtn: "Tjek ind →",
      checkOutBtn: "Tjek ud",
      currentEventLbl: "AKTIV VAGT",
      clientLbl: "Kunde",
      startedAtLbl: "Startet kl",
      statusOnline: "Online",
      statusOffline: "Klar"
    }
  };

  const t = dictionary[language];

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleCheckIn = () => {
    setIsOnline(true);
    const now = new Date().toLocaleString('da-DK', { 
      timeZone: 'Europe/Copenhagen', 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit', 
      minute: '2-digit' 
    });
    setStartTime(now);
  };

  const handleCheckOut = () => {
    setIsOnline(false);
    setEventName('');
    setClientName('');
    setStartTime(null);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'DA' : 'EN'));
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col justify-between w-full min-h-[100dvh] bg-[#f8fbff] px-6 py-6 font-sans text-slate-800 relative overflow-hidden">
        {/* Background decorative soft blue blob matching the generated image */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-100/90 via-sky-100/50 to-transparent rounded-bl-[100px] pointer-events-none z-0"></div>

        {/* Top Header */}
        <div className="w-full flex justify-between items-center relative z-10">
          <h1 className="text-3xl font-black text-[#0f172a] tracking-tight">Qakk</h1>
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold text-blue-600 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-all"
          >
            {language}
          </button>
        </div>

        {/* Main Form Area */}
        <div className="w-full max-w-sm mx-auto flex flex-col relative z-10 my-auto py-2">
          
          {/* Title & Illustration Row */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1 pr-2">
              <h2 className="text-4xl font-black text-[#0f172a] tracking-tight leading-none mb-1">
                {t.title1}
              </h2>
              <h2 className="text-4xl font-black text-[#0f172a] tracking-tight leading-none mb-3">
                {t.title2}
              </h2>
              <div className="w-8 h-1 bg-blue-500 rounded-full mb-3"></div>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* 3D-style Clock Graphic matching the image */}
            <div className="relative w-28 h-28 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-[2rem] shadow-[0_10px_30px_rgba(59,130,246,0.15)] border border-blue-100 flex-shrink-0">
              <svg className="w-14 h-14 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="#eff6ff" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
              </svg>
              {/* Floating check badge */}
              <div className="absolute -bottom-1.5 -right-1.5 w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg border-2 border-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-3.5">
            {/* Email Input */}
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input 
                type="email" 
                placeholder={t.emailPlaceholder} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200/80 rounded-2xl outline-none text-sm font-medium text-slate-800 placeholder-slate-400 shadow-[0_2px_12px_rgba(0,0,0,0.03)] focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" 
                required 
              />
            </div>

            {/* Password Input */}
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input 
                type="password" 
                placeholder={t.passwordPlaceholder} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white border border-slate-200/80 rounded-2xl outline-none text-sm font-medium text-slate-800 placeholder-slate-400 shadow-[0_2px_12px_rgba(0,0,0,0.03)] focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" 
                required 
              />
              <span className="absolute right-4 text-slate-400 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex justify-between items-center px-1 text-xs py-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-500 font-medium">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                {t.rememberMe}
              </label>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-blue-600 font-semibold hover:underline">
                {t.forgotPassword}
              </a>
            </div>

            {/* Log In Button */}
            <button 
              type="submit" 
              className="w-full py-4 mt-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              {t.loginBtn}
            </button>
          </form>

          {/* Divider 'or' */}
          <div className="flex items-center my-5 text-slate-300">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="px-3 text-xs font-medium text-slate-400">{t.or}</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* SSO Button */}
          <button 
            type="button" 
            onClick={() => setIsLoggedIn(true)}
            className="w-full py-4 bg-white border border-slate-200/80 hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
          >
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {t.ssoBtn}
          </button>
        </div>

        {/* Footer info */}
        <div className="text-center text-[11px] text-slate-400 font-medium relative z-10 py-2">
          Qakk • Work Time
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-[100dvh] bg-[#f8fbff] font-sans text-slate-800">
      <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-slate-100 sticky top-0 z-20 shadow-sm">
        <span className="font-black text-xl tracking-tight text-slate-900">Qakk</span>
        <button 
          onClick={toggleLanguage}
          className="text-xs font-bold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
        >
          {language}
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {!isOnline ? (
            <div className="flex flex-col gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Check In</h2>
                <p className="text-xs text-slate-500 mt-0.5">You're just a few steps away from your shift!</p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <input 
                  type="text" 
                  placeholder={t.eventPlaceholder} 
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl outline-none text-sm placeholder-slate-400 focus:bg-white focus:border-blue-500 transition-all font-medium" 
                />
                <input 
                  type="text" 
                  placeholder={t.clientPlaceholder} 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl outline-none text-sm placeholder-slate-400 focus:bg-white focus:border-blue-500 transition-all font-medium" 
                />
              </div>

              <button 
                onClick={handleCheckIn}
                disabled={!eventName || !clientName}
                className="w-full py-4 mt-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_10px_25px_rgba(37,99,235,0.3)] active:scale-[0.98] transition-all"
              >
                {t.checkInBtn}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">{t.currentEventLbl}</span>
                <span className="text-xs text-slate-400 font-semibold">{startTime}</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{eventName}</h3>
                <p className="text-sm text-slate-500 mt-1">{t.clientLbl}: <span className="font-bold text-slate-800">{clientName}</span></p>
              </div>

              <button 
                onClick={handleCheckOut}
                className="w-full py-4 mt-4 bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm rounded-2xl shadow-[0_10px_25px_rgba(244,63,94,0.25)] active:scale-[0.98] transition-all"
              >
                {t.checkOutBtn}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}