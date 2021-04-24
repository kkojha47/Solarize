from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        ordering = ['title']
        fields = ['id', 'title', 'description', 'completed', 'dueDate']
