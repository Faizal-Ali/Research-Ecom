<template>
    <Sidebar/>
    <div class="main-content" style="overflow-y:auto">
<section class="section">
    <div class="section-header">
        <h1>Tambah Link</h1>
    </div>
    <div class="section-body">
        <div class="bg-white mx-auto rounded shadow-sm col-md-12 p-4">
            <form action="">
                <span>Nama Produk</span>
                <input v-model="nama_produk" id="nama_produk" type="text" class="col-md-12 form-control">

                <hr>
                <div class="row">
                    <div class="col-md-10">
                        <span>Link Produk</span>
                        <input type="text" v-model="link_produk" class="col-md-12 form-control" id="link_produk">
                    </div>
                    <div class="col-md-2">
                        <span>Jenis Ecom</span>
                        <select class="form-control" v-model="jenis_ecom" name="" id="">
                            <option value="shopee">Shopee</option>
                            <option value="tokopedia">Tokopedia</option>
                        </select>
                    </div>
                </div>
                
                <br>
            </form>
            
            <div class="d-flex justify-content-between mt-2 p-2">
                <router-link class="btn-warning btn col-md-5" to="/link">Kembali</router-link>
                <button class="btn-primary btn col-md-5" id="btn-simpan" v-on:click="simpan_link()"><span style="font-size:16px">Simpan</span></button>
            </div>
        </div>
    </div>
</section>
</div>

<!-- modal -->
<div class="modal fade" id="modal_update_link" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="modal_update_link" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-xl" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title">Proses Update Link</h5>
  </div>
  <div class="modal-body">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th class="text-center bg-primary text-white">Link</th>
                <th class="text-center bg-primary text-white">Data Produk</th>
                <th class="text-center bg-primary text-white">Data Toko</th>
                <th class="text-center bg-primary text-white">Status</th>
            </tr>
        </thead>
        <tbody id="parent-tr-link">
        </tbody>
    </table>
    <span class="text-danger"><i>Akan otomatis menutup saat selesai</i></span>
  </div>
</div>
</div>
</div>
</template>

<script>
    import Sidebar from '@/components/Sidebar.vue'
    import axios from 'axios'
    const url_api = "http://localhost:8080"
    
    export default {
        name: 'LinkTambahView',
        components: {
            Sidebar
        },
        methods: {
            simpan_link : function (){
                var arr_post = {
                    nama_produk : this.nama_produk,
                    link_produk : this.link_produk,
                    jenis_ecom : this.jenis_ecom
                }

                axios.post(url_api+"/link/tambah",arr_post)
            },
        },
    }
</script>