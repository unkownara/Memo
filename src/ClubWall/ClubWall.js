import React from 'react';
import styled from 'styled-components';
import SideNavDrawer from '../Generics/SideNavDrawer';
import { Layout, SquareImage, T16, T26, T12, SmallInput } from '../Generics/Styles';
import { connect } from 'react-redux';
import { toggleSideNav } from '../Actions/ClubInfo';
import ClubImg from '../Images/1.jpg';

import GroupInfo from '../Images/groupInfo.png';
import LeftArrow from '../Images/leftArrow.png';
import ImgC from '../Images/3.jpeg';
import ImgD from '../Images/4.jpeg';
import ImgE from '../Images/5.jpeg';
import ImgF from '../Images/6.jpg';
import ImgG from '../Images/7.jpg';
import ImgH from '../Images/8.jpeg';
import ImgI from '../Images/9.jpeg';
import ImgJ from '../Images/10.png';
import ImgK from '../Images/11.jpg';

const ClubName = styled(T16)`
    margin-top: 20px;
    letter-spacing: 1px;
    word-break: break-word;
`

const SideNavBody = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PostImage = styled.div`
    background-image: url(${props => props.image});
    border-radius: 7px;
    &:nth-child(1){
        grid-row: 1/3;
    }
    &:nth-child(2){
        grid-column: 2/4;
        grid-row: 1/3;
    }
    &:nth-child(3){
        grid-column: 1/2;
        grid-row: 3/4;
    }
    &:nth-child(4){
        grid-column: 2/3;
        grid-row: 3/4;
    }
    &:nth-child(5){
        grid-column: 1/3;
        grid-row: 4/5;
    }
    &:nth-child(6){
        grid-column: 3/3;
        grid-row: 3/5;
    }
`

const PostImagesGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 150px);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    margin: 3.5px 50px;
    & > ${PostImage}{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`

const TitleGrid = styled.div`
    margin: 50px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const ClubNameWrapper = styled.div`
    text-align: center;
`;


const GroupInfoButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const GroupInfoButtonWrapper = styled(GroupInfoButtonContainer)`
    cursor: pointer;
`

const InfoButtonWrapper = styled.div`
    margin-top: 3px;
    margin-right: 5px;
`
const SearchInput = styled(SmallInput)`
    padding: 0 10px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: gray;
`

class ClubWall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    showSideNav = () => {
        this.props.toggleSideNav(true);
    }

    render() {
        return (
            <Layout>
                <ClubNameWrapper>
                    <T26 bold>Club Name</T26>
                </ClubNameWrapper>
                <TitleGrid>
                    <SearchInput
                        height={'45px'}
                        width={'300px'}
                        placeholder={'Search'}
                    />
                    <GroupInfoButtonContainer>
                        <GroupInfoButtonWrapper onClick={this.showSideNav}>
                            <InfoButtonWrapper>
                                <SquareImage src={GroupInfo} height={'25px'} width={'25px'} />
                            </InfoButtonWrapper>
                            <T12 bold color={'#3498DB'}>INFO</T12>
                        </GroupInfoButtonWrapper>
                    </GroupInfoButtonContainer>
                </TitleGrid>
                <PostImagesGrid>
                    <PostImage image={ImgG}></PostImage>
                    <PostImage image={ImgH}></PostImage>
                    <PostImage image={ImgI}></PostImage>
                    <PostImage image={ImgJ}></PostImage>
                    <PostImage image={ImgK}></PostImage>
                    <PostImage image={ImgG}></PostImage>
                </PostImagesGrid>
                <SideNavDrawer title={'Club Info'}>
                    <SideNavBody>
                        <SquareImage src={ClubImg} height={'100px'} width={'100px'} borderRadius={'5px'} />
                        <ClubName>
                            <T16 bold>Club Name</T16>
                        </ClubName>
                    </SideNavBody>
                </SideNavDrawer>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showClubInfo: state.show_club_info.show_club_info
    }
};



export default connect(mapStateToProps, { toggleSideNav })(ClubWall);