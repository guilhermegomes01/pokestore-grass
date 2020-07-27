export default theme => ({
    root: {
        backgroundColor: theme.palette.primary.main
    },
    typeStore: {
        color: theme.palette.default.white,
        textTransform: 'uppercase',
        '&::before': {
            content: '" "',
            display: 'block',
            height: 2,
            width: '100%',
            backgroundColor: 'white',
        },
        '&::after': {
            content: '" "',
            display: 'block',
            height: 2,
            width: '100%',
            backgroundColor: 'white',
        },
    },
    searchBar: {
        backgroundColor: theme.palette.default.white,
    }
})