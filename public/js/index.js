function fetchShowComments(){
    let url = "/blog-api/comentarios";

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success:function(responseJSON){
            console.log("meco");

            console.log(responseJSON);
            showComments(responseJSON);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function showComments(responseJSON){
    responseJSON.forEach (elemento => {
        $('#listaComentarios').append(
            `
            <li>
            <h2>${elemento.titulo}</h2>
            <h3>${elemento.autor}</h3>
            <p>${elemento.contenido}</p>
            </li>
            `
        );
    });
}

function fetchNewComment(){
    let url = "/blog-api/comentarios";

    $.ajax({
        url: url,
        method: "GET",
        data: JSON.stringify({
            var : url
        }),
        contentType: "application/json",
        dataType: "json",
        success:function(responseJSON){
            showComments(responseJSON);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function fetchEditComment(){
    let url = "/blog-api/comentarios";

    $.ajax({
        url: url,
        method: "GET",
        data: JSON.stringify({
            var : url
        }),
        contentType: "application/json",
        dataType: "json",
        success:function(responseJSON){
            showComments(responseJSON);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function fetchDeleteComment(){
    let url = "/blog-api/comentarios";

    $.ajax({
        url: url,
        method: "GET",
        data: JSON.stringify({
            var : url
        }),
        contentType: "application/json",
        dataType: "json",
        success:function(responseJSON){
            showComments(responseJSON);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function fetchShowByAutor(){
    let url = "/blog-api/comentarios";

    $.ajax({
        url: url,
        method: "GET",
        data: JSON.stringify({
            var : url
        }),
        contentType: "application/json",
        dataType: "json",
        success:function(responseJSON){
            showComments(responseJSON);
        },
        error: function(error){
            console.log(error);
        }
    });
}

init();

function init(){
    fetchShowComments();
    console.log("running js");
}