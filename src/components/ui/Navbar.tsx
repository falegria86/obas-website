import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            {showMenu && (
                <div
                    className="fixed bg-transparent inset-0 z-10"
                    onClick={() => setShowMenu(false)}
                />
            )}
            <nav
                className="fixed right-4 top-4 lg:right-8 lg:top-8 z-20"
                onClick={() => setShowMenu(prevState => !prevState)}
            >
                <div className="bg-black/25 rounded-full py-2 px-8 cursor-pointer hover:bg-white text-white hover:text-neutral-950 transition-all">
                    <FiMenu size={28} />
                </div>
                {showMenu && (
                    <ul className="bg-white absolute right-0 top-12 rounded-md w-48">
                        <a href="/">
                            <li className="text-gray-500 hover:text-neutral-950 cursor-pointer hover:bg-neutral-100 hover:font-semibold rounded-t-md px-4 py-2">
                                Inicio
                            </li>
                        </a>
                        <a href="/quienes-somos">
                            <li className="text-gray-500 hover:text-neutral-950 cursor-pointer hover:bg-neutral-100 hover:font-semibold px-4 py-2">
                                ¿Quiénes somos?
                            </li>
                        </a>
                        <div className="mt-4">
                            <h6 className="ml-4 text-gray-400">Propiedades</h6>
                            <div className="h-[1px] mt-1 mb-2 bg-gray-200"></div>
                            <a href="/propiedades/mako54">
                                <li className="text-gray-500 hover:text-neutral-950 cursor-pointer hover:bg-neutral-100 hover:font-semibold px-4 py-2">
                                    Mako 54
                                </li>
                            </a>
                            <a href="/propiedades/revu519">
                                <li className="text-gray-500 hover:text-neutral-950 cursor-pointer hover:bg-neutral-100 hover:font-semibold rounded-b-md px-4 py-2">
                                    Revu 519
                                </li>
                            </a>
                            <a href="/propiedades/mako-tepic">
                                <li className="text-gray-500 hover:text-neutral-950 cursor-pointer hover:bg-neutral-100 hover:font-semibold rounded-b-md px-4 py-2">
                                    Mako Tepic
                                </li>
                            </a>
                        </div>
                    </ul>
                )}
            </nav>
        </>
    );
};

export default Navbar;
