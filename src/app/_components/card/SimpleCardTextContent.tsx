import Link from "next/link";
import {GiProcessor} from "react-icons/gi";
import {CgWorkAlt} from "react-icons/cg";
import Image from "next/image";

const SimpleCardTextContent = (props) => {
    return <>
        <div className="h-full w-full text-xl">
            <p>
                Bonjour, je suis Alexis, fondateur de staaack créée en 2023 au Luxembourg 🇱🇺,
                Je suis spécialisée dans les prestations de services informatiques,  en développement d'applications Java,
                architecture d'applications et de SI, migration cloud et pratiques DevOps.
                N'hésitez pas à me contacter pour faire connaissance.
            </p>
        </div>
    </>;
}

export default SimpleCardTextContent;