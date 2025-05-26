export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  publishedAt: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
  registrationLink?: string;
}