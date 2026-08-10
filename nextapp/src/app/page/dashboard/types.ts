export interface RoomAvailability {
  booked: number;
  available: number;
  price: number;
}

export interface Availability {
  resources: Record<string, RoomAvailability>;
}

 