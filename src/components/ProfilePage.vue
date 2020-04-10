// ProfilePage (PARENT Comp)
<template>
  <div class="profile-page">
    <div class="avatar">
      <img src="user.profilePicture" />
      {{ user.name }}
    </div>

    <!-- Add component in with props -->
    <ContactInfo
      :email-address="user.emailAddress"
      :twitter-handle="user.twitterHandle"
      :instagram="user.instagram"
    />

  </div>
</template>

<script>
import ContactInfo from './Contact.vue';
export default {
  name: 'ProfilePage',
  components: {
  	ContactInfo,
  },
  data() {
    return {
      // In a real app we would get this data from a server
      user: {
        name: 'John Smith',
        profilePicture: './profile-pic.jpg',
        emailAddress: 'john@smith.com',
        twitterHandle: 'johnsmith',
        instagram: 'johnsmith345',
      },
    }
  }
};

</script>