

document.getElementById('btn').addEventListener('click', function() {
var number = Math.random()
    fetch('/', {
        method: "POST",
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "number": number,
        })
    }).then(function(res){
        debugger
        return res.json();
    }).then(function(data) {
        console.log(data);
    })
});