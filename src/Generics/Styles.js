import styled from 'styled-components';

/* Text styles */
export const H1 = styled.h1`
	font-size : 36px;
	font-weight: bold;
	color: #000;
`;

export const H2 = styled.h2`
	font-size : 32px;
	font-weight: bold;
	color: #000;
`;

export const H3 = styled.h3`
	font-size : 28px;
	font-weight: bold;
	color: #000;
`;

export const H4 = styled.h4`
	font-size: 24px;
	font-weight: bold;
	color: #000;
`;

export const H5 = styled.h5`
	font-size: 20px;
	font-weight: bold;
	color: #000;
`;

export const H6 = styled.h6`
	font-size: 18px;
	font-weight: bold;
	color: #000;
`;

export const P1 = styled.p`
	font-size: 22px;
	font-weight: semi-bold;
	color: #000;
`;

export const P2 = styled.p`
	font-size: 20px;
	font-weight: semi-bold;
	color: #000;
`;

export const P3 = styled.p`
	font-size: 18px;
	font-weight: semi-bold;
	color: #000;
`;

export const P4 = styled.p`
	font-size: 16px;
	font-weight: semi-bold;
	color: #000;
`;

export const P5 = styled.p`
	font-size: 14px;
	font-weight: semi-bold;
	color: #000;
`;

export const P11 = styled.p`
	font-size: 22px;
	font-weight: normal;
	color: #000;
`;

export const P12 = styled.p`
	font-size: 20px;
	font-weight: normal;
	color: #000;
`;

export const P13 = styled.p`
	font-size: 18px;
	font-weight: normal;
	color: #000;
`;

export const P14 = styled.p`
	font-size: 16px;
	font-weight: normal;
	color: #000;
`;

/* Custom Text */

export const T10 = styled.span`
	font-size: 10px;
	color: ${props => props.color || '#000'};
	${props => props.bold ? { fontWeight: 'bold' } : { fontWeight: 'normal' }};
`

export const T12 = styled.span`
	font-size: 12px;
	color: ${props => props.color || '#000'};
	${props => props.bold ? { fontWeight: 'bold' } : { fontWeight: 'normal' }};
`

export const T14 = styled.span`
	font-size: 14px;
	color: ${props => props.color || '#000'};
	${props => props.bold ? { fontWeight: 'bold' } : { fontWeight: 'normal' }};
`

export const T16 = styled.span`
	font-size: 16px;
	color: ${props => props.color || '#000'};
	${props => props.bold ? { fontWeight: 'bold' } : { fontWeight: 'normal' }};
`


export const T18 = styled.span`
	font-size: 18px;
	color: ${props => props.color || '#000'};
	${props => props.bold ? { fontWeight: 'bold' } : { fontWeight: 'normal' }};
`

export const T26 = styled.span`
	font-size: 26px;
	color: ${props => props.color || '#000'};
	${props => props.bold ? { fontWeight: 'bold' } : { fontWeight: 'normal' }};
`

export const Label = styled.span`
	font-size: 10px;
	text-align: center;
	font-weight: bold;
	letter-spacing: 1px;
	padding: 4px 10px;
	color: #fff;
	border-radius: 5px;
	box-shadow: ${props => props.bg ? '0 10px 9px -6px' + props.bg : 'blue'};
	background: ${props => props.bg || 'blue'};
	text-transform: uppercase;
`


/* Inputs */

export const SmallInput = styled.input`
	height: ${props => props.height || '30px'};
	width: ${props => props.width || '150px'};
	min-height: 30px;
	min-width: 150px;
	border-radius: 6px;
	border: ${props => props.border || "1px solid #eee"};
	outline: 0;
    &:focus{
        outline: none;
    }
`;

export const MediumInput = styled.input`
	height: ${props => props.height || '40px'};
	width: ${props => props.width || '200px'};
	min-height: 40px;
	min-width: 200px;
	border-radius: 6px;
	border: ${props => props.border || "1px solid #eee"};
	outline: 0;
    &:focus{
        outline: none;
    } 
`;

export const LargeInput = styled.input`
	height: ${props => props.height || '50px'};
	width: ${props => props.width || '250px'};
	min-height: 50px;
	min-width: 250px;
	border-radius: 6px;
	border: ${props => props.border || "1px solid #eee"};
	outline: 0;
    &:focus{
        outline: none;
    }
`;


/* Buttons */

