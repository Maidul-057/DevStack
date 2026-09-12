import type { Technologies } from "../types/technoTypes";

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
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                        Your Stack
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {stack.length} Technology Selected
                    </p>
                </div>

                {stack.length > 0 && (
                    <button
                        onClick={onRemoveAll}
                        className="text-sm font-semibold text-red-500"
                    >
                        Remove All
                    </button>
                )}
            </div>

            {stack.length === 0 ? (
                <div className="mt-6 rounded-xl bg-gray-50 px-5 py-10 text-center">
                    <p className="text-sm font-medium text-gray-600">
                        Your stack is empty.
                    </p>

                    <p className="mt-2 text-xs leading-5 text-gray-400">
                        Add technologies from the list to build your development stack.
                    </p>
                </div>
            ) : (
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

                            <button
                                onClick={() => onRemove(technology.id)}
                                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default YourStack;