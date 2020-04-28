import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                ))
            }
        </div>
    );
};

const mapsToProp = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapsToProp, null) (Directory);