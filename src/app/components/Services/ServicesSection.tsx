import ServiceCard from '@/app/components/Services/ServiceCard';
import React from 'react';
import Title from '@/app/components/Common/Title';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop3Xl: {
    breakpoint: { max: 100000, min: 1601 },
    items: 4,
    paritialVisibilityGutter: 60,
  },
  desktop2Xl: {
    breakpoint: { max: 1600, min: 1537 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  desktopXl: {
    breakpoint: { max: 1536, min: 1281 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  desktopL: {
    breakpoint: { max: 1280, min: 1025 },
    items: 2,
    paritialVisibilityGutter: 60,
  },
  desktop: {
    breakpoint: { max: 1024, min: 769 },
    items: 2,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 768, min: 641 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
};
const listServices = [
  {
    serviceName: 'Developement',
    icon: '/img/develop.svg',
    content:
      '<b>Java/Spring/JEE</b>: Crafting robust and scalable solutions' +
      '                        tailored' +
      '                        to your specific needs.' +
      '                        <br/><br/>' +
      '                        <b>HTML/CSS/JS/React</b>: Designing modern, responsive user' +
      '                        interfaces' +
      '                        for an optimal user experience.',
  },
  {
    serviceName: 'Architecture',
    icon: '/img/architecture.svg',
    content:
      '<b>Implementing personalized solutions</b> to efficiently' +
      '                        integrate' +
      '                        technology into your information system.' +
      '                        <br/><br/>' +
      '                        <b>Definition and design</b> of optimal architectures for Java/Spring applications,' +
      '                        ensuring <b>performance</b> and <b>scalability</b>.',
  },
  {
    serviceName: 'Cloud',
    icon: '/img/cloud.svg',
    content:
      '<b>Cloud Deployment</b>: Maximizing your business flexibility and' +
      '                        scalability with our tailored cloud solutions.' +
      '                        <br/><br/>' +
      '                        <b>Migration</b>: Smoothly transition your systems to the' +
      '                        cloud, minimizing disruptions and costs.',
  },
  {
    serviceName: 'Dev(Sec)Ops',
    icon: '/img/devops.svg',
    content:
      '                        Automate your workflows with advanced ' +
      'DevOps solutions for <b>quick and reliable</b> application and' +
      '                        <b>infrastructure' +
      '                        deployment</b>.',
  },
  {
    serviceName: 'Training',
    icon: '/img/training.svg',
    content:
      '<b>Comprehensive training</b> on current technologies adapted to' +
      '                        your' +
      '                        needs.' +
      '                        <br/><br/>' +
      '                        Specialization in <b>Java development, CI/CD methodologies, DevOps, best practices</b> and more.',
  },
  {
    serviceName: 'Advisory',
    icon: '/img/advisor.svg',
    content:
      '<b>Proposing innovative technological solutions</b> to address your challenges.' +
      '                        <br/><br/>' +
      '                        Impact analysis and strategic recommendations to align' +
      '                        technology' +
      '                        with your business goals.',
  },
];
const ServiceSection = () => {
  return (
    <section className='flex w-full flex-col pt-24'>
      <Title
        title='Services'
        subtitle='I provide a range of cross-functional services to your IT landscape.'
      />
      <div className='h-full w-full pl-10 pr-10'>
        <Carousel
          className=''
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={false}
          keyBoardControl={true}
          customTransition='transform 300ms ease-in-out'
          transitionDuration={500}
          itemClass=''
        >
          {listServices.map((service: any, index: any) => {
            // eslint-disable-next-line react/jsx-key
            return (
              <ServiceCard
                key={index}
                icon={service.icon}
                serviceName={service.serviceName}
              >
                {service.content}
              </ServiceCard>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceSection;
