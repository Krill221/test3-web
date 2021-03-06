/*
WEB
*/

import { IconButton } from '@material-ui/core';
import React, { Fragment, useContext } from 'react';
import { useItems, useAddItem, useDeleteItem } from '../__operations';
import { AuthArea } from './authArea';
import { AuthContext } from '../__providers/authProvider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const LikesButton = ({ query, parentObject = {}, LikeView, UnLikeView }) => {

    console.log('Like b');

    const { loading, error, items } = useItems(query, parentObject);
    const addHook = useAddItem(query, parentObject);
    const deleteHook = useDeleteItem(query);

    const { user } = useContext(AuthContext);

    const handleChange = (item) => {
        if (item !== undefined) {
            if (!item.id.includes('new')) {
                if (!items.find(i => i.id.includes('new'))) {
                    deleteHook.del(item);
                }
            }
        } else {
            if (!items.find(i => i.id.includes('new'))) {
                let newItem = addHook.item;
                newItem.value = '1';
                newItem.userId = user?.id;
                addHook.add(newItem);
            }
            //}
        }
    }

    if (error || loading) return <IconButton
        color="secondary"
        aria-label="like"
        className="like-button"
    >
        {LikeView ? LikeView : <FavoriteBorderIcon />}
    </IconButton>;
    
    let myItem = items.find(i => i.userId === user?.id);

    return <AuthArea
        publicArea={
            <IconButton
                color="secondary"
                aria-label="like"
                className="like-button"
            >
                {LikeView ? LikeView : <FavoriteBorderIcon />}
            </IconButton>
        }
        privateArea={<React.Fragment>
            <IconButton
                onClick={e => {
                    e.preventDefault();
                    handleChange(myItem);
                }}
                onDoubleClick={e => {
                    e.preventDefault();
                    console.log('onDoubleClick');
                }}
                color="secondary"
                aria-label="like"
                className="like-button"
            >
                {
                    (myItem !== undefined && items.length !== 0) ?
                        (LikeView ? LikeView : <FavoriteIcon />)
                        :
                        (UnLikeView ? UnLikeView : <FavoriteBorderIcon />)

                }
            </IconButton>
        </React.Fragment>}
    />
};

const LikesCountComponent = ({
    query,
    parentObject,
}) => {
    console.log('likes count');

    const { loading, error, items } = useItems(query, parentObject);

    if (error) return '-';
    if (loading) return '-';

    return <Fragment>{items.length}</Fragment>;
};

export { LikesCountComponent, LikesButton };