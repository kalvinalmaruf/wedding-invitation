type SectionDividerProps = {
  label: string;
  icon?: string;
};

export default function SectionDivider({
  label,
  icon = "♡",
}: SectionDividerProps) {
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