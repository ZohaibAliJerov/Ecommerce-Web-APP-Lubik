import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { GiVineWhip, GiAchillesHeel } from "react-icons/gi";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { HiRefresh } from "react-icons/hi";



const Categories = () => {

  const svgStyle={
  width:"25px",
  height:"25px",
  color:"#e98337"
  }
  const data = [
    {
      cateImg: <HiRefresh style={svgStyle}/> ,
      cateName: "Refersh",
    },
    {
      cateImg: <AiFillHome style={svgStyle}/> ,
      cateName: "Home",
    },
    {
      cateImg: <MdOutlineProductionQuantityLimits  style={svgStyle} />,
      cateName: "Products",
    },
    {
      cateImg: <FaShoppingCart  style={svgStyle}/>,
      cateName: "Orders",
    },
    // {
    //   cateImg: "./images/category/cat2.png",
    //   cateName: "Add Products",
    // },
    {
      cateImg: <BiCategoryAlt  style={svgStyle}/>,
      cateName: "Top Categories",
    },

    {
      cateImg: <GiVineWhip  style={svgStyle}/>,
      cateName: "New Arrivals",
    },
    {
      cateImg: <TbShoppingCartDiscount  style={svgStyle}/>,
      cateName: "Big Discounts",
    },
    {
      cateImg: <GiAchillesHeel  style={svgStyle}/>,
      cateName: "Achivements",
    },
    {
      cateImg: <CgProfile  style={svgStyle}/>,
      cateName: "Profile",
    },
    // {
    //   cateImg: "./images/category/cat9.png",
    //   cateName: "Baby Toys",
    // },
    // {
    //   cateImg: "./images/category/cat10.png",
    //   cateName: "Groceries",
    // },
    // {
    //   cateImg: "./images/category/cat11.png",
    //   cateName: "Books",
    // },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div
              className="box f_flex"
              key={index}
              style={{ display: "flex", alignContent: "center",alignItems:"center", justifyContent:"flex-start" }}
            >
              <dev >{value.cateImg}</dev>
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
