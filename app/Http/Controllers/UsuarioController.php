<?php

namespace App\Http\Controllers;

use App\Models\usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        usuario::Create([
            "nombre"=>$request["nom"],
            "correo"=>$request["email"],
            "contraseña"=>bcrypt($request["password"]),
            "verificador"=>mt_rand(1000, 9999)
        ]);
        return "creado";
    }

    /**
     * Display the specified resource.
     */
    public function show(usuario $usuario)
    {
        //
    }
    public function log(Request $request)
    {
        $user = Usuario::where('correo', $request['email'])->first();
        
        if ($user && Hash::check($request['password'], $user->contraseña) && $user["verificador"]==$request["veri"]) {

            return "existe";
        } else {
            return "No existe";
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $usuario)
    {
        $user=Usuario::where('correo', $usuario)->first();
        $user["verificador"]=1;
        $user->save();
        return 'existe';

    }
    public function validar($usuario){
        
        $user = Usuario::where('correo', $usuario)->first();
        if ($user) {
            $user->verificador = 1;
            $user->save();
            return redirect()->away('http://127.0.0.1:8000/Inicio');

        } else {
            // Manejar el caso en que no se encuentra el usuario
            // por ejemplo, lanzar una excepción o mostrar un mensaje de error
        }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(usuario $usuario)
    {
        //
    }
}
