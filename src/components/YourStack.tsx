import type { Technologies } from "../types/technoTypes";
import { IoClose } from "react-icons/io5";

type YourStackProps = {
    stack: Technologies[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
};

const YourStack = ({
    stack,
    onRemove,
    onRemoveAll
}: YourStackProps) => {
    return (
        <div className="min-h-[250px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className=" items-center justify-between">
                
                    <h2 className="text-xl font-bold text-gray-900">
                        Your Stack
                    </h2>

                   <p className="mt-1 text-sm text-gray-500 my-4">
                {stack.length === 0 ? "No technology selected yet.":`${stack.length} Technology Selected`}</p>
                     
            </div>

            {stack.length === 0 ? (
                <div className="rounded-xl border-2 border-dashed border-gray-300 p-6 text-center">
                <p className="text-sm font-medium text-gray-500"> Your stack is empty</p>
                 </div>) : (
                <div className="mt-6 space-y-3">
                    {stack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
                        >
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-10 w-10 object-contain"
                            />

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate text-sm font-semibold text-gray-900">
                                    {technology.name}
                                </h3>

                                <p className="text-xs text-gray-500">
                                    {technology.category}
                                </p>
                            </div>

                            <button onClick={() => onRemove(technology.id)}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-red-50">
                            <IoClose className="text-lg" /> </button>
                        </div>
                    ))}
                     {stack.length > 0 && (
                    <button className="mt-3 w-full border rounded-lg px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50/40"
                        onClick={onRemoveAll}
                        
                    >
                        Remove All
                    </button>
                )}
                </div>
            )}

        </div>
    );
};

export default YourStack;