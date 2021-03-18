import React from 'react';
import Form from '../../__components/formikEdit';
import validationSchema from './validationSchema';
import { useTheme } from '@material-ui/core/styles';
import { ListLoading, ListError } from '../../__views/web/material/helpers';
import { CreateComponent, ItemsComponent } from '../../__components/itemsComponent';
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

const Item = ({ item, isNew, update, setActive }) => {

    const theme = useTheme();

    return <Form validationSchema={validationSchema} item={item} onSubmit={(newItem) => {
        update(newItem);
    }}>
        {props => <SetView
            labels={['']}
            tabs={[
                <Typography>{item.name}</Typography>,
                <ItemsComponent
                    query={qComments}
                    parentObject={{ room: item.id }}
                    Loading={ListLoading}
                    Error={ListError}
                    ItemsView={ItemsView}
                    ItemView={ItemView}
                    TableForm={TableForm(theme)}
                    EditForm={EditForm}
                    InlineForm={InlineForm}
                    DeleteForm={DeleteForm}
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
            ]}
        />
        }
    </Form>
};

export default Item;