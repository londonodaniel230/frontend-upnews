import { StoryArt } from '@/components/illustrations/StoryArt';

export interface MiniStoryProps {
  item: {
    art: string;
    title: string;
  };
}

export function MiniStory({ item }: MiniStoryProps) {
  return (
    <div className="mini-story">
      <StoryArt type={item.art} />
      <span>{item.title}</span>
    </div>
  );
}
