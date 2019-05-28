import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import DP from '../Images/dp.png';

import { T16, HorizontalGridContainer, FlexibleContainer, CircularImage, AlignItemsWrapper } from '../Generics/Styles';

const NavBarContainer = styled.div`
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-gap: 10px;
    height: 50px;
    box-shadow: 0px -5px 34px rgb(229,231,231);
`

const AppName = styled(T16)`
    vertial-align: middle;
    line-height: 50px;
`

class NavBar extends React.Component {
    render() {
        return (
            <Headroom>
                <NavBarContainer>
                    <FlexibleContainer centerItems>
                        <AppName bold>CLUBBING</AppName>
                    </FlexibleContainer>
                    <HorizontalGridContainer>

                    </HorizontalGridContainer>
                    <HorizontalGridContainer columns={'1fr 1fr'}>
                        <AlignItemsWrapper leftItems>
                            <CircularImage src={DP} height={'35px'} width={'35px'} alt={'DP'} />
                        </AlignItemsWrapper>
                    </HorizontalGridContainer>
                </NavBarContainer>
            </Headroom>
        );
    }
}


export default NavBar;
