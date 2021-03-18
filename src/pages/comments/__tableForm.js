const tableFields = (theme) => {
    return [
        /*{
            name: "id",
            label: theme.props.models.comment.Id,
            options: {
                filter: false,
                sort: false,
                sortThirdClickReset: true,
                sortDescFirst: false,
            }
        },
        */
        {
            name: 'text',
            label: theme.props.models.comment.text,
            options: {
                filter: true,
                sort: false,
                sortThirdClickReset: true,
                sortDescFirst: false,
            }
        },

    ]
}

export default tableFields;