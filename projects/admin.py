from django.contrib import admin
from .models import Project, Tab, ExternalSite

# Register your models here.
admin.site.register(Project)
admin.site.register(Tab)
admin.site.register(ExternalSite)
