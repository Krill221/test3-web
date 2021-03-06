import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const models = 'users';

const Form = ({ item, isNew, del, setActive }) => {

    const theme = useTheme();

    return <Fragment>
        <Button
            name={`delete-${models}`}
            onClick={() => {
                del(item);
                setActive(false);
            }}
            color="primary"
            autoFocus>
            {theme.props.components.Yes}
        </Button>
        <Button
            onClick={() => setActive(false)}
            color="primary"
        >
            {theme.props.components.No}
        </Button>
    </Fragment >

};

export default Form;