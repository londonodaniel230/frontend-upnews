export function StoryArt({ type }: { type: string }) {
  if (type === 'bread') {
    return (
      <svg className="illustration" viewBox="0 0 380 210" role="img" aria-label="Ilustración de panes">
        <rect width="380" height="210" fill="#f5dfb7" />
        <path d="M55 163c13-72 95-97 145-39 48-66 129-25 126 39Z" fill="#dc9d51" />
        <path d="m101 129 22 22m15-43 23 25m82-25-23 27m67-8-29 28" stroke="#f9edcf" strokeWidth="9" strokeLinecap="round" />
        <path d="M28 174h324" stroke="#23635d" strokeWidth="9" strokeLinecap="round" />
        <path d="M286 38v49m-22-26 22 26 23-29m-23-2 30-23" stroke="#259a92" strokeWidth="7" strokeLinecap="round" />
        <circle cx="286" cy="31" r="9" fill="#f19700" />
      </svg>
    );
  }
  if (type === 'heart') {
    return (
      <svg className="illustration" viewBox="0 0 380 210" role="img" aria-label="Ilustración de un corazón">
        <rect width="380" height="210" fill="#17645e" />
        <path d="M191 168S91 113 116 66c18-34 61-24 75 6 14-30 57-40 75-6 25 47-75 102-75 102Z" fill="#f19700" />
        <g fill="#fff7df"><circle cx="63" cy="55" r="9" /><circle cx="319" cy="76" r="7" /><path d="m62 102 4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" /><path d="m318 122 4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" /></g>
      </svg>
    );
  }
  return (
    <svg className="illustration" viewBox="0 0 380 210" role="img" aria-label="Ilustración de un taller audiovisual">
      <rect width="380" height="210" fill="#f6b13f" />
      <rect x="80" y="45" width="205" height="123" rx="10" fill="#fff7df" stroke="#23635d" strokeWidth="8" />
      <rect x="100" y="64" width="118" height="82" rx="4" fill="#259a92" />
      <circle cx="159" cy="93" r="18" fill="#f8d9a5" />
      <path d="M124 140c7-31 63-31 70 0" fill="#23635d" />
      <path d="m238 82 34-19v67l-34-17Z" fill="#23635d" />
      <circle cx="312" cy="51" r="15" fill="#fff7df" /><path d="m307 51 5 5 9-11" fill="none" stroke="#23635d" strokeWidth="5" />
    </svg>
  );
}
