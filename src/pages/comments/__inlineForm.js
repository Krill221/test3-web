import React, { Fragment } from 'react';
import {
    //TextField,
    ListItemText
} from '@material-ui/core';

const Form = ({ item, isNew, update, del }) => {

    return <Fragment>
        {
            //item.text
            <ListItemText primary={item.text} />
        }
        {
            /*
            <TextField
                disabled={isNew}
                name="text"
                label="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={item.text ? item.text : ''}
                onBlur={() => { }}
                onChange={e => {
                    e.preventDefault();
                    update({ id: item.id, text: e.target.value })
                }}
            />
            */

        }
    </Fragment>
};

export default Form;