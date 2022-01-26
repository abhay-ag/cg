function searchit(){
    if(document.getElementById('search').value !== ''){
        var search = document.getElementById("search").value
        window.open("https://google.com/search?q="+search)
        document.getElementById("search").value = ''
    }
}
function login(){
    if(document.getElementById("name").value === '' || document.getElementById("pass").value === ''){
        alert("Fields are empty! Please fill!")
    }
    else{
        document.location.href = "../index.html"
    }
}
function apple(){
    window.open("https://www.apple.in/")
}
function facebook(){
    window.open("https://www.facebook.com")
}
function google(){
    window.open("https://accounts.google.com")
}
function logkro(){
    document.location.href = "./external_pages/login.html"
}
function signup(){
    var sign1 = document.getElementById("sign1").value
    var sign2 = document.getElementById("sign2").value
    var sign3 = document.getElementById("sign3").value
    var sign4 = document.getElementById("sign4").value

    if(sign1 === '' ||  sign2 === '' || sign3 ==='' || sign4===''){
        alert('Empty Fields')
    }
    else{
        if(sign2 != sign3){
            alert("Passwords Not Same.")
            document.getElementById("sign2").value = ''
            document.getElementById("sign3").value = ''
        }
        else{
            if(sign4 === sign2){
                alert("Sorry but username and password can't be same.")
                document.getElementById("sign2").value = ''
                document.getElementById("sign3").value = ''
                document.getElementById("sign4").value = ''
            }
            else{
                alert("Registration Success!!!")
                document.location.href = "../index.html"
            }
        }
    }
}
function signupkro(){
    document.location.href = "./external_pages/singup.html"
}
function submitdocs(){
    var zero = document.getElementById("zero").value
    var one = document.getElementById("one").value
    var two = document.getElementById("two").value
    var three = document.getElementById("three").value
    var four = document.getElementById("four").checked
    var five = document.getElementById("five").checked
    var six = document.getElementById("seven").value
    var seven = document.getElementById("six").value
    if(one === '' || two === '' || three ==='' || four === false || five === false || six === '' || seven === "" || zero === ''){
        alert("Please Fill out Everything.")
    } 
    else{
        alert("Application Recieved!! Our team will contact you in 4-5 Working days.")
        document.location.href = "../index.html"
    }
}
function send(){
    var mess = document.getElementById("mess").value
    if(mess !==''){
        document.getElementById("mess").value = ''
        alert("Message Sent!!!")
        document.location.href = "../index.html"
    }
}