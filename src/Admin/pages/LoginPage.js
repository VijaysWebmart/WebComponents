import React from "react"
const LoginPage = () => {
    return (<div className="wraper">
        <div className="card cs-card">
            <di className="card-header">
                <span>Login</span>
            </di>
            <div className="card-body">
                <div class="form-floating mb-3">
                    <input class="form-control" id="name" type="text" placeholder="Enter your name..." />
                        <label for="name">Full name</label>
                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
            </div>
        </div>
    </div>)
}
export default LoginPage