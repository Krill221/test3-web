import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Form from '../../__components/formikNew';
import validationSchema from './validationSchema';
import { TextField, Button } from '@material-ui/core';
import {
    //Chat as SetView,
    Grid12 as SetView,
    //Raw as SetView,
    //Simple as SetView,
    //Tabs as SetView,
    //Wizard as SetView,
} from '../../__views/web/material/SetView';

const models = 'comments';

const Item = ({ item, add, setActive }) => {

    const theme = useTheme();
    //const columnsForTable = tableFields(theme);

    return <Form validationSchema={validationSchema} item={item} onSubmit={(newItem) => {
        add(newItem);
        setActive(false);
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
                    onBlur={props.onBlur}
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
                    onBlur={props.onBlur}
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
                    onBlur={props.onBlur}
                    onChange={props.handleChange}
                />,
                <Button
                    name={`add-${models}`}
                    onClick={props.handleSubmit}
                    color="default"
                    variant="outlined"
                    fullWidth
                    >
                    {theme.props.components.Add}
                </Button>
            ]
            }
        />
        }
    </Form>
};

export default Item;