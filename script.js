$(".btn").on("click", function(){
    var id= $(this).attr("id")
    var timeBlock = id.split("-")[0]
    var inputEntry = $(`#${timeBlock}-entry`).val()
    console.log(id,timeBlock,inputEntry)
})