<template>
    <div class="d-flex bg-primary navbar navbar-expand-lg p-0 main-navbar " >
      <div class="">
        <a href="#" data-toggle="sidebar" id="btn-toggle-sidebar" style="background-color: #2c3e50;" class="nav-link nav-link-lg text-white col-md-12 text-center"><i class="fas fa-bars"></i></a>
      </div>
      <div class="ml-auto">
        <form action="<?=base_url($this->uri->segment(1))?>" method="get">
          <div class="input-group">
            <input type="search" id="input-pencarian-nav" name="q" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2">
            <div class="input-group-append mr-3">
              <button class="input-group-text btn btn-outline-secondary" type="submit">Cari</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="main-sidebar">
      <aside id="sidebar-wrapper">
        <div class="sidebar-brand mt-4" style="line-height:0px">
          <h5 class="text-center">
            <img style="width:170px" class="mx-auto" src="https://cdn.shopify.com/s/files/1/1764/2831/t/3/assets/logo.png?v=37021879728213879011522638925" alt="">
          </h5>
          <hr>
          <a href="#">Inspect Marketplace</a>
          <hr>
          <br>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
          <!-- <a href="index.html">RE</a> -->
          <a href=""><img width="60px" src="data:image/png;base64,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" alt=""></a>
        </div>
        <ul class="sidebar-menu">
          <!-- kompetitor -->
          <li class=""><router-link to="/report">Report</router-link></li>
          <li class=""><router-link to="/link">Link</router-link></li>
          <li class=""><router-link to="/">Logout</router-link></li>
    
        </ul>
      </aside>
    </div>
</template>

<script>
  export default {
      name : 'sidebar'
  }
</script>