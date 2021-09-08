import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleRegistration } from '../models/vehicle-registration.model';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {
  vehicleRegisterForm!: FormGroup;
  vehicleRegistrationOnj: VehicleRegistration = new VehicleRegistration();
 

  constructor(private fb: FormBuilder, private vehicleRegService :AuthService) {

  }

  ngOnInit(): void {
    this.vehicleRegisterForm = this.fb.group({
      owner_id_number: ['', Validators.required],
      owner_first_name : ['', Validators.required],
      owner_family_name : ['', Validators.required],
      owner_city: ['', Validators.required],
      owner_email_address: ['', Validators.required],
      owner_date_of_birth: ['', Validators.required],
      owner_province: ['', Validators.required],
      owner_phone_number: ['', Validators.required],
      owner_state: ['', Validators.required],
      owner_street_address: ['', Validators.required],
      country_make: ['', Validators.required],
      vehicle_make: ['', Validators.required],
      vehicle_colour:  ['', Validators.required],
      vehicle_usage: ['', Validators.required],
      number_of_cylinder: ['',Validators.required],
      vehicle_body_type: ['',Validators.required],
      vehicle_model: ['',Validators.required],
      odometer_reading: ['',Validators.required],
      date_purchase: ['',Validators.required],
      fuel_type: ['',Validators.required], 
      vin: ['',Validators.required],
      year_make: ['',Validators.required],
      seller_first_name: ['',Validators.required],
      seller_family_name: ['',Validators.required],
      seller_id_number: ['',Validators.required],
      seller_date_of_birth: ['',Validators.required],
      seller_email_address: ['',Validators.required],
      seller_phone_number: ['',Validators.required],
      seller_city: ['',Validators.required],
      seller_province_state: ['',Validators.required],
      seller_street_address: ['',Validators.required],
      seller_company_name: ['',Validators.required],
      seller_state: ['',Validators.required],
      


    })
  }

  onSubmit(){
    console.log(this.vehicleRegisterForm.value);
    this.vehicleRegistrationOnj.country_make = this.vehicleRegisterForm.value.country_make;
    this.vehicleRegistrationOnj.date_purchased = this.vehicleRegisterForm.value.date_purchase;
    this.vehicleRegistrationOnj.fuel_type = this.vehicleRegisterForm.value.fuel_type;
    this.vehicleRegistrationOnj.number_of_cylinders = this.vehicleRegisterForm.value.number_of_cylinder;
    this.vehicleRegistrationOnj.odometer_reading = this.vehicleRegisterForm.value.odometer_reading;
    this.vehicleRegistrationOnj.owner_city = this.vehicleRegisterForm.value.owner_city;
    this.vehicleRegistrationOnj.owner_date_of_birth = this.vehicleRegisterForm.value.owner_date_of_birth;
    this.vehicleRegistrationOnj.owner_email_address = this.vehicleRegisterForm.value.owner_email_address;
    this.vehicleRegistrationOnj.owner_family_name = this.vehicleRegisterForm.value.owner_family_name;
    this.vehicleRegistrationOnj.owner_first_name = this.vehicleRegisterForm.value.owner_first_name;
    this.vehicleRegistrationOnj.owner_id_number = this.vehicleRegisterForm.value.owner_id_number;
    this.vehicleRegistrationOnj.owner_phone_number = this.vehicleRegisterForm.value.owner_phone_number;
    this.vehicleRegistrationOnj.owner_province = this.vehicleRegisterForm.value.owner_province;
    this.vehicleRegistrationOnj.owner_state = this.vehicleRegisterForm.value.owner_state;
    this.vehicleRegistrationOnj.owner_street_address = this.vehicleRegisterForm.value.owner_street_address;
    this.vehicleRegistrationOnj.seller_city = this.vehicleRegisterForm.value.seller_city;
    this.vehicleRegistrationOnj.seller_company_name = this.vehicleRegisterForm.value.seller_company_name;
    this.vehicleRegistrationOnj.seller_date_of_birth = this.vehicleRegisterForm.value.seller_date_of_birth;
    this.vehicleRegistrationOnj.seller_email_address = this.vehicleRegisterForm.value.seller_email_address;
    this.vehicleRegistrationOnj.seller_family_name = this.vehicleRegisterForm.value.seller_family_name;
    this.vehicleRegistrationOnj.seller_first_name = this.vehicleRegisterForm.value.seller_first_name;
    this.vehicleRegistrationOnj.seller_id_number = this.vehicleRegisterForm.value.seller_id_number;
    this.vehicleRegistrationOnj.seller_phone_number = this.vehicleRegisterForm.value.seller_phone_number;
    this.vehicleRegistrationOnj.seller_province = this.vehicleRegisterForm.value.seller_province_state;
    this.vehicleRegistrationOnj.seller_state = this.vehicleRegisterForm.value.seller_state;
    this.vehicleRegistrationOnj.seller_street_address = this.vehicleRegisterForm.value.seller_street_address;
    this.vehicleRegistrationOnj.body_type = this.vehicleRegisterForm.value.vehicle_body_type;
    this.vehicleRegistrationOnj.vehicle_colour = this.vehicleRegisterForm.value.vehicle_colour;
    this.vehicleRegistrationOnj.vehicle_make = this.vehicleRegisterForm.value.vehicle_make;
    this.vehicleRegistrationOnj.vehicle_model = this.vehicleRegisterForm.value.vehicle_model;
    this.vehicleRegistrationOnj.vehicle_usage = this.vehicleRegisterForm.value.vehicle_usage;
    this.vehicleRegistrationOnj.vin = this.vehicleRegisterForm.value.vin;
    this.vehicleRegistrationOnj.year_make = this.vehicleRegisterForm.value.year_make;
    
    this.vehicleRegService.vehicleRegistration(this.vehicleRegistrationOnj)
                    .subscribe((res) =>{console.log(res)});

    this.vehicleRegisterForm.reset();

  }

}