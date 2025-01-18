import { useRef } from 'react';
import { useCursor } from '../Cursor';
import { CardBasic, Icon } from './Card';
import { CardExportProps } from './types';

const Card = ({ titleText, chipText, centerText }: CardExportProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setCursorInsets } = useCursor();
  return (
    <div
      ref={ref}
      onMouseEnter={() =>
        setCursorInsets({
          height: 0,
          width: 0,
          top: 0,
          left: 0,
        })
      }
      onMouseLeave={() => setCursorInsets(undefined)}
      className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]"
    >
      <CardBasic text={centerText} />
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <h2 className="dark:text-white text-black mt-4 text-md font-light">
        {titleText}
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        {chipText}
      </p>
    </div>
  );
};

export default Card;
