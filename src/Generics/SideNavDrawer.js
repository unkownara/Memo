import React from 'react';
import { connect } from 'react-redux';
import { toggleSideNav } from '../Actions/ClubInfo';
import { T16, SmallPrimaryButton, SquareImage } from './Styles';

import CloseIcon from '../Images/close.png';
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

const SideNavHeaderWrapper = styled.div`
    display: grid;
	grid-template-columns: 9fr 1fr;
`

const SideNavHeading = styled(T16)`
    letter-spacing: 1px;
    text-transform: uppercase;
    vertical-align: middle;
    line-height: 22px;
`

const CloseButton = styled(SquareImage)`
    cursor: pointer;
`

class NavigationDrawer extends React.Component {
    constructor(props) {
        super(props);
    }

    hideSideNav = () => {
        this.props.toggleSideNav(false)
    }

    render() {
        const showClubInfo = this.props.showClubInfo;
        return (
            <SideNav width={showClubInfo ? '400px' : '0px'}>
                <SideNavWrapper show={showClubInfo}>
                    <SideNavHeaderWrapper columns={'9fr 1fr'}>
                        <SideNavHeading bold>{this.props.title}</SideNavHeading>
                        <CloseButton src={CloseIcon} onClick={this.hideSideNav} height={'20px'} width={'20px'} />
                    </SideNavHeaderWrapper>
                    {this.props.children}
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

export default connect(mapStateToProps, { toggleSideNav })(NavigationDrawer);