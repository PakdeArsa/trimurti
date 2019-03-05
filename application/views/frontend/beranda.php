
<!DOCTYPE html>
<!--[if IE 8]> <html class="ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title>TRIMURTI : Official Site</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
	<style type="text/css">
	li {
    font-size: 14px;
    color: #909090;
    margin: 0 0 10px;
    font-family: "Montserrat";
	}
	</style>
	</style>
	<link rel="stylesheet" media="all" href="<?= base_url('assets/');?>css/style.css">
	<link href="<?= base_url('assets/');?>css/bootstrap.css" rel="stylesheet"> 
	<link href="<?= base_url('assets/');?>css/font-awesome.css" rel="stylesheet"> 
	<link href="<?= base_url('assets/');?>css/font-awesome.min.css" rel="stylesheet">
	<link href="<?= base_url('assets/');?>css/main-stylesheet.css" rel="stylesheet"> 
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<style type="text/css">
	.info-request1 {
	    /* border-radius: 4px; */
	    /* background: #2b4167 url(../images/ico_information.png) no-repeat 35px 35px; */
	    display: block;
	    /* padding: 0 0 0 138px; */
	    /* margin: 0 15px 100px 15px; */
	    height: 115px;
	    overflow: hidden;
	}
	.scroll-left {
	 height: 50px;	
	 overflow: hidden;
	 position: relative;
	}
	.scroll-left span {
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 margin: 0;
	 line-height: 50px;
	 text-align: center;
	 /* Starting position */
	 -moz-transform:translateX(100%);
	 -webkit-transform:translateX(100%);	
	 transform:translateX(100%);
	 /* Apply animation to this element */	
	 -moz-animation: scroll-left 30s linear infinite;
	 -webkit-animation: scroll-left 30s linear infinite;
	 animation: scroll-left 30s linear infinite;
	}
	/* Move it (define the animation) */
	@-moz-keyframes scroll-left {
	 0%   { -moz-transform: translateX(100%); }
	 100% { -moz-transform: translateX(-100%); }
	}
	@-webkit-keyframes scroll-left {
	 0%   { -webkit-transform: translateX(100%); }
	 100% { -webkit-transform: translateX(-100%); }
	}
	@keyframes scroll-left {
	 0%   { 
	 -moz-transform: translateX(100%); /* Browser bug fix */
	 -webkit-transform: translateX(100%); /* Browser bug fix */
	 transform: translateX(100%); 		
	 }
	 100% { 
	 -moz-transform: translateX(-100%); /* Browser bug fix */
	 -webkit-transform: translateX(-100%); /* Browser bug fix */
	 transform: translateX(-100%); 
	 }
	}

	</style>
</head>
<body>

<?php $this->load->view($header); ?>
	
<?php $this->load->view($konten); ?>
	
<?php $this->load->view($kalender); ?>

<?php $this->load->view($news); ?>

<?php $this->load->view($events); ?>

<?php $this->load->view($fancy); ?>
	
<?php $this->load->view($footer); ?>	

	<div id="fancy">
		<h2>Request information</h2>
		<form action="#">
			<div class="left">
				<fieldset class="mail"><input placeholder="Email address..." type="text"></fieldset>
				<fieldset class="name"><input placeholder="Name..." type="text"></fieldset>
				<fieldset class="subject"><select><option>Choose subject...</option><option>Choose subject...</option><option>Choose subject...</option></select></fieldset>
			</div>
			<div class="right">
				<fieldset class="question"><textarea placeholder="Question..."></textarea></fieldset>
			</div>
			<div class="btn-holder">
				<button class="btn blue" type="submit">Send request</button>
			</div>
		</form>
	</div>
	
	<script src="<?= base_url('assets/');?>js/jquery-1.11.1.min.js"></script>
	<script src="<?= base_url('assets/');?>js/plugins.js"></script>
	<script src="<?= base_url('assets/');?>js/main.js"></script>
	<script type="<?= base_url('assets/');?>text/javascript" src="js/bootstrap.min.js"></script>

</body>
</html>
