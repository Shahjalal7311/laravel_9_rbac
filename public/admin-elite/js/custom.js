
$(function () {
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    $('.js-switch').each(function () {
        new Switchery($(this)[0], $(this).data());
    });
})

function itemDelete({tableId, type, url}){
$('#' + tableId + ' tbody').on('click', 'i.fa-trash', function () {
  
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
   
    let id = $(this).parent().data('id');
    
    swal({
    title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            $.ajax({
                type: type,
                url: url,
                data: {id: id},
                success: function (response) {
                    swal({
                        title: "<small class='text-success'>Success!</small>",
                        type: "success",
                        text: "Product deleted Successfully!",
                        timer: 1000,
                        html: true,
                    });

                    $('#' + tableId + ' tr#' + id).remove();
                },
                error: function (response) {
                    error = "Failed.";
                    swal({
                        title: "<small class='text-danger'>Error!</small>",
                        type: "error",
                        text: error,
                        timer: 1000,
                        html: true,
                    });
                }
            });
        } else {
            swal({
                title: "Cancelled",
                type: "error",
                text: "Your product is safe :)",
                timer: 1000,
                html: true,
            });
        }
    });
    });
}

function itemStatus({id, url}){
    $.ajax({
        type: "GET",
        url: url,
        data: "id=" + id,
        success: function (response) {
            swal({
                title: "<small class='text-success'>Success!</small>",
                type: "success",
                text: "Status successfully updated!",
                timer: 1000,
                html: true,
            });
        },
        error: function (response) {
            swal({
                title: "<small class='text-success'>Success!</small>",
                type: "success",
                text: "Status successfully updated!",
                timer: 1000,
                html: true,
            });
        }
    });  
}