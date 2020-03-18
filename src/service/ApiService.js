import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/employees';
//const EMPLOYEE_API_BASE_URL = 'http://192.168.1.154:8080/employees';

class ApiService {
    fetchEmployees() {
        console.log("Running URL: "+EMPLOYEE_API_BASE_URL);

        axios.get(EMPLOYEE_API_BASE_URL)
            .then(function (response) {
                console.log("Response data..."+JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    fetchEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
    }

    addEmployee(employee) {
        return axios.post(""+EMPLOYEE_API_BASE_URL, employee);
    }

    editEmployee(employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employee.id, employee);
    }
}

export default new ApiService();