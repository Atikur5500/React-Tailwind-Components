import { useState } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import { RiMenu2Fill } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/dashboard', name: 'Dashboard', id: 'dashboard' },
    ];

    return (
        
        <nav>
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <CgClose></CgClose> : <RiMenu2Fill></RiMenu2Fill>

                }
               
           </div>
            <ul className={`md:flex md:justify-center duration-1000 lg:duration-0 ${ open? 'top-8' : '-top-60 bg-slate-500 text-white p-5 text-xl'}
             absolute md:static px-3`}>
                {
                    routes.map(route => <NavbarItem key={route.id} route={route}></NavbarItem>)
                }
            </ul>
        </nav>
    );
};






export default Navbar;