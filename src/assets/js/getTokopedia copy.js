var url_function_tokopedia = window.location.origin+"/inspect/kompetitor/"+'Ctokopedia'

function get_data_produk_tokopedia(url){
    const split_url = url.split('/')
    const toko = split_url[3]
    const product_key = split_url[4]

    $("#i-stat-link[data-link='"+url+"']").empty().append('<span class="text-warning">Proses</span>')

    $.get(url_function_tokopedia+`/get_data_produk_tokopedia/${toko}/${product_key}`)
    .done(function(resp){
        const data_prod = JSON.parse(resp)
        if(typeof data_prod[0]['data']['pdpGetLayout'] === 'undefined' || data_prod[0]['data']['pdpGetLayout'] === null){
            $("#i-stat-link-prod[data-link='"+url+"']").empty().append('<span class="text-danger"><b>X</b></span>')
            $("#i-stat-link[data-link='"+url+"']").empty().append('<span class="text-danger">Gagal</span>')
        }if(data_prod[0]['data']['pdpGetLayout']['pdpSession']){
            const d = data_prod[0]['data']['pdpGetLayout']['basicInfo']
            const str_pdp = data_prod[0]['data']['pdpGetLayout']['pdpSession']
            const pdp = JSON.parse(str_pdp)

            const id_prod = d['id']
            const stok = d['maxOrder']
            const nama_prod = pdp['pn']
            const harga = pdp['pr']
            const terjual = d['txStats']['countSold']
            const created_time = data_prod['tgl_ulasan']
            const status_stok = d['status']
            
            const arr_post = {
                stok : stok,
                nama_prod : nama_prod,
                harga : harga,
                terjual : terjual,
                created_time:created_time,
                shop_id : d['shopID'],
                url : url,
                status_stok : status_stok
            }

            $.post(url_function_tokopedia+'/simpan_data_produk', arr_post).done(function(resp){
                
                $("#i-stat-link-prod[data-link='"+url+"']").empty().append('<span class="text-primary"><i class="fas fa-check"></i></span>')
        
                // lanjut ke fungsi ambil data toko
                get_data_toko(str_pdp,id_prod,url)

            }).fail(function(resp){
                $("#i-stat-link-prod[data-link='"+url+"']").empty().append('<span class="text-danger"><b>X</b></span>')
                $("#i-stat-link[data-link='"+url+"']").empty().append('<span class="text-danger">Gagal</span>')
            })
        }
    })
    .fail(function(resp){
        $("#i-stat-link-prod[data-link='"+url+"']").empty().append('<span class="text-danger"><b>X</b></span>')
        $("#i-stat-link[data-link='"+url+"']").empty().append('<span class="text-danger">Gagal</span>')
    })
}

function get_data_toko(pdp,id_prod,url){
    $.post(url_function_tokopedia+`/getpdp2/`,{
        pdp : pdp,
        id_prod : id_prod
    })
    .done(function(resp){
        const data = JSON.parse(resp)
        const d = data[0]['data']['pdpGetData']
        const data_toko = d['shopInfo']

        const nama_toko = data_toko['shopCore']['name']
        const asal = data_toko['location']
        const rating_star = d['shopRatingsQuery']['ratingScore']
        const shop_id = data_toko['shopCore']['shopID']

        const arr_post = {
            nama_toko : nama_toko,
            asal : asal,
            rating_star : rating_star,
            shop_id : shop_id
        }

        $.post(url_function_tokopedia+'/simpan_data_toko', arr_post).done(function(resp){
            $("#i-stat-link-toko[data-link='"+url+"']").empty().append('<span class="text-primary"><i class="fas fa-check"></i></span>')
            $("#i-stat-link[data-link='"+url+"']").empty().append('<span class="text-primary">Selesai</span>')
            
            cek_selesai_update()
        }).fail(function(resp){
            $("#i-stat-link-toko[data-link='"+url+"']").empty().append('<span class="text-danger"><b>X</b></span>')
            $("#i-stat-link[data-link='"+url+"']").empty().append('<span class="text-danger">Gagal</span>')
        })
        // index_selesai_update++
    }).fail(function(resp){
        $("#i-stat-link-toko[data-link='"+url+"']").empty().append('<span class="text-danger"><b>X</b></span>')
        $("#i-stat-link[data-link='"+url+"']").empty().append('<span class="text-danger">Gagal</span>')
    })
}