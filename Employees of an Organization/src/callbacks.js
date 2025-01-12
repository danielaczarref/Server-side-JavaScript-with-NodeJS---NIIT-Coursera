
   getEmployee = (employees,callback)=> {
       setTimeout(() => {
            const employeeNames = employees.map((employee) => employee.name);
            return callback(null, employeeNames);
       }, 1000);
   }

   createEmployee = (employees,employee, callback) => {
       setTimeout(()=>
       {
           employees.push(employee);
           return callback(null, employees);
       }, 2000);
   }

   module.exports = {getEmployee,createEmployee}


