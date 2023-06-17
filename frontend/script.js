const url = 'http://localhost:5000'
function getExcel(){
    console.log('on getExcel');
    fetch(`${url}/:id`)
}
function getExcels(){
    console.log('on getExcels');
    fetch(`${url}`)
}
function addExcel(){
    console.log('on addExcel');
    fetch(`${url}`,{
        method:'POST'
    })
}
function deleteExcel(){
    console.log('on deleteExcel');
    fetch(`${url}/1`,{
        method:'DELETE'
    })
}