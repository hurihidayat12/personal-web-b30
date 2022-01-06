//take data from Id
function submitData() {
    let name = document.getElementById("input-username").value;
    let email = document.getElementById("input-gmail").value;
    let phone = document.getElementById("input-phone").value;
    let fullDev = document.getElementById("Full").checked;
    let frontDev = document.getElementById("front").checked
    let backDev = document.getElementById("back").checked;
    let subject = document.getElementById("input-subject").value;
    let text = document.getElementById("input-text").value;

    if (fullDev){
        fullDev = (document.getElementById("Full").value);
    } 
    else {
        fullDev = ""
    }

    if (frontDev){
        frontDev = (document.getElementById("front").value);
    }
    else {
        frontDev = ""
    }

    if (backDev){
        backDev = (document.getElementById("back").value)
    }
    else {
        backDev = ""
    }

    console.info(name);
    console.info(email);
    console.info(phone);
    console.info(fullDev);
    console.info(frontDev);
    console.info(backDev);
    console.info(subject);
    console.info(text);

//form condition
    if (name == ""){
        return alert ("Plese Enter Your Name in the Input Form !!");
    }
    else if (email == ""){
        return alert("the email section Must be Filled in!!");
    }
    else if (phone == ""){
        return alert("Please Input Your Number Phone !!");
    }
    else if (subject == ""){
        return alert("Please Select Subject !!");
    }
    else if(text == ""){
        return alert("I am Sory, Please Input Your Message Before Send !!");
    }

    let emailSend = 'loper@gmail.com'
    let a = document.createElement('a');

    a.href= `mailto: ${emailSend}?subject=${subject}&body=Assalamualaikum Hallo ${name} 
    nomor telephone  : ${phone} send task project ke ${email} tugas nya ${text} khusus 
    bagian ${fullDev} ${backDev} ${frontDev}`
    a.click();

    let grup = {
        name: name, 
        email: email,
        telphone: phone,
        subject: subject,
        text: text,
        options: frontDev, backDev, fullDev,
    }
    console.log(grup);
}




