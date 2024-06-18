import { NavLink, useParams } from "react-router-dom";
import { useDataID } from "../hooks/useDataID";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@material-tailwind/react";

export default function Details() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { getRecipeElements } = useDataID();
  useEffect(() => {
    setIsPending(true);
    getRecipeElements("recipes", id)
      .then((res) => {
        setDetail(res);
        setIsPending(false);
      })
      .catch(() => {
        toast.error("Bunday ma'lumot topilmadi");
        setIsPending(false);
      });
  }, []);

  return (
    <section className="mx-auto w-full max-w-screen-xl px-5">
      <NavLink
        className="mb-5 inline-block text-blue-gray-500 underline"
        to={"/"}
      >
        Orqaga
      </NavLink>

      <div>{!isPending && detail && "Ma'lumot keldi"}</div>

      {isPending && (
        <span className="flex items-center justify-center gap-2 pt-20">
          <Spinner />
          <span>Yuklanmoqda...</span>
        </span>
      )}
    </section>
  );
}
