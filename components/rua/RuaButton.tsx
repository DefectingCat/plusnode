import { FC } from 'react';

interface Props {
  className?: string;
  onClick?: () => void;
}

const RuaButton: FC<Props> = ({ children, className, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-2 py-1 rounded-lg hover:bg-brand-grey-200 text-brand-grey-700 dark:text-brand-grey-400 dark:hover:bg-brand-dark-grey-700 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default RuaButton;
