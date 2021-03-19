import React, { Fragment } from 'react';
import Form from '../../__components/formikEdit';
import FieldText from '../../__components/fieldText';
import validationSchema from './validationSchema';
import {
    //Chat as SetView,
    Grid12 as SetView,
    //Raw as SetView,
    //Simple as SetView,
    //Tabs as SetView,
    //Wizard as SetView,
} from '../../__views/web/material/SetView';
import { LikesCountComponent, LikesButton } from '../../__components/likesComponent';
import qLikes from '../../queries/likes.js';


const models = 'rooms';

const Item = ({ item, isNew, update, setActive }) => {

    return <Form validationSchema={validationSchema} item={item} onSubmit={(newItem) => {
        update(newItem);
    }}>
        {props => <SetView
            labels={['']}
            tabs={[
                <FieldText
                    models={models}
                    name={'name'}
                    formikProps={props}
                    onBlur={props.handleSubmit}
                    onChange={props.handleChange}
                />,
                <Fragment>
                    <LikesButton
                        query={qLikes}
                        parentObject={{ room: item.id }}
                        LikeView={null}
                        UnLikeView={null}

                    />
                    <LikesCountComponent
                        query={qLikes}
                        parentObject={{ room: item.id }}
                    />
                </Fragment>
            ]
            }
        />
        }
    </Form>
};

export default Item;