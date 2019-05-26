import React from 'react';
import NavigationDrawer from './NavigationDrawer';
import { Layout, Container } from '../Generics/Styles';

class ClubWall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <Layout>

                <NavigationDrawer />
                </Layout>
            </Container>
        );
    }
}

export default ClubWall;
