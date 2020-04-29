import React from 'react'

import './collection.styles.scss'
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
const CollectionPage = ({ match, collection}) => {

    const { title, items } = collection;

    return (
        <div className="collection-page">
          <h2 className="title">{title.toUpperCase()}</h2>
          <div className="items">
              {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
              }
          </div>
        </div>
    )
}

const mapsToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapsToProps)(CollectionPage);