import React, { Fragment } from 'react';
import {
    ListItemText
} from '@material-ui/core';

// const models = 'likes';


const Form = ({ item, isNew, update, del }) => {

    return <Fragment>
        {
            //item.text
            <ListItemText primary={item.value} secondary={`${item.id} userId: ${item.userId}`} />
        }
    </Fragment>
};

export default Form;