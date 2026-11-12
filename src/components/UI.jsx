export function Arrow({ direction = "up" }) {
  return (
    <svg className="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "down" ? "M12 4v16m-7-7 7 7 7-7" : "M5 19 19 5M5 5h14v14"}
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
