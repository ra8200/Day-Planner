$(".btn").on("click", function(){
    var id= $(this).attr("id")
    var timeBlock = id.split("-")[0]
    var inputEntry = $(`#${timeBlock}-entry`).val()
    localStorage.setItem(timeBlock,inputEntry)
    console.log(id,timeBlock,inputEntry)
})

$("#currentDate").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
var currentHour = moment().hours()
console.log(currentHour)

for(let i=9;i<=19;i++){
    $(`#${i}-entry`).val(localStorage.getItem(i))
    if ( i > currentHour){
        $(`#${i}-entry`).addClass("`g-success")
    }else if( i == currentHour){
        $(`#${i}-entry`).addClass("bg-teal");
    }else{
        $(`#${i}-entry`).addClass("bg-warning")
    }
}

