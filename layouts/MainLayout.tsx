import { FC } from 'react';
import NavBar from 'components/NavBar';
import InfoBar from 'components/InfoBar';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <div className="grid items-stretch grid-cols-12 gap-2 px-2 mx-auto xl:grid-cols-8 md:gap-4 xl:container">
        <NavBar />

        <div className="col-span-12 md:col-span-9 lg:col-span-6 xl:col-span-5 md:pt-2">
          {children}
        </div>

        <InfoBar />
      </div>
    </>
  );
};

export default MainLayout;
