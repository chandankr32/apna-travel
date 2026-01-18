
export interface Vehicle {
  id: string;
  name: string;
  type: string;
  pricePerKm: number;
  capacity: number;
  hasAC: boolean;
  luggageCount: number | string;
  tag?: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  text: string;
  rating: number;
  initials: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
}
