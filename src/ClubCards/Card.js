import React, { Component } from 'react';
import {
    T16,
    T26,
    FlexibleContainer,
    FixedContainer,
    CurvedElevatedContainer,
    Image,
    BorderedImage,
    Label
} from '../Generics/Styles';
import styled from 'styled-components';

import ImgA from '../Images/1.jpg';
import ImgB from '../Images/2.jpg';
import ImgC from '../Images/3.jpeg';
import ImgD from '../Images/4.jpeg';
import ImgE from '../Images/5.jpeg';

const SliderContainer = styled.div`
    margin: 5px 0px 5px 5px;
    border-radius:5px;
    display: grid;
    grid-template-columns: repeat(5, 100px);
    grid-gap: 25px;
    overflow: hidden;
`

const PostCount = styled(T26)`
    letter-spacing: 1px;
`

const MemberCount = styled.div`
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-left: 20px;
`

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <CurvedElevatedContainer
                height={'380px'}
                width={'300px'}
                padding={'10px'}
                borderRadius={'10px'}>
                <SliderContainer>
                    {
                        [ImgA, ImgB, ImgC, ImgD, ImgE].map((imageSrc, img_index) =>
                            <Image key={img_index} src={imageSrc} height={'100px'} width={'120px'} alt={'Image'} borderRadius={'5px'} />
                        )
                    }
                </SliderContainer>
                <FlexibleContainer margin={'-15px 0 10px 1px'} centerItems={true}>
                    <BorderedImage src={ImgD} height={'55px'} width={'55px'} alt={'Category'} borderRadius={'50%'} border={'4px solid #fff'} />
                </FlexibleContainer>
                <FlexibleContainer centerItems={true}>
                    <T16 bold={true} space={'1px'} color={'#252525'}>Industrial Visit</T16>
                </FlexibleContainer>
                <FlexibleContainer margin={'10px 0'} centerItems={true}>
                    <Label bg={'#C70085'}>Travel</Label>
                </FlexibleContainer>
                <FlexibleContainer margin={'20px 0'} centerItems={true}>
                    <PostCount bold={true} color={'#252525'}>
                        260
                    </PostCount>
                    <T16 style={{ paddingLeft: '10px' }} space={'1px'} color={'#252525'}>posts</T16>
                </FlexibleContainer>
                <FixedContainer margin={'15px 0'} padding={'10px'} height={'45px'} >
                    {
                        [ImgA, ImgB, ImgC, ImgD, ImgE].map((imageSrc, img_index) =>
                            <BorderedImage src={imageSrc} height={'32px'} width={'32px'} alt={'Image'} borderRadius={'50%'} margin={'0 -12px 0 0'} border={'2.5px solid #fff'} />
                        )
                    }
                    <MemberCount>
                        + <b>5</b> more
                    </MemberCount>
                </FixedContainer>
            </CurvedElevatedContainer>
        );
    }
}

export default Card;