from django.db import models
from django.utils.text import slugify
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=50)
    summary = models.CharField(max_length=250)
    image = models.ImageField(upload_to="projects")
    image_text = models.TextField()
    text = RichTextUploadingField()
    slug = models.SlugField()
    order = models.SmallIntegerField(default=0)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        slug = slugify(self.title)
        super(Project, self).save(*args, **kwargs)

    class Meta:
        ordering = ['order']


class Tab(models.Model):
    owner = models.ForeignKey(
        Project, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    text = RichTextUploadingField()

    def __str__(self):
        return str(self.owner) + ": " + self.title

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