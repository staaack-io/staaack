import ServiceCard from "@/app/_components/Services/ServiceCard";
import React from "react";
import Title from "@/app/_components/Common/Title";

const ServiceSection = () => {
    return <section className="flex flex-col ">
        <Title title="Services"/>
        <div className="p-20 container-overflow w-full">
            <div className="flex gap-16 flex-1 text-wrap">
                <ServiceCard icon="/img/develop.svg" serviceName="Developement">
                    <span className="font-semibold">Java/Spring/JEE</span>: Crafting robust and scalable solutions tailored
                    to your specific needs.
                    <br/><br/>
                    <span className="font-semibold">HTML/CSS/JS/React</span>: Designing modern, responsive user interfaces
                    for an optimal user experience.
                </ServiceCard>
                <ServiceCard icon="/img/architecture.svg" serviceName="Architecture">
                    <span className="font-semibold">Implementing personalized solutions</span> to efficiently integrate
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
            </div>
        </div>
    </section>;
}

export default ServiceSection;