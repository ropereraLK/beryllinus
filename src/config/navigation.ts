/** Sidebar links for authenticated application routes. */
export const APP_NAV_ITEMS = [
  { label: "Dashboard", href: "/page/dashboard" },
  { label: "Bookings", href: "/page/booking" },
  { label: "Users", href: "/page/user" },
  { label: "Settings", href: "/page/settings" },
  { label: "Playground", href: "/page/test" },
] as const;

export type AppNavItem = (typeof APP_NAV_ITEMS)[number];
