<template>
  <router-view/>
</template>

<style>
  table.table-bordered > tbody > tr > td{
    border:1px solid #9d9d9d !important;
  }

  .nowrap{
    white-space: nowrap;
  }

  .table:not(.table-sm):not(.table-md):not(.dataTable) td, .table:not(.table-sm):not(.table-md):not(.dataTable) th {
      padding: 8px !important;
      height: 40px !important;
      vertical-align: middle !important;
  }

  .sticky-first-tr{
      position: sticky;
      top: 0px;
  }

  .h-fit{
    height: fit-content;
  }

  span.ele-persentase {
    font-size: 11px;
  }

  .text-black{
    color:black;
  }

  .width-content{
    width:fit-content;
  }

  .f-12{
    font-size:12px !important;
  }

  .img-icon-menu{
    min-width: 21px !important;
    min-height: 21px !important;
  }

  body.sidebar-mini .main-sidebar .sidebar-menu > li.active > a > .img-icon-menu{
    filter : brightness(2);
  }

  .carousel-control-next-icon, .carousel-control-prev-icon {
    filter : brightness(0.8);
  }

  ::-webkit-scrollbar {
    width: 10px;
    height:10px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius:8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #c1c1c1;
  }
</style>