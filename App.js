import { useFormik } from "formik";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as yup from "yup";

export default function App() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: yup.object({
			email: yup
				.string()
				.email("Invalid email address")
				.required("Required"),
			// password: yup.string().required("Required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<View style={styles.container}>
			<Text>Correo eléctronico</Text>
			<TextInput
				style={styles.input}
				onBlur={formik.handleBlur("email")}
				onChangeText={formik.handleChange("email")}
				value={formik.values.email}
			/>
			{formik.errors.email && formik.touched.email ? (
				<Text style={styles.error}>{formik.errors.email}</Text>
			) : null}
			<Button title="ENVIAR" onPress={formik.handleSubmit} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		backgroundColor: "#ddd",
		width: "100%",
		padding: 10,
	},
	error: {
		color: "red",
	},
});
