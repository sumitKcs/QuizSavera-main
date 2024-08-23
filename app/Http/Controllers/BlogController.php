<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\QuizCard;

class BlogController extends Controller
{
    public function index(Request $request): Response
    {
        $quizCards = QuizCard::all();
        return Inertia::render('Blog/Index',[
        'quizCards' => $quizCards,
    ]);
    }
      public function content($id): Response
    {
        Log::info("blog_id:" .$id);
        return Inertia::render('Blog/Content', ['id' => $id]);
    }
    // public function quiz(Request $request): Response
    // {
    //      $questions = [
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
           
    //     ];


    //     return Inertia::render('Quiz/Questions',[
    //         'questions' => $questions,
    //     ]);
    // }
  
    // public function longAnswer(Request $request): Response {
    //     $questions = [
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
    //         [
    //             "quizQuestion" => "What is the capital of France?",
    //             "quizOptions" => ["Paris", "London", "Madrid", "Berlin"],
    //             "quizAnswer" => "Option A",
    //             "quizExplanation" =>
    //                 "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
    //         ],
           
    //     ];


    //     return Inertia::render('LongAnswer/Questions',[
    //         'questions' => $questions,
    //     ]);
        
    // }
}
