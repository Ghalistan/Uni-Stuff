<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UserController extends CI_Controller {

	public function Register()
	{
        // Nomor 4
        // Jika Password dan Re-Enter Password sama, maka:
        if(){
            // Panggil fungsi Register pada model User
            if() {
                // Jika Berhasil Register
                // Buat Flashdata dan arahkan kembali ke Landing
            } else {
                // Jika gagal
                // Buat Flashdata dan arahkan kembali ke Landing/Register
            }
        } else {
            // Jika Password berbeda
            // Buat flashdata
            // Arahkan kembali ke Landing/Register
        }
    }

    public function Signin() {
        // Nomor 7
        // Panggil fungsi findUser
        // Jika User ditemukan
        if(){
            // Jika rememberme dicentang
            if() {
                // Buatkan cookie dengan isi username
                // Arahkan kembali ke Landing
            } else {
                // Buatkan session dengan isi username
                // Arahkan kembali ke Landing
            }
        } else {
            // Jika data tidak ditemukan
            // maka buat flashdata yang menandakan data tidak ditemukan
        }
    }

    public function Logout() {
        $cookie = $this->input->cookie(NAMA_COOKIE);
        if(isset($cookie)) {
            delete_cookie(NAMA_COOKIE);
            redirect('Landing');
        } else {
            session_destroy();
            redirect('Landing');
        }
    }
}