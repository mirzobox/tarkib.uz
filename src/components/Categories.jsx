import { Option, Select } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/extra-recipes-data-slice";

export default function Categories() {
  const dispatch = useDispatch();
  function handleChange(e) {
    dispatch(setCategory(e));
  }

  return (
    <>
      <Select color="purple" label="Turkumni tanlang" onChange={handleChange}>
        <h4 className="mb-1 mt-2 pl-2 font-bold text-black">Milliy</h4>
        <Option value="O'zbek taomlari">O'zbek taomlari</Option>
        <Option value="Qozoq taomlari">Qozoq taomlari</Option>
        <Option value="Qirg'iz taomlari">Qirg'iz taomlari</Option>
        <Option value="Tojik taomlari">Tojik taomlari</Option>
        <Option value="Turk taomlari">Turk taomlari</Option>
        <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
          Yevropa
        </h4>
        <Option value="Fransuz taomlari">Fransuz taomlari</Option>
        <Option value="Italyan taomlari">Italyan taomlari</Option>
        <Option value="Ispan taomlari">Ispan taomlari</Option>
        <Option value="Nemis taomlari">Nemis taomlari</Option>
        <Option value="Grek taomlari">Grek taomlari</Option>
        <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
          Osiyo
        </h4>
        <Option value="Xitoy taomlari">Xitoy taomlari</Option>
        <Option value="Yapon taomlari">Yapon taomlari</Option>
        <Option value="Hind taomlari">Hind taomlari</Option>
        <Option value="Tailand taomlari">Tailand taomlari</Option>
        <Option value="Koreya taomlari">Koreya taomlari</Option>
        <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
          Amerika
        </h4>
        <Option value="Shimoliy Amerika taomlari">
          Shimoliy Amerika taomlari
        </Option>
        <Option value="Meksika taomlari">Meksika taomlari</Option>
        <Option value="Braziliya taomlari">Braziliya taomlari</Option>
        <Option value="Argentina taomlari">Argentina taomlari</Option>
        <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
          Yaqin Sharq
        </h4>
        <Option value="Arab taomlari">Arab taomlari</Option>
        <Option value="Turk taomlari">Turk taomlari</Option>
        <Option value="Eron taomlari">Eron taomlari</Option>
        <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
          Afrika
        </h4>
        <Option value="Marokash taomlari">Marokash taomlari</Option>
        <Option value="Efiopiya taomlari">Efiopiya taomlari</Option>
        <Option value="Nigeriya taomlari">Nigeriya taomlari</Option>
        <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
          Tinch Okeani
        </h4>
        <Option value="Avstraliya taomlari">Avstraliya taomlari</Option>
        <Option value="Yangi Zelandiya taomlari">
          Yangi Zelandiya taomlari
        </Option>
        <Option value="Hawai taomlari">Hawai taomlari</Option>
        <h4 className="pointer-events-none mb-1 mt-2 select-none pl-2 font-bold text-black">
          Xalqaro
        </h4>
        <Option value="Fast-fud">Fast-fud</Option>
        <Option value="Vegetarian taomlar">Vegetarian taomlar</Option>
        <Option value="Vegan taomlari">Vegan taomlari</Option>
      </Select>
    </>
  );
}
