import { FC, useCallback, useState } from 'react';
import Link from 'next/link';
import RuaDivder from './rua/RuaDivder';
import MenuItem from './navbar/MenuItem';

const svgStyle = 'mr-2 w-6 h-6 fill-current opacity-50';

const meunOne = [
  {
    name: 'My Feed',
    path: '/',
    icon: (
      <svg className={svgStyle} viewBox="0 0 24 24">
        <path d="M4.5 20.3h-.4c-1.9 0-3.5-1.6-3.5-3.5V9.4c0-.3.2-.5.5-.5h6.4c.2 0 .5.2.5.5v7.4c0 2-1.6 3.5-3.5 3.5zM1.6 9.9v6.9c0 1.4 1.1 2.5 2.5 2.5h.4c1.4 0 2.5-1.1 2.5-2.5V9.9H1.6z"></path>
        <path d="M19.9 20.3H4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c1.4 0 2.5-1.1 2.5-2.5V5.9 4.2c0-.3.2-.5.5-.5h15.4c.3 0 .5.2.5.5v12.6c0 2-1.6 3.5-3.5 3.5zm-13-1h13c1.4 0 2.5-1.1 2.5-2.5V4.7H8V6c0-.1 0 0 0 0v10.8c0 1-.4 1.9-1.1 2.5z"></path>
        <g>
          <path d="M10.7 14.5h9.5v1h-9.5zM10.7 11h9.5v1h-9.5zM10.7 7.4h9.5v1h-9.5z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: 'Drafts',
    path: '/drafts',
    icon: (
      <svg className={svgStyle} viewBox="0 0 384 512">
        <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"></path>
      </svg>
    ),
  },
];

const menuTwo = [
  {
    name: 'Explore',
    path: '/explore',
    icon: (
      <svg className={svgStyle} viewBox="0 0 496 512">
        <path d="M264.97 272.97c9.38-9.37 9.38-24.57 0-33.94-9.37-9.37-24.57-9.37-33.94 0-9.38 9.37-9.38 24.57 0 33.94 9.37 9.37 24.57 9.37 33.94 0zM351.44 125c-2.26 0-4.51.37-6.71 1.16l-154.9 55.85c-7.49 2.7-13.1 8.31-15.8 15.8l-55.85 154.91c-5.65 15.67 10.33 34.27 26.4 34.27 2.26 0 4.51-.37 6.71-1.16l154.9-55.85c7.49-2.7 13.1-8.31 15.8-15.8l55.85-154.9c5.64-15.67-10.33-34.28-26.4-34.28zm-58.65 175.79l-140.1 50.51 50.51-140.11 140.11-50.51-50.52 140.11zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216z"></path>
      </svg>
    ),
  },
  {
    name: 'Tags',
    path: '/tags',
    icon: (
      <svg className={svgStyle} viewBox="0 0 512 512">
        <path d="M497.941 225.941L286.059 14.059A48 48 0 00252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0014.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zm-22.627 45.255L271.196 475.314c-6.243 6.243-16.375 6.253-22.627 0L36.686 263.431A15.895 15.895 0 0132 252.117V48c0-8.822 7.178-16 16-16h204.118c4.274 0 8.292 1.664 11.314 4.686l211.882 211.882c6.238 6.239 6.238 16.39 0 22.628zM144 124c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.972-20 20-20m0-28c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path>
      </svg>
    ),
  },
  {
    name: 'Bookmarks',
    path: '/bookmarks',
    icon: (
      <svg className={svgStyle} viewBox="0 0 384 512">
        <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"></path>
      </svg>
    ),
  },
  {
    name: 'Search',
    path: '/search',
    icon: (
      <svg className={svgStyle} viewBox="0 0 200 200" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M186.804 176.609l-44.092-44.091a4.054 4.054 0 00-2.905-1.197h-3.521c11.724-12.68 18.902-29.599 18.902-48.227C155.188 43.82 123.366 12 84.094 12 44.82 12 13 43.821 13 83.094c0 39.272 31.821 71.094 71.094 71.094 18.628 0 35.547-7.178 48.227-18.868v3.487c0 1.093.445 2.119 1.197 2.905l44.091 44.092a4.107 4.107 0 005.811 0l3.384-3.384a4.107 4.107 0 000-5.811zM84.094 143.25c-33.257 0-60.156-26.899-60.156-60.156s26.899-60.156 60.156-60.156 60.156 26.899 60.156 60.156-26.899 60.156-60.156 60.156z"></path>
        </g>
        <defs>
          <clipPath>
            <path transform="translate(13 12)" d="M0 0h175v175H0z"></path>
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const NavBar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = useCallback(
    () => setShowMenu((showMenu) => !showMenu),
    []
  );

  return (
    <>
      <div className="col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-1">
        <header className="py-2 md:py-5 flex justify-between items-center md:flex-col">
          <div className="flex items-center md:flex-col relative">
            <button
              className="px-2 py-1 rounded-lg hover:bg-brand-grey-200 text-brand-grey-700 dark:text-brand-grey-400 dark:hover:bg-brand-dark-grey-700 md:hidden"
              onClick={handleClick}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                <path d="M442 114H6a6 6 0 01-6-6V84a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6z"></path>
              </svg>
            </button>

            <h1 className="md:mb-8">
              <Link href="/" passHref>
                <a>
                  <svg
                    className="fill-current w-36 md:w-full md:block"
                    viewBox="0 0 688 118"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z"
                      fill="#2962FF"
                    />
                    <path
                      d="M161.437 78.362c.043-8.549 5.268-13.558 12.781-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.819 12.565h-.777V28.276h-17.876v88.429h18.394V78.362zM232.967 117.957c9.801 0 16.148-4.275 19.387-10.449h.518v9.197h17.444V71.972c0-15.803-13.385-22.453-28.152-22.453-15.89 0-26.339 7.6-28.887 19.69l17.013 1.381c1.252-4.404 5.181-7.642 11.787-7.642 6.261 0 9.845 3.152 9.845 8.592v.26c0 4.274-4.534 4.835-16.062 5.958-13.127 1.209-24.914 5.613-24.914 20.423 0 13.126 9.369 19.776 22.021 19.776zm5.267-12.695c-5.656 0-9.715-2.633-9.715-7.685 0-5.182 4.275-7.73 10.752-8.636 4.015-.561 10.578-1.511 12.78-2.98V93c0 6.951-5.742 12.262-13.817 12.262zM334.904 69.295c-1.64-12.22-11.485-19.776-28.238-19.776-16.969 0-28.152 7.859-28.109 20.64-.043 9.93 6.218 16.364 19.171 18.955l11.485 2.288c5.786 1.166 8.42 3.282 8.506 6.606-.086 3.93-4.361 6.736-10.794 6.736-6.563 0-10.924-2.806-12.047-8.204l-18.091.95c1.727 12.695 12.521 20.51 30.095 20.51 17.185 0 29.49-8.765 29.534-21.848-.044-9.586-6.304-15.329-19.171-17.962l-12.004-2.418c-6.175-1.339-8.463-3.455-8.42-6.65-.043-3.972 4.448-6.563 10.147-6.563 6.39 0 10.19 3.498 11.097 7.772l16.839-1.036zM361.529 78.362c.043-8.549 5.267-13.558 12.78-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.818 12.565h-.778V28.276h-17.875v88.429h18.394V78.362zM432.54 78.362c.043-8.549 5.138-13.558 12.565-13.558 7.383 0 11.831 4.836 11.787 12.954v38.947h18.394V74.476c0-15.457-9.067-24.957-22.884-24.957-9.845 0-16.969 4.836-19.948 12.565h-.778V50.383h-17.53v66.322h18.394V78.362zM514.885 118c20.122 0 32.643-13.774 32.643-34.197 0-20.553-12.521-34.284-32.643-34.284-20.121 0-32.642 13.731-32.642 34.284 0 20.423 12.521 34.197 32.642 34.197zm.087-14.249c-9.283 0-14.033-8.506-14.033-20.078s4.75-20.12 14.033-20.12c9.11 0 13.86 8.549 13.86 20.12 0 11.572-4.75 20.078-13.86 20.078zM579.064 117.784c10.708 0 16.278-6.174 18.826-11.701h.777v10.622h18.135v-88.43h-18.351v33.248h-.561c-2.462-5.397-7.773-12.004-18.869-12.004-14.551 0-26.857 11.313-26.857 34.111 0 22.194 11.788 34.154 26.9 34.154zm5.829-14.637c-9.024 0-13.947-8.032-13.947-19.603 0-11.486 4.836-19.387 13.947-19.387 8.938 0 13.947 7.556 13.947 19.387 0 11.83-5.096 19.603-13.947 19.603zM657.286 118c16.408 0 27.461-7.988 30.052-20.294l-17.012-1.122c-1.857 5.051-6.606 7.685-12.738 7.685-9.197 0-15.026-6.088-15.026-15.976v-.043h45.165v-5.052c0-22.539-13.645-33.679-31.175-33.679-19.517 0-32.168 13.86-32.168 34.327 0 21.028 12.479 34.154 32.902 34.154zm-14.724-41.149c.389-7.556 6.132-13.601 14.292-13.601 7.988 0 13.515 5.7 13.558 13.601h-27.85z"
                      fill="#333333"
                    />
                  </svg>
                </a>
              </Link>
            </h1>

            <div
              className={`fixed w-full top-0 left-0 md:block md:relative mt-16 md:mt-auto ${
                showMenu ? 'block' : 'hidden'
              }`}
            >
              <nav className="absolute left-2 md:left-0 flex flex-col p-5 md:p-0 border rounded-xl bg-white md:bg-transparent shadow-xl md:shadow-none md:relative md:border-none w-2/3 md:w-auto">
                {/* Write button */}
                <div className="mb-3 px-1">
                  <Link href="/" passHref>
                    <a className="bg-brand-blue uppercase text-white py-3 px-4 rounded-lg font-semibold tracking-wide shadow hover:bg-opacity-75 hover:shadow-none flex justify-center items-center">
                      <svg
                        className="w-6 h-6 mr-3 fill-current"
                        viewBox="0 0 512 512"
                      >
                        <path d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zM164.686 347.313c6.249 6.249 16.379 6.248 22.627 0L368 166.627l30.059 30.059L174 420.745V386h-48v-48H91.255l224.059-224.059L345.373 144 164.686 324.687c-6.249 6.248-6.249 16.378 0 22.626zm-38.539 121.285l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path>
                      </svg>
                      <span>Write</span>
                    </a>
                  </Link>
                </div>

                <RuaDivder />
                {/* menu one */}
                {meunOne.map((item) => (
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
            </div>
          </div>

          <div className="">Here is avatar.</div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
