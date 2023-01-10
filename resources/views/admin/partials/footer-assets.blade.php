<!-- ============================================================== -->
<!-- All Jquery -->
<!-- ============================================================== -->
<script src="{{ asset('/admin-elite/assets/node_modules/jquery/jquery-3.2.1.min.js') }}"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<!-- Jquery for multi select or choose -->
<script src="{{ asset('/admin-elite/dist/js/chosen.jquery.js') }}"></script>

<!-- Bootstrap popper Core JavaScript -->
<script src="{{ asset('/admin-elite/assets/node_modules/popper/popper.min.js') }}"></script>
<script src="{{ asset('/admin-elite/assets/node_modules/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<!-- slimscrollbar scrollbar JavaScript -->
<script src="{{ asset('/admin-elite/dist/js/perfect-scrollbar.jquery.min.js') }}"></script>
<!--Wave Effects -->
<script src="{{ asset('/admin-elite/dist/js/waves.js') }}"></script>
<!--Menu sidebar -->
<script src="{{ asset('/admin-elite/dist/js/sidebarmenu.js') }}"></script>
<!--Custom JavaScript -->
<script src="{{ asset('/admin-elite/dist/js/custom.min.js') }}"></script>

<!--stickey kit -->
<script src="{{ asset('/admin-elite/assets/node_modules/sticky-kit-master/dist/sticky-kit.min.js') }}"></script>
<script src="{{ asset('/admin-elite/assets/node_modules/sparkline/jquery.sparkline.min.js') }}"></script>

<!-- Sweet-Alert  -->
<script src="{{ asset('/admin-elite/assets/node_modules/sweetalert/sweetalert.min.js') }}"></script>
<script src="{{ asset('/admin-elite/assets/node_modules/sweetalert/jquery.sweet-alert.custom.js') }}"></script>

<!-- switchery  -->
<script src="{{ asset('/admin-elite/assets/node_modules/switchery/dist/switchery.min.js') }}"></script>

<!-- Morris graph chart -->
<script src="{{ asset('/admin-elite/assets/node_modules/morrisjs/morris.min.js') }}"></script>

<script src="{{ asset('/admin-elite/assets/node_modules/morrisjs/morris.js') }}"></script>
<script src="{{ asset('/admin-elite/assets/node_modules/morrisjs/raphael.min.js') }}"></script>

<!-- summernote  -->
<script src="{{ asset('/admin-elite/assets/node_modules/summernote/dist/summernote.min.js') }}"></script>	
<!-- tagsinput  -->
<script src="{{ asset('/admin-elite/assets/node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js') }}"></script>

<!-- This is data table -->
<script src="{{ asset('/admin-elite/assets/node_modules/datatables/jquery.dataTables.min.js') }}"></script>

<script type="text/javascript" src="{{ asset('/admin-elite/dist/js/jquery.fancybox.min.js') }}"></script>


<!-- This is Tree Menu JS  -->
<script src="{{ asset('/tree-menu/TreeMenu.js') }}"></script>

<!-- <script src="{{ asset('/public/js/tinymce/tinymce.min.js') }}"></script>
 <script>
    $(document).ready(function () {
        setTimeout(function () { //$(".message").hide('blind', {}, 500)); 
            $(".message").slideUp(1000).hide(1000);
        }, 5000);
        tinymce.init({
            selector: '.tinymce',
            forced_root_block: ''
        });
    });
</script> -->


<script type="text/javascript">
	$(".chosen-select").chosen();
</script>

{{-- script for success messege hide --}}
<script>
  $(document).ready(function(){
        $('.alert-success').fadeIn().delay(7000).fadeOut();
  });
</script>

<script>
	$( function() {
		$( ".add_datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd-mm-yy',
		}).datepicker('setDate', 'today');

		$( ".add_birth_datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd-mm-yy',
			yearRange: '1970:'+(new Date).getFullYear(),
		}).datepicker('setDate', 'today');

		$( "edit_birth_datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd-mm-yy',
			yearRange: '1970:'+(new Date).getFullYear(),
		});

		$( ".add_birth_datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd-mm-yy',
			yearRange: '1970:'+(new Date).getFullYear(),
		}).datepicker('setDate', 'today');

		var date = new Date();
		var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		// var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

		$("#from_date").datepicker({ 
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd-mm-yy',
		});
		$("#from_date").datepicker("setDate", firstDay);

		$("#to_date").datepicker({
		 	changeMonth: true,
			changeYear: true,
			dateFormat: 'dd-mm-yy',
		});
		$("#to_date").datepicker("setDate", 'today');

		$(".datepicker").datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd-mm-yy',
		});
	} );
</script>

<script type="text/javascript">
	$('[data-fancybox="gallery"]').fancybox({
	  buttons : [
	    'download',
	    'zoom',
	    'slideShow',
	    'thumbs',
	    'close'
	  ]
	});
</script>

