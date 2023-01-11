import { AppBar, Button, Stack, Typography } from "@mui/material";
import Container from "../../components/layout/Container";
import { useEffect, useState } from "react";

const NonAuthAppBar = () => {
	return (
		<AppBar
			position='sticky'
			color='black'
		>
			<Container>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					padding='16px'
				>
					<Typography
						color='text.nav'
					>
						Enigma VSSUT 
					</Typography>
					<Button
						variant='contained'
					>
						Sign In
					</Button>
				</Stack>
			</Container>
		</AppBar>
	);
}

export default NonAuthAppBar;