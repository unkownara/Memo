import styled from 'styled-components';

/* Text styles */
export const H1 = styled.h1`
	font-size : 36px;
	font-weight: bold;
	color: #000
`;

export const H2 = styled.h2`
	font-size : 32px;
	font-weight: bold;
	color: #000
`;

export const H3 = styled.h3`
	font-size : 28px;
	font-weight: bold;
	color: #000
`;

export const H4 = styled.h4`
	font-size: 24px;
	font-weight: bold;
	color: #000
`;

export const H5 = styled.h5`
	font-size: 20px;
	font-weight: bold;
	color: #000
`;

export const H6 = styled.h6`
	font-size: 18px;
	font-weight: bold;
	color: #000
`;

export const P1 = styled.p`
	font-size: 22px;
	font-weight: semi-bold;
	color: #000
`;

export const P2 = styled.p`
	font-size: 20px;
	font-weight: semi-bold;
	color: #000
`;

export const P3 = styled.p`
	font-size: 18px;
	font-weight: semi-bold;
	color: ${props => props.color || "#000"};
`;

export const P4 = styled.p`
	font-size: 16px;
	font-weight: semi-bold;
	color: #000
`;

export const P5 = styled.p`
	font-size: 14px;
	font-weight: semi-bold;
	color: #000
`;

export const P11 = styled.p`
	font-size: 22px;
	font-weight: normal;
	color: #000
`;

export const P12 = styled.p`
	font-size: 20px;
	font-weight: normal;
	color: #000
`;

export const P13 = styled.p`
	font-size: 18px;
	font-weight: normal;
	color: #000
`;

export const P14 = styled.p`
	font-size: 16px;
	font-weight: normal;
	color: #000
`;


/* Inputs */

export const SmallInput = styled.input`
	max-height: 40px;
	max-width: 300px;
	padding: ${props => props.padding || "2px"};
	border: ${props => props.border || "none"};
`;

const MediumInput = styled.input`
	max-height: 50px;
	max-width: 350px;
	padding: ${props => props.padding || "4px"};
	border: ${props => props.border || "none"}; 
`;

export default MediumInput;


export const LargeInput = styled.input`
	max-height: 50px;
	max-width: 400px;
	padding: ${props => props.padding || "4px"};
	border: ${props => props.border || "none"};
`;


/* Buttons */

export const SmallPrimaryButton = styled.button`
	height: ${props => props.height || "40px"};
	width: ${props => props.width || "150px"};
	min-height: 30px;
	min-width: 150px;
	font-weight: bold;
	border-radius: 6px;
	border: 0;
	outline: none;
	color: white;
	background-color: #582CDB;
	box-shadow: 0 12px 18px -9px #582CDB;
	cursor: pointer;
`;

export const MediumPrimaryButton = styled.button`
	height: ${props => props.height || "45px"};
	width: ${props => props.width || "200px"};
	min-height: 35px;
	min-width: 200px;
	font-weight: bold;
	border-radius: 8px;
	border: 0;
	outline: none;
	color: white;
	background-color: #582CDB;
	box-shadow: 0 12px 18px -9px #582CDB;
	cursor: pointer;
`;

export const LargePrimaryButton = styled.button`
	height: ${props => props.height || "50px"};
	width: ${props => props.width || "250px"};
	min-height: 40px;
	min-width: 240px;
	font-weight: bold;
	border-radius: 10px;
	border: 0;
	outline: none;
	color: white;
	background-color: #582CDB;
	box-shadow: 0 12px 18px -9px #582CDB;
	cursor: pointer;
`;