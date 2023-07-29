from django.db import models
from ckeditor.fields import RichTextField
import uuid

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to="projects")
    text = RichTextField()
    order = models.SmallIntegerField(default=0)
    id = models.UUIDField(
        default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']


class ExternalSite(models.Model):
    image = models.ImageField(upload_to="external_sites")
    url = models.URLField()
    order = models.SmallIntegerField(default=0)
    id = models.UUIDField(
        default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.url

    class Meta:
        ordering = ['order']
