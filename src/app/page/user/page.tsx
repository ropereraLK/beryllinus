"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function UserPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // wire to API / Redux when ready
  }

  return (
    <Stack spacing={3} maxWidth={480}>
      <Typography variant="h5" component="h1">
        User
      </Typography>

      <Stack
        component="form"
        spacing={2.5}
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          autoComplete="name"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
          autoComplete="email"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          required
          autoComplete="new-password"
        />
        <Stack direction="row" spacing={2} sx={{ alignSelf: "flex-start" }}>
          <Button type="reset" variant="outlined">
            Clear
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
