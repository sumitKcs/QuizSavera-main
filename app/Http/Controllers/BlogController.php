<?php

namespace App\Http\Controllers;

use App\Models\QuizCard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Http;

class BlogController extends Controller
{
    public function index(Request $request): Response
    {
        $sidebars = [
            "left" => [
                [
                    "header" => "Current Affairs Quiz (1280)",
                    "links" => [
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                    ],
                ],
                [
                    "header" => "General Awareness Quiz (1280)",
                    "links" => [
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                    ],
                ],
                [
                    "header" => "Current Affairs Quiz (1280)",
                    "links" => [
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                    ],
                ],
                [
                    "header" => "General Awareness Quiz (1280)",
                    "links" => [
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                    ],
                ],
                [
                    "header" => "Current Affairs Quiz (1280)",
                    "links" => [
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                    ],
                ],
                [
                    "header" => "General Awareness Quiz (1280)",
                    "links" => [
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                    ],
                ],
            ],
            "right" => [
                [
                    "header" => "Current Affairs Quiz (1280)",
                    "links" => [
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                    ],
                ],
                [
                    "header" => "General Awareness Quiz (1280)",
                    "links" => [
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                        "Current Affairs Quiz - November, 2023",
                    ],
                ],
            ],

        ];
        

        // call get-web rest api to get menu_items
        $url = env('SERVER_URL') .'/api/'. env('API_VERSION')  . '/get-web';

        $response = Http::post($url, [
            'packageName' => 'com.quizsavera.app'
        ]);
        $response = $response->json();
        $appName = $response['appName'];
        $menuItems = $response['menuItems'];
        $homeLayout = $response['homeLayout'];

        return Inertia::render('Quiz/Index', [
            'title' => $appName,
            'sidebars'=> $sidebars,
            'menu_items' => $menuItems,
            'home_layout' => $homeLayout,
            
        ]);
    }
    public function content($id): Response
    {
        Log::info("blog_id:" . $id);
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
