const users = [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Ali" }
  ];


function getDataById(id)
{
    return users.find(item => item.id === id);

}
console.log("Get the Data From the ID",getDataById(1));