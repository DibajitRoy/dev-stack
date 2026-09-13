import React, { type Dispatch, type SetStateAction } from "react";
import type { Itechnology } from "../../types/technology";
import { TbX } from "react-icons/tb";
import { toast } from "react-toastify";

interface IStackItemProps {
  tech: Itechnology;
  stack: Itechnology[];
  setStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const StackItem = ({ tech, stack, setStack }: IStackItemProps) => {
  const handleRemove = () => {
    const restStack = stack.filter((item) => item.id !== tech.id);
    setStack(restStack);
    toast.info(`${tech.name} removed from your stack`);
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-base-300 px-3 py-2">
      <div className="flex items-center gap-3">
        <img src={tech.icon} alt={tech.name} className="h-8 w-8" />
        <div>
          <p className="text-sm font-semibold">{tech.name}</p>
          <p className="text-xs text-base-content/50">{tech.category}</p>
        </div>
      </div>

      <span
        className="cursor-pointer text-base-content/40 hover:text-red-500"
        onClick={handleRemove}
      >
        <TbX />
      </span>
    </div>
  );
};

export default StackItem;