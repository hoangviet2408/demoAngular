import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent{
    so: number = 0;
    hinh: string = "https://photo-zmp3.zadn.vn/banner/c/1/6/8/c16815ec4292faccf01c54045a69b597.jpg";
   

    Jack(e) {
        console.log(e);
        e.srcElement.src = "https://photo-zmp3.zadn.vn/banner/e/3/d/0/e3d00033994634e6ff0f7ce48fb161c3.jpg";
    }

    MinhVuong(e) {
        console.log(e);
        e.srcElement.src = "https://photo-zmp3.zadn.vn/banner/d/b/e/a/dbea3d5fd1ebcd050ca303cb362c915a.jpg";
    }

    

    CONG() {
        this.so = this.so + 1;
    }

    Tru() {
        this.so = this.so - 1;
    }


    hoten: string = "Hoang The Viet";
    namsinh: number = 1998;
    sothich = { movie: "action", code: "frontend" };
    mang: string[] = ["One", "Two", "Three"];
}
