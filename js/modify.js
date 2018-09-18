// $(function(){

    var count  = 0;


    function append(){
        count++;
        // alert(count);
        $.get("events.html", function (data) {
                alert(data); // <-- add this code
                $("#append").append(data);
                // console.log($("#portfolio").children(".container").children('.row')[1].append(data));
            });
        // });
    }

    function modal(id){
        $.get("events_modals.html", function (data) {
            // alert(data); // <-- add this code
            $("body").append(data);
            $('#'+id).removeAttr("aria-hidden");
            $('#'+id).addClass("show");
            $('#'+id).css('display', 'block');

            // document.getElementsById(id).style()
            // console.log($("#portfolio").children(".container").children('.row')[1].append(data));
        });
    }
// });
