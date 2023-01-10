<!DOCTYPE html>
<html>
    <head>
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('/').@$information->adminfavIcon }}">
        <title>{{ $title }}</title>
        <style>
            #report-table {
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }

            #report-table td, #report-table th {
                border: 1px solid #ddd;
            }

            #report-table td {
                font-size: 11px;
                padding: 5px;
            }

            #report-table th {
                text-align: center;
                background-color: #4CAF50;
                color: white;
                font-size: 13px;
                vertical-align: middle;
                padding: 3px;
            }

            #report-header{
                background-color: lightgray;
                width: 100%;
                padding: 0px;
                text-align: center;
                font-weight: bold;
                font-size: 15px;
            }

            .align-left{
                text-align: left;
            }

            .align-center{
                text-align: center;
            }

            .align-right{
                text-align: right;
            }

            #report-table tfoot th{
                background-color: #778899;
                color: black;
            }

            #report-table tr:nth-child(even){background-color: #f2f2f2;}

            #report-table tr:hover {background-color: #ddd;}

            caption{
                font-weight: bold; text-decoration: underline; padding-bottom: 5px;
            }

            #header-table {
                font-family: Times, "Times New Roman", serif;
                border-collapse: collapse;
                width: 100%;
            }

            #header-table td, #header-table th {
                text-align: center;
                /*background-color: #a4b7b4;*/
                color: black;
                border: 0px solid #ddd;
                padding: 5px;
            }

            #header-table td {
                font-size: 14px;
            }

            #header-table th {
                font-size: 20px;
            }

            #pad-bottom{
                padding-bottom: 10px;
            }

            .overline {
                border-top: 2px solid currentColor;;
            }


            #account-voucher-table {
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }

            #account-voucher-table td, #account-voucher-table th {
                border: 1px solid #ddd;
            }

            #account-voucher-table td {
                font-size: 11px;
                padding: 5px;
            }

            #account-voucher-table th {
                text-align: center;
                /*background-color: #4CAF50;*/
                color: black;
                font-size: 13px;
                vertical-align: middle;
                padding: 3px;
            }

            #account-voucher-header{
                /*background-color: lightgray;*/
                border: 1px solid #ddd;
                width: 100%;
                padding: 10px;
                text-align: center;
                font-weight: bold;
                font-size: 15px;
            }

            #account-voucher-table tfoot th{
                color: black;
            }
            
            #voucher-sign-table{
                width: 100%;
                border: 0px solid black;
                border-collapse: collapse;
            }

            #voucher-sign-table td{
                width: 50%;
                border: 0px solid black;
            }
        </style>

        @yield('custome-css')
    </head>

    @php
    @endphp

    <body align="center">
    	@php
    		use App\ShowroomSetup;

    		$showroom = ShowroomSetup::first();
    	@endphp

    	<table id="header-table">
    		<thead>
    			<tr>
    				<th>{{ $showroom->name }}</th>
    			</tr>
    			<tr>
    				<td><b>Address:</b> {{ $showroom->address }}</td>
    			</tr>
    			<tr>
    				<td><b>Phone:</b> {{ $showroom->phone }}, <b>Website:</b> {{ $showroom->website }}, <b>Email: </b>{{ $showroom->email }}</td>
    			</tr>
    		</thead>
    	</table>

    	<hr>

    	@yield('content')
    </body>
</html>