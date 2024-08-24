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
                    [
                        "id" => "1",
                        "cat_name" => "Aptitude"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Reasoning"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "General Knowledge"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "History"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Polity"
                    ],
                ]
            ],
            [
                "id" => "2",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Aptitude"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Reasoning"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "General Knowledge"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "History"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Polity"
                    ],
                ]
            ],
            [
                "id" => "3",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Aptitude"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Reasoning"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "General Knowledge"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "History"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Polity"
                    ],
                ]
            ],
            [
                "id" => "4",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Aptitude"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Reasoning"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "General Knowledge"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "History"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Polity"
                    ],
                ]
            ],
            [
                "id" => "5",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Aptitude"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Reasoning"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "General Knowledge"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "History"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Polity"
                    ],
                ]
            ],
            [
                "id" => "6",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Aptitude"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Reasoning"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "General Knowledge"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "History"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Polity"
                    ],
                ]
            ],
            [
                "id" => "7",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Aptitude"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Reasoning"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "General Knowledge"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "History"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Polity"
                    ],
                ]
            ],
            [
                "id" => "8",
                "cat_name" => "SSC CGL",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Aptitude"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Reasoning"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "General Knowledge"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "History"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Polity"
                    ],
                ]
            ],


        ];


        return Inertia::render('Quiz/Index', [
            'data' => $data,
        ]);
    }

    public function questions(Request $request): Response
    {
        $questions = [
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],

        ];


        return Inertia::render('Quiz/Questions', [
            'questions' => $questions,
        ]);
    }

    public function getCat($cat_id): Response
    {
        // $cat = Category::find($cat_id);

        $data = [
            [
                "id" => "1",
                "cat_name" => "Chapter 1",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Topic 1"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Topic 2"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "Topic 3"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "Topic 4"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Topic 5"
                    ],
                ]
            ],
            [
                "id" => "2",
                "cat_name" => "Chapter 2",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Topic 1"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Topic 2"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "Topic 3"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "Topic 4"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Topic 5"
                    ],
                ]
            ],
            [
                "id" => "3",
                "cat_name" => "Chapter 3",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Topic 1"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Topic 2"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "Topic 3"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "Topic 4"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Topic 5"
                    ],
                ]
            ],
            [
                "id" => "4",
                "cat_name" => "Chapter 4",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Topic 1"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Topic 2"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "Topic 3"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "Topic 4"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Topic 5"
                    ],
                ]
            ],
            [
                "id" => "5",
                "cat_name" => "Chapter 5",
                "cat_image" => "https://images.indianexpress.com/2018/12/SSClogo759.jpg",
                "sub_cat" => [
                    [
                        "id" => "1",
                        "cat_name" => "Topic 1"
                    ],
                    [
                        "id" => "2",
                        "cat_name" => "Topic 2"
                    ],
                    [
                        "id" => "3",
                        "cat_name" => "Topic 3"
                    ],
                    [
                        "id" => "4",
                        "cat_name" => "Topic 4"
                    ],
                    [
                        "id" => "5",
                        "cat_name" => "Topic 5"
                    ],
                ]
            ],
        ];


        return Inertia::render('Quiz/Index', [
            "data" => $data,
        ]);

    }
    public function play($cat_id): Response
    {
        // $cat = Category::find($cat_id);

        $questions = [
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],
            [
                "question" => "What is the capital of France?",
                "options" => ["Paris", "London", "Madrid", "Berlin"],
                "answer" => "Option A",
                "explanation" =>
                    "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
            ],

        ];


        return Inertia::render('Quiz/Play', [
            'questions' => $questions,
        ]);
    }
}
