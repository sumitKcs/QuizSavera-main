<?php

namespace App\Http\Controllers;

use App\Models\QuizCard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
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
        $url = env('SERVER_URL') . '/api/' . env('API_VERSION') . '/get-web';

        $response = Http::post($url, [
            'packageName' => 'com.quizsavera.app'
        ]);
        $response = $response->json();
        $appName = $response['appName'];
        $menuItems = $response['menuItems'];
        $views = $response['items'];
        $sidebars = $response['sidebars'];

        return Inertia::render('Home/Index', [
            'title' => $appName,
            'sidebars' => $sidebars,
            'menu_items' => $menuItems,
            'views' => $views,
            'isCategory' => 0

        ]);
    }

    public function categories($cat_id): Response
    {
        Log::info("cat_id: " . $cat_id);
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
        $url = env('SERVER_URL') . '/api/' . env('API_VERSION') . '/get-web-page-data';

        $response = Http::post($url, [
            'catId' => $cat_id,
            'device' => 'web',
            'packageName' => 'com.quizsavera.app',
        ]);
        $response = $response->json();
        $appName = $response['appName'];
        $menuItems = $response['menuItems'];
        $views = $response['items'];
        $contentType = $response['contentType'];
        $sidebars = $response['sidebars'];
        $description = $response['description'];
        $content = $response['content'];
        $recommended_content = $response['recommended_content'];
        $keywords = $response['keywords'];

        // if contentType is null
        if ($contentType === null) {
            return Inertia::render('Home/Index', [
                'title' => $appName,
                'description' => $description,
                'content' => $content,
                'recommended_content' => $recommended_content,
                'keywords' => $keywords,
                'sidebars' => $sidebars,
                'menu_items' => $menuItems,
                'views' => [],
                'isCategory' => 1,
                'contentType' => null,
            ]);
        }
        // if contentType is not 'category' then return to inertia route  '/quiz/{cat_id}/play' 
        if (strtolower($contentType) != 'category') {

            if (strtolower($contentType) == 'mock') {
                $questions = $response['items'][0]['subItems'];
                return Inertia::render('Quiz/Play', [
                    'questions' => $questions,
                    "minutes" => 10,
                ]);
            }

            if (strtolower($contentType) == 'quiz') {

                //  if views length is 0 then return

            }
        }


        return Inertia::render('Home/Index', [
            'title' => $appName,
            'description' => $description,
            'content' => $content,
            'recommended_content' => $recommended_content,
            'keywords' => $keywords,
            'sidebars' => $sidebars,
            'menu_items' => $menuItems,
            'views' => $views,
            'isCategory' => 1,
            'contentType' => strtolower($contentType),

        ]);
    }

}
