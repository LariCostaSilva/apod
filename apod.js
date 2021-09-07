//Referenciando tudo que está no html
const principal = $(".corpo");
const fundo = $("#imagem-apod");
const titulo = $(".titulo-imagem");
const texto = $ ("#descricao");
const botao = $ ("#botao");

botao.on('click', () => {
    apod()
})
function apod(){

$.ajax({
   url: `https://api.nasa.gov/planetary/apod?api_key=3oJxNtB9Kez0obSunOfeSpROAwbPU9pd6zCgYWIf&date=${data.value}`, 
   success(result){
       fundo.css("background-image", `url(${result.hdurl})`);
       titulo[0].innerHTML = result.title;
       texto[0].innerHTML = result.explanation;
       console.log (result);

       if(result.media_type == "image"){
        $(".Video").addClass("Oculto");
        $(".Imagem").removeClass("Oculto")
        $(".Imagem").html(`<img id="Foto" class="ImagemRecebida" src="${result.url}">`);
    }
    else
    {
        $(".Imagem").addClass("Oculto");
        $(".Video").removeClass("Oculto")
        
        $(".Video").html(`<iframe class="VideoNasa" id="Video" src="${result.url}" frameborder="0"></iframe>`)
    }
   }
})
}
apod()