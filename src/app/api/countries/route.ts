import { NextResponse } from "next/server";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

const countryOptions = Object.entries(
  countries.getNames("en", { select: "official" })
).map(([code, name]) => ({ code, name }));

countryOptions.sort((a, b) => a.name.localeCompare(b.name));

export async function GET() {
  return NextResponse.json({ countryOptions });
}

