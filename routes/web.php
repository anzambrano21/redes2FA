<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

use App\Models\usuario;
Route::get('/', function () {
    return view('welcome');
});

Route::get('/inicio/comprovar', function () {
    return view('welcome');
});
Route::get('/registro/comprovar', function () {
    return view('welcome');
});
Route::get('/seguridad', function () {
    $user = usuario::latest('updated_at')->first();
    
    Mail::to($user["correo"])->send(new App\Mail\seguridad);
    return "mensaje enviado";
})->name('seguridad');
Route::get('/{any?}', function () {
    return view('welcome');
});