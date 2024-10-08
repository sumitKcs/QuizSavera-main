<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\QuizController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::get('/{cat_name}/{cat_id}', [HomeController::class, 'categories'])->name('Home.categories');
Route::get('/{cat_name}/{cat_id}/quiz', [QuizController::class, 'index'])->name('quiz.index');
Route::get('/{cat_name}/{cat_id}/mock', [QuizController::class, 'play'])->name('quiz.play');
Route::get('/{cat_name}/{cat_id}/analytics', [QuizController::class, 'analytics'])->name('quiz.analytics');
Route::get('/blog/{id}', [BlogController::class, 'content'])->name('blog.content');
// Route::get('/longanswer', [QuizController::class, 'longAnswer'])->name('longAnswer.index');



// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
