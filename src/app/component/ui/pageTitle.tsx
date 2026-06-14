import type { ReactNode } from "react";
import Typography from "@mui/material/Typography";

export interface PageTitleProps {
  title: ReactNode;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <Typography
      component="h1"
      variant="h5"
      sx={{
        mb: { xs: 1.5, md: 2 },
        pb: { xs: 1, md: 1.5 },
        borderBottom: 1,
        borderColor: "divider",
        color: "text.primary",
        fontSize: { xs: "1.25rem", sm: "1.5rem" },
        fontWeight: 600,
        lineHeight: 1.3,
      }}
    >
      {title}
    </Typography>
  );
}
