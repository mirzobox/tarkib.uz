import { Card, CardBody, Spinner } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useData } from "../hooks/useData";
import { useEffect, useState } from "react";

export default function Statistics() {
  const { data } = useData("recipes");
  const [categories, setCategories] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Turkumdagi taomlar soni",
        data: categoriesData,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: true,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 3,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  useEffect(() => {
    if (data) {
      setCategories(() => {
        const categ = [];
        data.map(({ category }) => {
          categ.push(category);
        });
        const resultCategories = Array.from(new Set(categ));
        return resultCategories;
      });
      setCategoriesData(() => {
        const categData = {};
        data.map(({ category }) => {
          categData[category]
            ? (categData[category] += 1)
            : (categData[category] = 1);
        });
        const resultData = Object.values(categData);
        return resultData;
      });
    }
  }, [data]);
  return (
    <section className="mx-auto w-full max-w-screen-xl px-5 py-10">
      <h1 className="mb-5 hidden text-2xl font-bold sm:block">
        Retseptlar statistikasi
      </h1>
      <span className="mb-5 block italic text-red-500 sm:hidden">
        ! Statistikani faqat ekran hajmi 640px da yuqori bo'lgan qurilmalarda
        ko'ra olasiz
      </span>
      {data ? (
        <Card className="hidden sm:block">
          <CardBody className="px-2 pb-0">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
      ) : (
        <span className="flex items-center justify-center gap-2 pt-28">
          <Spinner />
          <span>Yuklanmoqda...</span>
        </span>
      )}
    </section>
  );
}
