<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\QuizCard;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        QuizCard::create([
            'CardHeader' => 'Fossil Fuel Usage in Food Production Equals EU and Russia\'s Emissions',
            'PublishedDate' => 'November 3, 2023',
            'CardContent' => 'A recent report, released on November 2 has unveiled a startling revelation: food production is responsible for approximately 15 percent of global fossil fuel usage each year, equivalent to a staggering 4.6 gigatonnes of carbon dioxide emissions. A recent report, released on November 2, 2023, has unveiled a startling revelation: food production is responsible for approximately 15 percent of global fossil fuel usage each year, equivalent to a staggering 4.6 gigatonnes of carbon dioxide emissions. A recent report, released on November 2, 2023, has unveiled a startling revelation: food production is responsible for approximately 15 percent of global fossil fuel usage each year, equivalent to a staggering 4.6 gigatonnes of carbon dioxide emissions.',
            'CardImg' => 'https://i0.wp.com/www.gktoday.in/wp-content/uploads/2015/07/Safe-and-Hygienic-food.jpg?w=180&ssl=1',
            'CardImgDesc' => 'Fruits',

        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        QuizCard::where('CardHeader', 'Fossil Fuel Usage in Food Production Equals EU and Russia\'s Emissions')->delete();
    }
};
