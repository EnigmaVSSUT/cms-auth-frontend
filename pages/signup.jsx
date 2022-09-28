import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import CreateAccount from "../components/signup/CreateAccount";
import CreateProfile from "../components/signup/CreateProfile";

const SignUp = () => {
	const [stepsCompleted, setStepsCompleted] = useState(0)

	useEffect(() => {
		const res = Cookies.set('user', 'rv', {
			domain: '.enigmavssut.com',
			expires: 30
		})
		console.log(res)
	}, [])

	return (
		<Stack
			width='100%'
			minHeight='100vh'
			justifyContent='center'
			alignItems='center'
			padding='24px'
		>
			{/* <CreateAccount /> */}
			<CreateProfile />
		</Stack>
	)
}
 
export default SignUp;
