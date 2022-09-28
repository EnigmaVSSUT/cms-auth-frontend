import { Stack, Typography } from "@mui/material";
import { useFormik } from "formik";

const CreateProfile = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			year: '',
			branch: '',
			gender: ''
		},
		onSubmit: values => {
			console.log(values)
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
			<Typography
				variant='h4'
			>
				Create profile
			</Typography>
			<Stack
				gap='24px'
			>
				
			</Stack>
		</Stack>
	);
}

export default CreateProfile;
