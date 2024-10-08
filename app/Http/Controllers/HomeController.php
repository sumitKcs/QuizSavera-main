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

        return Inertia::render('Home/Index');
    }

    public function indexbkp(Request $request): Response
    {

        // call get-web rest api to get menu_items
        $url = env('SERVER_URL') . '/api/' . env('API_VERSION') . '/get-web';

        $response = Http::post($url, [
            'packageName' => 'com.quizsavera.app'
        ]);
        $response = $response->json();

        // get data from response
        $appName = $response['appName'];
        $menuItems = $response['menuItems'];
        $views = $response['items'];
        $sidebars = $response['sidebars'];
        $footer = $response['footer'];
        $notificationItems = $response['notificationItems'];

        return Inertia::render('Home/Index', [
            'title' => $appName,
            'sidebars' => $sidebars,
            'menu_items' => $menuItems,
            'notificationItems' => $notificationItems,
            'views' => $views,
            'isCategory' => 0,
            'footer' => $footer,

        ]);
    }
    public function categories($cat_name, $cat_id): Response
    {
        return Inertia::render('Home/Categories', [
            'cat_name' => $cat_name,
            'cat_id' => $cat_id,

        ]);
    }

    public function categoriesnkp($cat_name, $cat_id): Response
    {
        Log::info("cat_id: " . $cat_id);


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
        $footer = $response['footer'];
        $notificationItems = $response['notificationItems'];

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
                'notificationItems' => $notificationItems,
                'views' => [],
                'isCategory' => 1,
                'footer' => $footer,
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


        return Inertia::render('Home/Categories', [
            'title' => $appName,
            'description' => $description,
            'content' => $content,
            'recommended_content' => $recommended_content,
            'keywords' => $keywords,
            'sidebars' => $sidebars,
            'menu_items' => $menuItems,
            'notificationItems' => $notificationItems,
            'views' => $views,
            'isCategory' => 1,
            'footer' => $footer,

        ]);
    }

}
