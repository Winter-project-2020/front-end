import React from 'react';
import { Button, Form, FormField, FormGroup } from 'semantic-ui-react';
function LoginForm() {

	return(
		<Form>
			{/* <FormField>
				<label>Emal Address</label>
				<input placeholder="Email Address" />
			</FormField> */}
			<FormGroup>
				<Form.input label="Emal Address" placeholder="Email Address"/>
				<Form.input label="Password" placeholder="Password" />
			</FormGroup>
			<Form.Button>Submit</Form.Button>
		</Form>
	);
}

export default LoginForm;