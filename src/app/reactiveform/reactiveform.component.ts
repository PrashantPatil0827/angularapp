import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from, interval, Observable } from 'rxjs';
import { FireBasePost } from '../models/firebasepost';
import { FirebaseService } from '../services/firebase.service';
import{filter, map, take, takeLast, toArray} from 'rxjs/operators'


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  submitted: boolean = false;
  notAllowedNames = ['Codemind', 'Technology'];
  genders = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ]
  myReactiveForm: FormGroup;
  firebasePost: FireBasePost

  constructor(private _fb: FormBuilder, private _firebaseService: FirebaseService) {
    this.createForm();
  }

  ngOnInit() {

   // const data =from(this._firebaseService.users) ;   //if we wnnt to convert array data into observable
    
    //data.pipe(
     // map(x=>x.name)  
   // ).subscribe(res=>{
     // console.log('res',res); //using map rxjs operator we will manipulate the observable data
    //}) //we will manupulate the data before subscribe

//manipulate the data before subscribe
     //map operator
    // this._firebaseService.getPostDataFirebase().pipe(
    //   map(responseData=>{
    //     const postArray=[];
    //     for(const key in responseData){
    //       if(responseData.hasOwnProperty(key)) {    //hasOwnProperty checked that key is present or not
    //         postArray.push({...responseData[key], id:key})
    //       }     
    //     }
    //     return postArray;
    //   })
    // )
    // .subscribe(res =>{
    //   console.log('after manipulate data',res);
    // })

    //filter operator
    // const data =from(this._firebaseService.users)
    // data.pipe(
    //     filter(u => u.gender == 'Male'),
    //     toArray()     //used to collect all the values emitted by the source and transform into array
    //   ).subscribe(res=>{
    //     console.log('filter operator data',res);
        
    //   })

    //Take operator
    // const source=interval(1000);
    // source.pipe(
    //   take(5)).subscribe(res =>{
    //   console.log('interval example',res); 
    // })

      //Take last
      let randomNames=['Prashant','Patil','Angular','HTML','Javascript','Typescript']
      const source=from(randomNames);
      source.pipe(
        takeLast(2)
      ).subscribe(res =>{
        console.log('take last operator example',res);
        
      })

 //     this._firebaseService.getPostDataFirebase().subscribe(res=>{
  //      console.log('get data from database',res);
  // })  //we get the data from firebase database

    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender': 'Male'
    //   })
    // }, 3500);

    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     }
    //   })
    // }, 3500);
  }

  createForm() {
    // this.myReactiveForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //     'username': new FormControl('', [Validators.required, this.NaNames.bind(this)]),
    //     'email': new FormControl('', [Validators.required, Validators.email], this.NaEmails)
    //   }),
    //   'course': new FormControl(''),
    //   'gender': new FormControl(''),
    //   'skills': new FormArray([
    //    new FormControl(null, Validators.required)
    //   ])
    // })
    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this._fb.array([''])
    })
  }
  OnSubmit() {
    this.submitted = true;
    console.log(this.myReactiveForm);
    //console.log(this.myReactiveForm['controls'].userDetails['controls'].username.value);  exact value gheychi asel tr
    
    this.firebasePost = new FireBasePost();
    this.firebasePost.username=this.myReactiveForm['controls'].userDetails['controls'].username.value;
    this.firebasePost.email=this.myReactiveForm['controls'].userDetails['controls'].email.value;
    this.firebasePost.course=this.myReactiveForm['controls'].course.value;
    this.firebasePost.gender=this.myReactiveForm['controls'].gender.value;
    this.firebasePost.skills=this.myReactiveForm['controls'].skills.value;
    // console.log('firebasepost class',this.firebasePost);
    
    this._firebaseService.createPostReactive(this.firebasePost).subscribe(res=>{
      console.log('Post from reactive form',res);   //we store this in firebase database
      
    })
  }
  OnAddSkills() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  removeButton(i) {
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(i)
  }
  NaNames(control: FormControl) {

    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { 'namesNotAllowed': true }
    }
    return null;
  }
  NaEmails(control: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindtechnology@gmail.com') {
          resolve({ 'emailNotAllowed': true })
        } else {
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }
}
