

let discos =[]


const Cargar  = ()=>{





  do{

    var nombre = prompt('Ingrese una cancion');
    var artista = prompt('Ingrese artista:');
    
    do{
             cargarDiscos = prompt('Ingrese un codigo')
              
       } while( !cargarDiscos > 1 && cargarDiscos <= 999 || isNaN((cargarDiscos))){
            duracionPista = window.prompt("Pongalo de nuevo capaz que puso una letra /fuemayor a 999: ")};
  
           
            do{
              duracion = prompt('Ingrese una duracion')
               
        } while( !duracion > 1 && duracion <= 200 || isNaN((duracion))){
             duracion = window.prompt("no ponga mas de 200: ")};
             
       
  
  
       document.write("<p class='simple-text'>Su cancion es  : " + nombre + "<br>Su artista es : " + artista+ '<br/>Su Duracion es : ' + duracion+ "<br>Su codigo es: " + cargarDiscos +"</p>");} while(confirm('deseas cargar mas pistas'))
  



  
}

  
    


    

let duracion = 180
const Mostrar =()=>{


info.innerHTML=  `("<p class='simple-text'>Su cancion es  : " + nombre + "<br>Su artista es : " + artista+ '<br/>Su Duracion es : ' + duracion+ "<br>Su codigo es: " + cargarDiscos +"</p>");}`
    // if(duracion>=180) {
    //   color='red'
    // } else{
    //   color='green'
    // }

    duracion>=180?
    color='red':
    color= 'green'
    html =`<p style="color:${color}"> hola </p>`;
    document.getElementById('info').innerHTML = html




  }
