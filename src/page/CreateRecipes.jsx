import { Input, Textarea, Button, Spinner } from "@material-tailwind/react";
import Ingredients from "../components/Ingredients";

import BgMeal from "/public/meal.svg";
import BgMeal2 from "/public/meal-2.svg";
import Images from "../components/Images";
import { useState } from "react";
import { getFormData } from "../utils";
import Categories from "../components/Categories";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export default function CreateRecipes() {
  const { images, ingredients, category } = useSelector(
    (state) => state.extraRecipesDataSlice,
  );
  const [loading, setLoading] = useState(false);
  function handleSubmit(e) {
    let checker = true;
    e.preventDefault();
    const data = getFormData(e.target);
    const finalData = {
      category,
      ingredients,
      images,
      ...data,
    };
    if (finalData.ingredients.length < 4 && finalData.ingredients.length > 9) {
      toast.info("4-8 oralig'idagi rasmlar soniga ruxsat berilgan holos");
      checker = false;
    }
    if (!ingredients.length) {
      toast.info("Eng kamida bitta masaliq qo'shilishi shart");
      checker = false;
    }
    if (category === "") {
      toast.info("Kategoriyani tanlang");
      checker = false;
    }
    checker && console.log(finalData);
  }
  return (
    <section className="relative h-full w-full pb-6 pt-3">
      <div className="mx-auto w-full max-w-3xl px-5">
        <h2 className="mb-5 font-bold sm:text-xl lg:text-2xl">
          O'z retseptingizni yarating
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              label="Retsept nomini kiriting"
              name="recipeName"
              success
              required
            />
            <Input
              label="Tayyorlanish vaqtini kiriting"
              type="number"
              color="indigo"
              min="3"
              max="3600"
              name="cookingTime"
              required
            />

            <Categories />

            <Ingredients />
            <Images />
            <Textarea
              label="Tayyorlanish uslubini yozing"
              name="method"
              maxLength="2000"
              minLength="50"
              required
            />
            <Button
              className="inline-flex justify-center"
              disabled={loading}
              type="submit"
            >
              <span className="mx-auto flex items-center gap-3">
                {loading && <Spinner className="h-4 w-4" />}
                {!loading && <span>Tasdiqlash</span>}
              </span>
            </Button>
          </div>
        </form>
      </div>

      <img
        className="pointer-events-none absolute top-10 hidden w-40 select-none lg:block xl:w-60"
        src={BgMeal}
        alt=""
        aria-hidden
      />
      <img
        className="pointer-events-none absolute bottom-10 right-0 hidden w-40 select-none lg:block xl:w-60"
        src={BgMeal2}
        alt=""
        aria-hidden
      />
    </section>
  );
}
