import React, { useState, useEffect } from "react";
const AddComponent = () => {

    const [data, setData] = useState({
        'name': '',
        'category': '',
        'thumdnail': 'asdf',
        'html_code': '',
        'css_Code': '',
        'js_Code': '',
        'resoures': '',
        'file_path': 'asdf',

    });

    let name, value;
    const insertData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setData({ ...data, [name]: value })

    }

    const hundleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/htmlComponentappapi/index.php/api/create-component', {
                method: 'POST',
                headers: {
                    'X-API-KEY': 'testapi@2023'
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((data) => console.log(data)).catch((error) => console.error(error))
    }

    return (<div>
        <h1 className="text-center my-5">Add new Component</h1>
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={(e) => hundleSubmit(e)}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" name="name" id="name" className="form-control" value={data.name} onChange={(event) => insertData(event)} />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input type="text" name="category" id="category" className="form-control" value={data.category} onChange={(event) => insertData(event)} />
                            </div>
                            <div className="form-group d-flex justify-content-between align-items-center py-3">
                                <label>Thumbnail</label>
                                <input type="file" name="thumdnail" id="thumdnail" />
                            </div>
                            <div className="form-group">
                                <label>HTML Code</label>
                                <input type="text" name="html_code" id="html_code" className="form-control" value={data.html_code} onChange={(event) => insertData(event)} />
                            </div>
                            <div className="form-group">
                                <label>Css Code</label>
                                <input type="text" name="css_Code" id="css_Code" className="form-control" value={data.css_Code} onChange={(event) => insertData(event)} />
                            </div>
                            <div className="form-group">
                                <label>javascript Code</label>
                                <input type="text" name="js_Code" id="js_Code" className="form-control" value={data.js_Code} onChange={(event) => insertData(event)} />
                            </div>
                            <div className="form-group">
                                <label>resoures</label>
                                <input type="text" name="resoures" id="resoures" className="form-control" value={data.resoures} onChange={(event) => insertData(event)} />
                            </div>
                            <div className="form-group py-3 d-flex justify-content-between">
                                <label>file_path</label>
                                <input type="file" name="file_path" />
                            </div>

                            <div className="d-fkex justify-content-end">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default AddComponent