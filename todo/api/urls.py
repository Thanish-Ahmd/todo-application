from django.urls import path
from . import views

urlpatterns = [
    path('' ,  views.getRoutes, name='routes'),
    path('items/' , views.getItems , name="items"),
    # path('items/create/' , views.createItem , name="create-item"),
    # path('items/<str:pk>/update/' , views.updateItem , name="update-item"),
    # path('items/<str:pk>/delete/' , views.deleteItem , name="delete-item"),
    
    path('items/<str:pk>/' , views.getItem , name="item"),
    
    
    
]
