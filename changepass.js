
let url="https://lazy-lime-handkerchief.cyclic.app/changepassword"
let userId=localStorage.getItem("userId");
document.getElementById("submitPass").addEventListener("click",(event)=>{
    event.preventDefault();
    let password=document.getElementById("initialpassword").value
    let confirmpassword=document.getElementById("confirmpassword").value;
    let data={
        userId,
        password
    }
    console.log(password,confirmpassword);
    if(password!=confirmpassword){
        alert("Password does not match")
    }else{
        fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res =>res.json()).then(sol => alert(sol.msg)).catch((err)=> console.log(err));
    }
})

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

