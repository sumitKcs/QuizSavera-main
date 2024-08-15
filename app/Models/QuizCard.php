<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizCard extends Model
{
    use HasFactory;

    protected $table = 'quiz_cards'; // Specify the table name if it differs from the model's name convention

    protected $fillable = [
        'CardHeader',
        'PublishedDate',
        'CardContent',
        'CardImg',
        'CardImgDesc',
    ];

    // If you have additional relationships or custom methods, define them here
}
