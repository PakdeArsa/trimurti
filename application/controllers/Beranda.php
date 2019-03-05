<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Beranda extends CI_Controller {


	public function index()
	{
		$isi['header'] = 'frontend/header.php';
		$isi['konten'] = 'frontend/isiberanda.php';
		$isi['kalender'] = 'frontend/isikalender.php';
		$isi['news'] = 'frontend/news.php';
		$isi['events'] = 'frontend/events.php';
		$isi['fancy'] = 'frontend/fancy.php';
		$isi['footer'] = 'frontend/footer.php';
		$this->load->view('frontend/beranda.php', $isi);
	}

	public function prestasi()
	{
		$isi['header'] = 'frontend/header.php';
		$isi['konten'] = 'frontend/isiprestasi.php';
		$isi['fancy'] = 'frontend/fancy.php';
		$isi['footer'] = 'frontend/footer.php';
		$this->load->view('frontend/prestasi.php', $isi);
	}

	public function konseling()
	{
		$isi['header'] = 'frontend/header.php';
		$isi['konten'] = 'frontend/isikonseling.php';
		$isi['fancy'] = 'frontend/fancy.php';
		$isi['footer'] = 'frontend/footer.php';
		$this->load->view('frontend/konseling.php', $isi);
	}

	public function kalender()
	{
		$isi['header'] = 'frontend/header.php';
		$isi['konten'] = 'frontend/isikalender.php';
		$isi['fancy'] = 'frontend/fancy.php';
		$isi['footer'] = 'frontend/footer.php';
		$this->load->view('frontend/kalender.php', $isi);
	}

	public function guru()
	{
		$isi['header'] = 'frontend/header.php';
		$isi['konten'] = 'frontend/isiguru.php';
		$isi['fancy'] = 'frontend/fancy.php';
		$isi['footer'] = 'frontend/footer.php';
		$this->load->view('frontend/guru.php', $isi);
	}

	public function galeri()
	{
		$isi['header'] = 'frontend/header.php';
		$isi['konten'] = 'frontend/isigaleri.php';
		$isi['fancy'] = 'frontend/fancy.php';
		$isi['footer'] = 'frontend/footer.php';
		$this->load->view('frontend/galeri.php', $isi);
	}

	public function unduhan()
	{
		$isi['header'] = 'frontend/header.php';
		$isi['konten'] = 'frontend/isiunduhan.php';
		$isi['fancy'] = 'frontend/fancy.php';
		$isi['footer'] = 'frontend/footer.php';
		$this->load->view('frontend/unduhan.php', $isi);
	}

	public function kontak()
	{
		$isi['header'] = 'frontend/header.php';
		$isi['konten'] = 'frontend/isikontak.php';
		$isi['fancy'] = 'frontend/fancy.php';
		$isi['footer'] = 'frontend/footer.php';
		$this->load->view('frontend/kontak.php', $isi);
	}
}
