/* 
أنت تبني API لمنصة تجارة إلكترونية.

لديك Endpoint:

POST /orders

المستخدم يستطيع إرسال:

{
 "productId":10,
 "quantity":2
}

اشرح كيف ستصمم العملية كاملة:

Validation
Authentication
Database transaction
Error handling
Inventory update
Payment processing
Duplicate requests

*/



//My Answer:
/*
We will make the validation for the productId to make sure that the productId is exist in the products table,
and make sure for the quantity to be a number,
as for the Authentication, the user must be authenticated so we know the id of the user that made the request, and stored in the database correctly,
the Authentication will be with JWT 
Database transaction: Open a database transaction (BEGIN TRANSACTION) to ensure atomic execution,
with Rollback Strategy Ensure any subsequent failure triggers a rollbak to prevent partial data states.
We should notice subtract the ordered quantity from the product's stock level in the database
That's why we use a conditional check to ensure stock does not go below zero,
and wrap the operation in a database transaction to prevent the handling errors.
the request shoud be handling well so we don't have duolicated requests we should have a unique client-generated UUID in the headers
and check in the database with correct commands if it is exist return the correct response for it else store it
and the payment, we use external apis for this, such as stripe, and if the paymwnt fails throw an exception to trigger the db rollback


هاد كلشي قدرت اتذكره حاليا لأنه وقتي خلص
شكرا لجهودكم
وعفوا عالكتابة باللغة الانكليزية ولكن تعودنا عليها بالبرمجة وبالبحث
*/