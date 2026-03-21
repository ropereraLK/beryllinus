/** Sidebar links for the app shell (URLs under /page/…). */
export const LAYOUT_NAV_ITEMS = [
  { label: "Dashboard", href: "/page/dashboard" },
  { label: "Users", href: "/page/user" },
  { label: "Settings", href: "/page/settings" },
] as const;

export type LayoutNavItem = (typeof LAYOUT_NAV_ITEMS)[number];
