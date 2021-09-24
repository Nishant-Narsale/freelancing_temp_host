from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from main.models import Job, Skill, ExtendedUser
from .serializers import ExtendedUserSerializer, JobSerializer,SkillSerializer


@api_view(['GET'])
def ApiOverview(request):
    apis = {
        'ApiOverview':'api/',
        'All Jobs':'api/jobs/',
        'Specific job by id':'api/jobs/(id)',
        'Specific jobs by category':'api/jobs/category/(category name)',
        'All Skills registered':'api/skill/'
    }
    return Response(apis)

@api_view(['GET'])
def jobApi(request):
    job_obj = Job.objects.all()
    serializer = JobSerializer(job_obj, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def specificJobApi(request,id):
    job_obj = Job.objects.get(id=id)
    serializer = JobSerializer(job_obj)
    return Response(serializer.data)

@api_view(['GET'])
def skillApi(request):
    skill_obj = Skill.objects.all()
    serializer = SkillSerializer(skill_obj, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def jobCategoryApi(request,category):
    job_obj = Job.objects.filter(category=category)
    serializer = JobSerializer(job_obj, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def ExtendedUserApi(request):
    objs = ExtendedUser.objects.all()
    serializer = ExtendedUserSerializer(objs, many=True)
    return Response(serializer.data)
