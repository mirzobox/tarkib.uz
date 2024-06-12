import { Spinner } from "@material-tailwind/react";

export default function Login() {
  return (
    <section className="flex h-full w-full items-center justify-center bg-white px-5">
      <div className="w-full max-w-96 rounded-md p-5 shadow-md">
        <h1 className="mb-5 text-center text-xl font-bold">Kirish</h1>
        <div className="flex w-full flex-col">
          <div className="flex gap-5">
            <Spinner />
            Loading...
          </div>
        </div>
      </div>
    </section>
  );
}
