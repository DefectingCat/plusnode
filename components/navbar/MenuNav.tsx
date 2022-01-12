import { FC } from 'react';
import cn from 'classnames';
import RuaDivder from 'components/rua/RuaDivder';
import MenuItem from 'components/navbar/MenuItem';
import MenuWriteBtn from 'components/navbar/MenuWriteBtn';
import type { RuaMenu } from 'components/NavBar';

interface Props {
  menuOne: RuaMenu[];
  menuTwo: RuaMenu[];
}

const MenuNav: FC<Props> = ({ menuOne, menuTwo }) => {
  return (
    <>
      <nav
        className={cn(
          'absolute rounded-xl flex flex-col w-2/3 p-5',
          'bg-white border shadow-xl left-2',
          'md:left-0 md:p-0  md:relative md:border-none md:w-auto',
          'md:bg-transparent md:shadow-none'
        )}
      >
        <MenuWriteBtn />

        <RuaDivder />

        {/* menu one */}
        {menuOne.map((item) => (
          <MenuItem key={item.path} path={item.path}>
            {item.icon}
            <span>{item.name}</span>
          </MenuItem>
        ))}
        <RuaDivder />

        {/* menu two */}
        {menuTwo.map((item) => (
          <MenuItem key={item.path} path={item.path}>
            {item.icon}
            <span>{item.name}</span>
          </MenuItem>
        ))}
      </nav>
    </>
  );
};

export default MenuNav;
