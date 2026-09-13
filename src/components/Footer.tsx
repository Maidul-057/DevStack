import logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8">

                <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr] my-20">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="Logo"/>
                        </div>

                        <p className="mt-3 max-w-sm text-[12px] font-normal leading-4 text-gray-500">
                          Curated tools, technologies, and resources for developers building
                          modern software.
                        </p>

                        <div className="mt-4 flex items-center gap-3 text-[12px] font-bold text-gray-600">
    <a href="#" className="hover:text-pink-600">
        GitHub
    </a>

    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 md:hidden"></span>

    <a href="#" className="hover:text-pink-600">
        Twitter
    </a>

    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 md:hidden"></span>

    <a href="#" className="hover:text-pink-600">
        LinkedIn
    </a>
</div>
                    </div>

                    {/* Product */}
                    <div className='hidden md:block'>
                        <h3 className="text-[12px] font-bold uppercase text-gray-900">
                            Product
                        </h3>

                        <div className="mt-3 flex flex-col gap-2 text-[12px] font-normal text-gray-500">
                            <a href="#" className="hover:text-pink-600">
                                Home
                            </a>

                            <a href="#" className="hover:text-pink-600">
                                Technologies
                            </a>

                            <a href="#" className="hover:text-pink-600">
                                Projects
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div className='hidden md:block'>
                        <h3 className="text-[12px] font-bold uppercase text-gray-900">
                            Company
                        </h3>

                        <div className="mt-3 flex flex-col gap-2 text-[12px] font-normal text-gray-500">
                            <a href="#" className="hover:text-pink-600">
                                About
                            </a>

                            <a href="#" className="hover:text-pink-600">
                                Contact
                            </a>

                            <a href="#" className="hover:text-pink-600">
                                Careers
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className='hidden md:block'>
                        <h3 className="text-[12px] font-bold uppercase text-gray-900">
                            Legal
                        </h3>

                        <div className="mt-3 flex flex-col gap-2 text-[12px] font-normal text-gray-500">
                            <a href="#" className="hover:text-pink-600">
                                Privacy Policy
                            </a>

                            <a href="#" className="hover:text-pink-600">
                                Terms of Service
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between border border-gray-100 px-2 py-4 text-[12px] font-normal text-gray-400">
                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="hover:text-pink-600">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-pink-600">
                            Terms
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;