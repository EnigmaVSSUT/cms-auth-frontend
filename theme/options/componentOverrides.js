const componentOverrides = {
	MuiAppBar: {
		defaultProps: {
			elevation: 0
		}
	},
	MuiButton: {
		defaultProps: {
			disableRipple: true
		},
		styleOverrides: {
			root: {
				width: 'max-content',
				padding: '10px 24px',
				textTransform: 'none',
				borderRadius: '100px'
			}
		}
	}
}

export default componentOverrides;