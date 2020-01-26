

function fetchShowComments(){
    let url = "/blog-api/comentarios";

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success:function(responseJSON){
            console.log(responseJSON);
            showComments(responseJSON);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function showComments(responseJSON){
    $('#listaComentarios').empty();
    responseJSON.forEach (elemento => {
        $('#listaComentarios').append(
            `
            <li>
            <h2>${elemento.titulo}</h2>
            <h3> by ${elemento.autor}</h3>
            <p>${elemento.contenido}</p>
            <p> <button type="button" id="editButton">Edit</button> <button type="button" id="deleteButton">Delete</button> </p>
            </li>
            `
        );
    });
}

function addComment(comentario){
    let url = "/blog-api/nuevo-comentario";

    $.ajax({
        url: url,
        method: "POST",
        data: JSON.stringify(comentario),
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        success:function(responseJSON){
            console.log("mandado");
            fetchShowComments();
        },
        error: function(error){
            if (error.status == 406) {
                alert("Error: no se han proporcionado todos los datos para crear el comentario")
            } else {
                alert("Error al crear nuevo comentario");
            }
            console.log(error);
        }
    });
}

function editComment(comentario,commentId){
    let url = "/blog-api//blog-api/actualizar-comentario/" + commentId;

    $.ajax({
        url: url,
        method: "PUT",
        data: JSON.stringify({
            comentario
        }),
        contentType: "application/json",
        dataType: "json",
        success:function(responseJSON){
            fetchShowComments();
        },
        error: function(error){
            console.log(error);
        }
    });
}

function deleteComment(commentId){
    let url = "/blog-api/remover-comentario/" + commentId;

    $.ajax({
        url: url,
        method: "DELETE",
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

function fetchShowByAutor(comentario){
    let url = "/blog-api/comentarios-por-autor";

    $.ajax({
        url: url,
        method: "GET",
        data: JSON.stringify({
            comentario
        }),
        contentType: "application/json",
        dataType: "json",
        success:function(responseJSON){
            fetchShowComments(responseJSON);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function watchForm(){
    let form = document.getElementById("commentsForm");

    form.addEventListener("submit", (event)=>{
        console.log("submit");
        event.preventDefault();
        let author = document.getElementById("autorBox").value;
        let title = document.getElementById("tituloBox").value;
        let content = document.getElementById("contenidoBox").value;
        let comentario = {
            autor: author,
            titulo : title,
            contenido: content
        }
        addComment(comentario);
        document.getElementById("autorBox").value = "";
        document.getElementById("tituloBox").value = "";
        document.getElementById("contenidoBox").value = "";
    });
}

function watchEdit(){

}

function watchDelete(){

}

init();

function init(){
    fetchShowComments();
    watchForm();
    watchEdit();
    watchDelete();
}