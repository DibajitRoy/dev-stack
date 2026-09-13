import { type Dispatch, type SetStateAction } from "react";
import type { Itechnology } from "../../types/technology";
import TechCard from "./TechCard";

interface IAvailableTechProps {
  technologies: Itechnology[];
  stack: Itechnology[];
  setStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const AvailableTech = ({ technologies, stack, setStack }: IAvailableTechProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech: Itechnology, ind: number) => {
        return (
          <TechCard key={ind} tech={tech} stack={stack} setStack={setStack} />
        );
      })}
    </div>
  );
};

export default AvailableTech;