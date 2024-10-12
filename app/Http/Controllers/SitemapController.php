<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class SitemapController extends Controller
{
    public function generate()
    {
        /** The Process class in Laravel to execute a Node.js script, it spawns a new process that runs independently of the PHP process. This means that the Node.js script will execute concurrently with the PHP script, allowing both to run simultaneously without blocking each other.
         */
         // log the process has been started
        Log::info('Sitemap generation process started');
        $process = new Process(['node', base_path('scripts/generate_sitemap.js')]);
        $process->setTimeout(1200); // Set the timeout to 12000 seconds (20 minutes)

        try {
            $process->mustRun();
           

            // Log the process has been completed
            Log::info('Sitemap generation process completed');
            // If the process was successful, return a success response
            return response()->json([
                'status' => 'success',
                'message' => 'Sitemap generated successfully',
                'output' => $process->getOutput(),
                'error' => $process->getErrorOutput(),
                'sitemap_url' => url('sitemap.xml'),
            ]);
        } catch (ProcessFailedException $exception) {
            // Log the process has been failed
            Log::error('Sitemap generation process failed: '.$exception->getMessage());
            // If the process failed, return an error response
            return response()->json([
                'status' => 'error',
                'message' => 'Sitemap generation failed',
                'error' => $exception->getMessage(),
            ], 500);
        }
    }
}







