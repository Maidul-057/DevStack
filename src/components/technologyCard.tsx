import type { Technologies } from "../types/technoTypes";
import { IoCheckmark } from "react-icons/io5";

type TechnologyCardProps = {
    technology: Technologies;
    isAdded: boolean;
    onAdd: (technology: Technologies) => void;
};

const TechnologyCard = ({
    technology,
    isAdded,
    onAdd
}: TechnologyCardProps) => {
    return (
        <>
        
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            

            <div className="flex items-start justify-between">
            <img src={technology.icon} alt={technology.name} className="h-12 w-12 object-contain"/>
            <span
    className={`rounded-full px-3 py-1 text-xs font-medium shadow-sm ${
        technology.id === "react"
            ? "bg-cyan-50 text-cyan-600 shadow-cyan-200"
            : technology.id === "nextjs"
            ? "bg-gray-100 text-gray-800 shadow-gray-300"
            : technology.id === "nodejs"
            ? "bg-green-50 text-green-600 shadow-green-200"
            : technology.id === "express"
            ? "bg-gray-100 text-gray-800 shadow-gray-300"
            : technology.id === "mongodb"
            ? "bg-green-50 text-green-600 shadow-green-200"
            : technology.id === "postgresql"
            ? "bg-blue-50 text-blue-600 shadow-blue-200"
            : technology.id === "typescript"
            ? "bg-blue-50 text-blue-600 shadow-blue-200"
            : technology.id === "javascript"
            ? "bg-yellow-50 text-yellow-600 shadow-yellow-200"
            : technology.id === "tailwind"
            ? "bg-cyan-50 text-cyan-600 shadow-cyan-200"
            : technology.id === "docker"
            ? "bg-blue-50 text-blue-600 shadow-blue-200"
            : technology.id === "git"
            ? "bg-orange-50 text-orange-600 shadow-orange-200"
            : technology.id === "github"
            ? "bg-gray-100 text-gray-800 shadow-gray-300"
            : "bg-gray-100 text-gray-700 shadow-gray-200"
    }`}
>
    {technology.badge}
</span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
                {technology.name}
            </h3>

            <p className="mt-2 min-h-20 text-sm leading-6 text-gray-600">
                {technology.description}
            </p>

            <div className="mt-4 flex gap-2">
                <span className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {technology.category}
                </span>

                <span className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {technology.difficulty}
                </span>
                <span className="flex items-center gap-1 text-sm font-semibold">
                    <span className="text-yellow-500">★</span>
                    {technology.rating}
                </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
                

                <button
    onClick={() => onAdd(technology)}
    disabled={isAdded}
    className={`w-full rounded-lg px-4 py-2 text-sm font-semibold ${
        isAdded
            ? "cursor-not-allowed bg-red-50 text-pink-500 font-bold"
            : "bg-black text-white"
               }`}>
        {isAdded ? (
        <span className="flex items-center justify-center gap-1">
        <IoCheckmark className="text-lg" />
            Added to Stack
         </span>) : ("Add to Stack")} </button>
            </div>

        </div>
        </>
       
    );
};

export default TechnologyCard;