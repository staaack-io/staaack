'use client';


import { usePathname, useRouter } from '../../../../navigation';
import React, { useState } from 'react';
import Image from 'next/image';

export default function LanguageChanger(props: any) {
  const router = useRouter();
  const pathname = usePathname();
  const mapLangFlag: any = new Map();


  const [name, setName] = useState(props.locale);
  const [previous, setPrevious] = useState(props.locale);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    if (previous !== name) {
      router.push(pathname, { locale: name });
    }
    setChecked(!checked);
  };

  const onClick = (category: any) => {
    setChecked(false);
    setName(category);
    router.push(pathname, { locale: category });
  };

  return (
    <>
      <div className="lg:hidden w-full flex justify-center items-center gap-16">
        <Image
          src="/img/flag-en.svg"
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => onClick('en')}
        ></Image>
        <Image
          src="/img/flag-fr.svg"
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => onClick('fr')}
        ></Image>
      </div>

      <div className="hidden lg:block">
        <div className="dropdown-lang z-30">
          <input
            type="checkbox"
            id="dropdown-lang"
            checked={checked}
            onChange={handleChange}
          />

          <label className="dropdown-lang__face" htmlFor="dropdown-lang">
            <div className="dropdown-lang__text">
              <Image
                src={'/img/flag-' + name + '.svg'}
                alt="logo"
                width={28}
                height={28}
                className=""
              ></Image>
            </div>

            <div className="dropdown-lang__arrow"></div>
          </label>

          <ul className="dropdown-lang__items">
            <li className="p-4 flex justify-center" onClick={() => onClick('en')}>
              <Image
                src="/img/flag-en.svg"
                alt="logo"
                width={50}
                height={50}
                className=""
              ></Image>
            </li>
            <li className="p-4 flex justify-center" onClick={() => onClick('fr')}>
              <Image
                src="/img/flag-fr.svg"
                alt="logo"
                width={50}
                height={50}
                className=""
              ></Image>
            </li>
          </ul>
        </div>

        <svg>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>
      </div>
    </>

  )
    ;
}