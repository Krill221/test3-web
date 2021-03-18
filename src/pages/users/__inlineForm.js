import React from 'react';
//import { useTheme } from '@material-ui/core/styles';
import Form from '../../__components/formikEdit';
import validationSchema from './validationSchema';
import { TextField } from '@material-ui/core';
import {
    //Chat as SetView,
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
                    name="username"
                    label="username"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={props.values.username}
                    error={props.errors.username && props.touched.username ? true : false}
                    helperText={props.errors.username && props.touched.username ? props.errors.username : null}
                    onBlur={props.handleSubmit}
                    onChange={props.handleChange}
                />,
                <TextField
                    name="email"
                    label="email"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={props.values.email}
                    error={props.errors.email && props.touched.email ? true : false}
                    helperText={props.errors.email && props.touched.email ? props.errors.email : null}
                    onBlur={props.handleSubmit}
                    onChange={props.handleChange}
                />,
                <TextField
                    name="password"
                    label="password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={props.values.password}
                    error={props.errors.password && props.touched.password ? true : false}
                    helperText={props.errors.password && props.touched.password ? props.errors.password : null}
                    onBlur={props.handleSubmit}
                    onChange={props.handleChange}
                />,
            ]
            }
        />
        }
    </Form>
};

export default Item;