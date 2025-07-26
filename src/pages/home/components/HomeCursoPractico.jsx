import React from "react";
import { useTranslation } from "react-i18next";

const HomeCursoPractico = () => {

  const { t } = useTranslation ("translation", { keyPrefix: "home" });


  // Array de objetos que representa cada punto de la lista
  const practicalActivities = [
    {
      id: 1,
      text: "home_practice_item_1",
    },
    {
      id: 2,
      text: "home_practice_item_2",
    },
    {
      id: 3,
      text: "home_practice_item_3",
    },
    {
      id: 4,
      text: "home_practice_item_4",
    },
    {
      id: 5,
      text: "home_practice_item_5",
    },
    {
      id: 6,
      text: "home_practice_item_6",
    },
    {
      id: 7,
      text: "home_practice_item_7",
    },
    {
      id: 8,
      text: "home_practice_item_8",
    },
    {
      id: 9,
      text: "home_practice_item_9",
    },
    {
      id: 10,
      text: "home_practice_item_10",
    },
    {
      id: 11,
      text: "home_practice_item_11",
    },
    {
      id: 12,
      text: "home_practice_item_12",
    },
  ];

  return (
      <div className="w-full tablet:w-3/4 m-auto mt-20 bg-White rounded-lg shadow-lg">
        <h2 className="w-full bg-DarkBlue title-sections font-Bold text-Beige py-5 text-center">{t('home_practice_title')}</h2>
        <ul className="list-none text-sections py-5 ps-2 space-y-2 text-DarkCharcoal">
          {/* Mapeamos los objetos del array practicalActivities para crear la lista */}
          {practicalActivities.map((activity) => (
            <li
              key={activity.id}
              className=' py-2'
            >✅{t(activity.text)}</li>
          ))}
        </ul>
      </div>
  );
};

export default HomeCursoPractico;

