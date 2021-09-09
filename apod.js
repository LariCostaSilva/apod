//Referenciando tudo que está no html
const principal = $(".corpo");
const fundo = $("#imagem-apod");
const video = $("#video-apod")
const titulo = $(".titulo-imagem");
const texto = $("#descricao");
const botao = $("#botao");

botao.on('click', () => {
    apod()
})
function apod() {

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=3oJxNtB9Kez0obSunOfeSpROAwbPU9pd6zCgYWIf&date=${data.value}`,
        success(result) {
            fundo.css("background-image", `url(${result.hdurl})`);
            titulo[0].innerHTML = result.title;
            texto[0].innerHTML = result.explanation;
            console.log(result);

            //condição para quando for imagem, adiciona uma classe e remove outra
            if (result.media_type == "image"){
                $("#video-apod").addClass("");
                $("#imagem-apod").removeClass("")
                $("#imagem.apod").html(`<img id="imagem-apod" src="${result.url}">`);
            }
            
            //quando for vídeo trocar as condições
            else {
                $("#imagem-apod").addClass("");
                $("#video-apod").removeClass("")
                video.html(`<iframe id="video-apod" src="${result.url}" frameborder="0"></iframe>`)
            }
            //error: function(){
            //alert("insira uma data válida")
           //}
        }
    })
}
apod()