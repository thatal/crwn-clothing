import React from 'react';
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopItems } from '../../redux/shop/shop.selector.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ collections}) => {
        return (
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                } 
            </div>
        );
    };
const mapsToProps = createStructuredSelector({
    collections: selectShopItems
});

export default connect(mapsToProps, null)(ShopPage);