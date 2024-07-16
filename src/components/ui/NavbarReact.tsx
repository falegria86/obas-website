import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="fixed right-8 top-8 z-20" onClick={() => setShowMenu(prevState => !prevState)}>
            <div className="bg-white/25 rounded-full py-2 px-8 cursor-pointer hover:bg-white text-white hover:text-neutral-950 transition-all">
                <FiMenu size={28} />
            </div>

            {showMenu && (
                <ul className='bg-white absolute right-0 top-12 rounded-md w-48 p-4 space-y-4'>
                    <li className='text-gray-500 hover:text-neutral-950 cursor-pointer'>
                        <a href="#">Inicio</a>
                    </li>
                    <li className='text-gray-500 hover:text-neutral-950 cursor-pointer'>
                        <a href="#">¿Quiénes somos?</a>
                    </li>
                    <li className='text-gray-500 hover:text-neutral-950 cursor-pointer'>
                        <a href="#">Misión</a>
                    </li>
                    <li className='text-gray-500 hover:text-neutral-950 cursor-pointer'>
                        <a href="#">Visión</a>
                    </li>
                    <li className='text-gray-500 hover:text-neutral-950 cursor-pointer'>
                        <a href="#">Mako 54</a>
                    </li>
                    <li className='text-gray-500 hover:text-neutral-950 cursor-pointer'>
                        <a href="#">Revu 519</a>
                    </li>
                </ul>
            )}

        </nav >
    );
};

export default Navbar;
