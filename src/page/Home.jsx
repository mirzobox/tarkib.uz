import { Button, Spinner, Tooltip } from "@material-tailwind/react";
import { useData } from "../hooks/useData";
import NoRecipes from "/public/no-recipes.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RecipeElement } from "../components/RecipeElement";

export default function Home() {
  const navigate = useNavigate();
  const { data: recipes, isLoading } = useData("recipes");
  const { user } = useSelector((state) => state.userSlice);

  function handleRecipes() {
    if (user) {
      navigate("/create-recipes");
    } else {
      const confirmation = confirm(
        "Retsept qo'shish uchun saytdan ro'yhatdan o'tish kerak. Ro'yhatdan o'tasizmi ?",
      );
      if (confirmation) {
        navigate("/login");
      }
    }
  }

  return (
    <section className="mx-auto w-full max-w-screen-xl px-5">
      {recipes?.length ? (
        <h2 className="mb-5 text-2xl font-bold">Retseptlar</h2>
      ) : (
        ""
      )}

      {/* Recipes  */}
      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {recipes?.map(({ id, cookingTime, method, images, title }) => {
          return (
            <li key={id}>
              <RecipeElement
                id={id}
                cookingTime={cookingTime}
                method={method}
                images={images}
                title={title}
                user={null}
              />
            </li>
          );
        })}
      </ul>
      {!recipes && (
        <span className="flex items-center justify-center gap-2 pt-16">
          <Spinner />
          <span>Yuklanmoqda...</span>
        </span>
      )}
      {recipes && recipes.length === 0 && (
        <div className="flex flex-col-reverse items-center pt-10">
          <div className="flex flex-col items-center">
            <h3 className="mb-5 font-medium">Retseptlar mavjud emas</h3>
            <Tooltip content="Retsept yaratish" placement="bottom">
              <Button onClick={handleRecipes}>Retsept yaratish</Button>
            </Tooltip>
          </div>
          <img className="mb-5" src={NoRecipes} alt="Retseptlar mabjud emas" />
        </div>
      )}
    </section>
  );
}

{
  /* <>
  <span className="flex items-center justify-center gap-2 pt-16">
    <Spinner />
    <span>Yuklanmoqda...</span>
  </span>

  <div className="flex flex-col-reverse items-center">
    <div className="flex flex-col items-center">
      <h3 className="mb-5 font-medium">Retseptlar mavjud emas</h3>
      <Tooltip content="Retsept yaratish" placement="bottom">
        <Button onClick={handleRecipes}>Retsept yaratish</Button>
      </Tooltip>
    </div>
    <img className="mb-5" src={NoRecipes} alt="Retseptlar mabjud emas" />
  </div>
</>; */
}
