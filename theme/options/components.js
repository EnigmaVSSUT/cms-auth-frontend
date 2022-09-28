const components = {
	MuiInput: {
		defaultProps: {
			disableUnderline: true,
		}
	},
	MuiButtonBase: {
		defaultProps: {
			disableRipple: true,
		}
	},
	MuiButton: {
		defaultProps: {
			disableElevation: true,
		},
		styleOverrides: {
			root: {
				padding: '10px 16px'
			}
		}
	}
}

export default components
