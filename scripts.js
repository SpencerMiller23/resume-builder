function myFunction(id) {
                var x = document.getElementById(id);
                if (x.className.indexOf("w3-show") == -1) {
                    x.className += " w3-show";
                } else { 
                    x.className = x.className.replace(" w3-show", "");
                }
            }

function header() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    document.getElementById("nameText").innerHTML = name;
    document.getElementById("lineOne").innerHTML = address + ", " + city + ", " + state + ", " + zip;
    document.getElementById("lineTwo").innerHTML = "Phone: " + phone + " - " + email;
    
    document.getElementById("contactInfo").style.display = "inline";
}

function summary() {
    var summary = document.getElementById("summary").value;
    
    document.getElementById("summaryHeader").innerHTML = "Professional Summary";
    document.getElementById("summaryBody").innerHTML = summary;
    
    document.getElementById("professionalSummary").style.display = "inline";
}

function education() {
    var school1 = document.getElementById("school1").value;
    var degree1 = document.getElementById("degree1").value;
    var area1 = document.getElementById("area1").value;
    
    var school2 = document.getElementById("school2").value;
    var degree2 = document.getElementById("degree2").value;
    var area2 = document.getElementById("area2").value;
    
    var school3 = document.getElementById("school3").value;
    var degree3 = document.getElementById("degree3").value;
    var area3 = document.getElementById("area3").value;
    
    var school4 = document.getElementById("school4").value;
    var degree4 = document.getElementById("degree4").value;
    var area4 = document.getElementById("area4").value;
    
    document.getElementById("educationHeader").innerHTML = "Education";
    
    document.getElementById("schoolOne").innerHTML = school1;
    document.getElementById("degreeOne").innerHTML = degree1;
    document.getElementById("areaOne").innerHTML = area1;
    
    document.getElementById("schoolTwo").innerHTML = school2;
    document.getElementById("degreeTwo").innerHTML = degree2;
    document.getElementById("areaTwo").innerHTML = area2;
    
    document.getElementById("schoolThree").innerHTML = school3;
    document.getElementById("degreeThree").innerHTML = degree3;
    document.getElementById("areaThree").innerHTML = area3;
    
    document.getElementById("schoolFour").innerHTML = school4;
    document.getElementById("degreeFour").innerHTML = degree4;
    document.getElementById("areaFour").innerHTML = area4;
    
    document.getElementById("education").style.display = "inline";
}

function experience() {
    var company1 = document.getElementById("company1").value;
    var position1 = document.getElementById("position1").value;
    var years1 = document.getElementById("years1").value;
    
    var company2 = document.getElementById("company2").value;
    var position2 = document.getElementById("position2").value;
    var years2 = document.getElementById("years2").value;
    
    var company3 = document.getElementById("company3").value;
    var position3 = document.getElementById("position3").value;
    var years3 = document.getElementById("years3").value;
    
    var company4 = document.getElementById("company4").value;
    var position4 = document.getElementById("position4").value;
    var years4 = document.getElementById("years4").value;
    
    document.getElementById("employmentHeader").innerHTML = "Employment History";
    
    document.getElementById("companyOne").innerHTML = company1;
    document.getElementById("positionOne").innerHTML = position1;
    document.getElementById("yearsOne").innerHTML = years1;
    
    document.getElementById("companyTwo").innerHTML = company2;
    document.getElementById("positionTwo").innerHTML = position2;
    document.getElementById("yearsTwo").innerHTML = years2;
    
    document.getElementById("companyThree").innerHTML = company3;
    document.getElementById("positionThree").innerHTML = position3;
    document.getElementById("yearsThree").innerHTML = years3;
    
    document.getElementById("companyFour").innerHTML = company4;
    document.getElementById("positionFour").innerHTML = position4;
    document.getElementById("yearsFour").innerHTML = years4;
    
    document.getElementById("employmentHistory").style.display = "inline";
}

function skills() {
    var skill1 = document.getElementById("skill1").value;
    var skill2 = document.getElementById("skill2").value;
    var skill3 = document.getElementById("skill3").value;
    var skill4 = document.getElementById("skill4").value;
    var skill5 = document.getElementById("skill5").value;
    var skill6 = document.getElementById("skill6").value;
    
    document.getElementById("skillsHeader").innerHTML = "Skills";
    
    document.getElementById("leftOne").innerHTML = skill1;
    document.getElementById("rightOne").innerHTML = skill2;
    document.getElementById("leftTwo").innerHTML = skill3;
    document.getElementById("rightTwo").innerHTML = skill4;
    document.getElementById("leftThree").innerHTML = skill5;
    document.getElementById("rightThree").innerHTML = skill6;
    
    document.getElementById("skills").style.display = "inline";
}