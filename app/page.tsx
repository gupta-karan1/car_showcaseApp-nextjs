"use client";
import { Hero } from "@/components";
import { SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps } from "@/types";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  //   {
  //   searchParams,
  // }: {
  //   searchParams: FilterProps;
  // }
  // const allCars = await fetchCars({
  //   manufacturer: searchParams?.manufacturer || "",
  //   model: searchParams?.model || "",
  //   fuel: searchParams?.fuel || "",
  //   year: searchParams?.year || 2022,
  //   limit: searchParams?.limit || 8,
  // });
  // console.log(allCars);

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // Pagination states
  const [limit, setLimit] = useState(8);

  const getAllCars = async () => {
    // setLoading(true);
    // const allCars = await fetchCars({
    //   manufacturer: manufacturer || "",
    //   model: model || "",
    //   fuel: fuel || "",
    //   year: year || 2022,
    //   limit: limit || 8,
    // });

    // setAllCars(allCars);
    // setLoading(false);

    setLoading(true);
    try {
      const allCars = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        fuel: fuel || "",
        year: year || 2022,
        limit: limit || 8,
      });
      setAllCars(allCars);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCars();
    // console.log(allCars);
  }, [fuel, year, limit, manufacturer, model]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore our range of cars for all occasions.</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {loading && (
          <div className="mt-16 w-full flex-center">
            <Image
              src="/logo.svg"
              alt="loading"
              width={50}
              height={50}
              className="mx-auto object-contain"
            />
          </div>
        )}

        {allCars.length > 0 && !loading && (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={limit / 8}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        )}

        {allCars.length === 0 && !loading && (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
