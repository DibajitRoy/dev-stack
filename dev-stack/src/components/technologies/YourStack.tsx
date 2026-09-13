import { type Dispatch, type SetStateAction } from "react";
import type { Itechnology } from "../../types/technology";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

interface IYourStackProps {
  stack: Itechnology[];
  setStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const YourStack = ({ stack, setStack }: IYourStackProps) => {
  const handleRemove = (tech: Itechnology) => {
    const restStack = stack.filter((item) => item.id !== tech.id);
    setStack(restStack);
    toast.info(`${tech.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack");
  };

  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 shadow-md p-5 sticky top-24">
      <h3 className="font-bold text-lg">Your Stack</h3>

      {stack.length === 0 ? (
        <>
          <p className="text-base-content/50 text-sm mb-4">
            No technologies selected yet.
          </p>
          <div className="border border-dashed border-base-300 rounded-lg py-8 text-center text-base-content/40 text-sm">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="text-base-content/50 text-sm mb-4">
            {stack.length} Technology Selected
          </p>

          <div className="space-y-3 mb-4">
            {stack.map((tech: Itechnology, ind: number) => {
              return (
                <div
                  key={ind}
                  className="flex justify-between items-center border border-base-300 rounded-lg px-3 py-2"
                >
                  <div className="flex items-center gap-3">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                    <div>
                      <p className="font-semibold text-sm">{tech.name}</p>
                      <p className="text-xs text-base-content/50">
                        {tech.category}
                      </p>
                    </div>
                  </div>

                  <span
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                    onClick={() => handleRemove(tech)}
                  >
                    <FaTimes />
                  </span>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleRemoveAll}
            className="btn btn-outline btn-error btn-block"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;