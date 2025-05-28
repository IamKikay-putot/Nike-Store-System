from django.contrib import admin

# Register your models here.

# from .models import user
from .models import RegisteredUser
from .models import Product
from .models import Cart
from .models import Order

# class UserAdmin(admin.ModelAdmin):
#     list_display = "username", "password", "role"
#     # search_fields = ('username')
# admin.site.register(user, UserAdmin)
        
class RegisteredUserAdmin(admin.ModelAdmin):
    list_display = "username", "password", "role", "email", "contact_number", "address"
admin.site.register(RegisteredUser, RegisteredUserAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = "ProductName", "description", "price", "stocks", "gender","shoes_categories", "image"
admin.site.register(Product, ProductAdmin)

class CartAdmin(admin.ModelAdmin):
    list_display = "user", "product_id_fk", "product_name", "product_gender", "product_category", "product_price", "product_size","product_quantity", "product_image"
admin.site.register(Cart, CartAdmin)

class OrderAdmin(admin.ModelAdmin):
    list_display= "Fullname", "email", "Contact_Number", "ShippingAddress", "status", "province","Payment_Method", "total_payments", "Order_id", "member", "item_ID", "item_Name", "item_Price", "item_quantity", "item_totalprice", "item_gender", "item_category", "item_size", "order_createdAt", "item_image", "city", "postal", "barangay"
admin.site.register(Order, OrderAdmin)