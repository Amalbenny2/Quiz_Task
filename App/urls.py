from django.urls import path
from .import views




urlpatterns = [
    path('Question', views.Question.as_view()),
    path('Answer',views.Answer.as_view()),
    path('Login',views.Login.as_view()),

]

path('venue_add', views.venue_add.as_view()),