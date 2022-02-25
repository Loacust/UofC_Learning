$(document).ready(function(){
    $(".pic").css("border", "black solid 5px");
    $(".tile_1_image").css({"font-family":"Pacifico, cursive", "font-size": "30px", "text-align": "center"});
    
    
    $('#usercheck').hide();
    let usernameError = true;
    $('#usernames').keyup(function(){
        validateUsername();
    })
    function validateUsername(){
        let usernameValue = $('#usernames').val();
        if (usernameValue.length <= 7) {
            $('#usercheck').show();
                usernameError = false;
                return false;
        }
        else {
            $('#usercheck').hide();
            return true;
        }
    }
    
    
    $('#imageTitleCheck').hide();
    let imageNameError =true;
    $('#imageTitle').keyup(function(){
        validateImageName();
    })
    function validateImageName(){
        let imageNameValue = $('#imageTitle').val();
        if (imageNameValue.length == '') {
            $('#imageTitleCheck').show();
                imageNameError = false;
                return false;
        }
        else {
            $('#imageTitleCheck').hide();
            return true;
        }
    }
    
    
    $('#commentCheck').hide();
    let commentError = true;
    $('#comment').keyup(function(){
        validateComment();
    })
    function validateComment(){
        let commentValue = $('#comment').val();
        if (commentValue.length == '') {
            $('#commentCheck').show();
                commentError = false;
                return false;
        }
        else {
            $('#commentCheck').hide();
            return true;
        }
    }
    $('#submitbtn').css('border','4px solid black')      
    $('#submitbtn').click(function(){
        validateUsername();
        validateImageName();
        validateComment();

        if((usernameError == true) &&
        (imageNameError == true) &&
        (commentError == true)){
        return true;}
        else { return false;
        }

    });
});