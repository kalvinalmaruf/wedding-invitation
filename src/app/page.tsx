"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-10-12T08:00:00").getTime();

export default function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

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
      imageClassName: "h-[320px] md:h-full",
    },
    {
      src: "/images/foto-2.jpg",
      title: "Soft Smile",
      className: "",
      imageClassName: "h-[220px] md:h-[260px]",
    },
    {
      src: "/images/foto-3.jpg",
      title: "Little Forever",
      className: "",
      imageClassName: "h-[220px] md:h-[260px]",
    },
    {
      src: "/images/foto-4.jpg",
      title: "Warm Memories",
      className: "",
      imageClassName: "h-[220px] md:h-[260px]",
    },
    {
      src: "/images/foto-5.jpg",
      title: "Together",
      className: "",
      imageClassName: "h-[220px] md:h-[260px]",
    },
  ];

  const floatingDecorations = [
    {
      icon: "♡",
      className: "left-[8%] top-[14%] text-[#f19ab2]",
      delay: "0s",
    },
    {
      icon: "✦",
      className: "right-[10%] top-[18%] text-[#f5b3c5]",
      delay: "0.7s",
    },
    {
      icon: "♡",
      className: "left-[12%] bottom-[20%] text-[#f7c2d0]",
      delay: "1.2s",
    },
    {
      icon: "✧",
      className: "right-[14%] bottom-[24%] text-[#e78da7]",
      delay: "1.8s",
    },
    {
      icon: "♡",
      className: "left-[45%] top-[8%] text-[#f8cad6]",
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

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    setIsMusicPlaying(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#ffe1eb] via-[#ffd3e2] to-[#fff5f8] text-[#5b2f3f]">
      {/* Dekorasi Floating */}
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        {floatingDecorations.map((item, index) => (
          <span
            key={index}
            className={`absolute animate-bounce text-2xl opacity-55 md:text-4xl ${item.className}`}
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
        <section className="fixed inset-0 z-[999] flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#ffc9dc] via-[#ffe1eb] to-[#fff7fa] px-5 py-8 text-center">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f47fa3]/40 blur-3xl md:h-80 md:w-80" />
          <div className="absolute right-0 top-32 h-60 w-60 rounded-full bg-[#ffb3ca]/45 blur-3xl md:h-72 md:w-72" />
          <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-[#f8a9c0]/45 blur-3xl md:h-80 md:w-80" />

          <div className="relative z-10 w-full max-w-sm rounded-[2rem] border border-[#ffd8e5] bg-white/75 p-6 shadow-2xl shadow-[#f49ab5]/35 backdrop-blur md:max-w-md md:rounded-[2.5rem] md:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#b84c6f] md:text-sm md:tracking-[0.35em]">
              Wedding Invitation
            </p>

            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#ffe4ee] text-4xl text-[#d85d84] shadow-lg shadow-[#f8abc1]/40 md:mb-6 md:h-24 md:w-24 md:text-5xl">
              ♡
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight text-[#653246] md:text-4xl">
              Kalvin <span className="text-[#d85d84]">&</span> Naeya
            </h1>

            <p className="mb-5 text-sm text-[#7d4a5d] md:mb-6">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>

            <div className="mb-6 rounded-3xl border border-[#ffd2e1] bg-white/70 p-5 md:mb-8">
              <p className="text-sm leading-relaxed text-[#7d4a5d]">
                Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir
                dan memberikan doa restu pada hari bahagia kami.
              </p>
            </div>

            <button
              onClick={handleOpenInvitation}
              className="w-full rounded-full bg-[#d85d84] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f8abc1]/60 transition hover:bg-[#bf4d72] md:py-4"
            >
              Buka Undangan
            </button>

            <p className="mt-5 text-xs text-[#b84c6f] md:mt-6">
              Klik tombol untuk membuka undangan ♡
            </p>
          </div>
        </section>
      )}

      {/* Tombol Musik */}
      <button
        onClick={() => setIsMusicPlaying(!isMusicPlaying)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-[#d85d84] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#f8abc1]/60 transition hover:bg-[#bf4d72] md:bottom-5 md:right-5 md:px-5 md:py-3 md:text-sm"
      >
        {isMusicPlaying ? "Jeda Musik" : "Putar Musik"}
      </button>

      {/* YouTube Music Embed */}
      {isMusicPlaying && (
        <div className="fixed bottom-16 right-4 z-40 h-20 w-32 overflow-hidden rounded-xl shadow-lg md:bottom-20 md:right-5 md:h-24 md:w-40">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/bx6IPdHxGlI?autoplay=1"
            title="Sempurna"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}

      {/* Hero Utama */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 text-center md:px-6">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f47fa3]/35 blur-3xl md:h-80 md:w-80" />
        <div className="absolute right-10 top-28 h-48 w-48 rounded-full bg-[#ffb3ca]/45 blur-3xl md:h-56 md:w-56" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#f8a9c0]/40 blur-3xl md:h-80 md:w-80" />

        <div className="relative z-10 w-full max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#b84c6f] md:text-sm md:tracking-[0.35em]">
            A Sweet Beginning Of Forever
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-[#653246] sm:text-5xl md:mb-6 md:text-7xl">
            Kalvin <span className="text-[#d85d84]">&</span> Naeya
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[#7d4a5d] md:text-xl">
            Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
            hadir dan memberikan doa restu pada hari bahagia kami.
          </p>

          <div className="mb-8 rounded-[1.7rem] border border-[#ffd2e1] bg-white/70 p-5 shadow-xl shadow-[#f8abc1]/30 backdrop-blur md:mb-10 md:rounded-[2rem] md:p-6">
            <p className="text-sm font-medium text-[#b84c6f]">Mempelai Pria</p>
            <h2 className="mt-1 text-xl font-semibold text-[#653246] md:text-2xl">
              Kalvin Al Ma&apos;ruf
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#7d4a5d]">
              Putra pertama dari Bapak Harun dan Ibu Erni Eka Sari
            </p>

            <div className="my-5 text-3xl text-[#d85d84]">♡</div>

            <p className="text-sm font-medium text-[#b84c6f]">
              Mempelai Wanita
            </p>
            <h2 className="mt-1 text-xl font-semibold text-[#653246] md:text-2xl">
              Naeya Ashyfa Ocwita Ningrum
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#7d4a5d]">
              Putri pertama dari Bapak Wiyono dan Ibu Nita Agustina
            </p>
          </div>

          <a
            href="#acara"
            className="inline-flex rounded-full bg-[#d85d84] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f8abc1]/60 transition hover:bg-[#bf4d72] md:px-8"
          >
            Lihat Hari Bahagia
          </a>
        </div>
      </section>

      {/* Countdown */}
      <section className="relative overflow-hidden bg-[#fff5f8] px-5 py-16 md:px-6 md:py-24">
        <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-[#ffb8cc]/45 blur-3xl md:h-72 md:w-72" />
        <div className="absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-[#ffcddd]/50 blur-3xl md:h-72 md:w-72" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b84c6f] md:text-sm md:tracking-[0.35em]">
            Counting Every Sweet Moment
          </p>

          <h2 className="mb-4 text-3xl font-bold text-[#653246] md:text-5xl">
            Menuju Hari Bahagia
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#7d4a5d] md:mb-12 md:text-base">
            Hari demi hari kami nantikan dengan penuh rasa syukur. Semoga
            langkah kami menuju pernikahan selalu diberkahi dan dipenuhi
            kebahagiaan.
          </p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { value: timeLeft.days, label: "Hari" },
              { value: timeLeft.hours, label: "Jam" },
              { value: timeLeft.minutes, label: "Menit" },
              { value: timeLeft.seconds, label: "Detik" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-[#ffd2e1] bg-white/70 p-5 shadow-lg shadow-[#f8abc1]/25 md:rounded-[2rem] md:p-6"
              >
                <p className="text-3xl font-bold text-[#d85d84] md:text-5xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-medium text-[#7d4a5d] md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-xl rounded-[1.7rem] border border-[#ffd2e1] bg-white/70 p-5 shadow-lg shadow-[#f8abc1]/25 md:mt-10 md:rounded-[2rem] md:p-6">
            <p className="text-base font-semibold text-[#653246] md:text-lg">
              12 Oktober 2026
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#7d4a5d]">
              Akad nikah pukul 08.00 WIB dan resepsi pukul 10.00 WIB.
            </p>
          </div>
        </div>
      </section>

      {/* Love Story */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5f8] via-[#ffe1eb] to-[#fff5f8] px-5 py-16 md:px-6 md:py-24">
        <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-[#f47fa3]/25 blur-3xl md:h-72 md:w-72" />
        <div className="absolute bottom-10 right-0 h-60 w-60 rounded-full bg-[#ffb3ca]/35 blur-3xl md:h-72 md:w-72" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b84c6f] md:text-sm md:tracking-[0.35em]">
            Our Love Story
          </p>

          <h2 className="mb-4 text-3xl font-bold text-[#653246] md:text-5xl">
            Cerita Cinta Kami
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#7d4a5d] md:mb-12 md:text-base">
            Setiap perjalanan memiliki cerita. Inilah sedikit kisah manis yang
            membawa kami sampai pada hari bahagia ini.
          </p>

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {loveStories.map((story, index) => (
              <div
                key={story.title}
                className="group relative overflow-hidden rounded-[1.7rem] border border-[#ffd2e1] bg-white/70 p-6 text-left shadow-lg shadow-[#f8abc1]/25 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f8abc1]/40 md:rounded-[2rem]"
              >
                <div className="absolute -right-8 -top-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#ffe4ee] text-4xl text-[#f5a6bd] transition group-hover:scale-110">
                  ♡
                </div>

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#d85d84] text-sm font-bold text-white shadow-lg shadow-[#f8abc1]/50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[#653246]">
                  {story.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#7d4a5d]">
                  {story.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-[1.7rem] border border-[#ffd2e1] bg-white/70 p-5 shadow-lg shadow-[#f8abc1]/25 backdrop-blur md:rounded-[2rem] md:p-6">
            <p className="text-base font-semibold leading-relaxed text-[#653246] md:text-lg">
              “Bukan tentang seberapa cepat kisah ini dimulai, tetapi tentang
              bagaimana kami saling memilih untuk terus berjalan bersama.”
            </p>
            <p className="mt-3 text-sm text-[#b84c6f]">Our journey ♡</p>
          </div>
        </div>
      </section>

      {/* Acara */}
      <section id="acara" className="bg-[#fff5f8] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b84c6f] md:text-sm md:tracking-[0.35em]">
            Our Special Day
          </p>

          <h2 className="mb-8 text-3xl font-bold text-[#653246] md:mb-10 md:text-5xl">
            Hari Bahagia Kami
          </h2>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="rounded-[1.7rem] border border-[#ffd2e1] bg-white/70 p-6 shadow-lg shadow-[#f8abc1]/25 md:rounded-[2rem] md:p-8">
              <h3 className="mb-4 text-xl font-semibold text-[#d85d84] md:text-2xl">
                Akad Nikah
              </h3>
              <p className="text-sm text-[#7d4a5d] md:text-base">
                Minggu, 12 Oktober 2026
              </p>
              <p className="mt-2 text-sm text-[#7d4a5d] md:text-base">
                08.00 WIB - Selesai
              </p>
              <p className="mt-4 text-sm text-[#7d4a5d] md:text-base">
                Kediaman mempelai wanita
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-[#ffd2e1] bg-white/70 p-6 shadow-lg shadow-[#f8abc1]/25 md:rounded-[2rem] md:p-8">
              <h3 className="mb-4 text-xl font-semibold text-[#d85d84] md:text-2xl">
                Resepsi
              </h3>
              <p className="text-sm text-[#7d4a5d] md:text-base">
                Minggu, 12 Oktober 2026
              </p>
              <p className="mt-2 text-sm text-[#7d4a5d] md:text-base">
                10.00 WIB - Selesai
              </p>
              <p className="mt-4 text-sm text-[#7d4a5d] md:text-base">
                Kediaman mempelai wanita
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-[#7d4a5d] md:mt-12 md:text-base">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
        </div>
      </section>

      {/* Lokasi Acara */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5f8] via-[#ffe1eb] to-[#ffddea] px-5 py-16 md:px-6 md:py-24">
        <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-[#f47fa3]/25 blur-3xl md:h-72 md:w-72" />
        <div className="absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-[#ffb3ca]/35 blur-3xl md:h-72 md:w-72" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b84c6f] md:text-sm md:tracking-[0.35em]">
            Find Our Happy Place
          </p>

          <h2 className="mb-4 text-3xl font-bold text-[#653246] md:text-5xl">
            Tempat Bahagia Ini Dimulai
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-[#7d4a5d] md:mb-10 md:text-base">
            Dengan penuh kebahagiaan, kami menantikan kehadiran
            Bapak/Ibu/Saudara/i di lokasi acara pernikahan kami.
          </p>

          <div className="mx-auto max-w-3xl rounded-[1.7rem] border border-[#ffd2e1] bg-white/70 p-5 shadow-xl shadow-[#f8abc1]/25 backdrop-blur md:rounded-[2rem] md:p-6">
            <div className="mb-5 flex justify-center md:mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe4ee] text-3xl shadow-lg shadow-[#f8abc1]/30 md:h-20 md:w-20 md:text-4xl">
                📍
              </div>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#d85d84] md:text-2xl">
              Kediaman Mempelai Wanita
            </h3>

            <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-[#7d4a5d] md:mb-8">
              Silakan klik tombol di bawah ini untuk melihat lokasi acara
              melalui Google Maps.
            </p>

            <a
              href="https://maps.app.goo.gl/BRL4BmncR7mvxUvY9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#d85d84] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f8abc1]/60 transition hover:bg-[#bf4d72] md:px-8 md:py-4"
            >
              Buka Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Galeri Foto */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#ffddea] via-[#ffeaf1] to-[#fff7fa] px-5 py-16 md:px-6 md:py-24">
        <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-[#f47fa3]/25 blur-3xl md:h-72 md:w-72" />
        <div className="absolute bottom-10 right-0 h-60 w-60 rounded-full bg-[#ffb3ca]/35 blur-3xl md:h-72 md:w-72" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b84c6f] md:text-sm md:tracking-[0.35em]">
            Sweet Memories
          </p>

          <h2 className="mb-4 text-3xl font-bold text-[#653246] md:text-5xl">
            Cerita Dalam Foto
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#7d4a5d] md:mb-12 md:text-base">
            Beberapa momen manis yang menjadi bagian dari perjalanan cinta
            Kalvin dan Naeya.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-4 md:gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-[1.7rem] border-4 border-white bg-white shadow-xl shadow-[#f8abc1]/30 md:rounded-[2rem] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={`Foto mempelai ${index + 1}`}
                  width={900}
                  height={1100}
                  className={`${image.imageClassName} w-full object-cover transition duration-700 group-hover:scale-110`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#5b2f3f]/45 via-[#d85d84]/10 to-transparent opacity-70" />

                <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3.5 py-1.5 text-xs font-semibold text-[#b84c6f] shadow-sm backdrop-blur md:left-5 md:top-5 md:px-4 md:py-2 md:text-sm">
                  ♡ {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/82 p-3 text-left shadow-sm backdrop-blur md:bottom-5 md:left-5 md:right-5 md:p-4">
                  <p className="text-sm font-semibold text-[#b84c6f]">
                    {image.title}
                  </p>
                  <p className="mt-1 text-xs text-[#7d4a5d]">
                    Kalvin & Naeya
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-[1.7rem] border border-[#ffd2e1] bg-white/70 p-5 shadow-lg shadow-[#f8abc1]/25 backdrop-blur md:mt-12 md:rounded-[2rem] md:p-6">
            <p className="text-base font-semibold leading-relaxed text-[#653246] md:text-lg">
              “Cinta bukan tentang siapa yang datang lebih dulu, tetapi tentang
              siapa yang tetap tinggal dan saling memilih.”
            </p>
            <p className="mt-3 text-sm text-[#b84c6f]">Kalvin & Naeya ♡</p>
          </div>
        </div>
      </section>
    </main>
  );
}