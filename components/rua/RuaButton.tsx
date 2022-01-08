import { FC } from 'react';

interface Props {
  className?: string;
}

const RuaButton: FC<Props> = ({ children, className }) => {
  return (
    <>
      <button
        className={`px-2 py-1 rounded-lg hover:bg-brand-grey-200 text-brand-grey-700 dark:text-brand-grey-400 dark:hover:bg-brand-dark-grey-700 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default RuaButton;
