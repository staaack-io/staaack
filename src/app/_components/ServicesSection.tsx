import ServiceCard from "@/app/_components/card/ServiceCard";
import React from "react";

const ServiceSection = (props) => {
    return <section {...props}>
        <div className="text-center font-bold text-3xl text-black p-10">
            Services
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <ServiceCard icon="/logo.svg" serviceName="Developement">
                Java/Spring/JEE: Crafting robust and scalable solutions tailored to your specific needs.
                HTML/CSS/JS/React: Designing modern, responsive user interfaces for an optimal user experience.
            </ServiceCard>
            <ServiceCard icon="" serviceName="Architecture">
                Implementing personalized solutions to efficiently integrate technology into your information system.
                Definition and design of optimal architectures for Java/Spring applications, ensuring performance and scalability.
            </ServiceCard>
            <ServiceCard icon="" serviceName="Cloud">
                Cloud Deployment: Maximizing your business's flexibility and scalability with our tailored cloud solutions.
                Migration: Smoothly transition your systems to the cloud, minimizing disruptions and costs.
            </ServiceCard>
            <ServiceCard icon="" serviceName="Training">
                Comprehensive training on current technologies, from the basics of development to the most advanced tools.
                Specialization in Java development, CI/CD methodologies, and more.
            </ServiceCard>
            <ServiceCard icon="" serviceName="Dev(Sec)Ops">
                Automate your workflows with advanced DevOps solutions for quick and reliable application and infrastructure deployment.
            </ServiceCard>
            <ServiceCard icon="" serviceName="Advisory">
                Proposing innovative technological solutions to address your challenges.
                Impact analysis and strategic recommendations to align technology with your business goals.
            </ServiceCard>
        </div>
    </section>;
}

export default ServiceSection;