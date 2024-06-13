import React from "react";
import { Input, Button, Chip } from "@material-tailwind/react";
import { toast } from "sonner";

const colors = [
  "blue",
  "red",
  "green",
  "amber",
  "pink",
  "indigo",
  "purple",
  "teal",
  "cyan",
  "deep-purple",
  "light-green",
  "light-blue",
  "deep-orange",
  "yellow",
  "orange",
  "blue-gray",
  "brown",
];

export default function Ingredients() {
  const [item, setItem] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const onChange = ({ target }) => setItem(target.value.trim());

  function handleEnter({ key }) {
    key === "Enter" && handleIngredients();
  }

  function handleIngredients() {
    const value = item.toLowerCase();
    if (value.length < 3) {
      toast.info("Masaliq nomi eng kamida 3 ta belgidan iborat bo'lishi kerak");
    } else {
      const yes = ingredients.find((el) => el.ingredient === value);
      if (yes?.ingredient !== value) {
        setIngredients((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            ingredient: value,
            color: colors[Math.trunc(Math.random() * colors.length)],
          },
        ]);
        setItem("");
      } else toast.info(`${value} allaqachon qo'shilgan`);
    }
  }

  function filterIngredients(id) {
    setIngredients((prev) => {
      return prev.filter((item) => item.id !== id);
    });
    const whichElement = ingredients.find((el) => el.id === id);
    toast.message(`${whichElement.ingredient} o'chirildi`);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex w-full">
        <Input
          className="!pr-12"
          type="text"
          label="Masaliqlarni kiriting"
          value={item}
          onChange={onChange}
          onKeyDown={handleEnter}
        />
        <Button
          size="sm"
          color={item.length >= 3 ? "gray" : "blue-gray"}
          onClick={handleIngredients}
          className="!absolute right-1 top-1 rounded"
        >
          +
        </Button>
      </div>
      {ingredients.length > 0 ? (
        <ul className="flex flex-wrap gap-2">
          {ingredients.map(({ ingredient, color, id }) => {
            return (
              <li
                className="item group relative flex overflow-hidden rounded-md"
                key={id}
              >
                <span
                  className="absolute inset-0 z-30 flex cursor-pointer items-center justify-center bg-[rgba(0,0,0,0.6)] text-white opacity-0 transition group-hover:opacity-100"
                  role="button"
                  onClick={() => filterIngredients(id)}
                >
                  x
                </span>
                <Chip
                  className="font-medium"
                  value={ingredient}
                  size="sm"
                  color={color}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <span className="pointer-events-none mr-auto select-none rounded-full border border-blue-gray-600 px-3 text-sm">
          ! Qo'shimchalar mavjud emas
        </span>
      )}
    </div>
  );
}
