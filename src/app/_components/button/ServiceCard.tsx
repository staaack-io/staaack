import Link from "next/link";

const ServiceCard = ({icon, serviceName, serviceDescription}) => {
    return <div className="flex backdrop-blur-sm">
        <div>
            <div>{icon}</div>
            <div>{serviceName}</div>
        </div>
        <div>{serviceDescription}</div>
    </div>
}

export default ServiceCard;