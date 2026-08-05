const orders = [
    { id: 1, customer: "Ahmed", total: 120, status: "completed" },
    { id: 2, customer: "Sara", total: 80, status: "pending" },
    { id: 3, customer: "Ali", total: 200, status: "completed" },
    { id: 4, customer: "Noor", total: 50, status: "cancelled" },
    { id: 5, customer: "Omar", total: 150, status: "completed" }
];


//إرجاع الطلبات المكتملة فقط.

const CompleteOrders = orders.filter((order) => order.status === 'completed');
console.log(CompleteOrders.length);

//حساب إجمالي قيمة الطلبات المكتملة.

const totalComplete = CompleteOrders.reduce((sum, CompleteOrders) => sum + CompleteOrders.total, 0);
console.log(totalComplete); // 1798


//ترتيب النتائج تنازليًا حسب قيمة الطلب.

const byPrice = [...orders].sort((a, b) => a.total - b.total);
console.log(byPrice.map((o) => o.total));