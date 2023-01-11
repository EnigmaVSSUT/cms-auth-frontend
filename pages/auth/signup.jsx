import { useEffect } from "react"
import Container from "../../components/layout/Container"
import NonAuthLayout from "../../layout/NonAuthLayout"

const SignUp = () => {
	const dev = process.env.NODE_ENV === 'development'

	return (
		<Container>
			Sign UP

			{ dev && <>Dev</> }
		</Container>
	)
}

SignUp.getLayout = function(page) {
	return (
		<NonAuthLayout>
			{page}
		</NonAuthLayout>
	)
}

export default SignUp