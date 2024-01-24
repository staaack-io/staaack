import Image from 'next/image';
import React from 'react';

const CardMe = (props: any) => {
  return (
    <div
      className={
        props.className +
        ' rounded-3xl bg-white p-4' +
        ' flex flex-col items-center justify-center' +
        ' h-[360px] w-full sm:h-[530px] md:h-[450px] lg:h-[400px] xl:min-h-[380px]' +
        '  duration-500 hover:transform-gpu hover:drop-shadow-lg'
      }
    >
      <div className='flex h-full w-full flex-col gap-2 overflow-x-auto rounded-3xl'>
        <div className="">
          <video autoPlay muted playsInline className="rounded-full border-2 border-[#29d9ff50] w-36 h-36 ">
            <source src="/video/memoji.mp4" type="video/mp4" />
          </video>
        </div>
        {/*<p className="p-3">*/}
        {/*    Bonjour ! Je suis Alexis, <b>freelance en développement et architecture logicielle</b>, basé au*/}
        {/*    Luxembourg.*/}
        {/*    <br/><br/>*/}
        {/*    Fort de plus d&#8217;une décennie d&#8217;expérience, j&#8217;ai passé <b>5 ans en tant*/}
        {/*    qu&#8217;architecte de*/}
        {/*    solutions informatiques et 7 ans en tant que développeur.</b>*/}
        {/*    <br/>*/}
        {/*    Je me spécialise dans les missions de développement fullstack et d&#8217;architecture. Parallèlement,*/}
        {/*    je suis également disponible pour offrir des conseils en <b>DevOps</b> et pour <b>dispenser des*/}
        {/*    formations</b> en développement.*/}
        {/*    <br/><br/>*/}
        {/*    Pour toute collaboration ou question, je vous invite à prendre rendez-vous via <a*/}
        {/*    href="https://meetings-eu1.hubspot.com/alexis-detrie" target="_blank"> HubSpot</a> ou me contacter*/}
        {/*    via <a href="/#contacts">le formulaire de contact</a>.*/}
        {/*</p>*/}
        <p className='p-3'>
          Hi! I am Alexis, <b>a freelance software developer and architect</b>{' '}
          based in Luxembourg.
          <br />
          <br />
          With over a decade of experience, I have spent{' '}
          <b>5 years as a solution architect and 7 years as a developer</b>.
          <br />I specialize in full-stack development and architecture
          assignments. Additionally, I am also available to provide{' '}
          <b>DevOps consulting</b> and offer <b>development training</b>.
          <br />
          <br />
          For any collaboration or inquiries, I invite you to schedule a meeting
          through{' '}
          <a
            href='https://meetings-eu1.hubspot.com/alexis-detrie'
            className='underline'
            target='_blank'
          >
            HubSpot
          </a>{' '}
          or contact me via{' '}
          <a href='/#contacts' className='underline'>
            the contact form
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default CardMe;
