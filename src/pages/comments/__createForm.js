import React from 'react';
//import { useTheme } from '@material-ui/core/styles';
import Form from '../../__components/formikNew';
import validationSchema from './validationSchema';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {
    Grid12 as SetView,
    //Raw as SetView,
    //Simple as SetView,
    //Tabs as SetView,
    //Wizard as SetView,
} from '../../__views/web/material/SetView';

const models = 'comments';

const Item = ({ item, add, setActive }) => {

    //const theme = useTheme();
    //const columnsForTable = tableFields(theme);

    return <Form validationSchema={validationSchema} item={item} onSubmit={(newItem) => {
        add(newItem);
        setActive(false);
    }}>
        {props => <SetView
            labels={['']}
            tabs={[
                <TextField
                    id="text"
                    name="text"
                    label="text"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={props.values.text}
                    error={props.errors.text && props.touched.text ? true : false}
                    helperText={props.errors.text && props.touched.text ? props.errors.text : null}
                    onBlur={props.onBlur}
                    onChange={props.handleChange}
                    onKeyDown={e => {
                        if (e.key === 'Enter') props.handleSubmit();
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                name={`add-${models}`}
                                onClick={props.handleSubmit}
                                aria-label="search"
                            >
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>,
                    }}
                />,
            ]
            }
        />
        }
    </Form>
};

export default Item;