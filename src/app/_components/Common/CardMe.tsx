import Image from "next/image";
import React from "react";

const CardMe = (props: any) => {
    return <div className={props.className +
        " bg-white rounded-3xl p-4" +
        " flex flex-col items-center justify-center" +
        " h-[360px] w-full sm:h-[530px] md:h-[450px] lg:h-[400px] xl:min-h-[380px]" +
        "  hover:drop-shadow-lg hover:transform-gpu duration-500"
    }>
        <div className="flex flex-col gap-2 rounded-3xl w-full h-full overflow-x-auto">
            <Image src="/img/emoj.gif" alt="" height={200} width={200} className=""/>
            <p className="">
                Bonjour ! Je suis Alexis, freelance en développement et architecture logicielle,
                basé au Luxembourg. Fort de plus d&#8217;une décennie d&#8217;expérience, j&#8217;ai passé 6 ans en tant qu&#8217;architecte de
                solutions informatiques et 7 ans en tant que développeur.
                Je me spécialise dans les missions de développement fullstack et d&#8217;architecture. Parallèlement,
                je suis également disponible pour offrir des conseils en DevOps et pour dispenser des formations en développement.
                Pour toute collaboration ou question, je vous invite à prendre rendez-vous via SimplyBook ou me contacter
                via le formulaire de contact.
            </p>
        </div>
    </div>
}

export default CardMe;