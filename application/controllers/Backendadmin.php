<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Backendadmin extends CI_Controller {


	public function index()
	{
		//$isi['header'] = 'backend/header.php';
		$isi['konten'] 	= 'backend/beranda.php';
		$isi['menu'] 	= 'backend/menu.php';
		//$isi['news'] = 'backend/news.php';
		//$isi['events'] = 'backend/events.php';
		//$isi['fancy'] = 'backend/fancy.php';
		//$isi['footer'] = 'backend/footer.php';
		$this->load->view('backend/layout.php', $isi);
	}

	
}
