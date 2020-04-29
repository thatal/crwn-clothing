import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

import './collections-overview.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreviews } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) =>{
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    );
}
const mapsToProps = createStructuredSelector({
    collections: selectCollectionForPreviews
});

export default connect(mapsToProps)(CollectionOverview);