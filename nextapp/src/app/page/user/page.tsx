"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PageTitle from "@/app/component/ui/pageTitle";

export default function UserPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // wire to API / Redux when ready
  }

  return (
    <>
      <PageTitle title="User" />
      <Stack spacing={2} maxWidth={480}>
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
    </>
  );
}
