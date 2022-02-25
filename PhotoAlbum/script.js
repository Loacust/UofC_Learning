$(document).ready(function(){
    $(".pic").css("border", "black solid 5px");
    $(".tile_1_image").css({"font-family":"Pacifico, cursive", "font-size": "30px", "text-align": "center"});
    
    $("#commentForm").validate({
        rules: {
            uname:  { 
                required: true,
                minlength: 8
            },
            imageTitle: "required",
            comment: "required"
            
        },
        messages: {
            uname:{ 
                required: "Please enter your Username",
                minlength: "Your Username must be at least 8 characters"
            },
            imageTitle: "Please enter your image title",
            comment: "Please write your comment"
        }
    })

    });

    