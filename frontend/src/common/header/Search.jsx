import React from "react"
import logo from "../../components/assets/images/logo.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'  style={{ height:"90px" }}>
        <div className='container c_flex'>
          <div className='logo' style={{ display:"flex" , alignItems:"center", justifyContent:"center" }}>
            <img src={logo} style={{width:"60px" }} alt='' />
            <h1 style={{ marginLeft:"10px", fontSize:"28px", fontWeight:"900", color:"#e98337"}}>LUBICK</h1>
          </div>

          <div className='search-box f_flex' style={{width:"60%"}}>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...'  style={{width:"60%"}}/>
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
