import { useData } from "../hooks/useData";

export default function Home() {
  const { data: recipes } = useData("recipes");

  return (
    <section className="mx-auto w-full max-w-screen-xl px-5">
      <div>
        <h2 className="mb-5 text-2xl font-bold">Retseptlar</h2>
        {recipes
          ? recipes.map((e) => {
              return <mark>{e.title}</mark>;
            })
          : "Loading..."}
      </div>
    </section>
  );
}
