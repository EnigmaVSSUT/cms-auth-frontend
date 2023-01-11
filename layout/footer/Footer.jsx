import { Stack, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Stack
			direction='row'
			justifyContent='center'
			padding='16px'
			borderTop='1px solid'
		>
			<Typography>Enigma VSSUT &copy; 2023</Typography>
		</Stack>
	)
}

export default Footer;