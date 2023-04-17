function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const description=event.target.description.value;
    const price=event.target.price.value;
    const quantity=event.target.quantity.value;


    const obj={
        name,
        description,
        price,
        quantity
    }
axios.post("https://crudcrud.com/api/f3f4d8684cbc4290bf4c37704b8a9c17/candyData",obj)
.then((response)=>{
    showUserOnScreen(response.data)
    //console.log(response)
})
.catch((err)=>{
    document.body.innerHTML=document.body.innerHTML+"<h4> Something went wrong </h4>"
    console.log(err)
})
}

window.addEventListener("DOMContentLoaded",()=>{

    axios.get("https://crudcrud.com/api/f3f4d8684cbc4290bf4c37704b8a9c17/candyData")
    .then((response)=>{
        //console.log(response)
        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error)
    })
})

function showUserOnScreen(obj){
    const parentElem=document.getElementById('users');
    const childElem=document.createElement('li')
    childElem.textContent=obj.name +' - '+obj.description+' - '+obj.price+' - '+obj.quantity;

    const deleteButton=document.createElement('input')
    deleteButton.type="button"
    deleteButton.value="Delete"
    deleteButton.onclick= () => {
        axios.delete(`https://crudcrud.com/api/f3f4d8684cbc4290bf4c37704b8a9c17/candyData/${obj._id}`)
  .then((response) => {
    console.log(obj._id);
  })
  .catch((error) => {
    console.log(error);
  });
    parentElem.removeChild(childElem)
    }

    const buyOne=document.createElement('input')
    buyOne.type="button"
    buyOne.value="Buy One"
    buyOne.onclick= () => {
        axios.put(`https://crudcrud.com/api/f3f4d8684cbc4290bf4c37704b8a9c17/candyData/${obj._id}`)
  .then((response) => {
    // showUserOnScreen(obj._id)
    console.log(obj._id);
  })
  .catch((error) => {
   
    console.log(error);
  });
    parentElem.removeChild(childElem)
    document.getElementById('name').value=obj.name;
    document.getElementById('description').value=obj.description;
    document.getElementById('price').value=obj.price;
    document.getElementById('quantity').value=obj.quantity-1;
    }

    
    const buyTwo=document.createElement('input')
    buyTwo.type="button"
    buyTwo.value="Buy Two"
    buyTwo.onclick= () => {
        axios.put(`https://crudcrud.com/api/f3f4d8684cbc4290bf4c37704b8a9c17/candyData/${obj._id}`)
  .then((response) => {
    //showUserOnScreen(obj._id)
    console.log(obj._id);
  })
  .catch((error) => {
    console.log(error);
  });
    parentElem.removeChild(childElem)
    document.getElementById('name').value=obj.name;
    document.getElementById('description').value=obj.description;
    document.getElementById('price').value=obj.price;
    document.getElementById('quantity').value=obj.quantity-2;
    }

    const buyThree=document.createElement('input')
    buyThree.type="button"
    buyThree.value="Buy Three"
    buyThree.onclick= () => {
        axios.put(`https://crudcrud.com/api/f3f4d8684cbc4290bf4c37704b8a9c17/candyData/${obj._id}`)
  .then((response) => {
    //showUserOnScreen(obj._id)
    console.log(obj._id);
  })
  .catch((error) => {
   // document.body.innerHTML=document.body.innerHTML+"<h4> Chocolates are not available </h4>"
    console.log(error);
  });
    parentElem.removeChild(childElem)
    document.getElementById('name').value=obj.name;
    document.getElementById('description').value=obj.description;
    document.getElementById('price').value=obj.price;
    document.getElementById('quantity').value=obj.quantity-3;
    }


   childElem.appendChild(buyOne)
   childElem.appendChild(buyTwo)
   childElem.appendChild(buyThree)
   childElem.appendChild(deleteButton)
   parentElem.appendChild(childElem)

}
 