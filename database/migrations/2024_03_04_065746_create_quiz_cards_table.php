<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quiz_cards', function (Blueprint $table) {
            $table->id(); // This will create an auto-incrementing primary key column named 'id'
            $table->string('CardHeader', 1000);
            $table->string('PublishedDate', 200);
            $table->string('CardContent', 10000);
            $table->timestamps(); // This will create 'created_at' and 'updated_at' columns for timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quiz_cards');
    }
};
