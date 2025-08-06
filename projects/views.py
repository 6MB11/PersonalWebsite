from django.shortcuts import render
from .models import Project, ExternalSite
from django.views.decorators.gzip import gzip_page

# Create your views here.

@gzip_page # Text compression
def home(request, slug=None):
    projects = Project.objects.all()
    external_sites = ExternalSite.objects.all()
    context = {'slug': slug, 'projects': projects, 'external_sites': external_sites}
    return render(request, 'projects/index.html', context)
