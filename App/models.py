from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Login(AbstractUser):
    is_students=models.BooleanField(default=False)




class Question(models.Model):
    question_text = models.CharField(max_length=255)
    allowed_time = models.IntegerField(default=60)

    def __str__(self):
        return self.question_text

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.answer_text


class customers(models.Model):
    name=models.CharField(max_length=40)
    address=models.TextField()
    phone_number=models.IntegerField()
    datetime=models.DateTimeField(unique=True,null=True)


    def __str__(self):
        return self.name