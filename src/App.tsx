import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import type { Technologies } from "./types/technoTypes";
import { Suspense, use, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./components/technologyCard";
import YourStack from "./components/YourStack";

const technologiesPromiesFetch = async (): Promise<Technologies[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
};
const technoPromise = technologiesPromiesFetch();
const TechnologySection = () => {

    const technologies = use(technoPromise);

    const [stack, setStack] = useState<Technologies[]>([]);

    const handleAddToStack = (technology: Technologies) => {

        const alreadyAdded = stack.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            toast.warning(
                `${technology.name} is already in your stack.`
            );
            return;
        }

        setStack([...stack, technology]);

        toast.success(
            `${technology.name} added to your stack.`
        );
    };

    const handleRemove = (id: string) => {

        const removedTechnology = stack.find(
            (technology) => technology.id === id
        );

        setStack(
            stack.filter(
                (technology) => technology.id !== id
            )
        );

        if (removedTechnology) {
            toast.info(
                `${removedTechnology.name} removed from your stack.`
            );
        }
    };

    const handleRemoveAll = () => {

        setStack([]);

        toast.info("All technologies removed from your stack.");
    };

    return (
        <section className="mx-auto max-w-7xl px-4 py-10">

          <div className='max-w-7xl mx-auto my-8'>
            <h1 className='max-w-7xl mx-auto text-4xl font-bold my-2 '>Explore the <span className="text-pink-600">Technologies</span></h1>
            <p className='text-gray-400'>Pick one technology per category to buid your ideal stack.</p>
        </div>

            <div className="grid items-start gap-6 lg:grid-cols-[1fr_320px]">

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {technologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            isAdded={stack.some(
                                (item) => item.id === technology.id
                            )}
                            onAdd={handleAddToStack}
                        />
                    ))}

                </div>

                <YourStack
                    stack={stack}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                />

            </div>

        </section>
    );
};


function App() {
 

  return (
    <>
     <Nav/>
     <Hero/>
     <Suspense fallback={<div>Loading technologies...</div>}>     
    <TechnologySection/>
      </Suspense>
    </>
  )
}

export default App
