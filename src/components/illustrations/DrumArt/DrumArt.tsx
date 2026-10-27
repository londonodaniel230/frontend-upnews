export function DrumArt({ compact = false }: { compact?: boolean }) {
  return (
    <svg className="illustration" viewBox="0 0 560 300" role="img" aria-label="Ilustración de un tambor y notas musicales">
      <rect width="560" height="300" rx="28" fill="#17645e" />
      <circle cx="476" cy="54" r="72" fill="#2b756e" />
      <circle cx="95" cy="264" r="95" fill="#205f5a" />
      <path d="M217 111 319 91l-17 25-92 18Z" fill="#f4b249" />
      <path d="M210 133h92l-8 91c-1 12-18 22-40 22s-40-10-41-22Z" fill="#ef9417" stroke="#fff7df" strokeWidth="7" />
      <ellipse cx="256" cy="132" rx="47" ry="14" fill="#fff7df" />
      <ellipse cx="256" cy="132" rx="37" ry="9" fill="#d67d16" />
      <path d="m215 156 79 58M297 156l-80 58" stroke="#fff7df" strokeWidth="7" />
      <path d="m205 121-39-66M303 111l45-67" stroke="#fff7df" strokeWidth="8" strokeLinecap="round" />
      <circle cx="164" cy="51" r="10" fill="#ef9417" />
      <circle cx="351" cy="42" r="10" fill="#ef9417" />
      <g fill="#fff7df">
        <path d="M115 92v48c-24-4-30 23-9 25 17 2 23-10 23-23V99l26-8v34c-22-3-27 21-8 24 15 2 22-9 22-22V70Z" />
        <path d="M407 75v55c-24-4-31 23-9 26 17 2 23-11 23-23V82l28-8v38c-21-3-27 21-8 24 15 2 22-9 22-22V52Z" />
      </g>
      {!compact && <><circle cx="460" cy="223" r="8" fill="#ef9417" /><circle cx="90" cy="70" r="7" fill="#f4b249" /></>}
    </svg>
  );
}
