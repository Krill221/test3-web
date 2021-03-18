import React from 'react';
import { Formik } from 'formik';


export default function Form({validationSchema, item, onSubmit, children}) {
    
    return <Formik
        initialValues={item}
        enableReinitialize={false}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
            //actions.setSubmitting(true);
            actions.resetForm();
            onSubmit(values);
            //actions.setSubmitting(false);
        }}
    >
        {props => children({ ...props })}
    </Formik>;
}