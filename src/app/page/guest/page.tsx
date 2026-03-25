"use client";

import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { TextField, Button } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import {
    UserIdentificationType,
    UserIdentificationTypeLabel,
} from "@/types/userIdentificationType";

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

type CountryOption = { code: string; name: string };

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // wire to API / Redux when ready
};

export default function GuestRegistrationPage() {
    const [varUserIdentificationType, setUserIdentificationType] = useState<
        UserIdentificationType
    >(UserIdentificationType.NATIONAL_ID);
    const [countryOptions, setCountryOptions] = useState<CountryOption[]>([]);
    const [country, setCountry] = useState<string>("");

    useEffect(() => {
        let mounted = true;

        fetch("/api/countries")
            .then((res) => res.json())
            .then((data) => {
                if (!mounted) return;
                setCountryOptions(data.countryOptions ?? []);
            })
            .catch(() => {
                if (!mounted) return;
                setCountryOptions([]);
            });

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={2} maxWidth={1200}>
                    <Typography variant="h5" component="h1">
                        Guest Registration
                    </Typography>


                    <Stack component="form" spacing={2.5} onSubmit={handleSubmit} noValidate>
                        <TextField
                            label="Identification Type"
                            name="identificationType"
                            select
                            value={varUserIdentificationType}
                            onChange={(event) =>
                                setUserIdentificationType(
                                    event.target.value as UserIdentificationType
                                )
                            }
                            fullWidth
                            required
                        >
                            {Object.values(UserIdentificationType).map((type) => (
                                <MenuItem key={type} value={type}>
                                    {UserIdentificationTypeLabel[type]}
                                </MenuItem>
                            ))}
                        </TextField>

                        {(varUserIdentificationType ===
                            UserIdentificationType.NATIONAL_ID ||
                            varUserIdentificationType ===
                            UserIdentificationType.DRIVING_LICENSE) && (
                                <TextField label="Number" name="number" fullWidth required />
                            )}

                        {varUserIdentificationType === UserIdentificationType.PASSPORT && (
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    label="Country"
                                    name="country"
                                    select
                                    value={country}
                                    onChange={(event) => setCountry(event.target.value)}
                                    required
                                    sx={{ flex: 2 }}
                                >
                                    <MenuItem value="" disabled>
                                        Select country
                                    </MenuItem>
                                    {countryOptions.map((c) => (
                                        <MenuItem key={c.code} value={c.code}>
                                            {c.name}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    label="Passport Number"
                                    name="passportNumber"
                                    required
                                    sx={{ flex: 3 }}
                                />
                                <DateField
                                    label="Expiry Date"
                                    name="expiryDate"
                                    required
                                //  defaultValue={dayjs('2022-04-17')} 
                                // sx={{ flex: 3 }
                                />
                            </Stack>
                        )}
                        <Stack direction="row" spacing={2}>
                            <TextField
                                label="Booking Platform"
                                name="bookingPlatform"
                                fullWidth
                                required
                                select
                                defaultValue="none"
                                sx={{ flex: 2 }}
                            >
                                <MenuItem value="none" disabled>
                                    Select option
                                </MenuItem>
                                <MenuItem value="none">None</MenuItem>
                                <MenuItem value="agoda">Agoda</MenuItem>
                                <MenuItem value="airbnb">Airbnb</MenuItem>
                                <MenuItem value="bookingcom">Booking.com</MenuItem>
                                <MenuItem value="phone">Phone</MenuItem>



                            </TextField>
                            <TextField
                                label="Reference Number"
                                name="ReferenceNumber"
                                fullWidth
                                required
                                sx={{ flex: 3 }}
                            >
                            </TextField>
                            <TextField
                                label="OTP"
                                name="otp"

                                fullWidth
                                required
                                sx={{ flex: 1 }}

                            >

                            </TextField>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                label="Family Name"
                                name="familyName"
                                fullWidth
                                required
                            >
                            </TextField>
                            <TextField
                                label="Given Name"
                                name="givenName"
                                fullWidth
                                required
                            >
                            </TextField>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                label="Country Code"
                                name="countryCode"
                                fullWidth
                                required
                            >
                            </TextField>
                            <TextField
                                label="Phone Number"
                                name="phoneNumber"
                                fullWidth
                                required
                            >
                            </TextField>
                            <TextField
                                label="Whatsapp Available"
                                name="isWhatsappAvailable"
                                select
                                fullWidth
                                required
                                defaultValue="false"
                            >
                                <MenuItem value="" disabled>
                                    Select option
                                </MenuItem>
                                <MenuItem value="true">Yes</MenuItem>
                                <MenuItem value="false">No</MenuItem>
                            </TextField>
                        </Stack>
                        <TextField
                            label="email"
                            name="Email"
                            fullWidth
                            required
                        >
                        </TextField>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                label="Visa Type"
                                name="visaType"
                                select
                                fullWidth
                                required
                                defaultValue="tourist"
                            >
                                <MenuItem value="" disabled>
                                    Select option
                                </MenuItem>
                                <MenuItem value="tourist">Tourist</MenuItem>
                                <MenuItem value="business">Business</MenuItem>
                                <MenuItem value="medical">Medical</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </TextField>
                            <DateField
                                label="Visa Start Date"
                                name="visaStartDate"
                                required
                            //  defaultValue={dayjs('2022-04-17')} 
                            // sx={{ flex: 3 }
                            />
                            <DateField
                                label="Visa End Date"
                                name="visaEndDate"
                                required
                            //  defaultValue={dayjs('2022-04-17')} 
                            // sx={{ flex: 3 }
                            />


                        </Stack>
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
            </LocalizationProvider>
        </div>
    );
}