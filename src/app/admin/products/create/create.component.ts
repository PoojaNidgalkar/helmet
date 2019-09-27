import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public form = {
    name: null,
    code: null,
    mrp: null,
    description: null,
    weight: null,
    features: null,
    feature_image:null,
    color: []
}

public dynamicArray= [{
  color: '',
  price: '',
  image: [],
 
}];
  public error = null;
  files = [];

  constructor(
    private productService: ProductsService,
    private router: Router) 
    { }
    myFiles:string [] = [];
  
  ngOnInit(){} 
     
  
   
  newProduct() {
    let data = this.form;
    let colors = this.dynamicArray;
    colors.forEach((color, index) => {
      const files = this.files.filter((file, i) => i === index)
      console.log(files[0]);
      color.image = files[0];
    });
    data.color = colors;
    this.productService.newProduct(data).subscribe(
      data => {
        this.router.navigateByUrl('/products');
      },
      error => this.handelError(error)
    );
  }
  handelError(error) {
    console.log(error);
    this.error = error.error.error;
  }


//single image
     onSelectFile(event) {
      this.form.feature_image = <Array<File>>event.target.files;
    }
    
//multi image
    getFileDetails (e) {
      // console.log (e.target.files);
      let array = []
      for (var i = 0; i < e.target.files.length; i++) { 
        this.myFiles.push(e.target.files[i]);
        array.push(e.target.files[i])
      }
      this.files.push(array);
    }

    //textbox
    addProduct() {
      this.dynamicArray.push({
       color: '',
       price: '',
       image: [],
      });
    }
  
    removeProduct(i: number) {
      this.dynamicArray.splice(i, 1);
      this.files.splice(i, 1);
    }
  
    logValue() {
      console.log(this.dynamicArray);
      console.log(this.files);

    }

  //multi images

          // getFileDetails (e, index) {
          //   console.log(index);
          //   this.form.colors[index].color = this.dynamicArray[index].color;
          //   this.form.colors[index].price = this.dynamicArray[index].price;
          //   this.form.colors[index].image = <Array<File>>e.target.files;
          // }        

          // multiImages(){
          //         console.log(this.multi);
          //         this.productService.multiImages(this.multi).subscribe
          //         ( 
          //           data => console.log('success!',data),
          //           error => console.log('error!',error)
          //         )
          //      }
          //      handelError1(error) {
          //       console.log(error);
          //       this.error = error.error.error;
          //   }
}
  

  






  