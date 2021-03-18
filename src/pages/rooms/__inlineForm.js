import React from 'react';
import Form from '../../__components/formikEdit';
import validationSchema from './validationSchema';
import { TextField } from '@material-ui/core';

const Item = ({ item, isNew, update, setActive }) => {

    return <Form validationSchema={validationSchema} item={item} onSubmit={(newItem) => {
        update(newItem);
    }}>
        {props => <TextField
            disabled={isNew}
            name="name"
            label="name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={props.values.name}
            error={props.errors.name && props.touched.name ? true : false}
            helperText={props.errors.name && props.touched.name ? props.errors.name : null}
            onBlur={props.handleSubmit}
            onChange={props.handleChange}
        />
        }
    </Form>
};

export default Item;