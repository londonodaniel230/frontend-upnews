export type NewsArt = 'screen' | 'bread' | 'heart';
export type NewsTone = 'orange' | 'cream' | 'green';

export interface News {
  category: string;
  title: string;
  excerpt: string;
  art: NewsArt;
  tone: NewsTone;
}
