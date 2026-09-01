show();
let btnadd=document.getElementById("addbtn");
addbtn.addEventListener("click",display);
function display(e)
{
    
    let name=document.getElementById("addname");
    let contact=document.getElementById("addcontact");

    let contactlist=localStorage.getItem("phonebook");

    if(name.value=="" || contact.value=="")
    {
        alert("please enter the information properly");
        return false;
    }

    if(contactlist==null)
    {
        ContactObj=[];
    }
    else
    {
        ContactObj=JSON.parse(contactlist);
    }

    let myObj={
        name:name.value,
        contact:contact.value
    }
    ContactObj.push(myObj);

   localStorage.setItem("phonebook", JSON.stringify(ContactObj));
   name.value="";
   contact.value=""; 
  show();
}

function show()
{
    let list=localStorage.getItem("phonebook");

    if(list==null)
    {
        ContactObj=[];
    }
    else
    {
        ContactObj=JSON.parse(list);
    }

   let html = "";
    ContactObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem; display: inline-blok;">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text" style="white-space: break-spaces;">${element.contact}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Contact</button>
        </div>
        </div>`;
    });
    
    let listele=document.getElementById("phonebook");
    if(ContactObj.length !=0)
    {
        listele.innerHTML=html;
    }
    else{
        listele.innerHTML="Nothing to show! Use Add a contact section above to add contact.";
    }
 
   
}

// delete

function deleteNote(index)
{
    let list=localStorage.getItem("phonebook");

    if(list==null)
    {
        ContactObj=[];
    }
    else
    {
        ContactObj=JSON.parse(list);
    }

    ContactObj.splice(index,1);
    localStorage.setItem("phonebook",JSON.stringify(ContactObj));
    alert("You want to delete a contact");
    show();
}

// search
let search = document.getElementById("searchele");
searchele.addEventListener("input", function(){
let insertval = search.value;
let noteCards = document.getElementsByClassName('noteCard');
Array.from(noteCards).forEach(function(element){
let cardTxt = element.getElementsByTagName("h5")[0].innerText;
    if(cardTxt.includes(insertval)){
        element.style.display = "block";
     }
    else{
        element.style.display = "none";
    }
        
    })
})