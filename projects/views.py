from django.shortcuts import render
from .models import Project, ExternalSite

# Create your views here.


def home(request):
    projects = Project.objects.all()
    external_sites = Project.objects.all()
    context = {'projects': projects, 'external_sites': external_sites}
    return render(request, 'projects/index.html', context)
