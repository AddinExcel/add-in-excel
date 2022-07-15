function getTokenAccess() {
   // $.support.cors = true;
     $.ajax
         ({
             type: "get",
             //url: "https://login.quarksup.net/adfs/oauth2/token",
             url: "https://api.publicapis.org/entries",
             dataType: 'html',
             async: false,
             //data: '{"username": "' + username + '", "password" : "' + password + '"}',
             headers: { "Access-Control-Allow-Origin:": "*" },
            beforeSend: function (xhr) {
                 xhr.setRequestHeader("Authorization", "Basic " + btoa('2ab19572 - ce85 - 4b86 - a257 - 9a8b6d6350c6' + ":" + 'jLuLnaQSmpfiXfOoKHI - I8Rmg5DYjLd4K1q0o3uI'));
             },
             success: function (response) {
                 
                 return response;
             },
             error: function (response, errorThrown) {
                 return "error" + errorThrown + response ;
             }
         });
    
   
}

function getToken() {
    /*var request = request;
    $.ajax({

        url: 'http://voicebunny.comeze.com/index.php',
        type: 'GET',
        data: {
            'numberOfWords': 10
        },
        dataType: 'json',
        success: function (data) {
            alert(data);
        },
        error: function (request, error) {
           // response =  ( "Request: " + JSON.stringify(request));
            alert("error");
        }
       
    });*/
   
}