export const SmallPrimaryButton = styled.button`
	height: ${props => props.height || "30px"};
	width: ${props => props.width || "100px"};
	font-weight: bold;
	border-radius: 6px;
	border: 0;
	outline: none;
	color: white;
	background: ${props => props.bg || '#582CDB'};
	box-shadow: 0 12px 18px -9px ${props => props.bg || '#582CDB'};
	cursor: pointer;
	&:focus{
		outline: 0;
	}
`;

export const MediumPrimaryButton = styled.button`
	height: ${props => props.height || "45px"};
	width: ${props => props.width || "200px"};
	font-weight: bold;
	border-radius: 8px;
	border: 0;
	outline: none;
	color: white;
	background: ${props => props.bg || '#582CDB'};
	box-shadow: 0 12px 18px -9px ${props => props.bg || '#582CDB'};
	cursor: pointer;
	&:focus{
		outline: 0;
	}
`;

export const LargePrimaryButton = styled.button`
	height: ${props => props.height || "50px"};
	width: ${props => props.width || "250px"};
	font-weight: bold;
	border-radius: 10px;
	border: 0;
	outline: none;
	color: white;
	background: ${props => props.bg || '#582CDB'};
	box-shadow: 0 12px 18px -9px ${props => props.bg || '#582CDB'};
	cursor: pointer;
	&:focus{
		outline: 0;
	}
`;

/* Containers */

export const Layout = styled.div`
	margin: 30px 120px;
`

export const Container = styled.div`
	height: ${props => props.height || 'auto'};
	width: ${props => props.width || 'auto'};
`

export const FlexibleContainer = styled.div`
	margin: ${props => props.margin || '0px'};
	padding: ${props => props.padding || '0px'};
	${props => props.centerItems ? {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	} : null}
	${props => props.leftItems ? {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	} : null}
	${props => props.rightItems ? {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center'
	} : null}
`

export const FixedContainer = styled.div`
	height: ${props => props.height || 'auto'};
	width: ${props => props.width || 'auto'};
	margin: ${props => props.margin || '0px'};
	padding: ${props => props.padding || '0px'};
	${props => props.centerItems ? {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	} : null}
	${props => props.leftItems ? {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	} : null}
	${props => props.rightItems ? {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center'
	} : null}
`

export const CurvedContainer = styled.div`
	height: ${props => props.height || '0px'};
	width: ${props => props.width || '0px'};
	border-radius: ${props => props.borderRadius || '0px'};
`

export const ElevatedContainer = styled.div`
	height: ${props => props.height || '0px'};
	width: ${props => props.width || '0px'};
	box-shadow: ${props => props.boxShadow || '0px 10px 50px rgb(229, 231, 231)'};
`

export const CurvedElevatedContainer = styled.div`
	height: ${props => props.height || '0px'};
	width: ${props => props.width || '0px'};
	border-radius: ${props => props.borderRadius || '0px'};
	box-shadow: 0px 10px 50px rgb(229, 231, 231);
`

export const HorizontalGridContainer = styled.div`
	display: grid;
	grid-template-columns: ${props => props.columns || '1fr'};
	grid-gap: ${props => props.gap || '0px'};
`

export const VerticalGridContainer = styled.div`
	display: grid;
	grid-template-rows: ${props => props.rows || '1fr'};
	grid-gap: ${props => props.gap || '0px'};
`

export const HorizontalFlexContainer = styled.div`
	display: flex;
	flex-direction: row;
`

export const VerticalFlexContainer = styled.div`
	display: flex;
	flex-direction: column;
`

/* Wrappers */


export const AlignItemsWrapper = styled.div`
	${props => props.centerItems ? {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	} : null}
	${props => props.leftItems ? {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	} : null}
	${props => props.rightItems ? {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center'
	} : null}
`


/* Images */

export const CircularImage = styled.img`
	height: ${props => props.height || '0px'};
	width: ${props => props.width || '0px'};
	border-radius: 50%;
`

export const SquareImage = styled.img`
	height: ${props => props.height || '0px'};
	width: ${props => props.width || '0px'};
	border-radius: ${props => props.borderRadius || '5px'};
`

/* Custom components */

export const FilledInfoBox = styled.div`
	height: ${props => props.height || 'max-content'};
	width: ${props => props.width || 'max-content'};
	background: ${props => props.bg};
	color:  ${props => props.color};
    border: 2px solid ${props => props.border};
	font-weight: bold;
    border-radius: 5px;
    letter-spacing: 1px;
`