import React, { useState } from 'react';

export default function QakkWorkerApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [showPassword, setShowPassword] = useState(false);
  
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
      subtitle: "Track your time,\nget more done.",
      emailPlaceholder: "Email address",
      passwordPlaceholder: "Password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      loginBtn: "Log In",
      or: "or",
      ssoBtn: "Sign in with SSO",
      eventPlaceholder: "Event Name (e.g. Gala)",
      clientPlaceholder: "Client / Company",
      checkInBtn: "Check In →",
      checkOutBtn: "Log Out",
      currentEventLbl: "ACTIVE SHIFT",
      clientLbl: "Client",
      startedAtLbl: "Started at"
    },
    DA: {
      brand: "Qakk",
      title1: "Work",
      title2: "Time",
      subtitle: "Spor din tid,\nfå mere fra hånden.",
      emailPlaceholder: "E-mailadresse",
      passwordPlaceholder: "Adgangskode",
      rememberMe: "Husk mig",
      forgotPassword: "Glemt adgangskode?",
      loginBtn: "Log ind",
      or: "eller",
      ssoBtn: "Log ind med SSO",
      eventPlaceholder: "Begivenhedsnavn",
      clientPlaceholder: "Kunde / Virksomhed",
      checkInBtn: "Tjek ind →",
      checkOutBtn: "Tjek ud",
      currentEventLbl: "AKTIV VAGT",
      clientLbl: "Kunde",
      startedAtLbl: "Startet kl"
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
      <div className="min-h-[100dvh] flex justify-center bg-[#eef3fa] md:py-10 font-['Inter',sans-serif] text-[#16345f]">
        <div className="relative w-full max-w-[430px] min-h-[100dvh] md:min-h-[920px] bg-white overflow-hidden flex flex-col justify-between px-7 pt-[50px] pb-[34px] md:rounded-[42px] md:shadow-[0_30px_80px_rgba(20,48,90,0.15)]">
          
          {/* Top / Hero Section */}
          <div className="relative min-h-[465px] md:min-h-[485px] flex justify-between">
            <div className="relative z-[5]">
              {/* Qakk Logo */}
              <div className="flex items-center relative text-[#102c55] text-[67px] md:text-[72px] font-bold leading-[0.9] tracking-[-5px]">
                <span className="relative inline-block">
                  Q
                  <span className="absolute w-[10px] h-[48px] rounded-[8px] bg-[#087cff] rotate-[-42deg] left-[48px] top-[24px]"></span>
                </span>
                <span>akk</span>
              </div>

              {/* Title */}
              <h1 className="mt-[65px] text-[#102c55] text-[55px] md:text-[60px] font-bold leading-[1.02] tracking-[-2.5px]">
                Work<br />Time
              </h1>

              {/* Blue Line */}
              <div className="w-[69px] h-[7px] rounded-[20px] bg-[#087cff] mt-[26px]"></div>

              {/* Subtitle */}
              <p className="mt-[32px] text-[#7086a7] text-[22px] md:text-[25px] leading-[1.45] font-medium tracking-[-0.5px] whitespace-pre-line">
                {t.subtitle}
              </p>
            </div>

            {/* Clock illustration */}
            <div className="absolute right-[-48px] md:right-[-42px] top-[90px] w-[300px] h-[330px] scale-[0.88] md:scale-100 origin-top-right">
              <div className="absolute rounded-full w-[280px] h-[280px] right-[-25px] top-[-45px] bg-[radial-gradient(circle_at_40%_40%,#edf6ff,#e1efff)]"></div>
              <div className="absolute rounded-full w-[230px] h-[150px] right-[35px] bottom-[5px] bg-[radial-gradient(ellipse,#edf6ff,#e4f1ff)]"></div>

              {/* Clock */}
              <div className="absolute w-[205px] h-[205px] left-[8px] top-[80px] rounded-full bg-gradient-to-br from-[#1290ff] to-[#0063e8] shadow-[0_18px_30px_rgba(0,103,232,0.22)] rotate-[-7deg] before:content-[''] before:absolute before:inset-[18px] before:rounded-full before:bg-white before:shadow-[inset_0_2px_8px_rgba(20,53,100,0.12)]">
                <div className="absolute inset-[30px] rounded-full">
                  <div className="absolute left-1/2 top-1/2 w-[10px] h-[55px] origin-bottom rounded-[10px] bg-[#1558a9] -translate-x-1/2 -translate-y-full rotate-[-12deg]"></div>
                  <div className="absolute left-1/2 top-1/2 w-[8px] h-[73px] origin-bottom rounded-[10px] bg-[#1558a9] -translate-x-1/2 -translate-y-full rotate-[105deg]"></div>
                  <div className="absolute w-[16px] h-[16px] rounded-full bg-[#1667c5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>

              {/* Check badge */}
              <div className="absolute right-[5px] bottom-[38px] w-[112px] h-[112px] rounded-[25px] flex items-center justify-center bg-gradient-to-br from-[#438ffb] to-[#126ce8] shadow-[0_15px_28px_rgba(14,101,229,0.28)] z-[10]">
                <svg className="w-[57px] h-[57px] fill-none stroke-white stroke-[6] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 40 40">
                  <path d="M8 21.5L17 30L33 11" />
                </svg>
              </div>

              {/* Speed lines */}
              <div className="absolute right-[18px] top-[65px] w-[75px] h-[65px]">
                <span className="absolute block w-[13px] h-[57px] rounded-[20px] bg-[#087cff] right-[43px] top-0 rotate-[31deg]"></span>
                <span className="absolute block w-[13px] h-[47px] rounded-[20px] bg-[#087cff] right-0 top-[25px] rotate-[64deg]"></span>
              </div>
            </div>
          </div>

          {/* Login Form Section */}
          <section className="relative z-[20] -mt-[6px]">
            <form onSubmit={handleLogin}>
              
              {/* Email */}
              <div className="relative w-full h-[76px] md:h-[82px] border-2 border-[#dce6f3] rounded-[28px] flex items-center bg-white/94 focus-within:border-[#a9caff] focus-within:ring-4 focus-within:ring-[#087cff]/[0.07] transition-all">
                <div className="w-[65px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-[31px] h-[31px] fill-none stroke-[#7890b1] stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder} 
                  required
                  className="w-full h-full border-0 outline-none bg-transparent text-[#102c55] font-['Inter',sans-serif] text-[19px] md:text-[21px] font-medium px-[20px] pl-[4px]"
                />
              </div>

              {/* Password */}
              <div className="relative w-full h-[76px] md:h-[82px] border-2 border-[#dce6f3] rounded-[28px] flex items-center bg-white/94 mt-[20px] focus-within:border-[#a9caff] focus-within:ring-4 focus-within:ring-[#087cff]/[0.07] transition-all">
                <div className="w-[65px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-[31px] h-[31px] fill-none stroke-[#7890b1] stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <rect x="5" y="10" width="14" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 018 0v3" />
                    <circle cx="12" cy="15" r="1" />
                  </svg>
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder} 
                  required
                  className="w-full h-full border-0 outline-none bg-transparent text-[#102c55] font-['Inter',sans-serif] text-[19px] md:text-[21px] font-medium px-[20px] pl-[4px]"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-[65px] h-full flex items-center justify-center border-0 bg-transparent cursor-pointer flex-shrink-0"
                >
                  <svg className="w-[30px] h-[30px] fill-none stroke-[#7890b1] stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
                    <circle cx="12" cy="12" r="2.5" />
                  </svg>
                </button>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between my-[25px] mx-[4px]">
                <label className="flex items-center gap-[13px] text-[#7187a7] text-[17px] font-medium cursor-pointer">
                  <input type="checkbox" className="absolute opacity-0 pointer-events-none peer" />
                  <span className="w-[30px] h-[30px] border-2 border-[#91a6c4] rounded-[6px] bg-white relative peer-checked:bg-[#087cff] peer-checked:border-[#087cff] peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:left-[8px] peer-checked:after:top-[4px] peer-checked:after:w-[7px] peer-checked:after:h-[13px] peer-checked:after:border-right-2 peer-checked:after:border-bottom-2 peer-checked:after:border-white peer-checked:after:rotate-45"></span>
                  <span>{t.rememberMe}</span>
                </label>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-[#006fff] no-underline text-[17px] font-semibold hover:underline whitespace-nowrap">
                  {t.forgotPassword}
                </a>
              </div>

              {/* Login Button */}
              <button 
                type="submit" 
                className="w-full h-[76px] md:h-[82px] border-0 rounded-[40px] bg-gradient-to-r from-[#0875ff] to-[#147cff] text-white flex items-center justify-center gap-[25px] font-['Inter',sans-serif] text-[22px] md:text-[26px] font-medium cursor-pointer shadow-[0_15px_27px_rgba(0,113,255,0.20)] hover:-translate-y-[2px] hover:shadow-[0_18px_32px_rgba(0,113,255,0.28)] active:translate-y-0 transition-all"
              >
                <span>{t.loginBtn}</span>
                <svg className="w-[36px] h-[26px] fill-none stroke-white stroke-[2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 28 20">
                  <path d="M2 10h22" />
                  <path d="M17 4l6 6-6 6" />
                </svg>
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-[20px] my-[30px]">
              <span className="h-[2px] flex-1 bg-[#dce6f3]"></span>
              <p className="text-[#7a90b0] text-[18px] font-medium">{t.or}</p>
              <span className="h-[2px] flex-1 bg-[#dce6f3]"></span>
            </div>

            {/* SSO Button */}
            <button 
              type="button" 
              onClick={() => setIsLoggedIn(true)}
              className="w-full h-[76px] md:h-[82px] border-2 border-[#dce6f3] rounded-[28px] bg-white text-[#607b9f] flex items-center justify-center gap-[25px] font-['Inter',sans-serif] text-[21px] font-medium cursor-pointer hover:bg-[#f8fbff] hover:border-[#c7d7eb] transition-all"
            >
              <svg className="w-[34px] h-[34px] fill-none stroke-[#7088aa] stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" />
                <path d="M4.5 21c0-4.1 3.4-7 7.5-7s7.5 2.9 7.5 7" />
              </svg>
              <span>{t.ssoBtn}</span>
            </button>
          </section>

          {/* Footer */}
          <footer className="relative left-0 right-0 bottom-[10px] z-[10] flex items-center justify-center gap-[10px] text-[#8da5c8] text-[16px] font-medium">
            <span>{t.brand}</span>
            <b className="text-[13px] font-bold">•</b>
            <span>Work Time</span>
            <button onClick={toggleLanguage} className="ml-4 text-xs font-bold text-[#087cff] bg-[#edf6ff] px-3 py-1 rounded-full border border-[#dce6f3]">
              {language}
            </button>
          </footer>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] flex justify-center bg-[#eef3fa] md:py-10 font-['Inter',sans-serif] text-[#16345f]">
      <div className="relative w-full max-w-[430px] min-h-[100dvh] bg-white flex flex-col justify-between px-7 py-8 md:rounded-[42px] md:shadow-[0_30px_80px_rgba(20,48,90,0.15)]">
        <div className="flex justify-between items-center bg-white border-b border-[#dce6f3] pb-4">
          <span className="font-bold text-2xl text-[#102c55]">Qakk</span>
          <button onClick={toggleLanguage} className="text-xs font-bold text-[#087cff] bg-[#edf6ff] px-3.5 py-1.5 rounded-full border border-[#dce6f3]">
            {language}
          </button>
        </div>

        <div className="my-auto py-6">
          {!isOnline ? (
            <div className="flex flex-col gap-4 bg-white p-6 rounded-[28px] border-2 border-[#dce6f3]">
              <div>
                <h2 className="text-2xl font-bold text-[#102c55]">Check In</h2>
                <p className="text-sm text-[#7086a7] mt-1">Enter your shift details below</p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <input 
                  type="text" 
                  placeholder={t.eventPlaceholder} 
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full px-4 py-4 bg-[#f8fbff] border-2 border-[#dce6f3] rounded-[20px] outline-none text-base text-[#102c55] font-medium focus:border-[#087cff]" 
                />
                <input 
                  type="text" 
                  placeholder={t.clientPlaceholder} 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-4 bg-[#f8fbff] border-2 border-[#dce6f3] rounded-[20px] outline-none text-base text-[#102c55] font-medium focus:border-[#087cff]" 
                />
              </div>

              <button 
                onClick={handleCheckIn}
                disabled={!eventName || !clientName}
                className="w-full py-4 mt-2 bg-[#087cff] hover:bg-[#066ad9] text-white font-bold text-lg rounded-[24px] disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_10px_25px_rgba(8,124,255,0.3)] transition-all"
              >
                {t.checkInBtn}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 bg-white p-6 rounded-[28px] border-2 border-[#dce6f3]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">{t.currentEventLbl}</span>
                <span className="text-xs text-[#7086a7] font-semibold">{startTime}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#102c55]">{eventName}</h3>
                <p className="text-sm text-[#7086a7] mt-1">{t.clientLbl}: <span className="font-bold text-[#102c55]">{clientName}</span></p>
              </div>

              <button 
                onClick={handleCheckOut}
                className="w-full py-4 mt-4 bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg rounded-[24px] shadow-[0_10px_25px_rgba(244,63,94,0.25)] transition-all"
              >
                {t.checkOutBtn}
              </button>
            </div>
          )}
        </div>

        <div className="text-center text-xs text-[#8da5c8] font-medium">
          Qakk • Work Time
        </div>
      </div>
    </div>
  );
}