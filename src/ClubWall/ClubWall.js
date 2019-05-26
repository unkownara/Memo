import React from 'react';
import ClubInfoNavDrawer from './ClubInfoNavDrawer';
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
                    <ClubInfoNavDrawer />
                </Layout>
            </Container>
        );
    }
}

export default ClubWall;
