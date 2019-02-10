export const signIn = (creds) => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();
		firebase.auth().signInWithEmailAndPassword(
			creds.email,
			creds.password
		).then(response => {
			console.log(response)
			dispatch({type: 'LOGIN_SUCCESS'})
		}).catch(err => {
			console.log(err)
			dispatch({type: 'LOGIN_ERROR', err})
		})
	}
}

export const signOut = () => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();
		firebase.auth().signOut.then(() => {
			dispatch({type: 'SIGNOUT_SUCCESS'})
		})
	}
}

export const signUp = (user) => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
		.then(response => {
			console.log(response);
			return firebase.database().ref(`users/${response.user.uid}`).set({
				username: user.username, email: user.email
			})
		})
		.then(() => {
			dispatch({type: "SIGNUP_SUCCESS"})
		})
		.catch(error => {
			dispatch({type: 'SIGNUP_ERROR'})
		})
	}
}