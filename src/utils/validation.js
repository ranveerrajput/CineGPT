export const checkUserInput = (email, password) => {
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$%^&*()_+|~=`{}\[\]:;'<>,.?/@]).{8,}$/;


  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);

 

  if (!isValidEmail) {
    return {
      message: "Please enter a valid email id",
      isValid: false,
    };
  }
  if (!isValidPassword) {
    return {
      message: "Please enter a valid password",
      isValid: false,
    };
  }

  return {
    message: "",
    isValid: true,
  };
};


//steps for deployment : 
//npm install -g firebase-tools
//npm install firebase
//firebase login
//firebase init
// after this build the project 

// firebase deploy
