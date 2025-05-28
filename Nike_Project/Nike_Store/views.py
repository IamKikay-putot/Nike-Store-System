from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
from django.contrib.auth.hashers import make_password, check_password
from django.shortcuts import redirect
from django.core.paginator import Paginator
# Create your views here.

def base(request):
    # products = Product.objects.all()
    p = Paginator(Product.objects.all(), 5)
    page = request.GET.get('page')
    products = p.get_page(page)
    return render(request, 'base.html', {'products': products})

def login(request):
    return render(request, 'URL_FILES/login_Page.html')

def logout(request):
    request.session.flush()
    return redirect('base')

def admin_homepage(request):
    orders = Order.objects.all().order_by('-id')
    return render(request, 'URL_FILES/admin_homepage.html', {'AllOrders': orders})

def user_homepage(request):
    return render(request, 'URL_FILES/user_homepage.html')

def productDetails(request):
    return render(request, 'URL_FILES/Product.html')

def Shop(request):
    p = Paginator(Product.objects.all(), 10)
    page = request.GET.get('page')
    item = p.get_page(page)
    return render(request, 'URL_FILES/Shop.html', {'products': item})




import traceback
# from .models import user
from .models import RegisteredUser
from .models import Product
from .models import Cart
from .models import Order

@csrf_exempt
def login_submit(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        # fetchUser_data = RegisteredUser.objects.get(username=)

        if not username or not password:
            return JsonResponse({'status' : 'Please fill in all fields'})

        try :
            find_user = RegisteredUser.objects.get(username=username)
        except RegisteredUser.DoesNotExist:
            return JsonResponse({'status' : 'User not found'})

        # if find_user is None:
        #     return JsonResponse({'status': 'User not found'}) 
        
        if password != find_user.password:
            return JsonResponse({'status' : 'Incorrect password'})
        
        # if not check_password(password, find_user.password):
        #     return JsonResponse({'status' : 'Incorrect password'})
        try:
            request.session['username'] = find_user.username
            request.session['password'] = find_user.password
            request.session['role'] = find_user.role
            request.session['email'] = find_user.email
            request.session['contactNumber'] = find_user.contact_number
            request.session['address'] = find_user.address
            request.session['image'] = find_user.address
            # return JsonResponse({'status' : 'success', 'role': find_user.role, 'password': find_user.password, 'credentials' : model_to_dict(find_user)})
            return JsonResponse({'status' : 'success', 'role': find_user.role})
        except Exception as e:
            print(f"from view: {e}")


@csrf_exempt
def register_controller(request):
    if (request.method == 'POST'):

        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')
        contact = data.get('contact')
        address = data.get('address')

        if not username: return JsonResponse({'status': 'username field is empty'})
        if not password: return JsonResponse({'status': 'password field is empty'})
        if not email: return JsonResponse({'status': 'email field is empty'})
        if not contact: return JsonResponse({'status': 'contact field is empty'})
        if not address: return JsonResponse({'status': 'address field is empty'})

        if RegisteredUser.objects.filter(username=username).exists():
            return JsonResponse({'status': 'error', 'message': 'Username already exists'})

        try:
            new_user = RegisteredUser(
                username = username,
                password = password,
                # password = make_password(password),
                email = email,
                contact_number = contact,
                address = address
            )
            new_user.save()
            return JsonResponse({'status' : 'success', 'message' : 'User registered successfully'})
        except Exception as e:
            print("Error during registration: {e}")
            print(traceback.format_exc())  # Logs the full traceback
            return JsonResponse({'status' : False, 'message' : 'from view: something went wrong'})


@csrf_exempt
def add_product(request):
    if (request.method == 'POST'): 
        # data = json.loads(request.body)
        Add_Product_Name = request.POST.get('Add_Product_Name')
        description = request.POST.get('description')
        Add_Product_Price = request.POST.get('Add_Product_Price')
        Add_Product_Stocks = request.POST.get('Add_Product_Stocks')
        Gender = request.POST.get('Gender')
        shoes_categories = request.POST.get('category')
        # add SIZE for shoes and in model 
        Add_Product_Image = request.FILES.get('Add_Product_Image')
        Add_Product_Sub_Image_1 = request.FILES.get('Add_Product_Sub_Image_1')
        Add_Product_Sub_Image_2 = request.FILES.get('Add_Product_Sub_Image_2')
        Add_Product_Sub_Image_3 = request.FILES.get('Add_Product_Sub_Image_3')
        Add_Product_Sub_Image_4 = request.FILES.get('Add_Product_Sub_Image_4')
        Add_Product_Sub_Image_5 = request.FILES.get('Add_Product_Sub_Image_5')


        if not Add_Product_Name: return JsonResponse({'status': False, 'message' : 'Product name is empty'})
        if not description: return JsonResponse({'status': False, 'message' : 'description is empty'})
        if not Add_Product_Price: return JsonResponse({'status': False, 'message' : 'Add_Product_Price is empty'})
        if not Add_Product_Stocks: return JsonResponse({'status': False, 'message' : 'Add_Product_Stocks name is empty'})
        if not Gender: return JsonResponse({'status': False, 'message' : 'Gender name is empty'})
        if not shoes_categories: return JsonResponse({'status': False, 'message' : 'shoes_categories name is empty'})
        if not Add_Product_Image: return JsonResponse({'status': False, 'message' : 'Add_Product_Image name is empty'})
        if not Add_Product_Sub_Image_1: return JsonResponse({'status': False, 'message' : 'Add_Product_Sub_Image_1 name is empty'})
        if not Add_Product_Sub_Image_2: return JsonResponse({'status': False, 'message' : 'Add_Product_Sub_Image_2 name is empty'})
        if not Add_Product_Sub_Image_3: return JsonResponse({'status': False, 'message' : 'Add_Product_Sub_Image_3 name is empty'})
        if not Add_Product_Sub_Image_4: return JsonResponse({'status': False, 'message' : 'Add_Product_Sub_Image_4 name is empty'})
        if not Add_Product_Sub_Image_5: return JsonResponse({'status': False, 'message' : 'Add_Product_Sub_Image_5 name is empty'})

        try :
            New_Product = Product(
                ProductName = Add_Product_Name,
                description = description,
                price = Add_Product_Price,
                stocks = Add_Product_Stocks,
                gender = Gender,
                shoes_categories = shoes_categories,
                image = Add_Product_Image,
                image1 = Add_Product_Sub_Image_1,
                image2 = Add_Product_Sub_Image_2,
                image3 = Add_Product_Sub_Image_3,
                image4 = Add_Product_Sub_Image_4,
                image5 = Add_Product_Sub_Image_5

            )
            New_Product.save()
            return JsonResponse({'status': True, 'message':'Successfully Added'})
        except Exception as e:
            print(f"From views.py: {e}")



def productDetails(request, productID):
    if (request.method == 'GET') :
        product = Product.objects.get(id=productID)

        ProductName = product.ProductName
        description = product.description
        price = product.price
        gender = product.gender
        shoes_categories = product.shoes_categories
        image = product.image.url
        image1 = product.image1.url
        image2 = product.image2.url
        image3 = product.image3.url
        image4 = product.image4.url
        image5 = product.image5.url
        # img_main = model_to_dict(product)
        # img_main["image"] = product.image.url if product.image else None

    try:
        if (product):
            return JsonResponse({
                'status': 'success',
                'ProductName': ProductName,
                'description': description,
                'price':price,
                'gender':gender,
                'shoes_categories': shoes_categories,
                'image':image,
                'image1':image1,
                'image2':image2,
                'image3':image3,
                'image4':image4,
                'image5':image5

            })
        else:
            print(f"somethin went wrong while fetching details..")
            return JsonResponse({'status': False, 'message':'product not found'})
    except Exception as e:
        print(f"from views: Something went wrong {e}")


from django.db.models import Q #to combine two filter in query
def search(request, inputsToSearch):
    if (request.method == 'GET'):
        found =  Product.objects.filter(
            Q(ProductName__contains=inputsToSearch) | Q(shoes_categories__contains=inputsToSearch)
        )
        print(found)
        result = list(found.values("id", "ProductName", "gender", "shoes_categories", "image"))
        return JsonResponse({'status': True,'found': result})
    else:
        return JsonResponse({'status': False, 'message': 'No item found'})



def populateAdd_to_cart(request, itemID):
    try:
        if (request.method == 'GET'):
            print("working?...")
            
            getItem = Product.objects.get(id=itemID)
            # images = model_to_dict(getItem)
            # images["image"] = getItem.image.url
            product_name = getItem.ProductName
            product_gender = getItem.gender
            product_category = getItem.shoes_categories
            product_price = getItem.price
            images = model_to_dict(getItem)
            images["image"] = getItem.image.url

            data = {
                'product_name': product_name,
                'product_gender':product_gender,
                'product_category':product_category,
                'product_price':product_price,
                'product_image': images["image"]

            }

            return JsonResponse({'status':True, 'item':data})
    except Exception as e:
        print(f"from view(populateAdd_to_cart): {e}")



@csrf_exempt
def cart(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)

        userFK = data.get('user_cart')
        item_id = data.get('product_id')
        product_name = data.get('product_name')
        product_gender = data.get('product_gender')
        category = data.get('product_category')
        price = data.get('product_price')
        size = data.get('size')
        image = data.get('product_image')

        try:
            populatingCart = Cart(
                user = userFK,
                product_id_fk = item_id,
                product_name = product_name,
                product_gender = product_gender,
                product_category = category,
                product_price = price,
                product_size = size,
                product_image = image
            )
            populatingCart.save()
            return JsonResponse({'status': True, 'message': 'Added to your cart'})
        except Exception as e:
            print(f"'From view' Something went wrong: {e}")

def adaptCart(request, userFk):
    if (request.method == 'GET'):
        print(f"received: {userFk}")
        print(f"Raw userFk: {userFk}") 
        itemAdded = list(Cart.objects.filter(user=userFk))

        items_list = [model_to_dict(items) for items in itemAdded]

        return JsonResponse({
            'status':True,
            'items': items_list
        })

        # print(f"items: {itemAdded}")
        # return render(request, 'URL_FILES/Shop.html', {'userAddedtoCarts': itemAdded})


@csrf_exempt
def Orders(request):
    if (request.method == 'POST'):
        # print("Received Email:", request.POST.get('sjs_email'))
        # print("Received contact number:", request.POST.get('sjs_contactNumber'))
        # print("Received shipping address:", request.POST.get('sjs_ShippingAddress'))
        # print("Received province:", request.POST.get('sjs_province'))
        # print("Received payment method:", request.POST.get('sjs_paymentMethod'))
        # print("Received total payments:", request.POST.get('sjs_totalPayments'))
        # print("Received member:", request.POST.get('sjs_member'))
        # print("Received item id:", request.POST.get('sjs_itemID'))
        # print("Received item name:", request.POST.get('sjs_itemName'))
        # print("Received item item price:", request.POST.get('sjs_itemPrice'))
        # print("Received item item quantity:", request.POST.get('sjs_itemQuantity'))
        # print("Received item item total gender:", request.POST.get('sjs_gender'))
        # print("Received item item total category:", request.POST.get('sjs_category'))
        # print("Received item item total item item image:", request.POST.get('sjs_itemImage'))
        data = json.loads(request.body)
        fullname = data.get('sjs_Fullname')
        Email = data.get('sjs_email')
        contactNumber = data.get('sjs_contactNumber')
        Shipping_Address = data.get('sjs_ShippingAddress')
        Province = data.get('sjs_province')
        payment_Method = data.get('sjs_paymentMethod')
        total_Payments = data.get('sjs_totalPayments')
        order_id = data.get('sjs_order_id')
        Member = data.get('sjs_member')
        item_id = data.get('sjs_itemID')
        item_name = data.get('sjs_itemName')
        item_price = data.get('sjs_itemPrice')
        item_Quantity = data.get('sjs_itemQuantity')
        item_Totalprice = data.get('sjs_totalPrice')
        item_Gender = data.get('sjs_gender')
        item_Category = data.get('sjs_category')
        item_Size = data.get('sjs_itemSize')
        item_createdAt = data.get('sjs_orderCreatedAt') 
        item_Image = data.get('sjs_itemImage')
        order_city = data.get('sjs_city')
        order_postal = data.get('sjs_postal')
        order_barangay = data.get('sjs_barangay')
        

        if not fullname: return print("missing on fullname")
        if not Email: return print("missing on Email")
        if not contactNumber: return print("missing on contactNumber")
        if not Shipping_Address: return print("missing on Shipping_Address")
        if not Province: return print("missing on Province")
        if not payment_Method: return print("missing on payment_Method")
        if not total_Payments: return print("missing on total_Payments")
        if not Member: return print("missing on Member")
        if not item_id: return print("missing on item_id")
        if not item_name: return print("missing on item_name")
        if not item_price: return print("missing on item_price")
        if not item_Quantity: return print("missing on item_Quantity")
        if not item_Totalprice: return print("missing on item_Totalprice")
        if not item_Gender: return print("missing on item_Gender")
        if not item_Category: return print("missing on item_Category")
        if not item_Size: return print("missing on item_Size")
        if not item_createdAt: return print("missing on item_createdAt")
        if not item_Image: return print("missing on item_Image")


        try:
            New_order = Order(
                Fullname = fullname,
                email = Email,
                Contact_Number = contactNumber,
                ShippingAddress = Shipping_Address,
                province = Province,
                Payment_Method = payment_Method,
                total_payments = total_Payments,
                Order_id = order_id,
                member = Member,
                item_ID = item_id,
                item_Name = item_name,
                item_Price = item_price,
                item_quantity = item_Quantity,
                item_totalprice = item_Totalprice,
                item_gender = item_Gender,
                item_category = item_Category,
                item_size = item_Size,
                order_createdAt = item_createdAt,
                item_image = item_Image,
                city = order_city,
                postal = order_postal,
                barangay = order_barangay
            )
            New_order.save()
            return JsonResponse({'status':True})
        except Exception as e:
            print(f"From 'views.py' something went wrong: {e}")
            return JsonResponse({'status':False})

def getProductImage(request, productId):
    if request.method == 'GET':
        getproduct = Product.objects.get(id=productId)
        
        # imageExtract = model_to_dict(getproduct)
        # imageExtract["image"] = getproduct.image.url
        imageExtract = model_to_dict(getproduct)
        imageExtract["image"] = getproduct.image.url if getproduct.image else None

        return JsonResponse({'status': True, 'image': imageExtract["image"]})
        # return JsonResponse({'status': True, 'image': imageExtract})

def orderDetails(request, emailUser):
    if request.method == 'GET':
        getTheOrders = Order.objects.filter(email=emailUser)
        serializeOrders = list(getTheOrders.values())
        return JsonResponse({'status': True, 'itemsOrdered': serializeOrders})