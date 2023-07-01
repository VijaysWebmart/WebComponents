import { useState } from "react"
import Navbar from "../component/Navbar"
import { Link } from "react-router-dom"

const ViewComponent = () => {

    const [data, setData] = useState({

        id: 1,
        title: 'Dark Navbar',
        category: 'navbar',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        htmlCode: 'html code ... ',
        cssCode: 'css code...',
        jsCode: 'javascript code ...',
        img: 'https://media.geeksforgeeks.org/wp-content/uploads/20210815093553/Capture585.png',
        filePath: 'asdf',

    })
    return (<div>
        <Navbar />
        
        <div className="container my-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/" >Home</Link></li>
                <li class="breadcrumb-item"><Link to="/components" href="#">Component</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{data.title}</li>
            </ol>
        </nav>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">{data.title}</h2>
                {/*  Download resume button*/}
                {/*  Note: Set the link href target to a PDF file within your project*/}
                <a className="btn btn-primary px-2 py-2 px-md-4 py-md-3 " >
                    <div className="d-inline-block bi bi-download me-2"></div>
                    Download file
                </a>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4 d-flex justify-content-center align-items-start">


                    <img src={data.img} className="shadow" style={{ width: '90%', height: 'auto' }} />

                </div>

                <div className="col-md-6 mb-4">
                    <h3 >{data.title}</h3>
                    <span className="catlog-text fw-bold d-block mb-3">[ {data.category} ]</span>
                    <p className="text-muted">{data.description}</p>

                    <div className="alert alert-warning">
                        <p className="fw-bold">External Resoureces</p>
                        <ol>
                            <li> Bootstrap 5</li>
                            <li> Jquery v6</li>
                        </ol>
                    </div>
                </div>
                <div className="col-md-12">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">HTML Code</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">CSS Code</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">JavaScript Code</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active bg-dark text-light p-4" id="home" role="tabpanel" aria-labelledby="home-tab" style={{ minHeight: '350px' }}>{data.htmlCode}</div>
                        <div className="tab-pane fade bg-dark text-light p-4" id="profile" role="tabpanel" aria-labelledby="profile-tab" style={{ minHeight: '350px' }}>{data.cssCode}</div>
                        <div className="tab-pane fade bg-dark text-light p-4" id="contact" role="tabpanel" aria-labelledby="contact-tab" style={{ minHeight: '350px' }}>{data.jsCode}</div>
                    </div>
                </div>

            </div>
        </div>

    </div>)
}

export default ViewComponent