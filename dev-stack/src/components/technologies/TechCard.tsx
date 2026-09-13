import { type Dispatch, type SetStateAction } from "react";
import type { Itechnology } from "../../types/technology";
import { FaStar } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

interface ITechCardProps {
  tech: Itechnology;
  stack: Itechnology[];
  setStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const TechCard = ({ tech, stack, setStack }: ITechCardProps) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  let badgeColor = "badge-neutral";
  if (tech.badge === "Popular") badgeColor = "badge-info";
  if (tech.badge === "Trending") badgeColor = "badge-secondary";
  if (tech.badge === "Essential") badgeColor = "badge-primary";
  if (tech.badge === "Top SQL") badgeColor = "badge-accent";

  const handleAddToStack = () => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack`, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`, {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div
      className={`rounded-2xl border-2 bg-base-100 shadow-md p-5 transition-colors ${
        isAdded ? "border-red-500" : "border-base-300"
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <span className={`badge ${badgeColor} badge-outline font-semibold`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold mb-1">{tech.name}</h3>
      <p className="text-sm text-base-content/60 mb-4">{tech.description}</p>

      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="badge badge-ghost">{tech.category}</span>
        <span className="text-base-content/60">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-bold">
          <FaStar className="text-yellow-500" />
          {tech.rating}
        </span>
      </div>

      <button
        onClick={handleAddToStack}
        disabled={isAdded}
        className="btn btn-block bg-black text-white border-none"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;