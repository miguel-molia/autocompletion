let input = document.querySelector("#simple-search");
let div = document.querySelector('.result');
let div2 = document.querySelector('.result2');
let divJoueur = document.querySelector('.resultJoueur');

//equivalent isset php
if(input){
   
    input.addEventListener('keyup', () =>{
       
        div.innerHTML = "";
   
        
   
    if(input.value == ""){
       
    
       
        div.setAttribute('style','display:none');
    }
    else{
        div.setAttribute('style','display:block; border-bottom: 3px solid black;');
        

    }
    fetch("recherche.php/?search="+input.value).then((response) => {
       
        console.log(window.location.href)

        return response.json()
   
        }).then((data) => {
        // console.log(data)
    data.forEach(element => {
        // console.log(element)
        let p = document.createElement('p');
    
        p.innerHTML = '<a href="element.php?id='+ element.id+'">' + element.Prenom +' '+ element.Nom +' '+ element.Numero +'</a>';

        div.append(p);

    
        
    });
    })

    div2.innerHTML = "";
   
        
   
    if(input.value == ""){
       
    
       
        div2.setAttribute('style','display:none');
    }
    else{
        div2.setAttribute('style','display:block');
    }

    fetch("recherche.php/?search1="+input.value).then((response) => {
       

        return response.json()
   
        }).then((data) => {
        // console.log(data)
    data.forEach(element => {
        // console.log(element)
        let p = document.createElement('p');
    
        p.innerHTML = '<a  href="element.php?id='+ element.id+'">' + element.Prenom +' '+ element.Nom +' '+ element.Numero +'</a>';

        div2.append(p);

    
        
    });
    })
    
    
    })
    
}



let id = window.location.href.split("=");

fetch("recherche.php/?id="+ id[1]).then((response) => {
    
    return response.json()

}).then((data) => {
       let p = document.createElement('p');
    
    let divImg = document.createElement('div');
    let divtxt= document.createElement('div');

    let np = data[0].Nom+data[0].Prenom;
    np = np.replace(/\s+/g,'');
   
    

    divImg.innerHTML = '<img src="photo/'+ np +'.png" style="width:auto; margin:auto">'
    
    divtxt.innerHTML = '<div style= "color:yellow; font-size: 40px; font-family: Fugaz One, cursive;">' + data[0].Prenom +' '+ data[0].Nom +'</div>'
    + '<div style= "color:white; font-size: 30px; font-family: Fugaz One, cursive;">'+'Numero:'+ ' ' + data[0].Numero+ '</div>'
    + '<div style= "color:white; font-size: 30px; font-family: Fugaz One, cursive;">'+ data[0].Poste +'</div>'
    + '<div style= "color:white; font-size: 30px; font-family: Fugaz One, cursive; display:flex; flex-direction:row; align-items:center; margin:auto; justify-content:space-around;">'+ data[0].Pays  +'<img style="height:10vh; width:auto; margin: auto auto auto 10px" src="photo/pays/'+ data[0].Pays 
    + '.svg.png">' +'</div>'
   
    divJoueur.append(divtxt);
    divJoueur.append(divImg);

    divtxt.setAttribute('style','text-align:center; display:flex; flex-direction:column;');
    divImg.setAttribute('style','margin:auto');



   
})



// document.addEventListener('click', ()=> {

//         //si dans la feuille de style le display est egal a block
//         if(div.style.display == 'block'){
//             console.log("click");

//             //tu me le passe en none (affiche pas)
//             div.style.display = 'none';

//         }
//         })