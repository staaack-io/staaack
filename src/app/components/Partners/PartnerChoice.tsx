import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const PartnerChoice = (props: { name: any }) => {
  const t = useTranslations('partners');
  const [name, setName] = useState(t('types.all'));
  const [checked, setChecked] = useState(false);

  useEffect(() => {}, []);

  const handleChange = () => {
    setChecked(!checked);
  };

  const onClick = (category: any) => {
    props.name(category);
    setChecked(false);
    setName(category);
  };

  return (
    <div className='z-30 flex w-full items-center justify-center p-8'>
      <div className='dropdown z-30'>
        <input
          type='checkbox'
          id='dropdown'
          checked={checked}
          onChange={handleChange}
        />

        <label className='dropdown__face' htmlFor='dropdown'>
          <div className='dropdown__text'>{name}</div>
          <div className='dropdown__arrow'></div>
        </label>

        <ul className='dropdown__items'>
          <li className='p-5' onClick={() => onClick('All')}>
            {t('types.all')}
          </li>
          <li className='p-5' onClick={() => onClick('Big four')}>
            {t('types.bigfour')}
          </li>
          <li className='p-5' onClick={() => onClick('Administrations')}>
            {t('types.administrations')}
          </li>
          <li className='p-5' onClick={() => onClick('IT services companies')}>
            {t('types.itcompanies')}
          </li>
          <li className='p-5' onClick={() => onClick('Startup')}>
            {t('types.startups')}
          </li>
          <li className='p-5' onClick={() => onClick('Banks')}>
            {t('types.banks')}
          </li>
          <li className='p-5' onClick={() => onClick('Others')}>
            {t('types.others')}
          </li>
        </ul>
      </div>

      <svg>
        <filter id='goo'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
          <feColorMatrix
            in='blur'
            type='matrix'
            values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
            result='goo'
          />
          <feBlend in='SourceGraphic' in2='goo' />
        </filter>
      </svg>
    </div>
  );
};

export default PartnerChoice;
