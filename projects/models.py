from urllib.parse import scheme_chars
from django.db import models
from django.core.validators import URLValidator
from django.utils.text import slugify
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to="cover_images")
    image_text = models.TextField()
    summary = models.CharField(max_length=250)
    text = RichTextUploadingField()
    slug = models.SlugField(null=True, unique=True, blank=True)
    order = models.SmallIntegerField(default=0)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Project, self).save(*args, **kwargs)

    class Meta:
        ordering = ['order']


class Tab(models.Model):
    owner = models.ForeignKey(
        Project, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    text = RichTextUploadingField()
    order = models.SmallIntegerField(default=0)

    def __str__(self):
        return str(self.owner) + ": " + self.title

    class Meta:
        ordering = ['order']


class ExternalSite(models.Model):
    image = models.ImageField(upload_to="external_sites")
    image_text = models.TextField()
    # URLField is not used here as mailto links won't validate
    url = models.CharField(max_length=250)
    order = models.SmallIntegerField(default=0)

    def __str__(self):
        return self.url

    class Meta:
        ordering = ['order']