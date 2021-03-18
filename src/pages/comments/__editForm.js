import React from 'react';
//import { useTheme } from '@material-ui/core/styles';
import Form from '../../__components/formikEdit';
import FieldText from '../../__components/fieldText';
import validationSchema from './validationSchema';
import {
    Grid12 as SetView,
    //Raw as SetView,
    //Simple as SetView,
    //Tabs as SetView,
    //Wizard as SetView,
} from '../../__views/web/material/SetView';

const models = 'comments';

const Item = ({ item, isNew, update, setActive }) => {

    return <Form validationSchema={validationSchema} item={item} onSubmit={(newItem) => {
        update(newItem);
    }}>
        {props => <SetView
            labels={['']}
            tabs={[
                <FieldText
                    models={models}
                    name={'text'}
                    formikProps={props}
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