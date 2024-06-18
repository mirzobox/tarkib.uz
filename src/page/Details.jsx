import { NavLink, useParams } from "react-router-dom";
import { useDataID } from "../hooks/useDataID";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Carousel,
  Spinner,
  IconButton,
  Chip,
  Button,
} from "@material-tailwind/react";
import { useAddData } from "../hooks/useAddData";

export default function Details() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { getRecipeElements } = useDataID();
  const { addNewDoc, isPending: isPendingAdd } = useAddData();
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

  function handleAddLovely() {
    addNewDoc("lovely", detail)
      .then(() => {
        toast.success("Retsept sevimlilarga qo'shildi");
      })
      .catch(() => {
        toast.error("Xatolik yuz berdi, qayta urunib ko'ring");
      });
  }

  return (
    <section className="mx-auto w-full max-w-screen-xl px-5">
      <NavLink
        className="mb-5 inline-block text-blue-gray-500 underline"
        to={"/"}
      >
        Orqaga
      </NavLink>

      <div className="pb-12">
        {!isPending && detail && (
          <div>
            <Carousel
              className="mb-5 h-48 rounded-xl shadow-lg sm:h-64 lg:h-96"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute left-4 top-2/4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute !right-4 top-2/4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
              {detail.images.map((src, index) => {
                return (
                  <img
                    key={index}
                    src={src}
                    alt="Ovaqat rasmi"
                    className="h-full w-full object-cover"
                  />
                );
              })}
            </Carousel>
            <div className="mb-5">
              <div className="flex items-baseline gap-2">
                <h3 className="mb-2 font-bold">Tayyorlanish vaqti:</h3>
                <span>{detail.cookingTime} daqiqa</span>
              </div>
              <h1 className="mb-2 text-xl font-bold">{detail.title}</h1>
              <p className="text-justify">{detail.method}</p>
            </div>
            <h2 className="mb-2 text-base font-bold">Masaliqlar</h2>
            <ul className="mb-5 flex flex-wrap gap-3">
              {detail.ingredients.map(({ ingredient, color }) => {
                return (
                  <li key={ingredient}>
                    <Chip value={ingredient} size="sm" color={color} />
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-end">
              <Button onClick={handleAddLovely} color="red">
                Sevimlilarga qo'shish
              </Button>
            </div>
          </div>
        )}
      </div>

      {isPending && (
        <span className="flex items-center justify-center gap-2 pt-20">
          <Spinner />
          <span>Yuklanmoqda...</span>
        </span>
      )}
    </section>
  );
}
