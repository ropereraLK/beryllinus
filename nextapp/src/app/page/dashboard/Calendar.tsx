"use client";

import { useMemo, useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import BookingDayDialog from "./BookingDayDialog";
import CalendarDateCell from "./CalendarDateCell";
import { Availability } from "./types";
import { availabilityByDate } from "./mockData";
import {
  CalendarContainerSx,
  CalendarToolbarSx,
  CalendarTodayButtonSx,
  CalendarViewButtonSx,
  CalendarTitleSx,
  CalendarContentSx,
  CalendarGridSx,
  CalendarWeekdayHeaderSx,
  CalendarWeekdayLabelSx,
} from "./styles";
const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// const availabilityByDate: Record<string, Availability> = {

// };

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createMonthDays(month: Date) {
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const start = new Date(firstDay);
  start.setDate(firstDay.getDate() - firstDay.getDay());
  const numberOfWeeks = Math.ceil((firstDay.getDay() + lastDay.getDate()) / 7);

  return Array.from({ length: numberOfWeeks * 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
}

export default function Calendar() {
  const [month, setMonth] = useState(new Date(2026, 5, 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const days = useMemo(() => createMonthDays(month), [month]);
  const today = new Date();

  function changeMonth(offset: number) {
    setMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + offset, 1),
    );
  }

  return (
    <>
      <Paper variant="outlined" sx={CalendarContainerSx}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          useFlexGap
          sx={CalendarToolbarSx}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={() =>
              setMonth(new Date(today.getFullYear(), today.getMonth(), 1))
            }
            sx={CalendarTodayButtonSx}
          >
            Today
          </Button>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <IconButton
              size="small"
              aria-label="Previous month"
              onClick={() => changeMonth(-1)}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              size="small"
              aria-label="Next month"
              onClick={() => changeMonth(1)}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>

          <Typography variant="h6" noWrap fontWeight={600} sx={CalendarTitleSx}>
            {month.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </Typography>

          <Button
            variant="outlined"
            size="small"
            startIcon={<CalendarMonthOutlinedIcon />}
            sx={{ borderRadius: 5 }}
          >
            Month
          </Button>
        </Stack>

        <Box sx={CalendarContentSx}>
          <Box
            sx={{
              ...CalendarGridSx,
              gridTemplateRows: `auto repeat(${days.length / 7}, minmax(0, 1fr))`,
            }}
          >
            {WEEKDAYS.map((weekday) => (
              <Box key={weekday} sx={CalendarWeekdayHeaderSx}>
                <Typography
                  color="text.secondary"
                  fontWeight={700}
                  sx={CalendarWeekdayLabelSx}
                >
                  {weekday}
                </Typography>
              </Box>
            ))}

            {days.map((date) => {
              const key = dateKey(date);
              const availability = availabilityByDate[key];
              const isCurrentMonth = date.getMonth() === month.getMonth();
              const isToday = key === dateKey(today);

              return (
                <CalendarDateCell
                  key={key}
                  date={date}
                  availability={availability}
                  isCurrentMonth={isCurrentMonth}
                  isToday={isToday}
                  onClick={() => setSelectedDate(date)}
                />
              );
            })}
          </Box>
        </Box>
      </Paper>

      <BookingDayDialog
        open={selectedDate !== null}
        date={selectedDate}
        availability={
          selectedDate ? availabilityByDate[dateKey(selectedDate)] : undefined
        }
        onClose={() => setSelectedDate(null)}
      />
    </>
  );
}
