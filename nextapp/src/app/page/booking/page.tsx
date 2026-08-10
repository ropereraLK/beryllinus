"use client";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import PageTitle from "@/app/component/ui/pageTitle";

export default function BookingPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Connect to the booking API when it is available.
  }

  return (
    <>
      <PageTitle title="Booking" />

      <Stack
        component="form"
        spacing={2.5}
        maxWidth={800}
        onSubmit={handleSubmit}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField label="Guest Name" name="guestName" fullWidth required />
          <TextField
            label="Reference Number"
            name="referenceNumber"
            fullWidth
          />
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            label="Check-in Date"
            name="checkInDate"
            type="date"
            fullWidth
            required
            slotProps={{ inputLabel: { shrink: true } }}
          />
          <TextField
            label="Check-out Date"
            name="checkOutDate"
            type="date"
            fullWidth
            required
            slotProps={{ inputLabel: { shrink: true } }}
          />
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
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
            <MenuItem value="standard">Standard</MenuItem>
            <MenuItem value="deluxe">Deluxe</MenuItem>
            <MenuItem value="suite">Suite</MenuItem>
          </TextField>

          <TextField
            label="Number of Guests"
            name="guestCount"
            type="number"
            defaultValue={1}
            fullWidth
            required
            slotProps={{ htmlInput: { min: 1 } }}
          />

          <TextField
            label="Status"
            name="status"
            select
            defaultValue="pending"
            fullWidth
            required
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="confirmed">Confirmed</MenuItem>
            <MenuItem value="checked-in">Checked In</MenuItem>
          </TextField>
        </Stack>

        <TextField
          label="Notes"
          name="notes"
          multiline
          minRows={3}
          fullWidth
        />

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button type="reset" variant="outlined">
            Clear
          </Button>
          <Button type="submit" variant="contained">
            Create Booking
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
