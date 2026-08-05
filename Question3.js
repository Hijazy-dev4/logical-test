function processOrder(order,status,customersType)
{
    const existStatus = ["pending","completed","cancelled","refunded", "shipped"];
    const customersTypeOrder = {
        Regular:0,
        Vip:100
    }
    let orderType = customersTypeOrder[customersType] || 0;


    if (existStatus.includes(status)) {
        order.status = status;
      }

    order.customersType = customersType;
     
    const orderTypeName = Object.keys(customersTypeOrder).find(key => customersTypeOrder[key] === orderType);
    order.orderTypeName = orderTypeName
    return order;

}

let myOrder = { id: 101, item: "Potato", status: "Pending"};
console.log(processOrder(myOrder, "cancelled" , "Vip"));