const tableFields = (theme) => {
    return [
        {
            name: "id",
            label: theme.props.models.room.Id,
            options: {
                filter: false,
                sort: false,
                sortThirdClickReset: true,
                sortDescFirst: false,
            }
        },
        {
            name: 'name',
            label: theme.props.models.room.text,
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