import { Link } from "react-router-dom"

const AppHeader = () => {
    return (<>
        {/*  Header */}
        <header className="py-5">
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xxl-5">
                        {/*  Header text content */}
                        <div className="text-center text-xxl-start">
                            <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Design &middot; Development &middot; Modification</div></div>
                            <div className="fs-3 fw-light text-muted">I can help you to create Custome Html and boostrap Component  for your website</div>
                            <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Get online and grow fast</span></h1>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <Link to='/components' className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" >Components</Link>
                                <Link to='/projects' className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="projects.html">Projects</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7">
                        {/*  Header profile picture */}
                        <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                            <div className="profile bg-gradient-primary-to-secondary">
                                {/*  TIP: For best results, use a photo with a transparent background like the demo example below */}
                                {/*  Watch a tutorial on how to do this on YouTube (link) */}
                                <img className="profile-img" src="assets/profile.png" alt="..." />
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>)
}

export default AppHeader