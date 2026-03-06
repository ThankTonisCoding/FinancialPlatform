#include <iostream>
#include <string>
using namespace std;

// Câu 4: Hàm dùng tham biến (&) để cập nhật tiền thực tế
void NapTien(int &taiKhoan, int soTienNap) {
    taiKhoan += soTienNap; // Thay đổi trực tiếp giá trị gốc [cite: 938]
}

int main() {
    // Câu 2: Khai báo biến [cite: 317]
    string tenKhach;
    int taiKhoan = 50000; // Có sẵn 50k
    int chon;

    cout << "Nhap ten khach: ";
    getline(cin, tenKhach);

    // Câu 3: Vòng lặp Menu [cite: 718, 742]
    do {
        cout << "\n--- MENU DICH VU ---" << endl;
        cout << "1. Nap tien\n2. Xem tai khoan\n0. Thoat\nChon: ";
        cin >> chon;

        switch(chon) { // Cấu trúc switch-case [cite: 491]
            case 1:
                int tien;
                cout << "Nhap so tien muon nap: ";
                cin >> tien;
                NapTien(taiKhoan, tien);
                cout << "Nap thanh cong!";
                break;
            case 2:
                cout << "Tai khoan cua " << tenKhach << " con: " << taiKhoan << " VND";
                break;
            case 0:
                cout << "Tam biet!";
                break;
            default:
                cout << "Chon sai roi bro ơi!";
        }
    } while (chon != 0);

    return 0;
}