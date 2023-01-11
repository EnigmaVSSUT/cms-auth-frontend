import { Stack } from "@mui/material";
import NonAuthAppBar from "./appbar/NonAuthAppBar";
import Footer from "./footer/Footer";

const NonAuthLayout = ({ children }) => {
	return (
		<Stack
			minHeight='100vh'
		>
			<NonAuthAppBar />
			<Stack
				flexGrow={1}
			>
				{ children }
			</Stack>
			<Footer />
		</Stack>
	);
}

export default NonAuthLayout;