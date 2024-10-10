<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/poppins-v21-latin-ext-300.woff2">
    <link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/poppins-v21-latin-300.woff2">
    <link rel="preload" as="image" type="image/webp" href="/quizsavera_logo.webp">
    <link rel="preload" as="image" type="image/webp" href="/google-play.webp">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">

    @inertia
</body>

</html>