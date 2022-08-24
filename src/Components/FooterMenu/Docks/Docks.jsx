import React from 'react'
import "./docks.css"
import { NavLink } from 'react-router-dom'
import { DocksItemDataList } from '../../../MapData/DockItemData'

import emptybin from "../../../Imgs/dock/emptybin.png"



const Docks = () => {
    return (
        <>
            <div className="docks_section">
                <div className="docs_items_list">
                    {DocksItemDataList.map((e) => {
                        const { id, img, path } = e;
                        return (
                            <>
                                <div className="doc_item" key={id}>
                                    <NavLink to={path} >
                                        <img className='doc_imgs'  src={img} alt="" />
                                    </NavLink>
                                </div>
                            </>
                        )
                    })}

                    <div className="divider_dock"></div>
                    <div className="doc_item" >
                        <img className='doc_imgs' src={emptybin} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Docks