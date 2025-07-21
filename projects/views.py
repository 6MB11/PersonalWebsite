from django.shortcuts import render
from .models import Project, ExternalSite

# Create your views here.


def home(request, project_title=None):
    projects = Project.objects.all()
    external_sites = ExternalSite.objects.all()
    context = {'project_title': project_title, 'projects': projects, 'external_sites': external_sites}
    return render(request, 'projects/index.html', context)
