from rest_framework.serializers import ModelSerializer
from .models import item

class itemSerializer(ModelSerializer):
    class Meta:
        model = item
        fields = '__all__'
