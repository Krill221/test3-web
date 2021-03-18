const tableFields = (theme) => {
    return [
        {
            name: "id",
            label: theme.props.models.rooms.Id,
            options: {
                filter: false,
                sort: false,
                sortThirdClickReset: true,
                sortDescFirst: false,
            }
        },
        {
            name: 'name',
            label: theme.props.models.rooms.text,
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