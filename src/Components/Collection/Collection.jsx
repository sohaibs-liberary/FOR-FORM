import React from 'react'
import Filter from "./Section/Filter"
import Allcollection from "./Section/Allcollection"
import Sort from "./Section/Sort"

const Collection = () => {
  return (
    <>
    <div className="Collection ">
        <div className="Sections flex justify-around ">
          <Filter  />
          <Allcollection/>
          <Sort/>
               
        </div>
        
    </div>
    </>
  )
}

export default Collection