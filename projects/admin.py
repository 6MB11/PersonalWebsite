from django.contrib import admin
from .models import Project, ExternalSite

# Register your models here.
admin.site.register(Project)
admin.site.register(ExternalSite)
