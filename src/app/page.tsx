"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WEDDING_DATE = new Date("2026-10-12T08:00:00").getTime();

type SectionDividerProps = {
  label: string;
  icon?: string;
};

function SectionDivider({ label, icon = "♡" }: SectionDividerProps) {
  return (
    <div className="relative z-20 bg-transparent px-5 py-8 md:py-10">
      <div className="mx-auto flex max-w-6xl items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#f6a8c3]/80 to-[#f6a8c3]/40" />

        <div className="flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-5 py-2.5 shadow-xl shadow-[#e9447c]/10 backdrop-blur-xl">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe4ef] to-[#ffc0d8] text-sm text-[#c83468]">
            {icon}
          </span>

          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#b83262] md:text-xs">
            {label}
          </span>
        </div>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#f6a8c3]/80 to-[#f6a8c3]/40" />
      </div>
    </div>
  );
}

export default function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const galleryImages = [
    {
      src: "/images/foto-1.jpg",
      title: "Sweet Beginning",
      className: "md:col-span-2 md:row-span-2",
      imageClassName: "h-[330px] md:h-full",
    },
    {
      src: "/images/foto-2.jpg",
      title: "Soft Smile",
      className: "",
      imageClassName: "h-[230px] md:h-[260px]",
    },
    {
      src: "/images/foto-3.jpg",
      title: "Little Forever",
      className: "",
      imageClassName: "h-[230px] md:h-[260px]",
    },
    {
      src: "/images/foto-4.jpg",
      title: "Warm Memories",
      className: "",
      imageClassName: "h-[230px] md:h-[260px]",
    },
    {
      src: "/images/foto-5.jpg",
      title: "Together",
      className: "",
      imageClassName: "h-[230px] md:h-[260px]",
    },
  ];

  const floatingDecorations = [
    {
      icon: "♡",
      className: "left-[7%] top-[13%] text-[#f4729b]",
      delay: "0s",
    },
    {
      icon: "✦",
      className: "right-[9%] top-[18%] text-[#fb9fbd]",
      delay: "0.7s",
    },
    {
      icon: "♡",
      className: "left-[11%] bottom-[20%] text-[#fbb6ce]",
      delay: "1.2s",
    },
    {
      icon: "✧",
      className: "right-[14%] bottom-[24%] text-[#f77faa]",
      delay: "1.8s",
    },
    {
      icon: "♡",
      className: "left-[45%] top-[8%] text-[#ffd0df]",
      delay: "2.4s",
    },
  ];

  const loveStories = [
    {
      title: "Awal Bertemu",
      description:
        "Kami dipertemukan dalam waktu yang sederhana, namun menjadi awal dari cerita yang indah.",
    },
    {
      title: "Mulai Dekat",
      description:
        "Dari obrolan kecil, tumbuh rasa nyaman yang membuat kami saling mengenal lebih dalam.",
    },
    {
      title: "Melangkah Serius",
      description:
        "Dengan keyakinan dan doa, kami memutuskan untuk melangkah ke hubungan yang lebih serius.",
    },
    {
      title: "Hari Bahagia",
      description:
        "Kini kami ingin berbagi kebahagiaan ini bersama keluarga, sahabat, dan orang-orang tercinta.",
    },
  ];

  const navigationItems = [
    { href: "#home", label: "Home", icon: "♡" },
    { href: "#story", label: "Story", icon: "✦" },
    { href: "#acara", label: "Acara", icon: "☼" },
    { href: "#lokasi", label: "Maps", icon: "⌖" },
    { href: "#galeri", label: "Foto", icon: "▧" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isMusicPlaying) {
      audio.play().catch(() => {
        setIsMusicPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isMusicPlaying]);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    setIsMusicPlaying(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff3f8] text-[#5b2338]">
      {/* Background utama */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#ffc2d7_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#ff9ec1_0%,transparent_32%),linear-gradient(180deg,#fff2f7_0%,#ffe1ed_45%,#fff8fb_100%)]" />

      {/* Audio Lokal */}
      <audio ref={audioRef} src="/music/sempurna.mp3" loop />

      {/* Dekorasi Floating */}
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        {floatingDecorations.map((item, index) => (
          <span
            key={index}
            className={`absolute animate-bounce text-2xl opacity-60 md:text-4xl ${item.className}`}
            style={{
              animationDelay: item.delay,
              animationDuration: "4.5s",
            }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      {/* Cover Pembuka */}
      {!isInvitationOpen && (
        <section className="fixed inset-0 z-[999] flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#ffbed5_0%,transparent_35%),linear-gradient(180deg,#ffd5e5_0%,#fff3f8_55%,#ffffff_100%)] px-5 py-8 text-center">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#ff75a4]/35 blur-3xl md:h-96 md:w-96" />
          <div className="absolute right-0 top-32 h-60 w-60 rounded-full bg-[#ffb4ce]/55 blur-3xl md:h-80 md:w-80" />
          <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-[#ff8db6]/40 blur-3xl md:h-96 md:w-96" />

          <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/70 p-6 shadow-2xl shadow-[#ed6f9e]/25 backdrop-blur-xl md:max-w-md md:p-8">
            <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-[#ff8ab3] via-[#f65f96] to-[#ffc1d6]" />

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#b83262] md:text-sm">
              Wedding Invitation
            </p>

            <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-white bg-gradient-to-br from-[#ffe4ef] to-[#ffc0d8] text-5xl text-[#d73872] shadow-xl shadow-[#ff9fbe]/40 md:mb-6 md:h-28 md:w-28 md:text-6xl">
              ♡
            </div>

            <h1 className="mb-3 text-4xl font-black leading-tight tracking-tight text-[#64213b] md:text-5xl">
              Kalvin <span className="text-[#d73872]">&</span> Naeya
            </h1>

            <p className="mb-6 text-sm font-medium text-[#8b4a62]">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>

            <div className="mb-7 rounded-3xl border border-[#ffd0df] bg-white/75 p-5 shadow-inner">
              <p className="text-sm leading-relaxed text-[#7b3f56]">
                Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir
                dan memberikan doa restu pada hari bahagia kami.
              </p>
            </div>

            <button
              onClick={handleOpenInvitation}
              className="w-full rounded-full bg-gradient-to-r from-[#e9447c] to-[#f76fa0] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#ff8db6]/50 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Buka Undangan
            </button>

            <p className="mt-5 text-xs font-medium text-[#b83262]">
              Tap untuk membuka undangan ♡
            </p>
          </div>
        </section>
      )}

      {/* Bottom Navigation Mobile */}
      {isInvitationOpen && (
        <nav className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-2xl shadow-[#e9447c]/20 backdrop-blur-xl md:hidden">
          <div className="flex items-center justify-between">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-full px-2 py-1.5 text-[10px] font-semibold text-[#8b4a62] transition hover:bg-[#ffe4ef] hover:text-[#d73872]"
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* Tombol Musik */}
      <button
        onClick={() => setIsMusicPlaying(!isMusicPlaying)}
        className="fixed right-4 top-4 z-50 rounded-full border border-white/70 bg-white/80 px-4 py-2.5 text-xs font-bold text-[#c83468] shadow-lg shadow-[#e9447c]/20 backdrop-blur-xl transition hover:bg-[#ffe4ef] md:right-5 md:top-5 md:px-5 md:py-3 md:text-sm"
      >
        {isMusicPlaying ? "♪ Jeda" : "♪ Musik"}
      </button>

      {/* Hero Utama */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-20 pt-24 text-center md:px-6 md:py-24"
      >
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff8db6]/35 blur-3xl md:h-[34rem] md:w-[34rem]" />
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#ffbfd5]/50 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#ff77a7]/30 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/70 bg-white/50 px-5 py-10 shadow-2xl shadow-[#e9447c]/10 backdrop-blur-xl sm:px-8 md:px-12 md:py-14">
            <p className="mb-5 inline-flex rounded-full border border-[#ffc9dc] bg-white/75 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#b83262] shadow-sm backdrop-blur sm:text-xs md:tracking-[0.28em]">
              A Sweet Beginning Of Forever
            </p>

            <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#64213b] sm:text-6xl md:text-8xl">
              Kalvin
              <span className="mx-2 text-[#e9447c] sm:mx-4">&</span>
              Naeya
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-[#7b3f56] sm:text-base md:text-lg">
              Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i
              untuk hadir dan memberikan doa restu pada hari bahagia kami.
            </p>

            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="rounded-[1.7rem] border border-[#ffd0df] bg-white/75 p-5 text-left shadow-xl shadow-[#e9447c]/10 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b83262]">
                  Mempelai Pria
                </p>
                <h2 className="mt-2 text-xl font-black text-[#64213b]">
                  Kalvin Al Ma&apos;ruf
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#8b4a62]">
                  Putra pertama dari Bapak Harun dan Ibu Erni Eka Sari
                </p>
              </div>

              <div className="rounded-[1.7rem] border border-[#ffd0df] bg-white/75 p-5 text-left shadow-xl shadow-[#e9447c]/10 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b83262]">
                  Mempelai Wanita
                </p>
                <h2 className="mt-2 text-xl font-black text-[#64213b]">
                  Naeya Ashyfa Ocwita Ningrum
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#8b4a62]">
                  Putri pertama dari Bapak Wiyono dan Ibu Nita Agustina
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#acara"
                className="rounded-full bg-gradient-to-r from-[#e9447c] to-[#f76fa0] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#ff8db6]/40 transition hover:-translate-y-0.5"
              >
                Lihat Hari Bahagia
              </a>

              <a
                href="#galeri"
                className="rounded-full border border-[#ffc9dc] bg-white/75 px-7 py-3.5 text-sm font-bold text-[#c83468] shadow-lg shadow-[#e9447c]/10 backdrop-blur transition hover:bg-[#ffe4ef]"
              >
                Lihat Galeri
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="Counting Moment" icon="✦" />

      {/* Countdown */}
      <section className="relative overflow-hidden px-5 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/70 bg-white/55 p-6 shadow-2xl shadow-[#e9447c]/10 backdrop-blur-xl md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#b83262] md:text-sm">
              Counting Every Sweet Moment
            </p>

            <h2 className="mb-4 text-3xl font-black text-[#64213b] md:text-5xl">
              Menuju Hari Bahagia
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#7b3f56] md:text-base">
              Hari demi hari kami nantikan dengan penuh rasa syukur. Semoga
              langkah kami menuju pernikahan selalu diberkahi dan dipenuhi
              kebahagiaan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {[
              { value: timeLeft.days, label: "Hari" },
              { value: timeLeft.hours, label: "Jam" },
              { value: timeLeft.minutes, label: "Menit" },
              { value: timeLeft.seconds, label: "Detik" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-[#ffd0df] bg-gradient-to-br from-white to-[#ffeaf1] p-5 text-center shadow-xl shadow-[#e9447c]/10 md:p-7"
              >
                <p className="text-4xl font-black text-[#e9447c] md:text-6xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8b4a62] md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-xl rounded-[2rem] border border-[#ffd0df] bg-white/70 p-5 text-center shadow-lg shadow-[#e9447c]/10">
            <p className="text-lg font-black text-[#64213b]">
              12 Oktober 2026
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#7b3f56]">
              Akad nikah pukul 08.00 WIB dan resepsi pukul 10.00 WIB.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider label="Love Story" icon="♡" />

      {/* Love Story */}
      <section
        id="story"
        className="relative overflow-hidden px-5 py-14 md:px-6 md:py-20"
      >
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#ff8db6]/25 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#ffc0d8]/35 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#b83262] md:text-sm">
              Our Love Story
            </p>

            <h2 className="mb-4 text-3xl font-black text-[#64213b] md:text-5xl">
              Cerita Cinta Kami
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#7b3f56] md:text-base">
              Setiap perjalanan memiliki cerita. Inilah sedikit kisah manis
              yang membawa kami sampai pada hari bahagia ini.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {loveStories.map((story, index) => (
              <div
                key={story.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-xl shadow-[#e9447c]/10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e9447c]/20"
              >
                <div className="absolute -right-8 -top-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#ffe4ef] text-4xl text-[#ff9fbe] transition group-hover:scale-110">
                  ♡
                </div>

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e9447c] to-[#ff8db6] text-sm font-black text-white shadow-lg shadow-[#ff9fbe]/50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mb-3 text-xl font-black text-[#64213b]">
                  {story.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#7b3f56]">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider label="Special Day" icon="☼" />

      {/* Acara */}
      <section id="acara" className="relative px-5 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#b83262] md:text-sm">
              Our Special Day
            </p>

            <h2 className="mb-4 text-3xl font-black text-[#64213b] md:text-5xl">
              Hari Bahagia Kami
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#7b3f56] md:text-base">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2.2rem] border border-white/70 bg-white/70 p-7 shadow-2xl shadow-[#e9447c]/10 backdrop-blur-xl">
              <div className="mb-5 inline-flex rounded-full bg-[#ffe4ef] px-4 py-2 text-sm font-bold text-[#c83468]">
                Akad Nikah
              </div>

              <h3 className="mb-4 text-3xl font-black text-[#64213b]">
                Minggu, 12 Oktober 2026
              </h3>

              <div className="space-y-3 text-sm leading-relaxed text-[#7b3f56] md:text-base">
                <p>08.00 WIB - Selesai</p>
                <p>Kediaman mempelai wanita</p>
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-white/70 bg-white/70 p-7 shadow-2xl shadow-[#e9447c]/10 backdrop-blur-xl">
              <div className="mb-5 inline-flex rounded-full bg-[#ffe4ef] px-4 py-2 text-sm font-bold text-[#c83468]">
                Resepsi
              </div>

              <h3 className="mb-4 text-3xl font-black text-[#64213b]">
                Minggu, 12 Oktober 2026
              </h3>

              <div className="space-y-3 text-sm leading-relaxed text-[#7b3f56] md:text-base">
                <p>10.00 WIB - Selesai</p>
                <p>Kediaman mempelai wanita</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="Location" icon="⌖" />

      {/* Lokasi Acara */}
      <section
        id="lokasi"
        className="relative overflow-hidden px-5 py-14 md:px-6 md:py-20"
      >
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#ff8db6]/25 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#ffc0d8]/35 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#b83262] md:text-sm">
            Find Our Happy Place
          </p>

          <h2 className="mb-4 text-3xl font-black text-[#64213b] md:text-5xl">
            Tempat Bahagia Ini Dimulai
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#7b3f56] md:text-base">
            Dengan penuh kebahagiaan, kami menantikan kehadiran
            Bapak/Ibu/Saudara/i di lokasi acara pernikahan kami.
          </p>

          <div className="mx-auto max-w-3xl rounded-[2.4rem] border border-white/70 bg-white/70 p-7 shadow-2xl shadow-[#e9447c]/10 backdrop-blur-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-[#ffe4ef] to-[#ffc0d8] text-4xl shadow-xl shadow-[#ff9fbe]/30">
              📍
            </div>

            <h3 className="mb-3 text-2xl font-black text-[#64213b]">
              Kediaman Mempelai Wanita
            </h3>

            <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-[#7b3f56] md:text-base">
              Silakan klik tombol di bawah ini untuk melihat lokasi acara
              melalui Google Maps.
            </p>

            <a
              href="https://maps.app.goo.gl/BRL4BmncR7mvxUvY9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-gradient-to-r from-[#e9447c] to-[#f76fa0] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#ff8db6]/40 transition hover:-translate-y-0.5"
            >
              Buka Google Maps
            </a>
          </div>
        </div>
      </section>

      <SectionDivider label="Sweet Memories" icon="▧" />

      {/* Galeri Foto */}
      <section
        id="galeri"
        className="relative overflow-hidden px-5 pb-28 pt-14 md:px-6 md:pb-24 md:pt-20"
      >
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#ff8db6]/25 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#ffc0d8]/35 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#b83262] md:text-sm">
            Sweet Memories
          </p>

          <h2 className="mb-4 text-3xl font-black text-[#64213b] md:text-5xl">
            Cerita Dalam Foto
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#7b3f56] md:text-base">
            Beberapa momen manis yang menjadi bagian dari perjalanan cinta
            Kalvin dan Naeya.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:auto-rows-[270px] md:grid-cols-4 md:gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-2xl shadow-[#e9447c]/15 transition duration-300 hover:-translate-y-1 md:rounded-[2.3rem] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={`Foto mempelai ${index + 1}`}
                  width={900}
                  height={1100}
                  className={`${image.imageClassName} w-full object-cover transition duration-700 group-hover:scale-110`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#64213b]/55 via-[#e9447c]/10 to-transparent opacity-80" />

                <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-xs font-bold text-[#c83468] shadow-sm backdrop-blur">
                  ♡ {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-white/80 p-4 text-left shadow-sm backdrop-blur">
                  <p className="text-sm font-black text-[#64213b]">
                    {image.title}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#8b4a62]">
                    Kalvin & Naeya
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-2xl shadow-[#e9447c]/10 backdrop-blur-xl">
            <p className="text-base font-bold leading-relaxed text-[#64213b] md:text-lg">
              “Cinta bukan tentang siapa yang datang lebih dulu, tetapi tentang
              siapa yang tetap tinggal dan saling memilih.”
            </p>
            <p className="mt-3 text-sm font-bold text-[#c83468]">
              Kalvin & Naeya ♡
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}