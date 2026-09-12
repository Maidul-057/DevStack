import { useState } from 'react';
import banner from '../assets/banner-stack.png'

const Hero = () => {
    const [ButtonType, setButtonType]=useState("Explore Technologies")
        const handleUpdteBtnType = (type:"Explore Technologies" | "Learn More")=>{ 
            setButtonType(type);
        }
    return (
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <div className=''>
            <h1 className='text-6xl font-bold my-5'>Build Your Ideal<br/><span className='gradient-text'>Development Stack</span></h1>
            <p className='my-8'>Explore frontend, backend, database, and tooling options,<br/>
               compare them side by side, and put together the stack that fits your<br/>
               next project.</p>
               <div className='flex gap-4 '>
                <button 
                onClick={()=>handleUpdteBtnType("Explore Technologies")}
                 className={`btn ${ButtonType === "Explore Technologies"? "btn-ExploreTechnologies gradient-bg  text-amber-50":" "} bg-white border rounded-lg px-7 py-0.5`}>Explore Technologies
               </button>
                <button 
                onClick={()=>handleUpdteBtnType("Learn More")}
                 className={`btn ${ButtonType === "Learn More"? "btn-LearnMore gradient-bg  text-amber-50":" "} bg-white border rounded-lg px-11 py-0.5`}>Learn More
               </button>
               </div>
            </div>
            <img src ={banner} alt='hero-image'/>
            
        </div>
    );
};

export default Hero;