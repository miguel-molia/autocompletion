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
   
    divImg.innerHTML = '<img src="photo/'+data[0].Nom+data[0].Prenom+'.png">'
    
   
    p.innerHTML = '<a href="element.php?id='+ data[0].id+'">' + data[0].Prenom +' '+ data[0].Nom +' '+ data[0].Numero +' '+ data[0].Poste +' '+ data[0].Pays +'</a>';
   
    divJoueur.append(p);

   divJoueur.append(divImg);

   
})



// document.addEventListener('click', ()=> {

//         //si dans la feuille de style le display est egal a block
//         if(div.style.display == 'block'){
//             console.log("click");

//             //tu me le passe en none (affiche pas)
//             div.style.display = 'none';

//         }
//         })