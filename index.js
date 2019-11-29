$(document).ready(function(){
        $('[name="cardType"]').change(function(){
                let value=$('[name="cardType"]').val();
                if(value==''){
                        $("#cardNumber").attr("disabled", true);
                } else {
                        $("#cardNumber").attr("disabled", false);
                }
        });
        $("#form").validate({
                rules: {
                    firstName: {
                        required: true,
                        minlength: 1
                    },
                    lastName: {
                        required: true,
                         minlength: 1
                        },
                    email:  {
                        required: true,
                        email: true
                    },
                    pass: {
                        required: true,
                        minlength: 6
                    },
                    re_pass: {
                        required: true,
                        minlength: 2,
                        equalTo: "#pass"
                    },
                    state:{
                        required: true,
                        minlength: 2,
                        maxlength: 2,
                    },
                    code:{
                        required: true,
                        minlength: 5,
                        maxlength: 10,

                    },
                    phone:{
                        required: true,
                        digits: true,
                        minlength: 9,
                        maxlength: 12,
                    },
                    startDate:{
                        required: true,
                        date: true,
                    },
                    cardNumber:{
                        required: true,
                        digits: true,
                        minlength: 16,
                        maxlength: 16,
                    }

                },
                messages: {
                    firstName:"Không được để trống",
                    lastName:"Không được để trông",
                    email:{
                        required: "Không được để trống",
                        email: true
                    },
                    pass:{
                        required: "Không được để trống",
                        minlength: "Vui lòng nhập tối thiểu "
                    },
                    re_pass: {
                        required: "Không được để trống",
                        minlength: "Vui lòng nhập tối thiểu",
                        equalTo: "Nhập không giống password"
                    },
                    state:{
                        required: "Không được để trống",
                        minlength: "Vui lòng nhập tối thiểu",
                        maxlength: "Vui lòng nhập tối thiểu",
                    },
                    code:{
                        required: "Không được để trống",
                        minlength: "Vui lòng nhập tối thiểu",
                        maxlength: "Vui lòng nhập tối thiểu",

                    },
                    phone:{
                        required: "Không được để trống",
                        digits: "Chỉ được nhập số",
                        minlength: "Vui lòng nhập tối thiểu",
                        maxlength: "Vui lòng nhập tối thiểu",
                    }
                }
            });
      });