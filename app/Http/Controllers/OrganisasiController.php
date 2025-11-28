<?php

namespace App\Http\Controllers;

use App\Models\Organisasi;
use Illuminate\Http\Request;

class OrganisasiController extends Controller
{
    public function show($id)
    {
        $organisasi = Organisasi::findOrFail($id);
        return response()->json($organisasi);
    }
}
