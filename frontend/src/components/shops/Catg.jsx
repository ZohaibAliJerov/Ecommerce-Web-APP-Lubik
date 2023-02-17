import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Tesla",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Lemborghni",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Bogati",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "BMW",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Toyoto",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Suzuki",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
            
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
