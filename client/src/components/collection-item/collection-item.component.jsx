import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, 
    NameContainer, PriceContainer, AddToCart } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddToCart onClick={() => addItem(item)} inverted>Add to cart</AddToCart>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);