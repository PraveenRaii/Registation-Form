const form = document.getElementById("regForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let roll = document.getElementById("roll").value.trim();
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let father = document.getElementById("father").value.trim();
    let dob = document.getElementById("dob").value;
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let course = document.getElementById("course").value;
    let photo = document.getElementById("photo").value;
    let city = document.getElementById("city").value.trim();
    let address = document.getElementById("address").value.trim();

    // Roll Number
    if (roll == "") {
        alert("Enter Roll Number");
        return;
    }

    if (!/^[0-9]+$/.test(roll)) {
        alert("Roll Number should contain only numbers");
        return;
    }

    // Student Name
    if (fname == "" || lname == "") {
        alert("Enter Student Name");
        return;
    }

    // Father Name
    if (father == "") {
        alert("Enter Father's Name");
        return;
    }

    // DOB
    if (dob == "") {
        alert("Select Date of Birth");
        return;
    }

    // Mobile
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        alert("Enter Valid Mobile Number");
        return;
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Enter Valid Email");
        return;
    }

    // Password
    let passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (!passRegex.test(password)) {
        alert("Password must contain:\n\nMinimum 8 characters\n1 Uppercase\n1 Lowercase\n1 Number\n1 Special Character");
        return;
    }

    // Gender
    let gender = document.querySelector('input[name="gender"]:checked');

    if (gender == null) {
        alert("Select Gender");
        return;
    }

    // Department
    let dept = document.querySelectorAll(".dept");
    let checked = false;

    dept.forEach(function (item) {
        if (item.checked) checked = true;
    });

    if (!checked) {
        alert("Select at least one Department");
        return;
    }

    // Course
    if (course == "") {
        alert("Select Course");
        return;
    }

    // Photo
    if (photo == "") {
        alert("Upload Student Photo");
        return;
    }

    // City
    if (city == "") {
        alert("Enter City");
        return;
    }

    // Address
    if (address == "") {
        alert("Enter Address");
        return;
    }

    alert("Registration Successful ");

    form.reset();

});