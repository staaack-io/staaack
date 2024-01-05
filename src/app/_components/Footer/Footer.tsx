import Image from "next/image";

const Footer = (props: any) => {
    return <footer className="bg-gray-100 dark:bg-gray-900 oswald">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0 md:flex md:items-center md:justify-center">
                    <a href="https://staaack.io/" className="flex items-center">
                        <Image src="/img/logo.png" alt="logo" width={40} height={40} className="p-2 mr-2"></Image>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white typo-staaack ">staaack</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div className="mr-2">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Where I am</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="">
                                staaack S.A.R.L. -S
                            </li>
                            <li className="">
                                20 rue de Hollerich
                            </li>
                            <li className="mb-4">
                                L-1740 Luxembourg
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/staaack-io" className="hover:underline ">Github staaack</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/adetrie" className="hover:underline ">Github Alexis</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/detriealexis/" className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="/legal-notice" className="hover:underline">Legal Notice</a>
                            </li>
                            <li className="mb-4">
                                <a href="/licences" className="hover:underline">Licences</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                    href="https://staaack.io/" className="hover:underline">staaack S.A.R.L. -S</a>. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
}

export default Footer;