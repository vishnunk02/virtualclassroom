from django.shortcuts import render
from rest_framework import viewsets,authentication,permissions
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import action
import random
from django.shortcuts import get_object_or_404
import string
from .serializers import *
from .models import *
# Create your views here.


class UserView(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    
    @action(methods=["GET"], detail=False)
    def get_user(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
    
class CourseView(viewsets.ModelViewSet):
    queryset=Course.objects.all()
    serializer_class=CourseSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    
    
    def create(self, request, *args, **kwargs):
        serializer = CourseSerializer(data=request.data)
        course_key = ''.join(random.choices(string.ascii_uppercase, k=5))
        print(course_key)
        if serializer.is_valid():
            serializer.save(user=request.user,course_key=course_key)
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)
        
    def list(self, request, *args, **kwargs):
        qs = Course.objects.filter(user=request.user)
        course = CourseSerializer(qs,many = True)
        return Response(data=course.data)
    
    
    @action(methods=["GET"], detail=True)
    def list_stud(self, request, *args, **kwargs):
        id = kwargs.get('pk')
        course = Course.objects.get(id=id)
        students = Student.objects.filter(course=course)
        serializer = StudentSerializer(students,many=True)
        return Response(data=serializer.data)
    
    @action(methods=["GET"], detail=False)
    def list_enrolled(self, request, *args, **kwargs):
        student = Student.objects.filter(user=request.user)
        course = []
        for s in student:
            course.append(Course.objects.get(id=s.course.id))
        serializer = CourseSerializer(course,many=True)
        return Response(data=serializer.data)
    
    
    # def retrieve(self, request, *args, **kwargs):
    #     course_instance = Course.objects.get(id=kwargs.get("pk"),user=request.user)
    #     serializer = CourseSerializer(course_instance)
    #     return Response(serializer.data)
    
    
    @action(methods=["GET"], detail=False)
    def student(self, request, *args, **kwargs):
        student_instance = Student.objects.get(user=request.user)
        student_serializer = StudentSerializer(student_instance)
        course = Course.objects.get(id=student_serializer.data['course'])
        course_serializer = CourseSerializer(course)
        combined_data = {
            "student":student_serializer.data,
            "course":course_serializer.data
        }
        return Response(combined_data)

    @action(methods=["POST"], detail=False)
    def get_course(self, request, *args, **kwargs):
        serializer = CourseListSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            course_key = validated_data.get('course_key')
            course=Course.objects.get(course_key=course_key)
            course_serializer = CourseSerializer(course)
            return Response(course_serializer.data)
        else:
            return Response(data="error")
    
    @action(methods=["POST"], detail=True)
    def add_student(self, request, *args, **kwargs):
        id = kwargs.get('pk')
        user = request.user
        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():
            course = Course.objects.get(id=id)

            existing_student = Student.objects.filter(user=user, course=course).first()

            if existing_student:
                return Response(data={'error': 'User is already enrolled in this course.'})
            else:
                serializer.save(user=user, course=course)
                return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)
        
    @action(methods=["POST"],detail=True)
    def add_question(self,request,*args,**kwargs):
        course = self.get_object()
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(course=course)
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)
        
    @action(methods=["GET"], detail=True)
    def list_question(self, request, *args, **kwargs):
        id = kwargs.get('pk')
        course = Course.objects.get(id=id)
        question = Question.objects.filter(course=course).order_by('-pk')
        serializer = QuestionSerializer(question, many=True)
        return Response(data=serializer.data)
        
        
    
        
    @action(methods=["GET"],detail=True)
    def list_answer(self,request,*args,**kwargs):
        id = kwargs.get("pk")
        answer = Assignment.objects.filter(question__id=id,user=request.user)
        serializer = AssignmentSerializer(answer,many=True)
        return Response(data=serializer.data)
    
    @action(methods=["GET"],detail=True)
    def list_allanswer(self,request,*args,**kwargs):
        id = kwargs.get("pk")
        answer = Assignment.objects.filter(question__course_id=id)
        serializer = AssignmentSerializer(answer,many=True)
        return Response(data=serializer.data)
        
    @action(methods=["POST"],detail=True)
    def add_material(self,request,*args,**kwargs):
        serializer = MaterialSereializer(data=request.data)
        id = kwargs.get("pk")
        course = Course.objects.get(id=id)
        print(course)
        if serializer.is_valid():
            serializer.save(user=request.user,course=course)
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)
        
    @action(methods=["GET"],detail=True)
    def list_material(self,request,*args,**kwargs):
        id = kwargs.get('pk')
        course = Course.objects.get(id=id)
        material = Material.objects.filter(course=course)
        serializer = MaterialSereializer(material,many=True)
        return Response(data=serializer.data)
    
    
    @action(methods=["GET"],detail=True)
    def delete_class(self,request,*args,**kwargs):
        id = kwargs.get('pk')
        course = Course.objects.get(id=id).delete()
        return Response(data="deleted")
        
        
class Answerview(viewsets.ModelViewSet):
    queryset=Assignment.objects.all()
    serializer_class=Assignment
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    
    @action(methods=["POST"],detail=True)
    def add_answer(self,request,*args,**kwargs):
        serializer = AssignmentSerializer(data=request.data)
        id = kwargs.get("pk")
        question = Question.objects.get(id=id)
        print(question)
        if serializer.is_valid():
            answer = Assignment.objects.filter(user=request.user,question=question).exists()
            if answer:
                return Response(data=False)
            else:
                serializer.save(user=request.user,question=question)
                return Response(data=serializer.data)
        else:
            print(serializer.errors)
            return Response(data=serializer.errors)