<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource("usuario",UsuarioController::class);
Route::match(['get', 'post'], '/log', [UsuarioController::class,'log']);
Route::get('Validar/{email}',[UsuarioController::class,'validar']);
