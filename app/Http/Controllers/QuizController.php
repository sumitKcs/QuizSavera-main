<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class QuizController extends Controller
{
    public function index(Request $request): Response
    {

        return Inertia::render('Quiz/Index', [
            'data' => [],
        ]);
    }

    public function quizQuestions(Request $request, $cat_id): Response
    {


         // call get-web rest api to get menu_items
         $url = env('SERVER_URL') .'/api/'. env('API_VERSION')  . '/get-web-page-data';

         $response = Http::post($url, [
             'catId' => $cat_id,
             'device' => 'web',
             'packageName' => 'com.quizsavera.app',
         ]);
         $response = $response->json();
         $appName = $response['appName'];
         $menuItems = $response['menuItems'];
         $items = $response['items'];
         $contentType = $response['contentType'];
         $sidebars = $response['sidebars'];
         $footer = $response['footer'];
         $notificationItems = $response['notificationItems'];

        //  if items length is 0 then return
        if(count($items) == 0) {
            return Inertia::render('Quiz/Questions', [
                'title' => $appName,
                'sidebars'=> $sidebars,
                'menu_items' => $menuItems,
                'notificationItems' => $notificationItems,
                'isCategory' => 1,
                'contentType' => strtolower($contentType),
                'questions' => [],
                'quizTitle' => null,
                'footer' => $footer
            ]);
     
        }

        $questions = $items[0]['subItems'];
        $quizTitle = $items[0]['mainItemName'];

        if(count($questions) == 0) {
            return Inertia::render('Quiz/Questions', [
                'title' => $appName,
                'sidebars'=> $sidebars,
                'menu_items' => $menuItems,
                'notificationItems' => $notificationItems,
                'isCategory' => 1,
                'contentType' => strtolower($contentType),
                'questions' => [],
                'quizTitle' => $quizTitle,
                'footer' => $footer
            ]);
     
        }

         return Inertia::render('Quiz/Questions', [
             'title' => $appName,
             'sidebars'=> $sidebars,
             'menu_items' => $menuItems,
             'notificationItems' => $notificationItems,
             'isCategory' => 1,
             'contentType' => strtolower($contentType),
             'questions' => $questions,
             'quizTitle' => $quizTitle,
             'footer' => $footer
         ]);
    }

   
    public function play($cat_id): Response
    {
        // $cat = Category::find($cat_id);

        $questions = [
            [
                "id" => "1",
                "question" => "What is the capital of France?(que)1",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "A",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "id" => "2",
                "question" => "What is the capital of France?(que2)",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "B",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "id" => "3",
                "question" => "What is the capital of France?((que3)",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "A",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "id" => "4",
                "question" => "What is the capital of France?(que4)",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "A",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "id" => "5",
                "question" => "What is the capital of France?(que5)",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "A",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "id" => "6",
                "question" => "What is the capital of France?(que6)",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "A",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "id" => "7",
                "question" => "What is the capital of France?(que7)",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "A",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "id" => "8",
                "question" => "What is the capital of France?(que8)",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "A",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "id" => "9",
                "question" => "What is the capital of France?(que9)",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "A",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "id" => "10",
                "question" => "What is the capital of France?(que10)",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "A",
                "explanation" =>
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],

        ];

        // Custom comparison function to sort by "id"
        usort($questions, function ($a, $b) {
            return $a['id'] <=> $b['id'];
        });

        return Inertia::render('Quiz/Play', [
            'questions' => $questions,
            "minutes" => 10,
        ]);
    }

    public function analytics(): Response
    {
        return Inertia::render("Analytics/Index");
    }
}
