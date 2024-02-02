import Card1x1 from '@/app/components/Common/Card1x1';
import CardAI from '@/app/components/Common/CardAI';
import CardMe from '@/app/components/Common/CardMe';
import CardMap from '@/app/components/Common/CardMap';
import CardTechnologies from '@/app/components/Common/CardTechnologies';
import CardSchedule from '@/app/components/Common/CardSchedule';
import Image from 'next/image';
import CardResume from '@/app/components/Common/CardResume';
import { motion } from 'framer-motion';
import Card2x1 from '@/app/components/Common/CardImages';
import FlagLuxembourg from '@/app/components/Common/FlagLuxembourg';
import CardSocialNetwork from '@/app/components/Common/CardSocialNetwork';
import CardExperience from '@/app/components/Common/CardExperience';
import { useWindowSize } from '@/hook/useWindowSize';
import { useTranslations } from 'next-intl';

const Layout2AboutMini = (props: any) => {
  const t = useTranslations('home');
  return (
    <>
      <motion.div
        className='grid w-full grid-cols-2 justify-end gap-5 md:grid-cols-3 2xl:grid-cols-4'
        initial={container.hidden}
        animate={container.visible}
      >
        <motion.div className=''>
          <CardSchedule locale={props.locale} />
        </motion.div>
        <motion.div className=''>
          <CardResume locale={props.locale} />
        </motion.div>
        <motion.div className='col-span-2' initial='hidden' animate='visible'>
          <CardMap locale={props.locale}/>
        </motion.div>
        <motion.div className=''>
          <FlagLuxembourg></FlagLuxembourg>
        </motion.div>
        <motion.div className=''>
          <CardExperience locale={props.locale}/>
        </motion.div>
        <motion.div className='col-span-2'>
          <Card2x1 />
        </motion.div>
        <motion.div className=''>
          <CardTechnologies />
        </motion.div>
        <motion.div className='group relative'>
          <div className='absolute z-30 flex aspect-square h-full w-full items-center justify-center rounded-3xl bg-black bg-opacity-0 transition group-hover:bg-opacity-30 sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]'>
            <span className='m-2 rounded-full bg-white bg-opacity-0 p-2 text-center opacity-0 group-hover:bg-opacity-100 group-hover:opacity-100'>
              {t('bot.na')}
            </span>
          </div>
          <CardAI className='absolute aspect-square w-full border-2 border-[#FEAE07] sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]'
            locale={props.locale}
          />
        </motion.div>
        <motion.div className=''>
          <Card1x1 className=' border-2 border-[#6711C5]'>
            <Image
              src={'/img/logo.png'}
              alt={'Logo staaack'}
              height={45}
              width={45}
              className=''
            ></Image>
          </Card1x1>
        </motion.div>
        <motion.div className=''>
          <CardSocialNetwork />
        </motion.div>
        <motion.div
          className='col-span-2 row-span-2'
          initial='hidden'
          animate='visible'
        >
          <CardMe locale={props.locale}/>
        </motion.div>
      </motion.div>
    </>
  );
};
const Layout3AboutMini = (props: any) => {
  const t = useTranslations('home');
  return (
    <>
      <motion.div
        className='grid w-full grid-cols-2 justify-end gap-5 md:grid-cols-3 2xl:grid-cols-4'
        initial={container.hidden}
        animate={container.visible}
      >
        <motion.div className=''>
          <CardSchedule locale={props.locale} />
        </motion.div>
        <motion.div className='col-span-2' initial='hidden' animate='visible'>
          <CardMap />
        </motion.div>
        <motion.div className='col-span-2'>
          <Card2x1 />
        </motion.div>
        <motion.div className=''>
          <CardResume locale={props.locale} />
        </motion.div>
        <motion.div className=''>
          <FlagLuxembourg></FlagLuxembourg>
        </motion.div>
        <motion.div className=''>
          <CardTechnologies></CardTechnologies>
        </motion.div>
        <motion.div className='group relative'>
          <div className='absolute z-30 flex aspect-square h-full w-full items-center justify-center rounded-3xl bg-black bg-opacity-0 transition group-hover:bg-opacity-30 sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]'>
            <span className='m-2 rounded-full bg-white bg-opacity-0 p-2 text-center opacity-0 group-hover:bg-opacity-100 group-hover:opacity-100'>
              {t('bot.na')}
            </span>
          </div>
          <CardAI className='absolute aspect-square w-full border-2 border-[#FEAE07] sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]'
                  locale={props.locale} />
        </motion.div>
        <motion.div className=''>
          <CardExperience locale={props.locale}/>
        </motion.div>
        <motion.div
          className='col-span-2 row-span-2'
          initial='hidden'
          animate='visible'
        >
          <CardMe locale={props.locale}/>
        </motion.div>
        <motion.div className=''>
          <Card1x1 className=' border-2 border-[#6711C5]'>
            <Image
              src={'/img/logo.png'}
              alt={'Logo staaack'}
              height={45}
              width={45}
              className=''
            ></Image>
          </Card1x1>
        </motion.div>

        <motion.div className='hidden md:order-11 2xl:block'>
          <CardSocialNetwork />
        </motion.div>
      </motion.div>
    </>
  );
};

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    delay: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Layout4AboutMini = (props: any) => {
  const t = useTranslations('home');
  return (
    <motion.div initial='hidden' animate='visible'>
      <motion.div
        className='grid w-full grid-cols-4 justify-end gap-5'
        variants={container}
      >
        <motion.div className='' variants={item}>
          <CardSchedule locale={props.locale} />
        </motion.div>
        <motion.div className='' variants={item}>
          <CardResume locale={props.locale} />
        </motion.div>
        <motion.div className='col-span-2' variants={item}>
          <CardMap />
        </motion.div>
        <motion.div className='' variants={item}>
          <CardSocialNetwork />
        </motion.div>
        <motion.div className='col-span-2 row-span-2' variants={item}>
          <CardMe locale={props.locale}/>
        </motion.div>
        <motion.div className='' variants={item}>
          <FlagLuxembourg></FlagLuxembourg>
        </motion.div>
        <motion.div className='' variants={item}>
          <CardExperience locale={props.locale}/>
        </motion.div>
        <motion.div className='' variants={item}>
          <CardTechnologies></CardTechnologies>
        </motion.div>
        <motion.div className='col-span-2' variants={item}>
          <Card2x1 />
        </motion.div>
        <motion.div className='group relative' variants={item}>
          <div className='absolute z-30 flex aspect-square h-full w-full items-center justify-center rounded-3xl bg-black bg-opacity-0 transition group-hover:bg-opacity-30 sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]'>
            <span className='m-2 rounded-full bg-white bg-opacity-0 p-2 text-center opacity-0 group-hover:bg-opacity-100 group-hover:opacity-100'>
              {t('bot.na')}
            </span>
          </div>
          <CardAI className='absolute aspect-square w-full border-2 border-[#FEAE07] sm:h-[265px] sm:w-[265px] md:h-[215px] md:w-[215px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[190px] 2xl:w-[190px]'
                  locale={props.locale} />
        </motion.div>
        <motion.div className='' variants={item}>
          <Card1x1 className=' border-2 border-[#6711C5]'>
            <Image
              src={'/img/logo.png'}
              alt={'Logo staaack'}
              height={45}
              width={45}
              className=''
            ></Image>
          </Card1x1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
const AboutMiniLayout = (props: any) => {
  const [width, height] = useWindowSize()
  return (
    <>
      {width < 768 &&  <Layout2AboutMini locale={props.locale} />}
      {width >= 768 && width < 1536 &&  <Layout3AboutMini locale={props.locale} />}
      {width >= 1536 &&  <Layout4AboutMini locale={props.locale} />}
    </>
  );
};

export default AboutMiniLayout;
