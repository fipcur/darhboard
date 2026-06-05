export type Tab = 'dashboard' | 'maintenance' | 'analytics' | 'settings';

export interface MaintenanceRecord {
  id: string;
  date: string;
  time: string;
  serviceItem: string;
  category: string;
  garage: string;
  location: string;
  mileage: string;
  cost: number;
  status: 'Completed' | 'Pending' | 'Overdue' | 'Warranty';
  vehicle: string;
}

export interface UpcomingService {
  id: string;
  day: string;
  date: string;
  title: string;
  vehicle: string;
  location: string;
  status: 'scheduled' | 'pending';
}
