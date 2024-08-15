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
        Schema::table('quiz_cards', function (Blueprint $table) {
            $table->text('CardImg', 10000)->after('CardContent')->nullable();
            $table->text('CardImgDesc', 10000)->after('CardImg')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('quiz_cards', function (Blueprint $table) {
            $table->dropColumn('CardImg');
            $table->dropColumn('CardImgDesc');
        });
    }
};
