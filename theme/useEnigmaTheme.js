import { createTheme } from "@mui/material";
import lightPaletteOptions from "./options/lightPaletteOptions";
import typographyOptions from "./options/typographyOptions";
import componentOverrides from "./options/componentOverrides";

const useEnigmaTheme = () => {
	const theme = createTheme({
		components: componentOverrides,
		typography: typographyOptions,
		palette: lightPaletteOptions
	})

	return theme
}

export default useEnigmaTheme;