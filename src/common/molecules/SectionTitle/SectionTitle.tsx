import { Icon } from '@/common/atoms/Icon';

export interface SectionTitleProps {
  title: string;
  action?: string;
}

export function SectionTitle({ title, action }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {action && (
        <button>
          {action} <Icon name="arrow" size={15} />
        </button>
      )}
    </div>
  );
}
