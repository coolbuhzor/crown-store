import React from 'react'
import styled from 'styled-components'
import './CollectionItem.scss'

const ImageDiv = styled.div`
 background: url(${(props) => props.image}) center/cover;
`

const CollectionItem = ({id, name, price, imageUrl}) => {
    return (
        <div className='collection-item'>
            <ImageDiv  image={imageUrl} className="image"/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            
        </div>
    )
}

export default CollectionItem
