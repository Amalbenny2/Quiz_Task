from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Question, Answer,Login
from rest_framework import generics
from  .serializer import Questionserializer,Answerserialiser,Loginserializer

# Create your views here.
class Question(generics.ListCreateAPIView):
    def get(self, request):
        questions = Question.objects.all()
        serialized_questions = [{'id': q.id, 'text': q.question_text, 'time': q.allowed_time} for q in questions]
        serializer_class = Questionserializer
        return Response(serialized_questions)

class Answer(generics.RetrieveUpdateDestroyAPIView):
    def post(self, request, calculated_score=None):
        user_answers = request.data.get('answers', [])
        queryset = Answer.objects.all()
        serializer_class = Answerserialiser

        return Response({'score': calculated_score}, status=status.HTTP_200_OK)


class Login(generics.RetrieveUpdateDestroyAPIView):
    queryset = Login.objects.all()
    serializer_class = Loginserializer
    permission_classes = [IsAuthenticated]
