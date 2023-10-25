import ServiceCard from "@/app/_components/card/ServiceCard";
import React from "react";

const ServiceSection = () => {
    return <section className="md:p-8 bg-gradient-primary">
        <div className="text-center font-bold text-3xl text-black p-10">
            Services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:m-10 gap-10 justify-items-center">
            <ServiceCard icon="/img/develop.svg" serviceName="Developement">
                <span className="font-semibold">Java/Spring/JEE</span>: Crafting robust and scalable solutions tailored to your specific needs.
                <br /><br />
                <span className="font-semibold">HTML/CSS/JS/React</span>: Designing modern, responsive user interfaces for an optimal user experience.
            </ServiceCard>
            <ServiceCard icon="/img/architecture.svg" serviceName="Architecture">
                <span className="font-semibold">Implementing personalized solutions</span> to efficiently integrate technology into <span className="font-semibold">your information system</span>.
                <br /><br />
                Definition and <span className="font-semibold">design of optimal architectures for Java/Spring applications</span>, ensuring performance and scalability.
            </ServiceCard>
            <ServiceCard icon="/img/cloud.svg" serviceName="Cloud">
                <span className="font-semibold">Cloud</span> Deployment: <span className="font-semibold">Maximizing your business's flexibility</span> and scalability with our tailored cloud solutions.
                <br /><br />
                <span className="font-semibold">Migration</span>: Smoothly transition your systems to the cloud, <span className="font-semibold">minimizing disruptions and costs</span>.
            </ServiceCard>
            <ServiceCard icon="/img/devops.svg" serviceName="Dev(Sec)Ops">
                <span className="font-semibold">Automate</span> your workflows with advanced <span className="font-semibold">DevOps solutions</span> for quick and reliable application and infrastructure deployment.
            </ServiceCard>
            <ServiceCard icon="/img/training.svg" serviceName="Training">
                <span className="font-semibold">Comprehensive training on current technologies</span> adapted to your needs.
                <br /><br />
                Specialization in <span className="font-semibold">Java development, CI/CD methodologies, DevOps, best practices and more</span>.
            </ServiceCard>
            <ServiceCard icon="/img/advisor.svg" serviceName="Advisory">
                Proposing <span className="font-semibold">innovative</span> technological <span className="font-semibold">solutions</span> to address your challenges.
                <br /><br />
                Impact analysis and <span className="font-semibold">strategic recommendations</span> to align technology with your <span className="font-semibold">business goals</span>.
            </ServiceCard>
        </div>
    </section>;
}

export default ServiceSection;