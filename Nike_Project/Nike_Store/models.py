from django.db import models
import os
from django.utils.timezone import now
# Create your models here.
# class user(models.Model):
#     ROLE = [
#         ('admin', 'admin'),
#         ('user', 'user')
#     ]
#     username = models.CharField(max_length=100, unique=True, blank=True)
#     password = models.CharField(max_length=100, blank=True)
#     role = models.CharField(max_length=10, choices=ROLE, default='user')

def path_unique_image_name(instance, filename):
    ext = os.path.splitext(filename)[1] #[1] accesses the second element of the tuple, which is the file extension.
    SetUnique_name = f"{now().strftime('%m%d%Y%f%H%S%M')}{ext}"
    return os.path.join('Shoes/', SetUnique_name)

class RegisteredUser(models.Model):
    ROLE = [
        ('admin', 'admin'),
        ('user', 'user')
    ]
    username = models.CharField(max_length=50, unique=True, blank=True)
    password = models.CharField(max_length=255, blank=True)
    role = models.CharField(max_length=10, choices= ROLE, default='user')
    email = models.EmailField(max_length=100, unique=True, blank=True)
    contact_number = models.CharField(max_length=15, unique=True, blank=True)
    address = models.CharField(max_length=255, blank=True)
    image = models.ImageField(upload_to="UsersImg", blank=True)

class Product(models.Model):
    category = [
        ('Men','Men'),
        ('Women','Women'),
        ("Kid's", "Kid's")
    ]
    shoes_category = [
        ('Lifestyle', 'Lifestyle'),
        ('Jordan', 'Jordan'),
        ('Running', 'Running'),
        ('Football', 'Football'),
        ('Basketball', 'Basketball'),
        ('Gym and Training', 'Gym and Training')
    ]

    ProductName = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=255, blank=True)
    price = models.DecimalField(max_digits=50, decimal_places=2, blank=True)
    stocks = models.IntegerField(blank=True)
    gender = models.CharField(max_length=20, choices=category, blank=True)
    shoes_categories = models.CharField(max_length=50, choices=shoes_category, blank=True) 
    image = models.ImageField(upload_to=path_unique_image_name, blank=True)
    image1 = models.ImageField(upload_to=path_unique_image_name, blank=True)
    image2 = models.ImageField(upload_to=path_unique_image_name, blank=True)
    image3 = models.ImageField(upload_to=path_unique_image_name, blank=True)
    image4 = models.ImageField(upload_to=path_unique_image_name, blank=True)
    image5 = models.ImageField(upload_to=path_unique_image_name, blank=True)

    def delete(self, *args, **kwargs):
        if self.image and os.path.isfile(self.image.path):
            os.remove(self.image.path)

        for field in ['image1','image2','image3','image4', 'image5']:
            image_field = getattr(self, field)
            if image_field and os.path.isfile(image_field.path):
                os.remove(image_field.path)

class Cart(models.Model):
    user = models.CharField(max_length=150, blank=True)
    product_id_fk = models.IntegerField(default= 0,blank=True)
    product_name = models.CharField(max_length=200, blank=True)
    product_gender = models.CharField(max_length=10, blank=True) 
    product_category = models.CharField(max_length=100, blank=True)
    product_price = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    product_quantity = models.IntegerField(default=1, blank=True)
    product_size = models.CharField(max_length=100, blank=True)
    product_image = models.CharField(max_length=500, blank=True)

    # def delete(self, *args, **kwargs):
    #     if self.product_image and os.path.isfile(self.product_image.path):
    #         os.remove(self.product_image.path)

class Order(models.Model):
    status = [
        ('Pending','Pending'),
        ('Canceled', 'Canceled'),
        ('Shipped', 'Shipped'),
        ('Complete','Complete')
    ]
    payment_method = [
        ('Paypal','Paypal'),
        ('Gcash','Gcash'),
        ('Cash On Delivery', 'Cash On Delivery')

    ]
    Fullname = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, blank=True)
    Contact_Number = models.IntegerField(blank=True)
    ShippingAddress = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=20, choices=status, default='Pending')
    province = models.CharField(max_length=150, blank=True)
    Payment_Method = models.CharField(max_length=20, choices=payment_method, blank=True)
    total_payments = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    Order_id = models.IntegerField(blank=True)
    member = models.CharField(max_length=100, blank=True)
    item_ID = models.IntegerField(blank=True)
    item_Name = models.CharField(max_length=100, blank=True)
    item_Price = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    item_quantity = models.IntegerField(blank=True)
    item_totalprice = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    item_gender = models.CharField(max_length=20, blank=True)
    item_category = models.CharField(max_length=50, blank=True)
    item_size = models.CharField(max_length=20, blank=True)
    order_createdAt = models.CharField(max_length=20, blank=True)
    item_image = models.CharField(max_length=500, blank=True)
    city = models.CharField(max_length=100, blank=True)
    postal = models.CharField(max_length=50, blank=True)
    barangay = models.CharField(max_length=100, blank=True)


