from os import name
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ExtendedUser(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user.username)

class Skill(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name

class Job(models.Model):
    categories = [
        ('web-development','web-development'),
        ('app-development','app-development'),
        ('machine-learning','machine-learning')
    ]

    header = models.CharField(max_length=200)
    desc = models.TextField(max_length=5000)
    job_creator = models.CharField(max_length=120)
    payment = models.IntegerField()
    skills = models.ManyToManyField(Skill)
    category = models.CharField(max_length=120,choices=categories,default='web-development')
    city_name = models.CharField(max_length=120, default='Pune')
    country_name = models.CharField(max_length=120, default='India')

    def __str__(self):
        return self.header
