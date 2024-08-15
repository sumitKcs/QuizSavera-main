<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\QuizCard;

class QuizController extends Controller
{
    //
    public function info(Request $request): Response
    {
        $quizCards = QuizCard::all();
        return Inertia::render('Quiz/Info',[
        'quizCards' => $quizCards,
    ]);
    }
    public function questions(Request $request): Response
    {
        return Inertia::render('Quiz/Questions');
    }
    public function blog(Request $request): Response
    {
        return Inertia::render('Quiz/Blog');
    }
}
