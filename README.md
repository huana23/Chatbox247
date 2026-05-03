# ChatBox247

Ứng dụng ChatBox247 — nền tảng chatbot marketing với backend API và frontend website landing page, hỗ trợ đăng ký/đăng nhập, xác thực JWT (cookie), refresh token và khôi phục mật khẩu bằng OTP gửi qua email (Gmail OAuth2).

## Tổng quan

- **Backend**: Node.js + Express + MongoDB (Mongoose)
- **Frontend**: React + Vite + Tailwind CSS
- **Mục tiêu**: Nền tảng chatbot đa kênh (Zalo, Messenger, Website) với hệ thống xác thực người dùng

## Tính năng chính

### Backend
- Đăng ký / Đăng nhập (register, login)
- Xác thực người dùng (auth) bằng JWT
- Refresh token tự động
- Quên mật khẩu: gửi OTP tới email, verify OTP và đặt lại mật khẩu
- Logout (xóa cookie)

### Frontend
- Landing page với các section: Hero, Feature, Pricing, Capabilities, Contact
- Tích hợp chatbot đa kênh: Zalo, Messenger, ChatWidget
- Các trang: Home, About, Blog, Feature, Service, FreeChat, Privacy Policy, Terms
- Giao diện responsive, thân thiện người dùng

## Kiến trúc thư mục

```
ChatBox247/
├── backend/
│   ├── src/
│   │   ├── config/          # Cấu hình kết nối database
│   │   ├── constants/       # Hằng số
│   │   ├── cores/           # Lõi ứng dụng
│   │   ├── helpers/         # Các hàm helper
│   │   ├── middlewares/     # Middleware (auth, etc.)
│   │   ├── modules/         # Modules (auth, users)
│   │   │   ├── auth/
│   │   │   └── users/
│   │   ├── routes/          # Định nghĩa routes
│   │   ├── utils/           # Tiện ích
│   │   ├── app.js           # Cấu hình Express app
│   │   ├── server.js        # Server entry point
│   │   └── index.js         # Entry point
│   ├── .env                 # Biến môi trường
│   └── package.json
│
└── frontend/
    └── src/
        ├── assets/          # Hình ảnh, icons
        │   ├── images/
        │   │   ├── hero/
        │   │   ├── partners/
        │   │   └── free-chat/
        │   └── Icon/
        ├── components/      # Các component
        │   ├── common/      # Component dùng chung
        │   │   ├── Header/
        │   │   ├── Footer/
        │   │   └── BackToTop/
        │   ├── layouts/     # Layout mặc định
        │   ├── sections/    # Section cho landing page
        │   │   ├── Hero/
        │   │   ├── Feature/
        │   │   ├── Pricing/
        │   │   ├── Capabilities/
        │   │   ├── Contact/
        │   │   ├── SectionPartners/
        │   │   └── SectionWhyDiro/
        │   └── ui/          # UI components
        │       ├── ChatWidget/
        │       ├── Messenger/
        │       └── Zalo/
        ├── constants/      # Hằng số
        ├── pages/          # Các trang
        │   ├── HomePage/
        │   ├── AboutPage/
        │   ├── BlogPage/
        │   ├── FeaturePage/
        │   ├── ServicePage/
        │   ├── FreeChat/
        │   ├── PrivacyPolicyPage/
        │   └── TermsPage/
        ├── routes/          # Cấu hình router
        ├── App.jsx          # App component
        └── main.jsx         # Entry point
```

## Yêu cầu trước khi cài

- Node.js >= 16
- npm hoặc yarn
- MongoDB (URL kết nối hoặc Atlas)

## Biến môi trường (backend)

Tạo file `.env` trong `backend/` với các biến tối thiểu sau:

- `MONGODB_URI` — chuỗi kết nối MongoDB
- `JWT_SECRET` — khóa bí mật cho JWT
- `EMAIL_USER` — địa chỉ email dùng để gửi OTP (Gmail)
- `CLIENT_ID`, `CLIENT_SECRET`, `REDIRECT_URI`, `REFRESH_TOKEN` — cấu hình OAuth2 cho Gmail

Ví dụ (không commit `.env`):

```
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net/mydb
JWT_SECRET=your_jwt_secret_here
EMAIL_USER=youremail@gmail.com
CLIENT_ID=...
CLIENT_SECRET=...
REDIRECT_URI=...
REFRESH_TOKEN=...
```

## Chạy Backend

```bash
cd backend
npm install
# Tạo file .env theo phần "Biến môi trường" ở trên
npm run dev
```

Server sẽ chạy trên port 3000 (`http://localhost:3000`).

### API Endpoints

- `POST /api/user/register` — Đăng ký
- `POST /api/user/login` — Đăng nhập
- `GET /api/user/auth` — Xác thực (cần cookie accessToken)
- `GET /api/user/logout` — Đăng xuất
- `POST /api/user/forgot-password` — Gửi OTP tới email
- `POST /api/user/verify-forgot-password` — Verify OTP và đặt lại mật khẩu
- `GET /api/user/refresh-token` — Lấy access token mới

**Lưu ý**: Backend cấu hình CORS với origin `http://localhost:5173` (Vite default).

## Chạy Frontend

```bash
cd frontend
npm install
npm run dev
```

Mặc định Vite sẽ chạy trên `http://localhost:5173`.

## Scripts

### Backend

- `npm run dev` — Chạy dev server (nodemon)

### Frontend

- `npm run dev` — Khởi động Vite dev server
- `npm run build` — Build production
- `npm run preview` — Preview bản build
- `npm run lint` — ESLint check

## Ghi chú kỹ thuật

- Xác thực sử dụng JWT lưu trong cookie (httpOnly) và refresh token
- Khôi phục mật khẩu dùng OTP được gửi qua Gmail OAuth2
- Kết nối database qua Mongoose

## Công việc tiếp theo (gợi ý)

- Thêm unit tests cho backend API
- Thêm E2E tests cho frontend
- Docker Compose để chạy MongoDB cục bộ
- Triển khai CI/CD
