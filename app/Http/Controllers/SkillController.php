<?php

namespace App\Http\Controllers;

use App\Http\Resources\SkillResource;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\RedirectResponse;

class SkillController extends Controller
{
    public function index()
    {
        $skills = SkillResource::collection(Skill::all());
        return Inertia::render('Skills/Index', compact('skills'))->toResponse(request());
    }

    public function create()
    {
        return Inertia::render('Skills/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => ['required', 'image'],
            'name' => ['required', 'min:3']
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('skills');
            Skill::create([
                'name' => $request->name,
                'image' => $image
            ]);

            return redirect()->route('skills.index')->with('message', 'Skill created successfully.');
        }
        return back();
    }

    public function show($id)
    {
        // Lógica para mostrar detalhes de um recurso específico
    }

    public function edit(Skill $skill)
    {
        return Inertia::render('Skills/Edit', compact('skill'));
    }

    public function update(Request $request, Skill $skill)
    {
        $image = $skill->image;
        $request->validate([
            'name' => ['required', 'min:3']
        ]);

        if ($request->hasFile('image')) {
            Storage::delete($skill->image);
            $image = $request->file('image')->store('skills');
        }

        $skill->update([
            'name' => $request->name,
            'image' => $image
        ]);

        return redirect()->route('skills.index')->with('message', 'Skill updated successfully.');
    }

    public function destroy(Skill $skill)
    {
        Storage::delete($skill->image);
        $skill->delete();

        return back()->with('message', 'Skill deleted successfully.');
    }
}
