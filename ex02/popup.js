function displayFormContent() {
    // Get form values by their element IDs
    const firstname = document.getElementById('firstname').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const student = document.getElementById('student').checked ? "Yes" : "No";

    // Determine the selected gender
    let gender;
    if (document.getElementById('male').checked) {
        gender = "Male";
    } else if (document.getElementById('female').checked) {
        gender = "Female";
    } else if (document.getElementById('other').checked) {
        gender = "Other";
    } else {
        gender = "Not specified";
    }

    // Format the form data
    const formData = `
        Firstname: ${firstname}
        Name: ${name}
        Age: ${age}
        Phone: ${phone}
        Email: ${email}
        Student at 42?: ${student}
        Gender: ${gender}
    `;

    // Display the form data in a popup
    alert("Form Data:\n" + formData);
}
