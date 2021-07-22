export {};

`mutation {
  createOrder(input:{
    amount: 20000,
    customer:{
      name: "teste",
    },
    store:DPIZZA
    deliveryFee: 1000,
    address:{
      number: "10"
      neighborhood:"bairro"
      complement:"complemento"
      city:"cidade"
      state:"ESTado"
      street:"RUA"
    }
    items:{
      name:"DESODORANTE"
      amount:1000
      quantity:10
    },
    payments:{
      method:CREDIT
      amount: 10
    }
  }){
    order{
      _id
    }
  }
}`;
