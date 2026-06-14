"use client";

import CloseIcon from "@mui/icons-material/Close";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import type { Availability } from "./CalendarDateCell";

export interface BookingDayDialogProps {
  date: Date | null;
  availability?: Availability;
  open: boolean;
  onClose: () => void;
}

const ROOM_CAPACITY = 10;

export default function BookingDayDialog({
  date,
  availability,
  open,
  onClose,
}: BookingDayDialogProps) {
  if (!date) return null;

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            bgcolor: "grey.50",
          },
        },
      }}
    >
      <Stack direction="row" alignItems="center" sx={{ px: 3, pt: 2.5 }}>
        <Typography variant="h5" fontWeight={600} sx={{ flex: 1 }}>
          Create booking
        </Typography>
        <IconButton aria-label="Close booking dialog" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <DialogContent>
        <Stack spacing={2.5}>
          <Typography color="text.secondary">{formattedDate}</Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ p: 2, borderRadius: 2, bgcolor: "background.paper" }}
          >
            <Stack direction="row" spacing={1} alignItems="center" sx={{ flex: 1 }}>
              <HotelOutlinedIcon color="primary" />
              <Typography>
                Luxury: {availability?.luxury ?? ROOM_CAPACITY}/{ROOM_CAPACITY}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ flex: 1 }}>
              <HotelOutlinedIcon color="primary" />
              <Typography>
                Standard: {availability?.standard ?? ROOM_CAPACITY}/{ROOM_CAPACITY}
              </Typography>
            </Stack>
          </Stack>

          <TextField label="Guest Name" name="guestName" fullWidth required />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label="Room Type"
              name="roomType"
              select
              defaultValue=""
              fullWidth
              required
            >
              <MenuItem value="" disabled>
                Select room type
              </MenuItem>
              <MenuItem value="luxury">Luxury</MenuItem>
              <MenuItem value="standard">Standard</MenuItem>
            </TextField>

            <TextField
              label="Guests"
              name="guestCount"
              type="number"
              defaultValue={1}
              fullWidth
              slotProps={{
                input: {
                  startAdornment: <PersonOutlineIcon color="action" sx={{ mr: 1 }} />,
                },
                htmlInput: { min: 1 },
              }}
            />
          </Stack>

          <TextField label="Notes" name="notes" multiline minRows={3} fullWidth />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onClose}>
          Create Booking
        </Button>
      </DialogActions>
    </Dialog>
  );
}
