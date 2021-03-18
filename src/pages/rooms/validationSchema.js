import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Must be 1 characters or more!')
        .max(350, 'Too Long!')
        .required('Required'),
});

export default validationSchema;