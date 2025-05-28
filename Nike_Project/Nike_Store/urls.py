from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.base, name='base'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('login_config/', views.login_submit),
    path('SignUp_config/', views.register_controller),
    path('add-product_conf/', views.add_product),
    path('admin_homepage/', views.admin_homepage, name='admin_homepage'),
    path('user_homepage/', views.user_homepage, name='user_homepage'),
    path('Shop/', views.Shop, name='Shop'),
    path('productDetails/<int:productID>/', views.productDetails),
    path('search/<str:inputsToSearch>/', views.search),
    path('populate_details_Add_to_cart/<int:itemID>/', views.populateAdd_to_cart),
    path('cart/', views.cart),
    path('adaptCart/<str:userFk>/', views.adaptCart),
    path('Orders/', views.Orders),
    path('getImage/<int:productId>/', views.getProductImage),
    path('orderDetails/<str:emailUser>/', views.orderDetails)
    # path('AllOrders/', views.allOrders)
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
