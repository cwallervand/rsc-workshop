export const getComponentTypeClass =
  typeof window === "undefined" ? "server" : "client";
