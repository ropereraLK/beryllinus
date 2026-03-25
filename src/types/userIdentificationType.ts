export enum UserIdentificationType {
    NATIONAL_ID = "NATIONAL_ID",
    PASSPORT = "PASSPORT",
    DRIVING_LICENSE = "DRIVING_LICENSE",
  }

  export const UserIdentificationTypeLabel: Record<UserIdentificationType, string> = {
    [UserIdentificationType.NATIONAL_ID]: "National ID",
    [UserIdentificationType.PASSPORT]: "Passport",
    [UserIdentificationType.DRIVING_LICENSE]: "Driving License",
  };