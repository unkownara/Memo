import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { connect } from 'react-redux';
import { toggleClubInfoNav } from '../Actions/ClubInfo';
import DP from '../Images/dp.png';

import { PrimaryActionButton, T16, HorizotalGridContainer, FlexibleContainer, ElevatedImage, AlignItemsWrapper } from '../Generics/Styles';

const NavBarContainer = styled(HorizotalGridContainer)`
    background: #fff;
    box-shadow: 0px 10px 50px rgb(229, 231, 231);
`

const AppName = styled(T16)`
    vertial-align: middle;
    line-height: 50px;
`

const InfoButton = styled(PrimaryActionButton)`
    transition: 0.2s all ease-in-out;
    &:hover{
        transform: scale(1.04);
    }
`

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showClubInfoButton: false
        };
    }

    componentDidMount = () => {
        this.setState({ showClubInfoButton: window.location.pathname === '/club_wall' ? true : false })
    }

    showClubInfoNav = () => {
        this.props.toggleClubInfoNav(true);
    }
// Home, Clubs
    render() {
        return (
            <Headroom>
                <NavBarContainer columns={this.state.showClubInfoButton ? '1fr 7.5fr 1.5fr' : '1fr 8fr 1fr'} gap={'10px'} width={'100%'} boxShadow={'0px 10px 50px rgb(229, 231, 231)'} height={'50px'}>
                    <FlexibleContainer centerItems>
                        <AppName bold>CLUBBING</AppName>
                    </FlexibleContainer>
                    <HorizotalGridContainer >

                    </HorizotalGridContainer>
                    <HorizotalGridContainer columns={'1fr 1fr'}>
                        <AlignItemsWrapper leftItems>
                            <ElevatedImage borderRadius={'50%'} src={DP} height={'35px'} width={'35px'} alt={'DP'} />
                        </AlignItemsWrapper>
                        {
                            this.state.showClubInfoButton ?
                                <AlignItemsWrapper leftItems onClick={this.showClubInfoNav}>
                                    <InfoButton padding={'8px 5px'}>CLUB INFO</InfoButton>
                                </AlignItemsWrapper>
                                : null
                        }
                    </HorizotalGridContainer>
                </NavBarContainer>
            </Headroom>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        showClubInfo: state.show_club_info.show_club_info
    }
};


export default connect(mapStateToProps, { toggleClubInfoNav })(NavBar);
