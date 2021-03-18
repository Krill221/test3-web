import React from 'react';
import { Formik } from 'formik';


export default function Form({FieldsSchema, item, onSubmit, children}) {
    
    return <Formik
        initialValues={item}
        enableReinitialize={false}
        validationSchema={FieldsSchema}
        onSubmit={(values, actions) => {
            //actions.setSubmitting(true);
            onSubmit(values);
            //actions.setSubmitting(false);
        }}
    >
        {props => children({ ...props })}
    </Formik>;
}