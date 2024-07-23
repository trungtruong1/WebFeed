from django.db import models
import random
import string

# Create your models here.
class Account(models.Model):
    username = models.CharField(max_length=50, default="", unique=True)
    password = models.CharField(max_length=50, default="")

    def __str__(self):
        return self.username

class Topic(models.Model):
    topic = models.CharField(max_length=50, default="", unique=True)


    def __str__(self):
        return self.topic


class Post(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, default="")
    link = models.TextField(default="")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Acc_Topic(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)

    def __str__(self):
        return self.account + " " + self.topic