from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    course_key=models.CharField(max_length=5)
    
class Student(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    
class Question(models.Model):
    title = models.CharField(max_length=255)
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    due_date = models.DateTimeField()
    
    
class Assignment(models.Model):
    title = models.CharField(max_length=255)
    question=models.ForeignKey(Question,on_delete=models.CASCADE)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    assignment = models.FileField(upload_to='assignment')
    date = models.DateTimeField(auto_now_add=True)
    
    
class Material(models.Model):
    title = models.CharField(max_length=255,default='Class Work')
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    material = models.FileField(upload_to='materials')