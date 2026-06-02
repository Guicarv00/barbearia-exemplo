export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'cabelo' | 'barba' | 'combos' | 'especiais';
  price: number;
  duration: number; // in minutes
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number; // out of 5
  content: string;
  source: string;
  avatarUrl?: string;
}

export interface BentoItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  size: 'large' | 'medium' | 'small' | 'tall';
  stat?: string;
  iconName: string;
}

export interface BookingState {
  selectedService: Service | null;
  selectedDate: string;
  selectedTime: string;
  clientName: string;
  clientPhone: string;
  clientNotes: string;
}
