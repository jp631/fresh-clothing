import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  CollectionPreview  from '../collection-preview/collection-preview.component';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';

const collectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
               {
                  collections.map(({id, ...otherCollectoionProps}) =>(
                      <CollectionPreview key={id} {...otherCollectoionProps} />
                  ))
              }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(collectionsOverview);