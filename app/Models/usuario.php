<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuario extends Model
{
    protected $fillable = ['nombre', 'correo', 'contraseña','verificador'];
    protected $table = 'usuarios';
    use HasFactory;
}
