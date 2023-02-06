<!DOCTYPE html>
	<html lang="en">
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<head>
		<?php
		header("Cache-Control: no-cache, must-revalidate");
		header("Content-Type: application/xml; charset=utf-8");
		?>
		<META NAME="KEYWORDS" CONTENT="">
		<META NAME="TITLE" CONTENT="">
		<META NAME="DESCRIPTION" CONTENT="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<title>Home Page</title>
		<style type="text/css">
			.nav>li>a {
				position: relative;
				display: block;
				padding: 10px 15px;
			}
		</style>
	</head>
	<body id="index" class="lang-en country-us currency-usd layout-full-width page-index tax-display-disabled">
	  <main>
			<section id="wrapper">
					<div class="container">
						<div id="content-wrapper" style="text-align: center; font-size:22px; margin-top: 30px;">
							<section id="main">Welcome <a href="/admin/login">Login</a></section>
					</div>
				</div>
			</section>		
			<footer id="footer"></footer>
		</main>
	</body>
</html>