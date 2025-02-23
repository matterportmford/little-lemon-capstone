import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';
import { useForm } from 'react-hook-form';


const Login = (props) => {
	const context = useContext(GlobalLoginContext);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const goTo = useNavigate();

	function forwardUser(destination) {
		if (destination && destination.length > 0) {
			goTo({destination}, { replace: true });
		}
		else {
			goTo("/my-account", { replace: true });
		}
	}

	const onSubmit = async e => {

		/* Add server connection here and remove hardcoded result once set up */

		const result = {
			firstName: "Alice",
			lastName: "Waters"
		}
		context.setName(result.firstName);
		context.setLoginState(true);
		forwardUser(props.destination);
	};

	
	return (
		<article  className={`container login`}>
			<Helmet>
				<title>Login</title>
				<description>Login to see your account, order online, or make a reservation.</description>
			</Helmet>
			<div className="title">
				<h1>Login</h1>
			</div>
			<form className={`login-form__container form-container`} onSubmit={handleSubmit(onSubmit)}>
				
				<div className="form__field-group">
					<label className="required" htmlFor='username'>Username: </label>
					{errors.username && (
						<p className="form__error-message">{errors.username.message}</p>
					)}
					<input
						aria-required="true" 
						type="text" 
						name="username"
						placeholder="Enter your username here." 
						{...register("username", {
							required: "Username is required.",
							minLength: {
								value: 5,
								message: "Username must be at least 5 characters long."
							  }
						})}
					/>
				</div>
				<div className="form__field-group">
					<label className="required" htmlFor="password">Password: </label>
					{errors.password && (
						<p className="form__error-message">{errors.password.message}</p>
					)}
					<input
						aria-required="true" 
						type="password" 
						name="password"
						placeholder="Enter your password here." 
						{...register("password", {
							required: "Password is required.",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters long."
							  }
						})}
					/>
				</div>
				<button type="submit" className={`login__submit-button submit-button button`}>Login</button>
				<p className="no-account-message">
                    Need to <NavLink to="/create-account">creat an account</NavLink>?
                </p>
			</form>
		</article>
	);
};

export default Login;