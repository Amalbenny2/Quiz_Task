from rest_framework import serializers
from .models import Login,Question,Answer



class Loginserializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('username','password1','password2')

class Questionserializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('question_text','allowed_time')


class Answerserialiser(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('question','answer_text','is_correct')


