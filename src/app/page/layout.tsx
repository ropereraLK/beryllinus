import type { ReactNode } from "react";

import AppLayout from "@/app/component/layout/AppLayout";

export default function PageSegmentLayout({ children }: { children: ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
