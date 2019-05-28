import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DateRangePicker from './DateRangePicker';
import { toggleSideNav } from '../Actions/ClubInfo';
import SideNavDrawer from '../Generics/SideNavDrawer';
import { Layout, SquareImage, T16, T26, T12, SmallInput, SmallPrimaryButton, FilledInfoBox } from '../Generics/Styles';

import ClubImg from '../Images/1.jpg';
import GroupInfo from '../Images/groupInfo.png';
import LeftArrow from '../Images/leftArrow.png';
import CalendarIcon from '../Images/calendar.png';
import ImgD from '../Images/4.jpeg';
import ImgE from '../Images/5.jpeg';
import ImgF from '../Images/6.jpg';
import ImgG from '../Images/7.jpg';
import ImgH from '../Images/8.jpeg';
import ImgI from '../Images/9.jpeg';
import ImgJ from '../Images/10.png';
import ImgK from '../Images/11.jpg';

const AlignCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

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
    margin: 3.5px 0px;
    & > ${PostImage}{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`

const TitleGrid = styled.div`
    margin: 50px 0px;
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
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

const SearchWrapper = styled(AlignCenter)``

const SearchInput = styled(SmallInput)`
    padding: 0 10px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: gray;
    margin-right: 10px;
`

const DatePickerContainer = styled(AlignCenter)`
    padding: 5px 0 0 60px;
`

const DateRangeFrom = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    width: 150px;
    height: 30px;
    margin: 0 20px;
    cursor: pointer;
    letter-spacing: 2px;
    line-height: 25px;
    vertical-align: middle;
    border-bottom: 1px solid gray;
`

const DateRangeWrapper = styled(AlignCenter)``

const PopoverContent = styled.div`
    opacity: ${props => props.show ? 1 : 0};
    visibility:  ${props => props.show ? 'visible' : 'hidden'};
    position: absolute;
    z-index: ${props => props.show ? 10 : -1};
    left: -150px;
    transform: translate(0, 10px);
    background-color: #fff;
    border-radius: 5px;
    margin-top: 40px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    transform: translate(0, -20px);
    transition: all 0.3s ease-in-out;
`

const PopoverWrapper = styled.div`
    position: relative;
    display: inline-block;
`

const PopoverMessage = styled.div`
    width: 600px;
    padding-top: 10px;
    text-align: center;
`

const PostDate = styled(FilledInfoBox)`
    padding: 8px;
    margin: 20px 0;
    font-size: 14px;
    text-transform: uppercase;
`

class ClubWall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDatePicker: false,
            startDate: 'POSTS FROM',
            endDate: 'POSTS TILL',
            startDateSelected: 0
        };
    }


    showSideNav = () => {
        this.props.toggleSideNav(true);
    }

    toggleDatePicker = () => {
        this.setState({ showDatePicker: !this.state.showDatePicker });
    }

    setStartDate = (date) => {
        this.setState({ startDate: date, startDateSelected: 1 });
    }

    setEndDate = (date) => {
        this.setState({ endDate: date, showDatePicker: this.state.startDateSelected ? false : true, startDateSelected: 0 });
    }

    render() {
        return (
            <Layout>
                <ClubNameWrapper>
                    <T26 bold>Club Name</T26>
                </ClubNameWrapper>
                <TitleGrid>
                    <SearchWrapper>
                        <SearchInput
                            height={'35px'}
                            width={'250px'}
                            placeholder={'SEARCH'}
                        />
                        <SmallPrimaryButton boxShadow={false} height={'33px'} width={'80px'}>SEARCH</SmallPrimaryButton>
                    </SearchWrapper>
                    <DatePickerContainer>
                        <PopoverWrapper>
                            <DateRangeWrapper>
                                <DateRangeFrom onClick={this.toggleDatePicker}>
                                    <T12 color={'gray'} bold>{this.state.startDate}</T12>
                                    <SquareImage src={CalendarIcon} height={'25px'} width={'25px'} alt={'Calendar'} />
                                </DateRangeFrom>
                                <DateRangeFrom onClick={this.toggleDatePicker}>
                                    <T12 color={'gray'} bold>{this.state.endDate}</T12>
                                    <SquareImage src={CalendarIcon} height={'25px'} width={'25px'} alt={'Calendar'} />
                                </DateRangeFrom>
                            </DateRangeWrapper>
                            <PopoverContent show={this.state.showDatePicker}>
                                <PopoverMessage>
                                    <DateRangePicker getStartDate={this.setStartDate} getEndDate={this.setEndDate} />
                                </PopoverMessage>
                            </PopoverContent>
                        </PopoverWrapper>
                        <SmallPrimaryButton boxShadow={false} height={'33px'} width={'80px'}>FILTER</SmallPrimaryButton>
                    </DatePickerContainer>
                    <GroupInfoButtonContainer>
                        <GroupInfoButtonWrapper onClick={this.showSideNav}>
                            <InfoButtonWrapper>
                                <SquareImage src={GroupInfo} height={'25px'} width={'25px'} />
                            </InfoButtonWrapper>
                            <T12 bold color={'#3498DB'}>INFO</T12>
                        </GroupInfoButtonWrapper>
                    </GroupInfoButtonContainer>
                </TitleGrid>
                <PostDate color={'#F38100'} bg={'#FFCA8D'} border={'#F38100'}>May 28, 2018</PostDate>
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