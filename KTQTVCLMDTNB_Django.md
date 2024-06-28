# Các thứ về Django 

## 1. Cấu trúc chung của Django Project

1.1. Cấu trúc project Django khi mới tạo
- Khi mới tạo 1 cái project Django bằng `django-admin startproject <project_name>`, mà trong trường hợp của mình là `django-admin startproject WebFeed` thì nó sẽ generate ra 1 cái folder có cấu trúc nnay:
```
WebFeed
├── WebFeed
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── manage.py
```
**`__init__.py`**:
   - **Công dụng**: Tệp này là để cho máy tính biết rằng thư mục này là một phần của một chương trình. K cần qtam lắm.

**`asgi.py`**:
   - **Công dụng**: Tệp này giúp ứng dụng của chúng ta có thể làm việc khi có rất nhiều người dùng truy cập cùng lúc.

**`settings.py`**:
   - **Công dụng**: là file chứa các settings của project. Trong file này chứa các setting cơ bản như DEBUG, ALLOWED_HOSTS, INSTALLED_APP, DATABASES

**`urls.py`**:
   - **Công dụng**: là file khai báo các URL của project (kiểu như routing, với địa chỉ nào thì sẽ thực thi hàm nào).

**`wsgi.py`**:
   - **Công dụng**: Tệp này giúp cho chương trình của chúng ta có thể chạy trên các máy chủ web thông thường. Là file dùng deploy project lên server.

**`manage.py`**:
   - **Công dụng**: Tệp này giúp cho chúng ta có thể điều khiển và quản lý chương trình. File để tạo app, migrate, bla bla


1.2. Tạo Django app mới
- Sau khi có được cái khung chung chung cơ bản thì giờ cần tạo Django App bằng lệnh `python manage.py startapp <your_app_name>` mà trong trường hợp này là ta đã chạy `python manage.py startapp api`

- **Tại sao phải tạo Django app:** Tạo một Django App giống như việc chia căn nhà thành từng phòng riêng biệt. Ví dụ, nếu bạn có một ứng dụng web về trang web bán hàng, bạn có thể tạo một App để quản lý sản phẩm (Product App), một App để quản lý người dùng và đăng nhập (User App), và một App để xử lý thanh toán (Payment App). Mỗi App đảm nhận một nhiệm vụ cụ thể, giúp cho việc phát triển và bảo trì ứng dụng trở nên dễ dàng và rõ ràng hơn.

- Tạo App API để:
   - Xử lý yêu cầu: Nhận và xử lý các yêu cầu từ người dùng hoặc từ các ứng dụng khác qua mạng.
   
   - Truy xuất dữ liệu: Lấy dữ liệu từ cơ sở dữ liệu hoặc từ các nguồn khác để trả về cho người dùng hoặc cho các ứng dụng khác.
   
   - Phản hồi cho người dùng: Trả về kết quả hoặc thông báo cho người dùng hoặc ứng dụng gửi yêu cầu.

- Khi tạo app mới thì nó có structure nnay: 
```
api
├── migrations
│   └── __init__.py
├── __init__.py
├── admin.py
├── apps.py
├── models.py
├── tests.py
├── views.py
└── urls.py
```

**`migrations/`**:
   - **Công dụng**: Thư mục này giúp Django quản lý và thực hiện các thay đổi vào cơ sở dữ liệu khi chúng ta sửa đổi cấu trúc hoặc dữ liệu của ứng dụng.

**`__init__.py`**:
   - **Công dụng**: Đánh dấu thư mục hiện tại là một package Python.

**`admin.py`**:
   - **Công dụng**: Quản lý và tùy chỉnh các mô hình trong trang quản trị Django.

**`apps.py`**:
   - **Công dụng**: Cung cấp cấu hình và thông tin về ứng dụng Django của chúng ta.

**`models.py`**:
   - **Công dụng**: Định nghĩa cấu trúc dữ liệu cho ứng dụng Django của chúng ta.

**`tests.py`**:
   - **Công dụng**: Test

**`urls.py`**:
   - **Công dụng**: Định nghĩa các đường dẫn web (URL) và liên kết chúng với các chức năng xử lý trong `views.py`.

**`views.py`**:
   - **Công dụng**: Xử lý yêu cầu HTTP và trả về các phản hồi HTTP.
