import { Spinner } from "@material-tailwind/react";
import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { setImages } from "../redux/slices/extra-recipes-data-slice";

export default function Images() {
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState([]);

  useLayoutEffect(() => {
    dispatch(setImages(selectedImages));
  }, [selectedImages]);

  const [loadingImages, setLoadingImages] = useState(false);
  function encodeImagesToBase64(images) {
    return new Promise((resolve, reject) => {
      const base64EncodedImages = [];
      let processedImages = 0;

      for (const image of images) {
        const reader = new FileReader();

        reader.readAsDataURL(image);

        reader.onloadend = () => {
          if (reader.readyState === FileReader.DONE) {
            if (reader.error) {
              reject(
                new Error(
                  "Rasmlarni yuklashni iloji bo'lmadi, qayta urunib ko'ring",
                ),
              ); // Handle errors
              return;
            }

            const base64String = reader.result;
            base64EncodedImages.push(base64String);
            processedImages++;

            if (processedImages === images.length) {
              resolve(base64EncodedImages);
            }
          }
        };
      }
    });
  }

  function handleUpload(e) {
    const links = [];
    for (const el of e.target.files) {
      const extension = el.name.split(".").at(-1).toLowerCase();
      links.push(
        new File([el], el.name, {
          type: `image/${extension === "svg" ? "svg+xml" : extension}`,
        }),
      );
    }

    setLoadingImages(true);
    encodeImagesToBase64(links)
      .then((res) => {
        setSelectedImages((prev) => {
          const result = Array.from(new Set([...prev, ...res]));
          if (result.length > 3 && result.length < 9) {
            return result;
          } else {
            toast.info("Minimum 4 ta, maksimum 8 ta rasm yuklay olasiz holos");
            return prev;
          }
        });
        setLoadingImages(false);
      })
      .catch(({ message }) => {
        setLoadingImages(false);
        toast.error(message);
      });
  }

  function handleDelete(url) {
    setSelectedImages((prev) => {
      const result = prev.filter((el) => el !== url);
      if (result.length < 4) {
        toast.info(`Yana ${4 - result.length} ta rasm yuklashingiz kerak`);
      }
      toast.message("Rasm o'chirildi");
      return result;
    });
  }

  return (
    <div className="flex flex-col pb-8 pt-5">
      <input
        onChange={handleUpload}
        id="images"
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/svg+xml"
        multiple
        hidden
      />
      <div className="mb-2">
        <h3 className="text-xl font-semibold">
          Retsept bo'yicha rasmlarni yuklang (
          <i className="font-normal">.png, .jpg, .jpeg, .svg</i>)
        </h3>
        <span className="text-xs italic">
          Yuklangan rasmlarni qayta yuklay olmaysiz. 4-8 tagacha rasm
          yuklasangiz bo'ladi. Bir nechta rasm yuklayotganda Windowsda{" "}
          <code className="bg-blue-500">Ctrl</code>, Macda{" "}
          <code className="bg-blue-500">Option</code> tugmasidan foydalansangiz
          bo'ladi
        </span>
      </div>
      <label
        htmlFor="images"
        className="mb-5 flex w-full max-w-52 cursor-pointer items-center justify-center gap-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
      {selectedImages.length > 0 && !loadingImages ? (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {selectedImages.map((url, index) => {
            return (
              <li
                className="group relative select-none overflow-hidden rounded-xl shadow-xl"
                key={url}
              >
                <div
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-[rgba(0,0,0,0.5)] text-3xl font-bold text-white opacity-0 transition group-hover:opacity-100"
                  onClick={() => handleDelete(url)}
                >
                  <span>X</span>
                </div>
                <img
                  className="h-full w-full object-cover object-center"
                  src={url}
                  alt={`Rasm ${index + 1}`}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <span className="pointer-events-none mr-auto select-none rounded-full border border-blue-gray-600 px-3 text-sm">
          ! Rasmlar mavjud emas
        </span>
      )}
      {loadingImages && (
        <span className="flex justify-center gap-2 pt-10">
          <Spinner /> <span>Rasmlar yuklanmoqda...</span>
        </span>
      )}
    </div>
  );
}
