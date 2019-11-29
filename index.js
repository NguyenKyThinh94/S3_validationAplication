$(document).ready(function(){
        $('[name="individual"]').change(function(){
                let value=$('[name="individual"]:checked').val();
                if(value=='individual'){
                        $("#company").attr("disabled", true);
                        $("#company").val('');
                } else {
                        $("#company").attr("disabled", false);
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
                        minlength: 6,
                        equalTo: "#pass"
                    },
                },
                messages: {
                    firstName:"Không được để trống",
                    lastName:"Không được để trông",
                    email: "Vui lòng nhập đúng định dạng",
                    pass:{
                        required: "Không được để trống",
                        minlength: "Vui lòng nhập tối thiểu "
                    },
                    re_pass: {
                        required: "Không được để trống",
                        minlength: "Vui lòng nhập tối thiểu",
                        equalTo: "Nhập không giống password"
                    }
                }
            });
      });