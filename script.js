
var form = document.getElementById('form');
var input = document.getElementById('search');
var imagediv = document.getElementById('image-div');
var namediv = document.getElementById('name-div');
var biodiv = document.getElementById('bio-div');

const url = "https://api.github.com/users/";


function populate(data){
    const name = data.name;
    const bio = data.bio;
    const avatar = data.avatar_url;

    const img = document.createElement('img');
    img.src = avatar;
    imagediv.appendChild(img);

        const leftcontainer = document.getElementById('left-container');

         const div = document.createElement('div');
         div.innerHTML=`<h2> ${data.name}`;
         leftcontainer.appendChild(div);



         const div2 = document.createElement('div');
         div2.innerHTML=`<h2>${bio}</h2>`;
         leftcontainer.appendChild(div2);


         const div3 = document.createElement('div');
         div3.innerHTML = `<a href="${data.html_url}"> github profile </a>`;
         leftcontainer.appendChild(div3);

}



async function getdata(user) {
    const res = await fetch(url + user);
    const data = await res.json();
     populate(data);
}


form.addEventListener('submit', function(event){
      
    event.preventDefault();
    var searchTerm = input.value;
    //   console.log(searchTerm);

    if(searchTerm && searchTerm!=''){
        getdata(searchTerm);
        input.value=""
    }else{
        window.location.reload();
    }

   
     

});