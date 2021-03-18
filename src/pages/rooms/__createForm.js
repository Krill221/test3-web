import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Form from '../../__components/formikNew';
import FieldText from '../../__components/fieldText';
import validationSchema from './validationSchema';
import { ListLoading, ListError } from '../../__views/web/material/helpers';
import { CreateComponent, ItemsComponent } from '../../__components/itemsComponent';
import SendIcon from '@material-ui/icons/Send';
import {
    Chat as SetView,
    //Grid12 as SetView,
    //Raw as SetView,
    //Simple as SetView,
    //Tabs as SetView,
    //Wizard as SetView,
} from '../../__views/web/material/SetView';
import {
    //CreateFab as CreateView,
    //CreateButton as CreateView,
    CreateInline as CreateView,
} from '../../__views/web/material/CreateView';
import {
    //Table as ItemsView,
    //Grid as ItemsView,
    List as ItemsView,
} from '../../__views/web/material/ItemsView';
import {
    //ItemTable as ItemView,
    //ItemCard as ItemView,
    ItemList as ItemView,
} from '../../__views/web/material/ItemView';

import CreateForm from '../comments/__createForm';
import EditForm from '../comments/__editForm';
import InlineForm from '../comments/__inlineForm';
import DeleteForm from '../comments/__deleteForm';
import TableForm from '../comments/__tableForm';

import qComments from '../../queries/comments.js';
import { Typography } from '@material-ui/core';
import { InputAdornment, IconButton } from '@material-ui/core';

const models = 'rooms';

const Item = ({ item, add, setActive }) => {

    const theme = useTheme();

    return <Form validationSchema={validationSchema} item={item} onSubmit={(newItem) => {
        add(newItem);
        setActive(false);
    }}>
        {props => <SetView
            labels={['']}
            tabs={[
                <FieldText
                    models={models}
                    name={'name'}
                    formikProps={props}
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
                <Typography>Comments:</Typography>,
                <ItemsComponent
                    query={qComments}
                    parentObject={{ room: item.id }}
                    Loading={ListLoading}
                    Error={ListError}
                    ItemsView={ItemsView}
                    ItemView={ItemView}
                    EditForm={EditForm}
                    InlineForm={InlineForm}
                    DeleteForm={DeleteForm}
                    TableForm={TableForm(theme)}
                    options={{
                        inline: false,
                        editable: false,
                        deletable: true
                    }}
                />,
                <CreateComponent
                    label={theme.props.components.Add}
                    query={qComments}
                    parentObject={{ room: item.id }}
                    CreateView={CreateView}
                    CreateForm={CreateForm}
                />,
            ]
            }
        />
        }
    </Form>
};

export default Item;