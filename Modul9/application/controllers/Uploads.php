<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Uploads extends CI_Controller {
    public function do_upload() {
        $config['upload_path']      = 
        $config['allowed_types']    = 
        $config['max_size']         = 
        $config['max_width']        = 
        $config['max_height']       = 

        $this->load->library('upload', $config);

        if() {
            // Jika upload tidak berhasil
            // buat flashdata berisikan info dari gagal upload
            // dan arahkan kembali ke halaman loggedin
        } else {
            // Jika upload berhasil
            // Ambil informasi dari file yang diupload
            // buat flashdata menandakan berhasil upload
            // simpan nama file ke table 'image_path' dengan memanggil fungsi imageUpload() pada model User
            // dan arahkan ke Controller Landing/loginPage
        }
    }
}