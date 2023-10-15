import React from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";
const Sales = ({ endpoint: { title, items } }) => {
  return (
    <div>
      <div className="nike-container">
        <Title title={title} />
        <div className="grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7">
          {items.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
