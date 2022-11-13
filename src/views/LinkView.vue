<template>
    <Sidebar/>

    <div class="main-content" style="overflow-y:auto">
    <section class="section">
        <div class="section-header">
            <h1 class="w-100">
                Link
                <a href="<?=base_url('kompetitor-up_link')?>" target="_blank" class="btn btn-warning float-right ml-2">Update</a>
                <!-- <a href="<?=base_url('clink/clear_data')?>" target="_blank" class="btn-danger btn float-right ml-2">Clear Data</a> -->
                <!-- <a href="<?=base_url('kompetitor-tambah_keyword')?>" class="btn-success btn float-right">Tambah</a> -->
                <router-link class="btn-success btn float-right" to="/linkTambah">Tambah</router-link>

                <input type="date" name="" value="" onchange="filter_tanggal(this.value)" class="form-control col-md-2 float-right mr-2" id="">
                <select onchange="filter_ecom_link(this.value)" name="" id="" class="col-md-2 float-right form-control mr-2">
                    <option value="">Semua Ecom</option>
                    <option value="shopee">Shopee</option>
                    <option value="tokopedia">Tokopedia</option>
                </select>
            </h1>
        </div>

        <div class="section-body bg-white shadow-sm p-2">
            <div id="parent-table-horizontal" style="overflow-x:auto;max-height:66vh;min-height: 66vh;">
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th class="bg-primary text-center text-white sticky-first-tr" colspan="3">Produk</th>
                            <th class="bg-primary text-center text-white sticky-first-tr" rowspan="2">No</th>
                            <th class="bg-primary text-center text-white sticky-first-tr width-group-2" rowspan="2">Ecom</th>
                            <th class="bg-primary text-center text-white sticky-first-tr width-group-2" rowspan="2">Nama Toko</th>
                            <th class="bg-primary text-center text-white sticky-first-tr width-group-2" rowspan="2">Lokasi Toko</th>
                            <th class="bg-primary text-center text-white sticky-first-tr" rowspan="2">Periode Jual &nbsp<span data-toggle="tooltip" data-title="Terhitung sejak awal diskusi/ulasan/penilaian hingga hari ini"><i class="fas fa-question-circle"></i></span></th>
                            <th class="bg-primary text-center text-white sticky-first-tr" colspan="2">Total</th>
                            <th class="bg-primary text-center text-white sticky-first-tr" colspan="4">
                                Tanggal
                            </th>
                            <th class="bg-primary text-center text-white sticky-first-tr" rowspan="2" colspan="3">Aksi</th>
                        </tr>
                        <tr>
                            <!-- produk -->
                            <th class="bg-primary text-center text-white sticky-second-tr width-group-1" >Kategori &nbsp<span data-toggle="tooltip" data-title="Kategori Produk yang di inspect"><i class="fas fa-question-circle"></i></span></th>
                            <th class="bg-primary text-center text-white sticky-second-tr width-group-1" >Grup &nbsp<span data-toggle="tooltip" data-title="Produk yang termasuk dalam kategori"><i class="fas fa-question-circle"></i></span></th>
                            <th class="bg-primary text-center text-white sticky-second-tr width-group-1" >Keyword &nbsp<span data-toggle="tooltip" data-title="Kata kunci pencarian produk"><i class="fas fa-question-circle"></i></span></th>

                            <!-- all -->
                            <th class="bg-primary text-center text-white sticky-second-tr">Terjual &nbsp<span data-toggle="tooltip" data-title="Produk terjual keseluruhan"><i class="fas fa-question-circle"></i></span></th>
                            <th class="bg-primary text-center text-white sticky-second-tr">Omset &nbsp<span data-toggle="tooltip" data-title="Total omset keseluruhan"><i class="fas fa-question-circle"></i></span></th>

                            <!-- sesuai tanggal -->
                            <th class="bg-primary text-center text-white sticky-second-tr">
                                Stok &nbsp<span data-toggle="tooltip" data-title="Status stok pada <?=date('d M y',strtotime($tgl_pilih))?>"><i class="fas fa-question-circle"></i></span>
                            </th>
                            <th class="bg-primary text-center text-white sticky-second-tr">
                                Harga &nbsp<span data-toggle="tooltip" data-title="Harga produk pada <?=date('d M y',strtotime($tgl_pilih))?>"><i class="fas fa-question-circle"></i></span>
                            </th>
                            <th class="bg-primary text-center text-white sticky-second-tr">
                                Terjual &nbsp<span data-toggle="tooltip" data-title="Produk terjual pada <?=date('d M y',strtotime($tgl_pilih))?>"><i class="fas fa-question-circle"></i></span>
                            </th>
                            <th class="bg-primary text-center text-white sticky-second-tr">
                                Omset &nbsp<span data-toggle="tooltip" data-title="Total omset pada <?=date('d M y',strtotime($tgl_pilih))?>"><i class="fas fa-question-circle"></i></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <br>
            <!-- <?=$paging?> -->
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'HomeView',
  components: {
    Sidebar
  }
}
</script>
