import React from 'react';
//import { useTheme } from '@material-ui/core/styles';
import Form from '../../__components/formikEdit';
import validationSchema from './validationSchema';
import { TextField } from '@material-ui/core';
import {
    Grid12 as SetView,
    //Raw as SetView,
    //Simple as SetView,
    //Tabs as SetView,
    //Wizard as SetView,
} from '../../__views/web/material/SetView';

const Item = ({ item, isNew, update, setActive }) => {

    //const theme = useTheme();
    //const columnsForTable = tableFields(theme);

    return <Form validationSchema={validationSchema} item={item} onSubmit={(newItem) => {
        update(newItem);
    }}>
        {props => <SetView
            labels={['']}
            tabs={[
                <TextField
                    name="text"
                    label="text"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={props.values.text}
                    error={props.errors.text && props.touched.text ? true : false}
                    helperText={props.errors.text && props.touched.text ? props.errors.text : null}
                    onBlur={props.handleSubmit}
                    onChange={props.handleChange}
                />
            ]
            }
        />
        }
    </Form>
};

export default Item;