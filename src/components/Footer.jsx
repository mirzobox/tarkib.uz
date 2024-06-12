import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl px-5">
        <hr className="border-blue-gray-50" />
        <Typography color="blue-gray" className="py-3 text-center">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://tarkib.uz">Tarkib.uz</a>
        </Typography>
      </div>
    </footer>
  );
}
