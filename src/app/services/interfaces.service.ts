export interface I18n {
  [key: string]: any;
}

export interface Venue {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  major: number;
  welcome_message: string;
  farewell_message: string;
  status: string;
  stars_number: number;
  payment_enabled: boolean;
  uuid: string;
  city_tax_ready: boolean;
  pms_integrated: boolean;
  adhoc_checkout_enabled: boolean;
  key_provider: string;
  photo: string;
  external_key_provider_code: string;
  location: {
    zip: string;
    city_name: string;
    street_name: string;
    country_name: string;
    country_code: string;
    latitude: number;
    longitude: number;
  };
  contact: {
    website: string;
    email: string;
    phone: string;
    formatted_phone: string;
  };
  regions: Array<Object>;
  cards: Array<Object>;
}

export interface Precheckin {
  id: number;
  venue: Object;
  arrived_on: string;
  departed_on: string;
  status: string;
  arrive_time: string;
  checkin_id: number;
  request_deliverables: Array<Object>;
  created_at: string;
  updated_at: string;
  reservation_number: number;
  room_type: string;
  travel_purpose: string;
}

export interface Session {
  session: {
    uuid: string;
  };
  user: {
    id: number;
    first_name: string;
    last_name: string;
    name: string;
    email: string;
    gender: string;
    birth_date: string;
    locale: string;
    provider: string;
    profile_photo: string;
    plv_token: string;
  };
}
