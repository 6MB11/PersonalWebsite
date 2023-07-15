from django.db import models
import uuid
from ckeditor.fields import RichTextField


# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to='uploadedImages')
    text = RichTextField()
    id = models.UUIDField(
        default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    def __str__(self):
        return self.title

