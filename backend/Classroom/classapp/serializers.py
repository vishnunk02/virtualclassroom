from rest_framework import serializers
from django.contrib.auth.models import User

from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name','email','username','password']
        
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
class CourseSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Course
        fields = "__all__"
        extra_kwargs = {
            'course_key': {'required': False},
        }
    
class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    course = CourseSerializer(read_only=True)
    class Meta:
        model = Student
        fields = "__all__"
        
    
        
        

        
class CourseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ["course_key"]
        
class QuestionSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    class Meta:
        model = Question
        fields = ['id','title','due_date']
        
        
class AssignmentSerializer(serializers.ModelSerializer):
    user= UserSerializer(read_only=True)
    date = serializers.DateTimeField(read_only=True)
    question = QuestionSerializer(read_only=True)
    class Meta:
        model = Assignment
        fields = ["title","assignment","user","date","question"]
        
        
class MaterialSereializer(serializers.ModelSerializer):
    user= serializers.CharField(read_only=True)
    course = serializers.CharField(read_only=True)
    class Meta:
        model = Material
        fields = "__all__"