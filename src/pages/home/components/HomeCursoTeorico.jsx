import React from 'react'
import { useTranslation } from 'react-i18next';

const HomeCursoTeorico = () => {


  const { t } = useTranslation ("translation", { keyPrefix: "home" });

  const topics = [
    {
      id: 1,
      text: "home_theory_item_1",
    },
    {
      id: 2,
      text: "home_theory_item_2",
    },
    {
      id: 3,
      text: "home_theory_item_3",
    },
    {
      id: 4,
      text: "home_theory_item_4",
    },
    {
      id: 5,
      text: "home_theory_item_5",
    },
    {
      id: 6,
      text: "home_theory_item_6",
    },
    {
      id: 7,
      text: "home_theory_item_7",
    },
    {
      id: 8,
      text: "home_theory_item_8",
    },
    {
      id: 9,
      text: "home_theory_item_9",
    },
    {
      id: 10,
      text: "home_theory_item_10",
    },
    {
      id: 11,
      text: "home_theory_item_11",
    },
    {
      id: 12,
      text: "home_theory_item_12",
    },
    {
      id: 13,
      text: "home_theory_item_13",
    },
    {
      id: 14,
      text: "home_theory_item_14",
    },
  ];


  return (

    <div className="w-full tablet:w-3/4 m-auto mt-20 bg-White rounded-lg shadow-lg">
      <h2 className="w-full title-sections font-Bold text-Beige bg-DarkBlue py-5 px-2 text-center">
        {t('home_theory_title')}
      </h2>
      <ul className="list-none text-sections py-5 ps-2 space-y-2 text-DarkCharcoal">
        
        {topics.map((topic) => (
          <li 
          key={topic.id}
          className=' py-2'
          >✅{t(topic.text)}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomeCursoTeorico
