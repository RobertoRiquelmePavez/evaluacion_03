

$( document ).ready(function() {
    obtenerDatos()
});

function obtenerDatos() {
    $.ajax('https://62b3a4a4a36f3a973d24f1bb.mockapi.io/informacion', {
        type: 'GET',  
        success: function (data, status, xhr) {
            for (var indice = 0; indice < data.length; indice++) {
                var name = data[indice].name
                var email = data[indice].email
                var city = data[indice].city
                var filaTAbla = '<tr>'
                                + '<td class="prc-25">'+name+'</td>'
                                +  '<td class="prc-25">'+email+'</td>'
                                +   '<td class="prc-25">'+city+'</td>'
                                +  
                                '</tr>'
                console.log(filaTAbla)
                $("#api").append(filaTAbla)

            }
        },
        error: function (jqXhr, textStatus, errorMessage) {
            alert("No hay conexion a la API"+errorMessage+" estado:"+textStatus  )
        }
    });
}


$("#btn1").click(function(){
    Swal.fire('Mensaje de alerta');
});	



$("#btn2").click(function(){
    Swal.fire({
        imageUrl: 'recursos/imagen/ciisa.jpg',
        imageHeight: 412,
        imageAlt: 'A tall image'
    });
});	

$("#btn3").click(function(){
    Swal.fire({
        title: 'Animado',
        width: 300,
        padding: 'center',
        backdrop: `
        rgba(5, 5, 25, 0.4)
        url("recursos/imagen/computer.gif")
        center left
        no-repeat
        `
    });
});

$("#btn4").click(function(){
    swal.fire({
        icon: "success",
        confirmButtonText: "Ir a CIISA",
    }).then((value) => {
      if(value){
        window.location.href = "https://ciisa.cl/";
      }
    });
});




$(document).ready(function(){
    $("#contact-form").validate({
        event: "blur",rules: {'name': "required",'email': "required email",'city': "required"},
        messages: {'name': "Por favor indica tu nombre",'email': "Por favor, indica una direcci&oacute;n de e-mail v&aacute;lida",'city': "En qué ciudad vives"},
        debug: true,errorElement: "label",
        submitHandler: function(form){
            $("#alert").show();
            $("#alert").html();
            setTimeout(function() {
                $('#alert').fadeOut('slow');
            }, 5000);
            $.ajax({
                type: "POST",
                url:"/",
                data: "name="+escape($('#name').val())+"&email="+escape($('#email').val())+"&message="+escape($('#message').val()),
                success: function(msg){
                    $("#alert").html(msg);
                    document.getElementById("name").value="";
                    document.getElementById("email").value="";
                    document.getElementById("message").value="";
                    setTimeout(function() {
                        $('#alert').fadeOut('slow');
                    }, 5000);
 
                }
            });
        }
    });
});










