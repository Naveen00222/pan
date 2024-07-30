function pan () {
    const pan = document.getElementById("pan").value;
    const condition = /^[A-Z]{5}+\d{4}[A-Z]$/;
    if(pan.length>10){
        alert("pan number exceeded")
        return false
    }
    else if(pan==null||pan===""){
        alert("Invalid pan Number")
    }              
    else if (condition.test(pan)) {
                    alert("PAN number submitted successfully");
                } else {
                    alert("Invalid PAN number");
                }
            }
             