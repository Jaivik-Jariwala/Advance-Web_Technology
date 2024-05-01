# dwitter/views.py

# ...

def profile(request, pk):
    profile = Profile.objects.get(pk=pk)
    return render(request, "dwitter/profile.html", {"profile": profile})