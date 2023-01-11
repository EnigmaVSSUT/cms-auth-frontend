import { useEffect } from "react"
import Container from "../../components/layout/Container"

const SignUp = () => {
	const dev = process.env.NODE_ENV === 'development'

	return (
		<Container>
			Sign UP

			{ dev && <>Dev</> }
		</Container>
	)
}

export default SignUp