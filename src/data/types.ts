export type Hotels = Hotels2[];

export interface Hotels2 {
  id: number;
  name: string;
  location: string;
  coordinates: Coordinates;
  room_types: RoomType[];
  amenities: string[];
  rating: number;
  thumbnail: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface RoomType {
  type: string;
  price: number;
}

export interface SimpleUser {
  uid: string;
  email: string | null;
  name: string | null;
  surName: string | null;
  displayName?: string | null;
  photoURL?: string | null;
}

export interface AuthState {
  user: SimpleUser | null;
  loading: boolean;
}

export interface CustomButtonProps {
  screen: string;
  text: string;
}

