import { useSelector } from "react-redux";
import NoRecipes from "/public/no-recipes.png";
import { Button, Tooltip } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function MyRecipes() {
  const navigate = useNavigate();
  // const { recipes } = useSelector((state) => state.recipesSlice);
  const { user } = useSelector((state) => state.userSlice);
  const recipes = undefined;

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
    <section className="py-10">
      <div className="mx-auto w-full max-w-screen-xl px-5">
        {recipes ? (
          recipes.map(() => {
            return <li></li>;
          })
        ) : (
          <div className="flex flex-col-reverse items-center">
            <div className="flex flex-col items-center">
              <h3 className="mb-5 font-medium">
                Sizda hali retseptlar mavjud emas
              </h3>
              <Tooltip content="Retsept yaratish" placement="bottom">
                <Button onClick={handleRecipes}>Retsept yaratish</Button>
              </Tooltip>
            </div>
            <img
              className="mb-5"
              src={NoRecipes}
              alt="Retseptlar mabjuda emas"
            />
          </div>
        )}
      </div>
    </section>
  );
}
