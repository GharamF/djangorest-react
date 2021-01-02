

from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event 
        fields = ('id','eventname','desc','startdate','enddate','location','imgs','status')
