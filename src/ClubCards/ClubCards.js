import React from 'react';
import Card from './Card';
import { FixedContainer, HorizotalGridContainer } from '../Generics/Styles';



class ClubCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <FixedContainer margin={'40px 0 0 0'} centerItems={true}>
                <HorizotalGridContainer columns={'1fr 1fr 1fr'} gridGap={'40px'}>
                    {
                        [1, 2, 3, 4, 5].map((data) =>
                            <Card />
                        )
                    }
                </HorizotalGridContainer>
            </FixedContainer>
        );
    }
}

export default ClubCards;
