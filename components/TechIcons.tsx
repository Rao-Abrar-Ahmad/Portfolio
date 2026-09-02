import React from "react";
import { Icon, IconProps } from "./icons";

/**
 * Re-exporting Icon component for backward compatibility across components.
 */
export function TechIcon(props: IconProps) {
  return <Icon {...props} />;
}
