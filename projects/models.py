from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=50)
    summary = models.CharField(max_length=250)
    image = models.ImageField(upload_to="projects")
    text = RichTextUploadingField()
    order = models.SmallIntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']


class Tab(models.Model):
    owner = models.ForeignKey(
        Project, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    text = RichTextUploadingField()

    def __str__(self):
        return self.owner + " " + self.title

    class Meta:
        ordering = ['owner', 'title']


class ExternalSite(models.Model):
    image = models.ImageField(upload_to="external_sites")
    url = models.URLField()
    order = models.SmallIntegerField(default=0)

    def __str__(self):
        return self.url

    class Meta:
        ordering = ['order']