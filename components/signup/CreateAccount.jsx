import { Stack, Typography, Button, TextField, Box } from "@mui/material";
import { useFormik } from "formik";

const CreateAccount = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: (values) => {
			console.log('submit', values)
		}
	})

	return (
		<Stack
			width='100%'
			maxWidth='500px'
			border='1px solid'
			borderColor='gray'
			borderRadius='8px'
			padding='48px 16px'
			gap='32px'
		>
			<Stack
				gap='16px'
				alignItems='center'
			>
				<Box 
					component='img'
					src='/logo/enigma_contained.png'
					sx={{
						width: '80px'
					}}
				/>
				<Typography
					variant='h4'
				>
					Create account
				</Typography>
			</Stack>
			<Stack
				gap='24px'
			>
				<TextField 
					name='email'
					placeholder='Enter email'
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				<TextField 
					name='password'
					placeholder='Enter password'
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
			</Stack>
			<Stack>
				<Button
					variant='contained'
					// padding=''
				>
					Sign up
				</Button>
			</Stack>
		</Stack>
	);
}

export default CreateAccount;
