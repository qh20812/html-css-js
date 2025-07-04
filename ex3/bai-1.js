
const address = {
  street: "",
  city: "",
  zipCode: ""
};

function showAddress(address) {
  for (let key in address) {
    if (address.hasOwnProperty(key)) {
      console.log(key + ': ' + address[key]);
    }
  }
}
