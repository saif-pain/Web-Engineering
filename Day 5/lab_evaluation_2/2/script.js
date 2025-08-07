function validateForm() {
    let valid = true;
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let instrument = document.getElementById("instrument").value;
    let skill = document.getElementById("skillLevel").value;
    let experience = document.getElementById("expId").value;

    let pgenre = document.querySelectorAll("input[name='genre']:checked");


    if (name.length < 3 || !/^[A-Za-z ]+$/.test(name)) {
      document.getElementById("nameError").innerText = "Enter a valid name (only letters and spaces, min 3 chars)";
      valid = false;
    }


    if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError").innerText = "Enter a valid email.";
      valid = false;
    }


    if (password.length < 8 || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      document.getElementById("passError").innerText = "Password must be 8+ chars with a number & special character.";
      valid = false;
    }

    if (password !== confirm) {
      document.getElementById("confirmError").innerText = "Passwords do not match.";
      valid = false;
    }

    if (instrument === "") {
      document.getElementById("countryError").innerText = "Please select a instrument.";
      valid = false;
    }


    if (skill === "") {
      document.getElementById("skillError").innerText = "Please select a skill level.";
      valid = false;
    }

    if (experience && !/\d+$/.test(experience)) {
        document.getElementById("experienceError").innerText = "Years of Experience must be a positve number.";
        valid = false;
      }

    if (pgenre.length === 0) {
      document.getElementById("genreError").innerText = "Select at least one Genre.";
      valid = false;
    }

    if (valid) {
      let g = Array.from(pgenre).map(el => el.value).join(", ");
      document.getElementById("confirmation").innerHTML =
        `<h3>Registration Successful!</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Instrument:</b> ${instrument}</p>
        <p><b>Skill Level:</b> ${skill}</p>
        <p><b>Years of Experience:</b> ${experience || "N/A"}</p>
        <p><b>Preferred Genre:</b> ${g}</p>`;
    }

    return false;
  }