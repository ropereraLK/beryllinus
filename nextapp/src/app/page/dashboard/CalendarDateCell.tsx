import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import {
  DayButtonSx,
  CalendarDateCellHeader,
  CalendarDateCellHeaderChip,
  CalendarDateCellHeaderDate_Today,
  CalendarDateCellHeaderDate,
  CalendarDateCellAvailability,
  CalendarDateCellPrice,
  CalendarDateCellAvailabilityCount,
  CalendarDateCellAvailabilityLabel,
  CalendarDateCellOccupancyPercentage,
  CalendarDateCellOccupancyProgressBar,
  CalendarDateCellOccupancy,
} from "./styles";
import dashboardConfig from "@/config/dashboardConfig.json";
import { Availability } from "./types";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import CelebrationIcon from "@mui/icons-material/Celebration";

const { roomTypes, availabilityIndicators } = dashboardConfig.calendar;

export interface BookingCalendarDayProps {
  date: Date;
  availability?: Availability;
  isCurrentMonth: boolean;
  isToday: boolean;
  onClick: () => void;
}

export default function CalendarDateCell({
  date,
  availability,
  isCurrentMonth,
  isToday,
  onClick,
}: BookingCalendarDayProps) {
  const holidayName = null;
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        ...DayButtonSx,
        opacity: isCurrentMonth ? 1 : 0.1,
        bgcolor: isCurrentMonth ? "inherit" : "black",
      }}
    >
      {/* CalendarDateCell Header */}
      <Box sx={CalendarDateCellHeader}>
        <Box
          sx={{
            ...CalendarDateCellHeaderDate,
            ...(isToday && CalendarDateCellHeaderDate_Today),
          }}
        >
          {date.getDate()}
        </Box>

        {holidayName && (
          <Chip
            size="small"
            icon={<CelebrationIcon />}
            label={holidayName}
            sx={CalendarDateCellHeaderChip}
          />
        )}
      </Box>
      <Box sx={CalendarDateCellAvailability}>
        <Typography sx={CalendarDateCellAvailabilityCount}>12</Typography>

        <Typography sx={CalendarDateCellAvailabilityLabel}>
          Available
        </Typography>
      </Box>

      <Typography sx={CalendarDateCellPrice}>From $125</Typography>

      <Box sx={CalendarDateCellOccupancy}>
        <LinearProgress
          variant="determinate"
          value={82}
          sx={CalendarDateCellOccupancyProgressBar}
        />

        <Typography sx={CalendarDateCellOccupancyPercentage}>82%</Typography>
      </Box>
    </Box>
  );
}
