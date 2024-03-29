import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const SkillChoice = (props: { name: any }) => {
  const t = useTranslations('common');
  const [name, setName] = useState(t('all'));
  const [checked, setChecked] = useState(false);

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
      <div className='dropdown-skills z-30'>
        <input
          type='checkbox'
          id='dropdown-skills'
          checked={checked}
          onChange={handleChange}
        />

        <label className='dropdown-skills__face' htmlFor='dropdown-skills'>
          <div className='dropdown-skills__text'>{name}</div>
          <div className='dropdown-skills__arrow'></div>
        </label>

        <ul className='dropdown-skills__items'>
          <li className='p-5' onClick={() => onClick('All')}>
            {t('all')}
          </li>
          <li className='p-5' onClick={() => onClick('Development')}>
            {t('development')}
          </li>
          <li className='p-5' onClick={() => onClick('DevOps')}>
            {t('devops')}
          </li>
          <li className='p-5' onClick={() => onClick('Cloud')}>
            {t('cloud')}
          </li>
          <li className='p-5' onClick={() => onClick('Security')}>
            {t('security')}
          </li>
          <li className='p-5' onClick={() => onClick('Database')}>
            {t('database')}
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

export default SkillChoice;
