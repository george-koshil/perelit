export interface BaggageInformation {
  provision_type: string;
  piece_count: number;
}

export interface BaggageRequired {
  free_carry_on: boolean;
  free_piece_required: boolean;
}

export interface TicketsFindParams {
  itinerary: Trip[];
  passengers?: (PassengerType[] | null);
  comfort?: CabinPref | null;
  baggage?: BaggageRequired | null;
}

export interface BookingInformation {
  booking_code: string;
  cabin_code: string;
  meal_code: string;
  seats_available: number;
  availability_break?: (boolean | null);
  fare_break_point?: (boolean | null);
}

export interface CabinPref {
  type: ComformEnum;
}

export interface Carrier {
  operating_flight_number: number;
  operating_code: string;
  marketing_flight_number: number;
  marketing_code: string;
  equipment_code: string;
}

export type ComformEnum = "Y" | "S" | "C" | "J" | "F" | "P";

export interface DepartureArrivalBoard {
  airport: string;
  city: string;
  country: string;
  time: string;
  state?: (string | null);
  terminal?: (string | null);
  date_adjustment: number;
}

export interface FareComponent {
  begin_airport: string;
  end_airport: string;
  segments: BookingInformation[];
}

export interface FareInformation {
  validating_carrier_code: string;
  governing_carriers: string;
  passengers: PassengerFareInfo[];
}

export interface Flight {
  uuid: string;
  departure: DepartureArrivalBoard;
  arrival: DepartureArrivalBoard;
  carrier: Carrier;
  description: FlightDescription;
}

export interface FlightDescription {
  total_miles_flown: number;
  elapsed_time: number;
  dot_rating?: (string | null);
  on_time_performance: number;
}

export interface FlightItinerary {
  uuid: string;
  _legs: Leg[];
  _pricing_information: PricingInformation[];
}

export interface HTTPValidationError {
  detail: Object[];
}

export interface Leg {
  description: LegDescription;
  uuid: string;
  segments: Flight[];
  elapsed_time: number;
}

export interface LegDescription {
  departure_location: string;
  arrival_location: string;
  departure_date: string;
}

export interface Money {
  currency: string;
  amount: number;
}

export interface Offer {
  offer_id: string;
  source: string;
  time_to_live: number;
}

export interface PassengerDescription {
  type: string;
  number: number;
  non_refundable: boolean;
}

export interface PassengerFareInfo {
  passenger_description: PassengerDescription;
  passenger_total_fare: TotalFare;
  fare_components: FareComponent[];
  baggage_information: BaggageInformation[];
}

export interface PassengerType {
  type: PassengerTypeEnum;
  number: number;
  personalInfo?: { name: string; surname: string; dateOfBirth: string; sex: string; passport: string; passportFrom: string; passportTo: string }
}

export type PassengerTypeEnum = "ADT" | "CNN" | "INF" | "INS";

export interface PricingInformation {
  supplier_id: number;
  offer: Offer;
  fare: FareInformation;
  total_fare: TotalFare;
}

export interface TotalFare {
  total_fare: Money;
  total_tax: Money;
  base_fare: Money;
}

export interface Trip {
  departure_date: string;
  origin_location: string;
  destination_location: string;
  rph: string;
}
