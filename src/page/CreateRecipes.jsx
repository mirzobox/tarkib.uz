import { Input, Select, Option } from "@material-tailwind/react";
import Ingredients from "../components/Ingredients";

import BgMeal from "/public/meal.svg";
import BgMeal2 from "/public/meal-2.svg";
import Images from "../components/Images";

export default function CreateRecipes() {
  function handleSubmit() {}
  return (
    <section className="relative h-full w-full py-3">
      <div className="mx-auto w-full max-w-3xl px-5">
        <h2 className="mb-5 font-bold sm:text-xl lg:text-2xl">
          O'z retseptingizni yarating
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input label="Retsept nomini kiriting" success />
            <Input
              label="Tayyorlanish vaqtini kiriting"
              type="number"
              color="indigo"
              min="3"
              max="3600"
            />
            <Select color="purple" label="Turkumni tanlang">
              <h4 className="mb-1 mt-2 pl-2 font-bold text-black">Milliy</h4>
              <Option>O'zbek taomlari</Option>
              <Option>Qozoq taomlari</Option>
              <Option>Qirg'iz taomlari</Option>
              <Option>Tojik taomlari</Option>
              <Option>Turk taomlari</Option>
              <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
                Yevropa
              </h4>
              <Option>Fransuz taomlari</Option>
              <Option>Italyan taomlari</Option>
              <Option>Ispan taomlari</Option>
              <Option>Nemis taomlari</Option>
              <Option>Grek taomlari</Option>
              <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
                Osiyo
              </h4>
              <Option>Xitoy taomlari</Option>
              <Option>Yapon taomlari</Option>
              <Option>Hind taomlari</Option>
              <Option>Tailand taomlari</Option>
              <Option>Koreya taomlari</Option>
              <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
                Amerika
              </h4>
              <Option>Shimoliy Amerika taomlari</Option>
              <Option>Meksika taomlari</Option>
              <Option>Braziliya taomlari</Option>
              <Option>Argentina taomlari</Option>
              <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
                Yaqin Sharq
              </h4>
              <Option>Arab taomlari</Option>
              <Option>Turk taomlari</Option>
              <Option>Eron taomlari</Option>
              <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
                Afrika
              </h4>
              <Option>Marokash taomlari</Option>
              <Option>Efiopiya taomlari</Option>
              <Option>Nigeriya taomlari</Option>
              <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
                Tinch Okeani
              </h4>
              <Option>Avstraliya taomlari</Option>
              <Option>Yangi Zelandiya taomlari</Option>
              <Option>Hawai taomlari</Option>
              <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
                Xalqaro
              </h4>
              <Option>Fast-fud</Option>
              <Option>Vegetarian taomlar</Option>
              <Option>Vegan taomlari</Option>
            </Select>
            <Ingredients />
            <Images />
          </div>
        </form>
      </div>

      <img
        className="absolute top-10 hidden w-40 lg:block xl:w-60"
        src={BgMeal}
        alt=""
        aria-hidden
      />
      <img
        className="absolute bottom-10 right-0 hidden w-40 lg:block xl:w-60"
        src={BgMeal2}
        alt=""
        aria-hidden
      />
    </section>
  );
}
