// Write all the code here
import React, { useState } from "react"; 
import {
    MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn,
    MDBIcon, MDBInput, MDBCheckbox,
    } from "mdb-react-ui-kit";

function Login() {
    const [justifyActive, setJustifyActive] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const tryLogin = () => {
        if(email==="a@example.com" && password==="1234") {
            window.location.href="/";
        }
        else {
            alert("Wrong Credentials.");
        }
    }

    const tryRegister = () => {
        setJustifyActive("login");
    }
    
    const handleJustifyClick = (value) => { if (value === justifyActive) {
        return;
    }
        setJustifyActive(value);
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between" >
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick("login")} active={justifyActive === "login"} >
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick("register")} active={justifyActive === "register"} >
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show="true">
                    <div className="text-center mb-3">
                        <p>{justifyActive === "login" ? "Sign in with:" : "Sign up with:"}</p>

                        <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>

                            <MDBBtn tag="a" color="none" className="m-1" style={{ color: "rgb(115, 95, 50)" }} >
                                <MDBIcon fab icon="facebook-f" size="lg" />
                            </MDBBtn>

                            <MDBBtn tag="a" color="none" className="m-1" style={{ color: "rgb(115, 95, 50)" }} >
                                <MDBIcon fab icon="twitter" size="lg" />
                            </MDBBtn>

                            <MDBBtn tag="a" color="none" className="m-1" style={{ color: "rgb(115, 95, 50)" }} >
                                <MDBIcon fab icon="google" size="lg" />
                            </MDBBtn>

                            <MDBBtn tag="a" color="none" className="m-1" style={{ color: "rgb(115, 95, 50)" }} >
                            <MDBIcon fab icon="github" size="lg" />
                            </MDBBtn>
                        </div>

                        <p className="text-center mt-3">or:</p>
                    </div>

                    {justifyActive === "register" && <><MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" />
                    <MDBInput wrapperClass="mb-4" label="Username" id="form1" type="text" /></>}
                    <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" onChange={(e) => setPassword(e.target.value)}/>

                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" 
                        label={justifyActive === "login" ? "Remember me" : "I have read and agree to the terms"}
                        />
                        {justifyActive === "login" && <a href="!#">Forgot password?</a>}
                    </div>

                    <MDBBtn className="mb-4 w-100" style={{ backgroundColor: "rgb(198, 151, 73)" }}
                    onClick={justifyActive === "login" ? tryLogin : tryRegister}>
                        {justifyActive === "login" ? "Sign in" : "Sign up"}</MDBBtn>

                    {justifyActive === "login" && <p className="text-center">
                        Not a member? <a href="#!">Register</a>
                    </p>}
                </MDBTabsPane>

            </MDBTabsContent>
        </MDBContainer>
    );
}

export default Login;