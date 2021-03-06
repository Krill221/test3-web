import React, { Fragment } from 'react';
import {
    ListItemText
} from '@material-ui/core';

const Form = ({ item, isNew, update, del }) => {

    return <Fragment>
        {
            //item.text
            <ListItemText primary={item.text} secondary={item.room} />
        }
    </Fragment>
};

export default Form;