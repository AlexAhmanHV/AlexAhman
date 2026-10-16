// Flaggor för språkknappen. Delas av menyn och den delade startsidan.
export function UKFlagIcon() {
  return (
    <svg viewBox="0 0 60 40" aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
      <rect x="24" width="12" height="40" fill="#fff" />
      <rect y="14" width="60" height="12" fill="#fff" />
      <rect x="26" width="8" height="40" fill="#C8102E" />
      <rect y="16" width="60" height="8" fill="#C8102E" />
    </svg>
  );
}

export function SwedenFlagIcon() {
  return (
    <svg viewBox="0 0 60 40" aria-hidden="true">
      <rect width="60" height="40" fill="#006AA7" />
      <rect x="16" width="8" height="40" fill="#FECC00" />
      <rect y="16" width="60" height="8" fill="#FECC00" />
    </svg>
  );
}
