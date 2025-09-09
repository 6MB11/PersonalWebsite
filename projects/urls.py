"""
URL configuration for personal_site project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
# Replaces the standard django.urls.path, identical syntax
from django_distill import distill_path
from . import views
from projects.models import Project

# UNTESTED
def get_all_projects():
    # This function needs to return an iterable of dictionaries.
    # Dictionaries are required as the URL this distill function is used by
    # has named parameters. You can just export a small subset of values
    # here if you wish to limit what pages will be generated.
    for project in Project.objects.all():
        # Note 'slug' matches the URL parameter names
        yield {'slug': project.slug}

urlpatterns = [
    distill_path('', views.home, name='home'),
    # UNTESTED
    distill_path('<slug:slug>.html', views.home, name='home', distill_func=get_all_projects),
    path('ckeditor/', include('ckeditor_uploader.urls'))
]