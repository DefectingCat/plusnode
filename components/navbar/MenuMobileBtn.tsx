import { FC } from 'react';
import cn from 'classnames';

interface Props {
  onClick: () => void;
}

const MenuMobileBtn: FC<Props> = ({ onClick }) => {
  return (
    <>
      <button
        className={cn(
          'px-2 py-1 rounded-lg text-brand-grey-700',
          'hover:bg-brand-grey-200 md:hidden',
          'dark:text-brand-grey-400 dark:hover:bg-brand-dark-grey-700'
        )}
        onClick={onClick}
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
          <path d="M442 114H6a6 6 0 01-6-6V84a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6z" />
        </svg>
      </button>
    </>
  );
};

export default MenuMobileBtn;
