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
	text-align: center;
	color: ${props => props.color || '#000'};
	${props => props.bold ? { fontWeight: 'bold' } : { fontWeight: 'normal' }};
	${props => props.spacing ? { letterSpacing: props.spacing } : { letterSpacing: 'normal' }};
	${props => props.transform ? { textTransform: 'uppercase' } : { textTransform: 'none' }};
	${props => props.middle ? {
		verticalAlign: 'middle',
		lineHeight: props.lineHeight
	} : null}
`

export const T16 = styled.span`
	font-size: 16px;
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
	max-height: 40px;
	max-width: 150px;
	padding: ${props => props.padding || "2px"};
	border: ${props => props.border || "none"};
`;

const MediumInput = styled.input`
	max-height: 50px;
	max-width: 200px;
	padding: ${props => props.padding || "4px"};
	border: ${props => props.border || "none"}; 
`;

export default MediumInput;


export const LargeInput = styled.input`
	max-height: 50px;
	max-width: 250px;
	padding: ${props => props.padding || "4px"};
	border: ${props => props.border || "none"};
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
	background: ${props => props.bg ||'#582CDB'};
	box-shadow: 0 12px 18px -9px ${props => props.bg ||'#582CDB'};
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
	background: ${props => props.bg ||'#582CDB'};
	box-shadow: 0 12px 18px -9px ${props => props.bg ||'#582CDB'};
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
	background: ${props => props.bg ||'#582CDB'};
	box-shadow: 0 12px 18px -9px ${props => props.bg ||'#582CDB'};
	cursor: pointer;
	&:focus{
		outline: 0;
	}
`;

/* Containers */

export const Layout = styled.div`
	margin: 30px 70px 30px 70px;
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

export const Image = styled.img`
	height: ${props => props.height || '0px'};
	width: ${props => props.width || '0px'};
	margin: ${props => props.margin || '0px'};
	border-radius: ${props => props.borderRadius || '0px'};
`


export const BorderedImage = styled.img`
	height: ${props => props.height || '0px'};
	width: ${props => props.width || '0px'};
	margin: ${props => props.margin || '0px'};
	border-radius: ${props => props.borderRadius || '0px'};
	border: ${props => props.border || 'none'}
`

export const ElevatedImage = styled.img`
	height: ${props => props.height || '0px'};
	width: ${props => props.width || '0px'};
	margin: ${props => props.margin || '0px'};
	border-radius: ${props => props.borderRadius || '0px'};
	box-shadow: 0px 10px 50px rgb(229, 231, 231);
` 