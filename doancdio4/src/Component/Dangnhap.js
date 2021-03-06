import React from 'react';
import fire from './fire';
import firebase from 'firebase';
// import { Redirect } from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     NavLink
// } from "react-router-dom";
// class Dangnhap extends Component {
// constructor() {
//     super();
//     this.state = {
//         name: " ",
//         password: " ",
//         nameError: " ",
//         passwordError: " ",
//     }
// }
// valid() {

//     if (this.state.name.includes(" ") && this.state.password.includes(" ")) {
//         this.setState({ nameError: "please enter the name", passwordError: "please enter the password" })
//     }
//     if (this.state.name === 'javeriya' && this.state.password === '123') {
//         window.location.pathname = '/signup';

//     }
//     else {
//         if (!this.state.name === 'javeriya') {
//             this.setState({ nameError: "please enter the correct name" });
//         }
//         else if (!this.state.password === '123') {
//             this.setState({ passwordError: "please enter the correct password" });
//         }
//     }

// }
// submit() {

//     if (this.valid()) {
//         alert("valid");
//     }

// }

// render() {    
const Dangnhap = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    const SignInWithFarebaseGoogle = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(google_provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err);
            })
    }
     const SignInWithFarebaseFacebook = () => {
         var facebook_provider = new firebase.auth.FacebookAuthProvider();
        
         fire.auth().signInWithPopup(facebook_provider)
             .then((re) => {
                 console.log(re);
             })
             .catch((err) => {
                 console.log(err);
             })
     }
    return (
        <div>
            <br />
            {/* <img src="Picture/Lienhe.png" width="700px" /> */}
            <br />
            <section className="login">
                <div className="loginContainer">
                    <h1 >????NG NH???P</h1>
                    <br />
                    <label>T??n ng?????i d??ng</label> <br />
                    <input
                        type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <p className="errorMsg">{emailError}</p>
                    <br />
                    <label>M???t kh???u</label> <br />
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <p className="errorMsg" >{passwordError}</p>
                    <br />
                    {/* <a>Qu??n M???t Kh???u?</a><a href="test.html">Nh???n v??o ????y</a> */}
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                <button onClick={handleLogin}>????ng nh???p</button>
                                <p>
                                    Ch??a c?? t??i kho???n?
                                    <span onClick={() => setHasAccount(!hasAccount)}>????ng k??</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleSignup}>????ng k??</button>
                                <p>
                                    ???? c?? t??i kho???n ?
                                    <span onClick={() => setHasAccount(!hasAccount)}>????ng nh???p</span>
                                </p>
                            </>
                        )}
                    </div>
                    <div className="btnContainer">
                        <button onClick={SignInWithFarebaseGoogle}><i className="fab fa-google"></i>          ????ng nh???p b???ng Google</button>
                    </div>
                    <div className="btnContaniner">
                        <button onClick={SignInWithFarebaseFacebook}><i className="fab fa-facebook"></i>         ????ng nh???p b???ng Facebook</button>
                    </div>
                    {/* <div className="hu"><button type="submit">????ng Nh???p B???ng Facebook</button></div> */}
                </div>
            </section>
        </div>
    );
}
//     }
// }

export default Dangnhap;