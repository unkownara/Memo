import React from 'react';
import SideNavDrawer from '../Generics/SideNavDrawer';
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
                    <SideNavDrawer />
                </Layout>
            </Container>
        );
    }
}

export default ClubWall;
