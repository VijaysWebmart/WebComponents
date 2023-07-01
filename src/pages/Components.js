import React, { useState } from "react"
import ComponentCard from "../component/ComponentCard"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { Data } from "../component/Data"
const Components = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(9);
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;


    const records = Data.slice(firstIndex, lastIndex)

    const nPages = Math.ceil(Data.length / recordsPerPage);

    const numbers = [...Array(nPages + 1).keys()].slice(1);

    // previus Page 
    const prePage = (e) => {
        e.preventDefault();
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // Next Page 
    const nextPage = (e) => {
        e.preventDefault();
        if (currentPage !== 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const selectNoPages = (e) => {
        setRecordsPerPage(e.target.value);
        setCurrentPage(1)
    }

    const cPage = (id) => {
        setCurrentPage(id)
    }

    return (<div>
        <Navbar />
        <div className="container py-5">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Component</li>

                </ol>
            </nav>
            <div className="row">
                <div className="col-md-3 py-3">
                    <div className="card shadow border-0 rounded-4 p-3">
                        <p className="mb-3 ml-3 d-block text-mutted">Category</p>

                        <ol class="list-group list-group-numbered ">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Subheading</div>

                                </div>
                                <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Subheading</div>

                                </div>
                                <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Subheading</div>

                                </div>
                                <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="">
                        <div className="mb-5">
                            <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Component</span></h1>
                        </div>
                    </div>
                    {/*here i have display html component cards */}
                    <ComponentCard records={records} />
                </div>
            </div>

            {/* Pagination */}

            <div className="d-flex justify-content-end">
                <nav aria-label="Page navigation example ">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#" onClick={(e) => prePage(e)}>Previous</a></li>
                        {
                            numbers.map((no, id) =>
                                <li className={`page-item ${currentPage === no ? 'active' : ''}`} ><a class="page-link" href="#" key={id} onClick={() => cPage(no)}>{no}</a></li>
                            )
                        }

                        <li class="page-item"><a class="page-link" href="#" onClick={(e) => nextPage(e)}>Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <Footer />
    </div>)
}
export default Components