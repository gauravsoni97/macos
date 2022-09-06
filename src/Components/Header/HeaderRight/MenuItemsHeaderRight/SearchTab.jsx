import React, { useState } from 'react'

import search from "../../../../Imgs/HeaderRight/search.png"


const SearchTab = () => {

  const [spotlight, setspotlight] = useState("");

  // toggle 
  const [spotlightSearch, setSpotlightSearch] = useState(false)



  return (
    <>
      <li className='header_right_menu_item' onClick={() => setSpotlightSearch(!spotlightSearch)} ><img className='header_right_itemimg' src={search} alt="" /></li>

      {spotlightSearch ?
        <div className="quicksearchbar-div">
          <i class="uil uil-search spotlight_search_icon"></i>
          <input className='quicksearchbar' type="text" name='text' placeholder='Spotlight Search' value={spotlight} onChange={(e) => setspotlight(e.target.value)} />
        </div>
        : ""}

    </>
  )
}

export default SearchTab