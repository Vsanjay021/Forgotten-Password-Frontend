
let url = "https://lazy-lime-handkerchief.cyclic.app/changepassword"
let userId = localStorage.getItem("userId");
document.getElementById("submitPass").addEventListener("click", (event) => {
    event.preventDefault();
    let password = document.getElementById("initialpassword").value
    let confirmpassword = document.getElementById("confirmpassword").value;
    let data = {
        userId,
        password
    }
    console.log(password, confirmpassword);
    if (password !== confirmpassword) {
        swal("Passwords do not Match", "", "info");
    } else {
        fetchRes(data)
    }
})
async function fetchRes(obj) {
    let res = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
    let data = await res.json()
    if (data.done) {
        swal("Done!,Password Has Changed Successfully", " Redirecting...", "success");
        setTimeout(() => {
            window.location.href = "https://localhost:3000/"
        }, 4000)
    } else {
        swal("Error", `${data.msg}`, "error");
    }


}

// const changePass = async (data) => {

//     const response = await fetch("http://localhost:4000/changepassword", {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     });
//     const json = await response.json();
//     if(json.ok){
//         alert("Password successfully changed");
//     }
//     console.log(json)
// }

