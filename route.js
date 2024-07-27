module.exports=(app)=>{

    const databasecall = require('./databaseApiCall.js')
    app.post("/transactionin",databasecall.transactionin);
    // app.post("/userregister",databasecall.userregister);
    // app.post("/userlogin",databasecall.userlogin);
    app.post("/updateTransaction/:id",databasecall.updateTransaction);
    app.get("/net_balance",databasecall.net_balance);
    app.get("/yearly_totals",databasecall.yearly_totals);
    

}