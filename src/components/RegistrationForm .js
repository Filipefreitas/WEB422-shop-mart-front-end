import {useState, useEffect} from 'react'

const RegistrationForm = () => 
{
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName : ""
        , lastName : ""
        , email: ""
        , phoneNumbers: ""
        , password: ""
        , confirmPassword: ""
        , firstNameErr: ""
        , lastNameErr: ""
        , emailErr: ""
        , passwordErr: ""
        , success: ""
    });

    const onCreateAccount = (evt)=>{

        evt.preventDefault();

        fetch("http://localhost:4000/users", {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(json=>{
              setFormData({
                firstName : ""
                , lastName : ""
                , email: ""
                , phoneNumbers: ""
                , password: ""
                , confirmPassword : ""
                , firstNameErr: json.firstNameErr
                , lastNameErr: json.lastNameErr
                , emailErr: json.emailErr
                , passwordErr: json.passwordErr
                , success: json.message
            })  
        })
        .then((checkStatus))
        .catch(err=>{
            console.log(`Error ${err}`)
        })

        function checkStatus (response) 
        {
            if (response.status >= 200 && response.status < 300) 
            {
              return response
            }
            else 
            { 
              var error = new Error(response.statusText)
              error.response = response
              throw error
            }
        }  
    }
      
    return (
        <section id="register-section title">

        <div className= "form-container horizontal-center">
        
            <h3>Register</h3>
            <span htmlFor="sucessMessage" className="sucess-message">{formData.success}</span>

            <form action="" onSubmit={onCreateAccount}>

                <div className="form-control">
                    <label htmlFor="firstName" className="text-left-alligned">First Name</label>
                    <input type="text" id="firstName" value={formData.firstName} onChange={(evt)=>{
                        setFormData({...formData, firstName : evt.target.value});
                    }}/>
                    <span htmlFor="errorMessage" className="text-left-alligned">{formData.firstNameErr}</span>
                </div>

                <div className="form-control">
                    <label htmlFor="lastName" className="text-left-alligned">Last Name</label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={(evt)=>{
                        setFormData({...formData, lastName : evt.target.value});
                    }}/>
                    <span htmlFor="errorMessage" className="text-left-alligned">{formData.lastNameErr}</span>
                </div>

                <div className="form-control">
                    <label htmlFor="email" className="text-left-alligned">Email</label>
                    <input type="text" id="email"  value={formData.email} onChange={(evt)=>{
                        setFormData({...formData, email : evt.target.value});
                    }}/>
                    <span htmlFor="errorMessage" className="text-left-alligned">{formData.emailErr}</span>
                </div>

                <div className="form-control">
                    <label htmlFor="phoneNumbers" className="text-left-alligned">Phone Numbers</label>
                    <input type="text" id="phoneNumbers"  value={formData.phoneNumbers} onChange={(evt)=>{
                        setFormData({...formData, phoneNumbers : evt.target.value});
                    }}/>
                </div>

                <div className="form-control">
                    <label htmlFor="password" className="text-left-alligned">Password</label>
                    <input type="password" id="password" value={formData.password} onChange={(evt)=>{
                        setFormData({...formData, password : evt.target.value});
                    }}/>
                    <span htmlFor="errorMessage" className="text-left-alligned">{formData.passwordErr}</span>
                </div>

                <div className="form-control">
                    <label htmlFor="cpassword" className="text-left-alligned">Confirm Password</label>
                    <input type="password" id="cpassword"  value={formData.confirmPassword} onChange={(evt)=>{
                        setFormData({...formData, confirmPassword : evt.target.value});
                    }}/>
                </div>

                <div className="form-control">
                    <button className="btn btn-submit" type="submit">Create Account</button>
                </div>

            </form>

        </div>

    </section>
    )
}

export default RegistrationForm