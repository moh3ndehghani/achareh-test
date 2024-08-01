import HttpClient from "@/services/config/AxiosBase";

class AddressService {
  base = "/karfarmas/address";
  getAddresses() {
    return HttpClient.get(this.base);
  }
  addAddress() {
    return HttpClient.post(this.base);
  }
}

export default new AddressService();
