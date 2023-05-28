import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderAdmin } from '../components/HeaderAdmin';
import { SidebarAdmin } from '../components/SidebarAdmin';

export class AdminBatchAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllBatch: [],
        };
    }
    async getBatch() {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            var res = await fetch('https://localhost:7156/api/AdminBatch/GetListBatch', 
            { method: 'get',headers:myHeaders });
            var data = await res.json();
            this.setState({
                AllBatch: data,
            });
        } catch (err) {
            console.log(err);
        }
    }
    
    BatchDashnoard() {
        console.log(this.state.AllBatch);
        const resultBatch = this.state.AllBatch.map((e,index) => {
            
            const status = ()=>{
                if(new Date(e.toDate).toLocaleDateString() < new Date().toLocaleDateString())
                {
                    return(<span className="label label-success">Finished</span>)
                }else{
                    return(<span className="label label-info">Unfinished</span>)
                }
            }
            return (
                <tr key={index}>
                    <td>
                        <Link to={`../AdminViewBatch/${e.id}`}>
                            <span className="list-enq-name">{e.name}</span>
                        </Link>
                    </td>
                    <td>{e.batchCode}</td>
                    <td>{new Date(e.fromDate).toLocaleDateString()}</td>
                    <td>{new Date(e.toDate).toLocaleDateString()}</td>
                    <td>{e.scholars.length}</td>
                    <td>
                        {status()}
                    </td>
                    <td>
                        <Link to={`../AdminEditBatch/${e.id}`} className="label label-warning text-white">
                            Edit
                        </Link>
                    </td>
                </tr>
            );
        });
        return resultBatch;
    }
    componentDidMount() {
        this.getBatch();
    }
    render() {
        return (
            <div>
                <HeaderAdmin />
                {/*== BODY CONTNAINER ==*/}
                <div className="container-fluid sb2">
                    <div className="row">
                        {/*== BODY INNER CONTAINER ==*/}
                        <SidebarAdmin />
                        {/*== BODY INNER CONTAINER ==*/}
                        <div className="sb2-2" style={{height:1500}}>
                            {/*== breadcrumbs ==*/}
                            <div className="sb2-2-2">
                                <ul>
                                    <li>
                                        <Link to="../Admin">
                                            <i className="fa fa-home" aria-hidden="true" /> Home
                                        </Link>
                                    </li>
                                    <li className="active-bre">
                                        <span>Batch</span>
                                    </li>
                                    <li className="page-back">
                                        <Link to="../Admin">
                                            <i className="fa fa-backward" aria-hidden="true" /> Back
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/*== User Details ==*/}
                            <div className="sb2-2-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="box-inn-sp">
                                            <div className="inn-title">
                                                <h4>List of Batches</h4>
                                            </div>
                                            <div className="tab-inn">
                                                <div className="table-responsive table-desi">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Batch Name</th>
                                                                <th>Batch Code</th>
                                                                <th>Start from</th>
                                                                <th>End at</th>
                                                                <th>Enrollment</th>
                                                                <th>Status</th>
                                                                <th>Edit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>{this.BatchDashnoard()}</tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Import jQuery before materialize.js*/}
            </div>
        );
    }
}
