/* eslint-disable */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const url = 'https://fakestoreapi.com/products/categories'

function Categories() {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
      axios.get(url).then((res) => setCategories(res.data))
    }, [])
    

  return (
    <div className='categories'>
        {categories? categories.map( category =>
            (<div  key={category}>
            
            <Link className='c-link' to={`/${category}`} >{category}</Link>
            </div>))
            : "Loading categories..."}
    </div>
  )
}

export default Categories