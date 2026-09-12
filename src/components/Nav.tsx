import { useState } from 'react';
import logo from '../assets/logo-text.png'


const Nav = () => {

    const [ButtonType, setButtonType]=useState("Sign Up")
    const handleUpdteBtnType = (type:"Sign Up" | "Sign In")=>{ 
        setButtonType(type);
    }
    const [activeNav, setActiveNav] = useState("Home");
    const NavLnk:string[] = ["Home", "Technologies", "Projects", "About", "Contact"]
    return (
        <nav className="sticky top-0 z-50">
        <div  className="flex justify-between items-center max-w-7xl mx-auto my-4">
            <img src={logo} alt = "Logo"/>
            <ul className="flex gap-5 items-center">
    {NavLnk.map((item) => (
        <li
            key={item}
            onClick={() => setActiveNav(item)}
            className={
                activeNav === item
                    ? "text-pink-600 font-semibold cursor-pointer"
                    : "text-black cursor-pointer"
            }
        >
            {item}
        </li>
    ))}
</ul>
            <div className="flex gap-2">
                <button
                onClick={()=>handleUpdteBtnType("Sign In")}
                 className={`btn ${ButtonType === "Sign In"? "btn-SignIn bg-pink-600  text-amber-50":" "} border rounded-full px-6 py-2`}>Sign In</button>
                <button 
                onClick={()=>handleUpdteBtnType("Sign Up")}
                className={`btn ${ButtonType === "Sign Up"? "btn-SignUp  bg-pink-600  text-amber-50":" "} border rounded-full px-6 py-2`}>Sign Up</button>
            </div>
        </div>
        <div className="divider"></div>
        </nav>
        
    );
};

export default Nav;