import { useState } from 'react';
import { Data } from './Data';
import { Link } from 'react-router-dom';

const ComponentCard = ({records}) => {

    const [block, setBlock] = useState(records);

    return (<div className="row px-3">
        {
            block.map((data, index) =>

                <div class="col-md-4" key={index}>
                   <Link to={`/view-component`} style={{textDecoration:'none'}} >
                    <div class="card shadow border-0 rounded-4 mb-4">
                        <div class="card-body p-2">
                            <div class="row align-items-center gx-5">
                                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div class="bg-light p-4 rounded-4 d-flex align-items-end" style={{backgroundImage:'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)),url(https://onaircode.com/wp-content/uploads/2020/01/Navigation-with-Sub-Navigation.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPostion:'center',height:'150px'}}>
                                  
                                        <div class="small fw-bolder  text-light">{data.title}</div>
                                        <div class="small text-muted d-none">{data.category}</div>
                                        <div class="small text-muted text-truncate d-none" >{data.description}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            )
        }</div>
    )
}
export default ComponentCard