import Link from 'next/link';
import { FC } from 'react';

interface Props {
  path: string;
}

const MenuItem: FC<Props> = ({ path, children }) => {
  return (
    <>
      <div>
        <Link href={path} passHref>
          <a className="p-2 flex items-center hover:bg-white dark:hover:bg-gray-700 rounded-lg text-gray-700 font-semibold">
            {children}
          </a>
        </Link>
      </div>
    </>
  );
};

export default MenuItem;
