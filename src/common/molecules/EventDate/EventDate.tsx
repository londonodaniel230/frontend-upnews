import { Icon } from '@/common/atoms/Icon';

export interface EventDateProps {
  day: string;
  month: string;
}

export function EventDate({ day, month }: EventDateProps) {
  return (
    <div className="event-date">
      <strong>{day}</strong>
      <span>{month}</span>
    </div>
  );
}
