import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Engineer | Tech Enthusiast | Blogger',
    profileImage: 'https://via.placeholder.com/150' // Replace with actual image URL
  };

  editProfile() {
    console.log("Edit Profile Clicked"); // Replace with actual edit logic
  }
}
