<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Http\Request;

class PrivacyPolicy extends Controller
{
    public function index(Request $request): Response
    {

        return Inertia::render('Privacy-Policy/Index');
    }
}
