let todos = JSON.parse(localStorage.getItem("todos")) || []
function addtodo(data) {
    todos.push(data)
    localStorage.setItem("todos", JSON.stringify(todos))
    window.location.reload()
}
if (todos.length > 0) {
    show_todo_list(todos)
}
function show_todo_list(data) {
    let todolist = document.getElementById("todolist")
    let todopendin = document.createElement("div")
    todopendin.setAttribute("class", "pending")
    let todoprogres = document.createElement("div")
    todoprogres.setAttribute("class", "progress")
    let todocompleted = document.createElement("div")
    todocompleted.setAttribute("class", "complete")

    data.map((p, i) => {
        Array.isArray(todos)
        // todos.push(p)
        let todopending = document.createElement("div")
        let todoprogress = document.createElement("div")
        let todocomplete = document.createElement("div")
        if (p.status == "pending") {
            let name = document.createElement("h2")
            name.innerHTML = p.id + ") " + p.title
            let status = document.createElement("p")
            status.innerHTML = p.status
            let edit = document.createElement("button")
            edit.innerHTML = "start task"
            edit.addEventListener("click", () => {
                let change = { "id": p.id, "title": p.title, status: "in progress" }
                data[p.id - 1] = change
                localStorage.setItem("todos", JSON.stringify(data))
                window.location.reload()
            })
            todopending.append(name, status, edit)
        }
        else if (p.status == "in progress") {

            let name = document.createElement("h2")
            name.innerHTML = p.id + ") " + p.title
            let status = document.createElement("p")
            status.innerHTML = p.status
            let edit = document.createElement("button")
            edit.innerHTML = "mark as complete"
            edit.addEventListener("click", () => {
                let change = { "id": p.id, "title": p.title, status: "completed" }
                data[p.id - 1] = change
                localStorage.setItem("todos", JSON.stringify(data))
                window.location.reload()
            })
            todoprogress.append(name, status, edit)
        }
        else if (p.status == "completed") {

            let name = document.createElement("h2")
            name.innerHTML = p.id + ") " + p.title
            let status = document.createElement("p")
            status.innerHTML = p.status
            let edit = document.createElement("button")
            edit.innerHTML = ""
            edit.setAttribute("class", "button_hide")
            console.log("abcd")
            todocomplete.append(name, status, edit)
        }
        todopendin.append(todopending)
        todoprogres.append(todoprogress)
        todocompleted.append(todocomplete)
        todolist.append(todopendin, todoprogres, todocompleted)
    })
}

let button = document.getElementById("button")
button.addEventListener("click", () => {
    let inp = document.getElementById("inpbox").value
    let data = { "id": todos.length + 1, "title": inp, status: "pending" }
    addtodo(data)
    // todos.push({"id":todos.length+1,"title":inp,status:"pending"})
    // console.log(todos)
    // fetch("http://localhost:3000/to-dos", {
    //     method: "post",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },

    //     //make sure to serialize your JSON body
    //     body: JSON.stringify({ "id": todos.length + 1, "title": inp, status: "pending" })
    // })

})