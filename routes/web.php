<?php

use Illuminate\Support\Facades\Route;
use Statamic\Facades\Entry;
use Statamic\Facades\Content;


Route::get('pages/{slug}', function ($slug) {
    $projects = Entry::query()->where('slug', $slug)->where('collection', 'pages')->first();
    if (!$projects){
        abort(404);
    }
    return (new \Statamic\View\View)->template('projects')->layout('layout')->with(['content' => $projects]);
    });

