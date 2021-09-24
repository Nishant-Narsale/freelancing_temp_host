from rest_framework.serializers import ModelSerializer
from main.models import Job,Skill,ExtendedUser

class ExtendedUserSerializer(ModelSerializer):
    class Meta:
        model = ExtendedUser
        fields = "__all__"
        depth = 1

class JobSerializer(ModelSerializer):
    class Meta:
        model = Job
        fields = "__all__"
        depth = 1
    
class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"