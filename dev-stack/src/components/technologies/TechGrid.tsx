import { use, type Dispatch, type SetStateAction } from "react";
import type { Itechnology } from "../../types/technology";
import AvailableTech from "./AvailableTech";
import YourStack from "./YourStack";

interface ITechGridProps {
  technologiesPromise: Promise<Itechnology[]>;
  stack: Itechnology[];
  setStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const TechGrid = ({ technologiesPromise, stack, setStack }: ITechGridProps) => {
  const technologies = use(technologiesPromise);
  
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-1">
        Explore the <span className="text-pink-600">Technologies</span>
      </h2>
      <p className="text-base-content/60 mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="lg:col-span-3">
          <AvailableTech technologies={technologies} stack={stack} setStack={setStack} />
        </div>

        <YourStack stack={stack} setStack={setStack} />
      </div>
    </div>
  );
};

export default TechGrid;