import axios from "axios";

const DAWN_API_GET_URL = "http://localhost:8080/second-dawn/v1/ship-parts";

const CREATE_EMPIRE_URL = "http://localhost:8080/second-dawn/v1/create-empire";
const CREATE_ORDER_URL = "http://localhost:8080/second-dawn/v1/create-order/ship";
const CREATE_USER_URL = "http://localhost:8080/second-dawn/v1/login";
const REGISTER_USER_URL = "http://localhost:8080/second-dawn/v1/registration";
class EmpireService {

    readShields() {
        return axios.get(DAWN_API_GET_URL + "/shields");
    }
    readWeapons() {
        return axios.get(DAWN_API_GET_URL + "/weapons");
    }
    readMissiles() {
        return axios.get(DAWN_API_GET_URL + "/missiles");
    }
    readHulls(){
        return axios.get(DAWN_API_GET_URL + "/hulls");
    }
    readOrder(orderId){
        return axios.get(DAWN_API_GET_URL + "/orders/" + orderId);
    }
    createEmpire(empires) {
        return axios.post(CREATE_EMPIRE_URL,empires);
    }
    createOrder(shipOrder){
        return axios.post(CREATE_ORDER_URL,shipOrder);
    }
    login(user){
        return axios.post(CREATE_USER_URL, user);
    }
    registerUser(user){
        return axios.post(REGISTER_USER_URL, user);
    }
}
export default new EmpireService();