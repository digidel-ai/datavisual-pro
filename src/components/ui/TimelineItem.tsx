import React from 'react';

interface TimelineItemProps {
  title: string;
  description: string;
  isLeft: boolean;
  isCompleted?: boolean;
  isPending?: boolean;
  isInProgress?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  isLeft,
  isCompleted = false,
  isPending = false,
  isInProgress = false,
}) => {
  let markerClass = 'bg-secondary';
  if (isCompleted) markerClass = 'bg-success';
  if (isPending) markerClass = 'bg-gray-500';
  if (isInProgress) markerClass = 'bg-warning';

  return (
    <div className="timeline-item">
      <div className={`timeline-marker ${markerClass}`} />
      <div className={isLeft ? 'timeline-content-left' : 'timeline-content-right'}>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-text-secondary mt-1">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;