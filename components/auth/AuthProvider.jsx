const AuthProvider = ({ children }) => {
	const token = true
	
	return (
		<>
			{
				token ? (
					children
				) : (
					'Login to continue'
				)
			}		
		</>
	)
}

export default AuthProvider