
function addEmployee() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;

    if (name == "" || id == "" ||
        department == "" || salary == "") {

        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = "Name: " + name +
                   "<br>ID: " + id +
                   "<br>Department: " + department +
                   "<br>Salary: " + salary;

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";

    alert("Employee Added Successfully");
}
