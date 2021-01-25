const printData = data =>{
    const wrapper = document.createElement('article')
    const model = document.createElement('h1')
    const image = document.createElement('div')
    const make = document.createElement('h2')
    const id = document.createElement('p')
    const km =document.createElement('p')
    const description = document.createElement('p')
    const calendar = document.createElement('div')
    const estimateDate = document.createElement('p')
    const estimateDelivery = document.createElement('p')


    model.innerHTML = `Modelo: ${data.model}`
    make.innerHTML = `Marca: ${data.make}`
    id.innerHTML = `No. de ID: ${data.id}`
    km.innerHTML = `Kilometraje: ${data.km}`
    description.innerHTML = `Descripción: ${data.description}`
    estimateDate.innerHTML = `Fecha de llegada: ${data.estimateDate}`
    estimateDelivery.innerHTML = `Fecha de entrega: ${data.estimateDeliveryDate}`

    calendar.setAttribute("class",'calendar')
    image.setAttribute("class",'image')
    image.setAttribute("style", `background-image: url('${data.image}')`)
    
    wrapper.appendChild(model)
    wrapper.appendChild(image)
    wrapper.appendChild(make)
    wrapper.appendChild(id)
    wrapper.appendChild(km)
    wrapper.appendChild(description)
    wrapper.appendChild(calendar)
    calendar.appendChild(estimateDate)
    calendar.appendChild(estimateDelivery)
    const container = document.getElementById('container')
    container.appendChild(wrapper)
}



fetch('https://ecb-server.arianaomi.vercel.app/cars')
  .then(response => response.json())
  .then((data) => {
      //console.log(data.dataCars)
      data.dataCars.forEach(element => {
        printData(element)
    })
});