const employees = [
    { id: 1, name: "Alice", age: 23, status: 'working' },
    { id: 2, name: "Bob", age: 25, status: 'working' },
    { id: 3, name: "John", age: 27, status: 'working' },
    { id: 4, name: "David", age: 23, status: 'quited' },
    { id: 5, name: "Eve", age: 20, status: 'working' },
];


const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 2, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 1 },
    { id: 4, employeeId: 3, productId: 1, quantity: 2 },
    { id: 5, employeeId: 2, productId: 5, quantity: 3 },
    { id: 6, employeeId: 4, productId: 1, quantity: 1 },
    { id: 7, employeeId: 5, productId: 3, quantity: 2 },
];


// --------------- plan 1 ------------------
// const joinedData = orders.map(order => {
//     const employee = employees.find(emp => emp.id === order.employeeId);
//     return { ...order, ...employee }; // Merge order và employee
// });
//
// console.log(joinedData);



// --------------- plan 2 --------------------------
// const employeesMap = employees.reduce((acc, emp) => {
//     acc[emp.id] = emp; // Key là id, value là employee object
//     return acc;
// }, {});
//
// const joinedData = orders.map(order => ({
//     ...order,
//     ...employeesMap[order.employeeId], // Lấy thông tin employee từ map
// }));
//
// console.log(joinedData);
