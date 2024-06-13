import { Button } from "@material-tailwind/react";

export default function Images() {
  return (
    <div>
      <input id="images" type="file" multiple hidden />
      <label
        htmlFor="images"
        className="flex w-full max-w-52 cursor-pointer items-center justify-center gap-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        <span>Rasm yuklash</span>
      </label>
    </div>
  );
}
