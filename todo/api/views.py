from django.shortcuts import render
from django.http import response
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import item

from .serializers import itemSerializer

from api import serializers

from .utils import updateItem , getItemDetail , deleteItem , getItemList , createItem
# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    
    routes =[
        {
            'Endpoint' : '/item/',
            'method' : 'GET',
            'body' : None ,
            'description' : 'Returns an array of todo items'
        },
        {
            'Endpoint' : '/item/id/',
            'method' : 'GET',
            'body' : None ,
            'description' : 'Returns a single todo item object'
        },
        {
            'Endpoint' : '/item/create',
            'method' : 'POST',
            'body' : {'body' : ""},
            'description' : 'Create a new todo item'
        },
        {
            'Endpoint' : '/item/id/update',
            'method' : 'PUT',
            'body' :  {'body' : ""},
            'description' : 'Create an existing todo item with data'
        },
        {
            'Endpoint' : '/notes/id/delete/',
            'method' : 'DELETE',
            'body' : None ,
            'description' : 'Deletes and exiting todo item'
        }
    ]
    return Response(routes)


@api_view(['GET' , 'POST'])
def getItems(request):
    
    if request.method == 'GET' :
        return getItemList(request)

    if request.method == 'POST' :
        return createItem(request)

    

@api_view(['GET' , 'PUT' , 'DELETE'])
def getItem(request , pk):
    
    if request.method == 'GET' :
        return getItemDetail(request ,pk)
        
    if request.method == 'PUT' :
        return updateItem(request , pk)
        
    
    if request.method == 'DELETE':
        return deleteItem(request, pk)
    
# @api_view(['POST'])
# def createItem(request):
#     data = request.data
#     itm = item.objects.create(
#         body=data['body']
#     )
    
#     serializer = itemSerializer(itm , many=False)
#     return Response(serializer.data)


# @api_view(['PUT'])
# def updateItem( request , pk):
#     data = request.data 
#     itm = item.objects.get(id=pk)
#     serializer = itemSerializer(instance= itm , data=data) 
    
#     if serializer.is_valid():
#         serializer.save()
    
#     return Response(serializer.data)

# @api_view(['DELETE'])
# def deleteItem(request , pk):
#     itm = item.objects.get(id=pk)
#     itm.delete()
#     return Response('Item was deleted')
