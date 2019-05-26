import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { connect } from 'react-redux';
import { toggleSideNav } from '../Actions/ClubInfo';
import DP from '../Images/dp.png';

import { SmallPrimaryButton, T16, HorizontalGridContainer, FlexibleContainer, ElevatedImage, AlignItemsWrapper } from '../Generics/Styles';

const NavBarContainer = styled(HorizontalGridContainer)`
    background: #fff;
    box-shadow: 0px 10px 50px rgb(229, 231, 231);
`

const AppName = styled(T16)`
    vertial-align: middle;
    line-height: 50px;
`

const InfoButton = styled(SmallPrimaryButton)`
    width: max-content; 
    height: max-content; 
    padding: 8px 5px;
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

    showSideNav = () => {
        this.props.toggleSideNav(true);
    }
    // Home, Clubs
    render() {
        return (
            <Headroom>
                <NavBarContainer columns={this.state.showClubInfoButton ? '1fr 7.5fr 1.5fr' : '1fr 8fr 1fr'} gap={'10px'} width={'100%'} boxShadow={'0px 10px 50px rgb(229, 231, 231)'} height={'50px'}>
                    <FlexibleContainer centerItems>
                        <AppName bold>CLUBBING</AppName>
                    </FlexibleContainer>
                    <HorizontalGridContainer >

                    </HorizontalGridContainer>
                    <HorizontalGridContainer columns={'1fr 1fr'}>
                        <AlignItemsWrapper leftItems>
                            <ElevatedImage borderRadius={'50%'} src={DP} height={'35px'} width={'35px'} alt={'DP'} />
                        </AlignItemsWrapper>
                        {
                            this.state.showClubInfoButton ?
                                <AlignItemsWrapper leftItems onClick={this.showSideNav}>
                                    <InfoButton>CLUB INFO</InfoButton>
                                </AlignItemsWrapper>
                                : null
                        }
                    </HorizontalGridContainer>
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


export default connect(mapStateToProps, { toggleSideNav })(NavBar);
