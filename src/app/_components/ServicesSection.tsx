import ServiceCard from "@/app/_components/card/ServiceCard";

const ServiceSection = (props) => {
    return <section {...props}>
        <div className="h-min-screen grid grid-cols-2 gap-x-3 gap-y-5 justify-items-center">
            <div className="col-span-2 text-2xl">
                Service
            </div>
                <ServiceCard icon="🎈" serviceName="Developement" serviceDescription="Bla bla bla le développement c'est trop bien"/>
                <ServiceCard icon="🎈" serviceName="Developement" serviceDescription="Bla bla bla le développement c'est trop bien"/>
                <ServiceCard icon="🎈" serviceName="Developement" serviceDescription="Bla bla bla le développement c'est trop bien"/>
                <ServiceCard icon="🎈" serviceName="Developement" serviceDescription="Bla bla bla le développement c'est trop bien"/>
            <ServiceCard icon="🎈" serviceName="Developement" serviceDescription="Bla bla bla le développement c'est trop bien"/>
            <ServiceCard icon="🎈" serviceName="Developement" serviceDescription="Bla bla bla le développement c'est trop bien"/>
            <ServiceCard icon="🎈" serviceName="Developement" serviceDescription="Bla bla bla le développement c'est trop bien"/>
            <ServiceCard icon="🎈" serviceName="Developement" serviceDescription="Bla bla bla le développement c'est trop bien"/>
        </div>
    </section>;
}

export default ServiceSection;