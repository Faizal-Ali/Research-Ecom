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
                <span>Keyword</span>
                <input id="input_keyword" type="text" class="col-md-12 form-control">
                
                <div class="row mt-2">
                    <div class="col-md-6">
                        <span>Kategori</span>
                        <input type="hidden" id="input_id_kategori">
                        <select name="" class="form-control" id="" onchange="pilih_kategori(this.value)">
                            <option value="">Pilih Kategori</option>
                            
                        </select>
                    </div>
                    <div class="col-md-6">
                        <span>Grup</span>
                        <input id="input_grup" type="text" class="form-control">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-11">
                        <span>Link</span>
                    </div>
                    <div class="col-md-1">
                        <button type="button" onclick="tambah_link()" class="btn-warning btn"><span><i class="fas fa-plus"></i></span></button>
                    </div>
                </div>
                <br>
                
                <div id="parent_row_tambah">
                    <div class="row mt-2" id="ele-link-0">
                        <div class="col-md-11">
                            <input data-index_link="0" oninput="cek_jenis_link_ecom(this)" type="text" value="" data-ecom="" class="inputan-link form-control">
                        </div>
                        <div class="col-md-1">
                            <button onclick="hapus_link(this)" class="btn-danger btn" data-index_ele="0"><span><i class="fas fa-trash"></i></span></button>
                        </div>
                    </div>
                </div>
            </form>
            
            <div class="d-flex justify-content-between mt-2 p-2">
                <router-link class="btn-warning btn col-md-5" to="/link">Kembali</router-link>
                <button class="btn-primary btn col-md-5" id="btn-simpan" onclick="simpan_link()"><span style="font-size:16px">Simpan</span></button>
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

export default {
  name: 'LinkTambahView',
  components: {
    Sidebar
  }
}
</script>