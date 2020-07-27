import React from 'react'
import { withStyles, Grid, Container } from '@material-ui/core'

// Internal Components
import Header from '../../components/Header'

const styles = theme => ({});

const Home = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <Header />
        </Container>
    )
}

export default withStyles(styles)(Home)