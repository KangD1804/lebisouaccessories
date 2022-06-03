const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //  hiện, che mật khẩu
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("bx-hide", "bx-show");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("bx-show", "bx-hide");
                    })
                }
            }) 
        })
    })

    // đăng nhập => đăng kí
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


    