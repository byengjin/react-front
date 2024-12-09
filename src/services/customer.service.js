import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL=BASE_API_URL+"/api/customer";

class CustomerService {
    saveProduct(customer) {
        console.log(customer.name);
        return axios.post(API_URL, customer, {headers:authHeader() });
    }

    deleteProduct(customer){
        return axios.delete(API_URL + '/' + customer.id, {headers:authHeader()});
    }

    getAllProducts() {
        return axios.get(API_URL);
    }
}
const customerService = new CustomerService();
export default customerService;