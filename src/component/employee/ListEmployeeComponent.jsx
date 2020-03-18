import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListEmployeeComponent extends Component {

    constructor(props) {
        console.log("Loading properties");
        super(props)
        this.state = {
            employees: [],
            message: null
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.reloadEmployeeList = this.reloadEmployeeList.bind(this);
        console.log("Employees State");
        console.log(this.state.employees);
        //this.reloadEmployeeList();
    }

    componentDidMount() {
        this.reloadEmployeeList();
    }

    reloadEmployeeList() {
        console.log("Loading employees");
        ApiService.fetchEmployees()
            .then((res) => {
                console.log("reloadEmployeeList->Setting employees state");
                //this.setState({employees: res.data.result})
                this.setState({employees: res.data})
                console.log("reloadEmployeeList->Setting employees state complete.");
            });
        console.log("reloadEmployeeList->Employees State"+this.state.employees);
    }

    deleteEmployee(id) {
        ApiService.deleteEmployee(id)
            .then(res => {
                this.setState({message : 'Employee deleted successfully.'});
                this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
            })
    }

    editEmployee(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-employee');
    }

    addEmployee() {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addEmployee()}> Add Employee</button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        //this.state.employees.map(
                        (this.state.employees || []).map(
                            employee =>
                                <tr>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => this.deleteEmployee(employee.id)}> Delete</button>
                                        <button className="btn btn-success" onClick={() => this.editEmployee(employee.id)} style={{marginLeft: '20px'}}> Edit</button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListEmployeeComponent;