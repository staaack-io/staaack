import Image from "next/image";

const Footer = (props: any) => {
    return <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <Image src="/img/logo.svg" alt="logo" width={70} height={70}
                       className="w-14 h-14 text-white p-2"></Image>
                <span className="ml-3 text-xl">staaack S.A.R.L-S</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                2023 staaack —
                Alexis Détrie <br/>
                20 rue de Hollerich<br/>
                L-1740 Luxembourg<br/>
            </p>

        </div>
    </footer>;
}

export default Footer;