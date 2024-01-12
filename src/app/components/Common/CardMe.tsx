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
            <p className="p-3">
                Bonjour ! Je suis Alexis, <b>freelance en développement et architecture logicielle</b>, basé au
                Luxembourg.
                <br/><br/>
                Fort de plus d&#8217;une décennie d&#8217;expérience, j&#8217;ai passé <b>6 ans en tant
                qu&#8217;architecte de
                solutions informatiques et 7 ans en tant que développeur.</b> <br/>
                Je me spécialise dans les missions de développement fullstack et d&#8217;architecture. Parallèlement,
                je suis également disponible pour offrir des conseils en <b>DevOps</b> et pour <b>dispenser des
                formations</b> en développement.
                <br/><br/>
                Pour toute collaboration ou question, je vous invite à prendre rendez-vous via <a
                href="https://meetings-eu1.hubspot.com/alexis-detrie" target="_blank"> HubSpot</a> ou me contacter
                via <a href="/#contacts">le formulaire de contact</a>.
            </p>
        </div>
    </div>
}

export default CardMe;