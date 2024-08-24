<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use App\Models\QuizCard;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index(Request $request): Response
    {
         $data = [
            [
                "id" => "1",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                ]
            ],
            [
                "id" => "2",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                ]
            ],
            [
                "id" => "3",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                ]
            ],
            [
                "id" => "4",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",  "sub_cat" => [
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                ]
            ],
            [
                "id" => "5",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                ]
            ],
            [
                "id" => "6",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                ]
            ],
            [
                "id" => "7",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                ]
            ],
            [
                "id" => "8",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                    ["cat_name" => "NEET PG Result 2024"],
                ]
            ],
           
           
        ];


        return Inertia::render('Quiz/Index',[
            'data' => $data,
        ]);
    }

    public function questions(Request $request): Response
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

    // public function getCat($cat_id): Response {

    //     return Intertia::render('Quiz/Questions')
    // }
}
