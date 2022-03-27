<template>
  <div class="main">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Programming Blogs</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-on:click="navto('wellcome')">Blogs</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="searchData.textt"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" v-on:click="navToCat()"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ name }}</em>
            </template>
            <b-dropdown-item v-on:click="navto('profile')" href="#"
              >profile</b-dropdown-item
            >
            <b-dropdown-item v-on:click="logout" href="#"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      name: localStorage.username,
      searchData: {
        textt: null,
      },
    };
  },
  methods: {
    navToCat() {
      if (this.searchData.textt != null) {
        console.log("next");
        this.$router.push({
          name: "search_blog",
          params: { dat: this.searchData.textt },
        });
      } else {
        this.$swal.fire({
          icon: "warning",
          title: "Empty...",
          text: '"Search field shold not be empty!!"',
        });
      }
    },
    async logg() {
      var response = await fetch(
        "https://programmingblogs.herokuapp.com/api/logout/",
        {
          method: "post",
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      return response.status
    },
      logout() {
      // Use sweetalert2
      // this.$swal('Hello Vue world!!!');
      this.$swal({
        icon: "question",
        title: "Are you sure ?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Logout!",
        cancelButtonText: "Cancel",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
         if (result.value) {
              
            //       var response =  fetch(
            //   "https://programmingblogs.herokuapp.com/api/logout/",
            //   {
            //     method: "post",
            //     headers: {
            //       Authorization: `Token ${localStorage.getItem("token")}`,
            //     },
            //   }
            // );
            this.logg().then((result) => {
              if (result == 204) {
                localStorage.removeItem("token");

                    this.$swal("Logout", "You successfully Logout", "success");

                    this.$router.push("/");

              }
              else{
                // this.$swal("Not Logout", "some thing gonna wrong", "success",);
                this.$swal.fire({
          icon: "error",
          title: "Not Logout",
          text: '"some thing gonna wrong"',
        });
              }
            
            })
      
         
         }
          
         else {
          this.$swal("Cancelled", "You are still signin", "info");
        }
      });
    },
    //     remove() {
    //   localStorage.removeItem("token");
    //   this.$router.push("/");
    // },
    navto(screen) {
      this.$router.push(`/${screen}`);
    },
  },
};
</script>

