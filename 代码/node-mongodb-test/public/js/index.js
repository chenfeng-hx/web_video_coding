let inputs = document.querySelectorAll('input');

inputs[0].onchange = function () {
    console.log(this.value)
}
inputs[1].onchange = function () {
    console.log(this.value)
}
inputs[2].onchange = function () {
    console.log(this.value)
}

while(true) {
    if(inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {
        axios.post('/index', {
            name: inputs[0].value,
            age: inputs[1].value,
            gender: inputs[2].value
        }).then(res => {
            console.log(res)
        })
    }
}