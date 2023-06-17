const url = 'http://localhost:5000'
function getExcel(){
    console.log('on getExcel');
    fetch(`${url}/648e0353b276806d3c691f59`).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}
function getExcels(){
    console.log('on getExcels');
    fetch(`${url}`).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}

document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
})
function addExcel(){
    const file = document.getElementById('file').files[0];
    var data = new FormData();
    data.append('file',file)
    if(file){
        fetch(`${url}/`,{
            method:'POST',
            body:data
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }else{
        console.log('input a file');
    }
}

function deleteExcel(){
    console.log('on deleteExcel');
    fetch(`${url}/648e0353b276806d3c691f59`,{
        method:'DELETE'
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}