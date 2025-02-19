let students = [
    {id:1, name:"hari",email:"hari@gmail.com",address:"ktm"},
    {id:2, name:"ram",email:"ram@gmail.com",address:"ktm"},
    {id:3, name:"sita",email:"sita@gmail.com",address:"ktm"}
]   
function show(){
    let output = "";
    students.map((students,key)=>{
        output += `
        <tr>
        <td>${key+1}</td>
        <td>${students.name}</td>
        <td>${students.email}</td>
        <td>${students.address}</td>
        <td>
            <button> Edit </button>
            <button> Delete </button>
        </td>
        </tr>
        `
    })
    document.getElementById('result').innerHTML=output;
}
show()
// ` = template string
