export {};

`mutation {
  createOrder(input:{
    amount: 20000,
    store:DPIZZA
    items:{
      name:"DESODORANTE"
      amount:1000
      quantity:10
    },

    customer:{
      name: "teste",
    },
    address:{
      street:"RUA"
      neighborhood:"bairro"
      complement:"complemento"
      city:"cidade"
      state:"ESTado"
      number: "10"
    }
    
    deliveryFee: 1000,
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
