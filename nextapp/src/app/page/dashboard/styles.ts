export const CalendarContainerSx = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  minHeight: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  bgcolor: "grey.50",
};

export const CalendarToolbarSx = {
  p: 1.5,
  flexWrap: "wrap",
  borderBottom: 1,
  borderColor: "divider",
};

export const CalendarTodayButtonSx = {
  borderRadius: 5,
};

export const CalendarViewButtonSx = {
  borderRadius: 5,
};

export const CalendarTitleSx = {
  flex: "1 1 160px",
  minWidth: 0,
};

export const CalendarContentSx = {
  width: "100%",
  minWidth: 0,
  minHeight: 0,
  flex: 1,
  overflow: "hidden",
};

export const CalendarGridSx = {
  width: "100%",
  height: "100%",
  minWidth: 0,
  minHeight: 0,
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
};

export const CalendarWeekdayHeaderSx = {
  py: { xs: 0.75, sm: 1 },
  textAlign: "center",
  borderRight: 1,
  borderBottom: 1,
  borderColor: "divider",
  bgcolor: "background.paper",
};

export const CalendarWeekdayLabelSx = {
  fontSize: { xs: "0.6rem", sm: "0.75rem" },
};

export const BookingCalendarDateCellAvailabilityCountSx = {
  fontSize: "2rem",
  fontWeight: 700,
  color: "#22C55E",
  lineHeight: 1,
};

export const BookingCalendarDateCellAvailabilityLabelSx = {
  fontSize: "0.75rem",
  color: "text.secondary",
  fontWeight: 500,
};

export const BookingCalendarDateCellPriceSx = {
  mt: 1.5,
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "text.secondary",
};

export const BookingCalendarDateCellOccupancySx = {
  mt: 1.5,
};

export const BookingCalendarDateCellOccupancyProgressBarSx = {
  height: 6,
  borderRadius: 3,
};

export const BookingCalendarDateCellOccupancyPercentageSx = {
  mt: 0.5,
  fontSize: "0.7rem",
  fontWeight: 600,
  textAlign: "right",
  color: "text.secondary",
};
export const DayButtonSx = {
  appearance: "none",
  textAlign: "left",
  font: "inherit",
  bgcolor: "red",
  cursor: "pointer",
  minWidth: 0,
  minHeight: 0,
  p: { xs: 0.35, sm: 0.75, md: 1 },
  borderRight: 1,
  borderBottom: 1,
  borderColor: "divider",
  // bgcolor: "background.paper",
  //   opacity: isCurrentMonth ? 1 : 0.45,
  overflow: "hidden",
  transition: "background-color 120ms ease",
  "&:hover": {
    bgcolor: "action.hover",
  },
  "&:focus-visible": {
    position: "relative",
    zIndex: 1,
    outline: 2,
    outlineColor: "primary.main",
    outlineOffset: -2,
  },
};
 

export const CalendarDateCellHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
 mb: 0.5,
};

export const CalendarDateCellHeaderChip = {
  display: "flex",
  height: 22,
  fontSize: "0.65rem",
  fontWeight: 600,
  borderRadius: 1,
  bgcolor: "#EEF2FF",
  color: "#4338CA",
};

export const CalendarDateCellHeaderDate = {
  fontSize: "1.1rem",
  fontWeight: 700,
  lineHeight: 1,
};

export const CalendarDateCellHeaderDate_Today = {
  width: 28,
  height: 28,
  borderRadius: "50%",
  bgcolor: "primary.main",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const CalendarDateCellAvailability = {
  mt: 2,
};

export const CalendarDateCellAvailabilityCount = {
  fontSize: "2rem",
  fontWeight: 700,
  color: "#22C55E",
  lineHeight: 1,
};

export const CalendarDateCellAvailabilityLabel = {
  fontSize: "0.75rem",
  color: "text.secondary",
  fontWeight: 500,
};

export const CalendarDateCellPrice = {
  mt: 1.5,
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "text.secondary",
};

export const CalendarDateCellOccupancy = {
  mt: 1.5,
};

export const CalendarDateCellOccupancyPercentage = {
  mt: 0.5,
  fontSize: "0.7rem",
  fontWeight: 600,
  textAlign: "right",
  color: "text.secondary",
};

export const CalendarDateCellOccupancyProgressBar = {
  height: 6,
  borderRadius: 3,
};