'use client';
import React, { useState } from 'react';
import Title from '@/app/components/Common/Title';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

const ContactSection = (props: any) => {
  const t = useTranslations('contacts');
  const [mailSending, setMailSendig] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [mailSentError, setMailSentError] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data: any) => {
    if (!mailSending) {
      setMailSendig(true);
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      setMailSendig(false);

      if (!response.ok) {
        setMailSentError(result.message);
      } else {
        reset();
        setMailSent(true);
        setMailSentError(null);
      }
    }
  };

  return (
    <div className='pt-10'>
      <div className='flex w-full items-center'>
        <Title title={t('title')} subtitle={t('subtitle')} />
      </div>
      <div className='grid w-full grid-cols-1 items-center justify-center p-8'>
        {mailSent && (
          <div className='text-l text-center text-green-500'>
            {t('message-sent')}
          </div>
        )}
        <div className='flex justify-center'>
          <form
            className='w-full max-w-3xl'
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className='body-font relative w-full px-5 text-gray-600'>
              <div className='-m-2 flex flex-wrap '>
                <div className='w-1/2 p-2'>
                  <div className='relative'>
                    <label
                      htmlFor='name'
                      className='text-lg leading-7 text-gray-600'
                    >
                      {t('name')}
                    </label>
                    <input
                      id='name'
                      className='w-full appearance-none rounded border-2 border-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                      {...register('name', { required: true })}
                    />
                    {errors.name && (
                      <p className='text-lg font-bold text-red-600'>
                        {t('name-error')}
                      </p>
                    )}
                  </div>
                </div>
                <div className='w-1/2 p-2'>
                  <div className='relative'>
                    <label
                      htmlFor='email'
                      className='text-lg leading-7 text-gray-600'
                    >
                      {t('email')}
                    </label>
                    <input
                      id='email'
                      className='w-full appearance-none rounded border-2 border-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <p className='text-lg font-bold text-red-600'>
                        {t('email-error')}
                      </p>
                    )}
                  </div>
                </div>
                <div className='w-full p-2'>
                  <div className='relative'>
                    <label
                      htmlFor='message'
                      className='text-lg leading-7 text-gray-600'
                    >
                      {t('message')}
                    </label>
                    <textarea
                      id='message'
                      className='h-32 w-full resize-none appearance-none rounded border-2 border-gray-200 px-4 py-2 text-base leading-tight text-gray-700 outline-none focus:border-purple-500 focus:bg-white focus:outline-none'
                      {...register('message', { required: true })}
                    ></textarea>
                    {errors.message && (
                      <p className='text-lg font-bold text-red-600'>
                        {t('message-error')}
                      </p>
                    )}
                  </div>
                </div>
                <div className='w-full p-2'>
                  {!mailSending && (
                    <button
                      className='focus:shadow-outline mx-auto flex rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
                      type='submit'
                    >
                      {t('send-message')}
                    </button>
                  )}
                </div>
                {mailSentError && (
                  <p className='font-bold text-red-600'>
                    {t('message-not-send')}: {mailSentError}
                  </p>
                )}
                <div className='mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center'>
                  <a className='text-xl text-indigo-500'>alexis@staaack.io</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
