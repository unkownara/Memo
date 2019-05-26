import React from 'react';
import Card from './Card';
import { Layout, FixedContainer, HorizotalGridContainer } from '../Generics/Styles';



class ClubCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout>
            <FixedContainer margin={'40px 0 40px 0'} centerItems={true}>
                <HorizotalGridContainer columns={'1fr 1fr 1fr'} gap={'40px'}>
                    {
                        [1, 2, 3, 4, 5].map((data) =>
                            <Card />
                        )
                    }
                </HorizotalGridContainer>
            </FixedContainer>
            </Layout>
        );
    }
}

export default ClubCards;
