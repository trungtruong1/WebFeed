from django.db import models
import random
import string

# Create your models here.
class Account(models.Model):
    username = models.CharField(max_length=50, default="", unique=True)
    password = models.CharField(max_length=50, default="")