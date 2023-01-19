from rest_framework.response import Response
from .models import item
from .serializers import itemSerializer

def getItemList(request):
    items = item.objects.all().order_by('-updated')
    serializer = itemSerializer (items , many=True)
    return Response(serializer.data)

def createItem(request): 
    data = request.data
    itm = item.objects.create(
        body=data['body']
    )
    serializer = itemSerializer(itm , many=False)
    return Response(serializer.data)

def updateItem(request , pk ):
    data = request.data 
    itm = item.objects.get(id=pk)
    serializer = itemSerializer(instance= itm , data=data) 

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)


def getItemDetail(request,pk):
    items = item.objects.get(id=pk)
    serializer = itemSerializer (items , many=False)
    return Response(serializer.data)

def deleteItem(request, pk):
    itm = item.objects.get(id=pk)
    itm.delete()
    return Response('Item was deleted')