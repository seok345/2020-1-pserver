function Send(){

   alert("자바스크립트 Send 함수 불러짐")
   var data = {
       "sepal_length":8,
       "sepal_width":1,
       "petal_length":8,
       "petal_width":1,
   }
   $.ajax({
    type: "GET",
    url: "http://localhost:8000/predict",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    data: JSON.stringify(data)
    }).done(function(response){
        alert(response)
    }).fail(function(response){
        alert("fail" + response)
    }).always()
   }