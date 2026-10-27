import { EventDate } from '@/common/molecules/EventDate';
import { Icon } from '@/common/atoms/Icon';
import type { Event } from '@/models';

export interface EventRowProps {
  event: Event;
  featured?: boolean;
}

export function EventRow({ event, featured = false }: EventRowProps) {
  return (
    <article className={featured ? 'event-row featured' : 'event-row'}>
      <EventDate day={event.day} month={event.month} />
      <div className="event-copy">
        <h3>{event.title}</h3>
        <p>
          <Icon name="clock" size={13} /> {event.time} · {event.place}
        </p>
      </div>
      <button className={featured ? 'pill filled' : 'pill'}>{featured ? 'Inscribirme' : 'Ver detalle'}</button>
    </article>
  );
}
