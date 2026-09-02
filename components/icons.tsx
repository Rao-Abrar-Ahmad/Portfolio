import React from "react";
import { Code2 } from "lucide-react";

export type IconProps = {
  name: string;
  className?: string;
  size?: number;
};

/**
 * Render custom SVG icons based on technology name or type.
 * You can add or update custom SVG icon paths in the switch case below.
 */
export function Icon({ name, className = "size-6", size = 24 }: IconProps) {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    // -------------------------------------------------------------------------
    // Frontend Icons
    // -------------------------------------------------------------------------
    case "react":
    case "react.js":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
        </svg>
      );

    case "next":
    case "next.js":
    case "next.js 15":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 17.585l-7.228-9.45v9.45H8.75V6.415h1.968l7.228 9.45V6.415h1.583v11.17h-1.965z" />
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.398 12.383h3.582v2.094h-3.582v3.89h-2.344v-9.742h5.926v2.094h-3.582v1.664zm-5.719-3.75c0-.984-.305-1.723-.914-2.215C8.28 6.023 7.371 5.78 6.164 5.781c-1.184 0-2.18.234-2.988.703v2.308c.844-.586 1.78-.879 2.812-.879.621 0 1.09.117 1.407.352.316.234.474.562.474.984 0 .34-.11.605-.328.797-.219.191-.652.387-1.3.586-1.078.328-1.895.738-2.45 1.23-.554.493-.832 1.172-.832 2.039 0 1.02.32 1.785.961 2.297.64.512 1.55.768 2.73.768 1.09 0 2.012-.223 2.766-.668v-2.098c-.703.492-1.504.738-2.402.738-.61 0-1.074-.117-1.395-.351-.32-.235-.48-.563-.48-.985 0-.363.125-.648.375-.855.25-.207.715-.418 1.395-.633 1.043-.328 1.832-.73 2.367-1.207.535-.477.803-1.13.803-1.957z" />
        </svg>
      );

    // Default Fallback Icon
    default:
      return <Code2 className={className} size={size} strokeWidth={2.5} />;
  }
}
