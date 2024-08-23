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
    public function quiz(Request $request): Response
    {
         $questions = [
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
           
        ];


        return Inertia::render('Quiz/Questions',[
            'questions' => $questions,
        ]);
    }
    public function blog(Request $request): Response
    {
        return Inertia::render('Quiz/Blog');
    }
    public function longAnswer(Request $request): Response {
        $questions = [
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "quizQuestion" => "What is the capital of France?",
                "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
                "quizAnswer" => "Option A",
                "quizExplanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
           
        ];


        return Inertia::render('LongAnswer/Questions',[
            'questions' => $questions,
        ]);
        
    }
}
