import HttpClient from "@/services/config/AxiosBase";

class AddressService {
  base = "/karfarmas/address";
  getAddresses() {
    return HttpClient.get(this.base);
  }
  addAddress(data) {
    return HttpClient.post(this.base, data);
  }
}

export default new AddressService();
