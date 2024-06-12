import { Button, Input } from "@material-tailwind/react";
import { getFormData } from "../utils";
import { NavLink } from "react-router-dom";
import useLog from "../hooks/useLog";
import { useEffect, useRef } from "react";

export default function Register() {
  const stylesNo = ["opacity-0", "pointer-events-none"];
  const modal = useRef(null);
  const { signWithDisplayNameAndEmailAndPassword } = useLog();
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    signWithDisplayNameAndEmailAndPassword(data);
  }

  function handleModal(bool) {
    if (bool) {
      modal?.current.classList.remove(...stylesNo);
    } else {
      modal?.current.classList.add(...stylesNo);
    }
  }

  useEffect(() => {
    function handleKey({ key }) {
      if (key === "Escape") {
        modal?.current?.classList.add(...stylesNo);
      }
    }

    document?.body?.addEventListener("keydown", handleKey);

    return document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section className="bg-log relative flex h-full w-full items-center justify-center bg-white px-5">
        <div className="absolute inset-0 -z-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-[2px]"></div>
        <div className="z-50 w-full max-w-96 rounded-md bg-white p-5 shadow-md">
          <h1 className="mb-5 text-center text-xl font-bold">
            Ro'yhatdan o'tish
          </h1>
          <form
            className="mb-5 flex w-full flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <Input color="blue" label="F.I.SH" type="text" name="displayName" />
            <Input
              color="blue"
              label="Email*"
              type="email"
              name="email"
              autoComplete="username"
            />
            <Input
              color="blue"
              label="Maxfiy so'z*"
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <Button ripple type="submit">
              Kirish
            </Button>
            <Button
              className="flex items-center justify-center gap-3"
              variant="outlined"
              color="blue-gray"
              type="submit"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-4 w-4"
              />
              Google
            </Button>
          </form>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-0">
            <span className="text-xs">
              Men ro'yhatdan{" "}
              <NavLink
                className="text-blue-500 underline hover:no-underline"
                to="/login"
              >
                o'tganman
              </NavLink>
            </span>
            <span
              className="cursor-pointer text-xs text-gray-500 underline"
              onClick={handleModal}
            >
              Yo'riqnoma
            </span>
          </div>
        </div>
      </section>

      <div
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300 sm:px-5"
        ref={modal}
        onClick={(e) => e.target === modal.current && handleModal(false)}
      >
        <div className="relative m-4 h-full w-full max-w-full bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl sm:h-min sm:rounded-lg lg:max-w-[40%]">
          <div className="flex shrink-0 items-center p-4 font-sans text-xl font-semibold leading-snug text-blue-gray-900 antialiased">
            Eslatma
          </div>
          <div className="relative border-b border-t border-b-blue-gray-100 border-t-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
            Siz Google orqali ro'yhatdan o'tsangiz, tizimga kirish ham Google
            orqali bo'ladi aks holda bunday foydalanuvchu tizimda mavjud emas
            degan xatolik yuzaga keladi
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
            <button
              className="mr-1 rounded-lg px-6 py-3 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => handleModal(false)}
            >
              Yopish
            </button>
            <button
              className="rounded-lg bg-gradient-to-tr from-green-600 to-green-400 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => handleModal(false)}
            >
              Tushunarli
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
