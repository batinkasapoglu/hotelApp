import hotelData from './hotel_data.json';
import { Hotels} from './types';

export const useHotels = (): Hotels => {
  return hotelData as Hotels;
};
