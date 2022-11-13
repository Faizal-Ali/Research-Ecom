<template>
    <div class="rounded bg-white col-md-5 mx-auto mt-5" id="container">
				<div class="row">
					<div class="col-md-12 p-4">
						<h1 class="text-navy text-center">
							Inspect
							<hr class="bg-navy">
						</h1>

						<label class="text-navy" for="">Username</label>
						<input type="text" class="form-control">

						<label class="text-navy" for="">Password</label>
						<input type="password" class="form-control">

						<br>
						<!-- <button class="btn bg-warning col-md-12">Login</button> -->
                        <router-link class="btn bg-warning col-md-12" to="/link">Login</router-link>
					</div>
				</div>
			</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .bg-light-dark{
        background-color:#f7f7f7 !important;
    }

    .text-navy{
        color : #1c233d;
    }

    .bg-navy{
        background-color : #1c233d;
    }

    .btn-navy{
        background-color : #1c233d;
        color:white;
    }

    #img-banner{
        width: 100%;
        height:auto;
    }

    #container{
        box-shadow: 0px 10px 41px -10px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 10px 41px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 10px 41px -10px rgba(0,0,0,0.75);
        /* background-image: url(https://img.freepik.com/free-vector/abstact-hexagon-background-memphis-style_1017-31955.jpg?w=826&t=st=1659758097~exp=1659758697~hmac=1c4a6e79a358765e517d0c70dc5b021ed5552462c9c0ee81523acc832a073ee8); */
        /* background-size:cover; */
    }

    body{
        background-image : url(https://sys.fastprint.co.id/inspect/assets/img/custom/banner-login.jpg) !important;
        background-size:cover;
    }
</style>