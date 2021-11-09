let url ='https://ecomerce-master.herokuapp.com/api/v1/item'
    fetch(url)
    .then(response => response.json())
    .then(data => Products(data))
    .catch(error => console.log(error))

    const Products =  (data) => {
        // console.log(data)
        // console.log(typeof(data))
        console.log(data) 
        for (let i = 0; i < data.length; i++) {
        //    for(let llave in data[i]){
            // if(llave === "image"){
                console.log(data[i]["image"])
            // }
            
        //    }
        // console.log(data[i])
        }
        }