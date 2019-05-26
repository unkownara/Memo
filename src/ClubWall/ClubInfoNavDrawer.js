import React from 'react';
import { connect } from 'react-redux';
import { toggleClubInfoNav } from '../Actions/ClubInfo';
import { AlignItemsWrapper, BorderedImage } from '../Generics/Styles';
import DP from '../Images/dp.png';

import styled from 'styled-components';

const SideNav = styled.div`
  height: 100%;
  width: ${ props => props.width || '0px'};
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  background-color: #fff;
  box-shadow: -7px 9px 29px -9px rgba(0,0,0,0.75);
  transition: 0.5s;
`

const SideNavWrapper = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    padding: 20px;
`

class NavigationDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '10px'
        };
    }

    hideClubInfoNav = () => {
        this.props.toggleClubInfoNav(false)
    }

    render() {
        const showClubInfo = this.props.showClubInfo;
        return (
            <SideNav width={showClubInfo ? '400px' : '0px'}>
                <SideNavWrapper show={showClubInfo}>
                    <p onClick={this.hideClubInfoNav}>close</p>
                    <AlignItemsWrapper centerItems>
                        <BorderedImage src={DP} height={'50px'} width={'50px'} borderRadius={'50%'} alt={'Club Avatar'} />
                    </AlignItemsWrapper>
                </SideNavWrapper>
            </SideNav>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        showClubInfo: state.show_club_info.show_club_info
    }
};

export default connect(mapStateToProps, { toggleClubInfoNav })(NavigationDrawer);