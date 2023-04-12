import React from "react";
import Categories from "./Categories";

export default {
    title: 'Input/ Categories',
    component: Categories
}

export const CategorySelector = () => <Categories categories={["electronics", "jewelry", "men's clothing", "women's clothing"]} />