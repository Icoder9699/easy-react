import React, { useState } from 'react'

import Categories from '../Categories/Categories'
import meals from "../../assets/meals";
import "./Menu.scss";

// * filtering by ID 
// const [activeItem, setActiveItem] = useState(0)
// const [db, setDb] = useState(meals)

// const getMealByCategory = (categoryId) => {
//     setActiveItem(categoryId)
//     if(categoryId === 0){
//         return setDb(meals)
//     }
//     const newMeals = meals.filter(meal => meal.category === categories[categoryId]);
//     setDb(newMeals)        
// }

export default function Menu() {
    const categories = ["all", "breakfast", "lunch", "shakes"]
    // * filtering by categoryName 
    const [activeItem, setActiveItem] = useState("all")
    const [db, setDb] = useState(meals)

    const getMealByCategory = (categoryName) => {
        setActiveItem(categoryName)
        if(categoryName === "all"){
            return setDb(meals);
        }else {
            const filterMeals = meals.filter(meal => meal.category === categoryName);
            setDb(filterMeals);
        }
    }

    return (
        <div className="meals">
            <Categories
                categories={categories}
                activeItem={activeItem}
                setActiveItem={getMealByCategory}
            />
            <div className="meals__row">
                {db && db.map(meal => (
                    <div key={meal.id} className="meal" >
                        <h2>{meal.title}</h2>
                        <div className="meal__image">
                            <img src={meal.img} alt="imagee" />
                        </div>
                        <p>{meal.desc}</p>
                        <span>{meal.price}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
