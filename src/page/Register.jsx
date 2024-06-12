import { Button, Input } from "@material-tailwind/react";
import { getFormData } from "../utils";
import { NavLink } from "react-router-dom";

export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
  }
  return (
    <section className="flex h-full w-full items-center justify-center bg-white px-5">
      <div className="w-full max-w-96 rounded-md p-5 shadow-md">
        <h1 className="mb-5 text-center text-xl font-bold">
          Ro'yhatdan o'tish
        </h1>
        <form
          className="mb-5 flex w-full flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <Input color="indigo" label="F.I.SH" type="text" name="fullName" />
          <Input color="indigo" label="Email*" type="email" name="email" />
          <Input
            color="indigo"
            label="Maxfiy so'z*"
            type="password"
            name="password"
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
        <span className="text-xs">
          Men ro'yhatdan{" "}
          <NavLink
            className="text-blue-500 underline hover:no-underline"
            to="/login"
          >
            o'tganman
          </NavLink>
        </span>
      </div>
    </section>
  );
}
