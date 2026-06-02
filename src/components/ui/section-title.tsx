import React from 'react';
import { cn } from '@/lib/utils';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  className
}) => {
  return <div className={cn('mb-10', center && 'text-center', className)}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-chess-primary">{title}</h2>
      {subtitle && (
  <p
    className={cn(
      "text-gray-600 max-w-3xl font-normal text-base",
      center ? "text-center mx-auto" : "text-left"
    )}
  >
    {subtitle}
  </p>
)}
      <div className={cn('h-1 w-20 bg-chess-primary mt-4', center && 'mx-auto')} />
    </div>;
};
export default SectionTitle;