import {motion, useTransform, useScroll} from "framer-motion";
import React, {useRef} from "react";
import ServiceCard from "@/app/_components/Services/ServiceCard";
import Title from "@/app/_components/Common/Title";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

    return (
        <section ref={targetRef} className="h-[225vh]">
            <div className="sticky top-0 flex flex-col h-screen items-start overflow-hidden">
                <div className="flex items-center mb-10 w-full">
                    <Title title="Services" subtitle="I provide a range of cross-functional services to your IT landscape." />
                </div>
                <motion.div style={{x}} className=" flex gap-6">
                    <div className="w-20"></div>
                    <ServiceCard icon="/img/develop.svg" serviceName="Developement">
                        <span className="font-semibold">Java/Spring/JEE</span>: Crafting robust and scalable solutions
                        tailored
                        to your specific needs.
                        <br/><br/>
                        <span className="font-semibold">HTML/CSS/JS/React</span>: Designing modern, responsive user
                        interfaces
                        for an optimal user experience.
                    </ServiceCard>
                    <ServiceCard icon="/img/architecture.svg" serviceName="Architecture">
                        <span className="font-semibold">Implementing personalized solutions</span> to efficiently
                        integrate
                        technology into <span className="font-semibold">your information system</span>.
                        <br/><br/>
                        Definition and <span className="font-semibold">design of optimal architectures for Java/Spring applications</span>,
                        ensuring performance and scalability.
                    </ServiceCard>
                    <ServiceCard icon="/img/cloud.svg" serviceName="Cloud">
                        <span className="font-semibold">Cloud</span> Deployment: <span className="font-semibold">Maximizing your business flexibility</span> and
                        scalability with our tailored cloud solutions.
                        <br/><br/>
                        <span className="font-semibold">Migration</span>: Smoothly transition your systems to the
                        cloud, <span
                        className="font-semibold">minimizing disruptions and costs</span>.
                    </ServiceCard>
                    <ServiceCard icon="/img/devops.svg" serviceName="Dev(Sec)Ops">
                        <span className="font-semibold">Automate</span> your workflows with advanced <span
                        className="font-semibold">DevOps solutions</span> for quick and reliable application and
                        infrastructure
                        deployment.
                    </ServiceCard>
                    <ServiceCard icon="/img/training.svg" serviceName="Training">
                        <span className="font-semibold">Comprehensive training on current technologies</span> adapted to
                        your
                        needs.
                        <br/><br/>
                        Specialization in <span className="font-semibold">Java development, CI/CD methodologies, DevOps, best practices and more</span>.
                    </ServiceCard>
                    <ServiceCard icon="/img/advisor.svg" serviceName="Advisory">
                        Proposing <span className="font-semibold">innovative</span> technological <span
                        className="font-semibold">solutions</span> to address your challenges.
                        <br/><br/>
                        Impact analysis and <span className="font-semibold">strategic recommendations</span> to align
                        technology
                        with your <span className="font-semibold">business goals</span>.
                    </ServiceCard>
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScrollCarousel;
