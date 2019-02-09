import React from 'react';
//import axios from 'axios';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/iconic/css/material-design-iconic-font.min.css';
import './vendor/animate/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animsition/css/animsition.min.css';
import './vendor/select2/select2.min.css';
import './vendor/daterangepicker/daterangepicker.css';
import './css/main.css';
import './css/util.css';
import './custom.css';


class Auth extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			logName: '',
			logPass: '',
			SignUpName: '',
			SignUpPass: '',
			SignUpConfirm: '',
			SignUpEmail: '',
			log: true,
		};
	}

	componentDidMount(){}

	swapLog = (event) => {
		event.preventDefault()
		this.setState({
			log: !this.state.log,
			logName: '',
			logPass: '',
			SignUpName: '',
			SignUpPass: '',
			SignUpConfirm: '',
			SignUpEmail: '',
		})
	}

	handleChange = event => {
 	   this.setState({[event.target.name]: event.target.value})
 	 }

	render() {
		return (
			<div>
				{this.state.log ? (
					<div class="limiter">
						<div class="container-login100 custom">
							<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
								<form class="login100-form validate-form">
									<span class="login100-form-title p-b-49">
										Login
									</span>

									<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
										<span class="label-input100">Username</span>

										<input 
											class="input100" 
											type="text" 
											name="logName" 
											placeholder="Type your username"
											value={this.state.logName}
											onChange={this.handleChange}
										/>

										<span class="focus-input100" data-symbol="&#xf206;"></span>
									</div>

									<div class="wrap-input100 validate-input" data-validate="Password is required">
										<span class="label-input100">Password</span>

										<input 
											class="input100" 
											type="password" 
											name="logPass" 
											placeholder="Type your password"
											value={this.state.logPass}
											onChange={this.handleChange}
										/>

										<span class="focus-input100" data-symbol="&#xf190;"></span>
									</div>
									
									<div class="text-right p-t-8 p-b-31">
										<a href="#">
											Forgot password?
										</a>
									</div>
									
									<div class="container-login100-form-btn">
										<div class="wrap-login100-form-btn">
											<div class="login100-form-bgbtn"></div>
											<button class="login100-form-btn">
												Login
											</button>
										</div>
									</div>

									<div class="txt1 text-center p-t-54 p-b-20">
										<span>
											Or Sign Up Using
										</span>
									</div>

									<div class="flex-c-m spacing">
										<a href="#" class="login100-social-item bg1">
											<i class="fa fa-facebook"></i>
										</a>

										<a href="#" class="login100-social-item bg2">
											<i class="fa fa-twitter"></i>
										</a>

										<a href="#" class="login100-social-item bg3">
											<i class="fa fa-google"></i>
										</a>
									</div>

									<div class="flex-col-c ">
										<span class="txt1 p-b-17">
											Or Sign Up Using
										</span>

										<button class="txt2" onClick={this.swapLog}>
											Sign Up
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>

					) : 


					<div class="limiter">
						<div class="container-login100 custom">
							<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
								<form class="login100-form validate-form">
									<span class="login100-form-title p-b-49">
										Sign Up
									</span>

									<div class="wrap-input100 validate-input m-b-23">
										<span class="label-input100">Username</span>

										<input 
											class="input100" 
											type="text" 
											name="SignUpName" 
											placeholder="Type your username"
											value={this.state.SignUpName}
											onChange={this.handleChange}
										/>

										<span class="focus-input100" data-symbol="&#xf206;"></span>
									</div>


									<div class="wrap-input100 validate-input m-b-23">
										<span class="label-input100">Email</span>

										<input 
											class="input100" 
											type="text" 
											name="SignUpEmail" 
											placeholder="Type your email"
											value={this.state.SignUpEmail}
											onChange={this.handleChange}
										/>

										<span class="focus-input100" data-symbol="&#xf206;"></span>
									</div>

									<div class="wrap-input100 validate-input">
										<span class="label-input100">Password</span>

										<input 
											class="input100" 
											type="password" 
											name="SignUpPass"
											placeholder="Type your password"
											value={this.state.SignUpPass}
											onChange={this.handleChange}
										/>

										<span class="focus-input100" data-symbol="&#xf190;"></span>
									</div>


									<div class="wrap-input100 validate-input m-b-23 top">
										<span class="label-input100">Password Confirm</span>

										<input 
											class="input100" 
											type="text" 
											name="SignUpConfirm" 
											placeholder="Confirm your password"
											value={this.state.SignUpConfirm}
											onChange={this.handleChange}
										/>

										<span class="focus-input100" data-symbol="&#xf206;"></span>
									</div>
									
									<div class="container-login100-form-btn">
										<div class="wrap-login100-form-btn">
											<div class="login100-form-bgbtn"></div>
											<button class="login100-form-btn">
												Sign Up
											</button>
										</div>
									</div>
									<div class="flex-col-c top">
										<button class="txt2" onClick={this.swapLog}>
											LogIn
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				}
				
			</div>
		)
	}
}

export default Auth;
