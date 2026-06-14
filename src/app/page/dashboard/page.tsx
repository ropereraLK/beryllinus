import PageTitle from "@/app/component/ui/pageTitle";
import Box from "@mui/material/Box";
import Calendar from "./Calendar";

export default function DashboardPage() {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        minHeight: 0,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <PageTitle title="Dashboard" />
      <Calendar />
    </Box>
  );
}
