import React from 'react';
import Form from '../../__components/formikEdit';
import FieldText from '../../__components/fieldText';
import validationSchema from './validationSchema';

const models = 'rooms';

const Item = ({ item, isNew, update, setActive }) => {

    return <Form validationSchema={validationSchema} item={item} onSubmit={(newItem) => {
        update(newItem);
    }}>
        {props => <FieldText
                    models={models}
                    name={'name'}
                    formikProps={props}
                    onBlur={props.handleSubmit}
                    onChange={props.handleChange}
                />
        }
    </Form>
};

export default Item;