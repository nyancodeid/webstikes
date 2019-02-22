var prodis = [
    {
        name: "S-I Keperawatan",
        website: "http://stikesicme-jbg.ac.id/s1keperawatan/"
    }, 
    {
        name: "D-IV Bidan Pendidik",
        website: "http://stikesicme-jbg.ac.id/d-iv-bidan-pendidik/"
    }, 
    {
        name: "D-III Analis Kesehatan",
        website: "http://d3-analis.stikesicme-jbg.ac.id/"
    }, 
    {
        name: "D-III Keperawatan",
        website: "http://d3-keperawatan.stikesicme-jbg.ac.id/"
    },
    {
        name: "D-III Kebidanan",
        website: "http://stikesicme-jbg.ac.id/d3kebidanan/"
    }, 
    {
        name: "Profesi Ners",
        website: "http://ners.stikesicme-jbg.ac.id/"
    }
]

angular.module('website', [])
.controller('ProdiController', function () {
    this.style = {
        'margin-left': '-10vw',
        'margin-right': '-10vw'
    }
    this.prodis = prodis
})
.controller('GalleryController', function($scope, $http) {
    $scope.data = [];
    $scope.isSupportWebp = true;
    
    function hasWebP() {
        var rv = $.Deferred(), img = new Image();
        img.onload = function () { rv.resolve(); };
        img.onerror = function (error) { rv.reject(error); };
        img.src = "https://cdn.jsdelivr.net/gh/nyancodeid/webstikes@master/test.webp";
        return rv.promise();
    }

    hasWebP().then(function() {
        $scope.isSupportWebp = true;

        runFetchGallery();
    }, function(error) {
        console.error(error)
        $scope.isSupportWebp = false;   
        runFetchGallery();
    })

    function runFetchGallery() {
        $.getJSON('https://cdn.jsdelivr.net/gh/nyancodeid/webstikes@master/gallery.json', function (gallery) {

            gallery = gallery.map(function (image) {
                image.png = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&url=" + encodeURI(image.link)
                image.webp = image.link.replace(".png", ".webp")

                return image;
            })

            $scope.$apply(function () {
                $scope.data = gallery;
            });
        })
    }
})
.controller('BiayaController', function($scope) {
    var static = {
        sumbangan: 'Rp. 1.500.000',
        perlengkapan: 'Rp. 2.100.000',
        her: 'Rp. 500.000',
        pendaftaran: 'Rp. 250.000',
        s1Keperawatan: {
            praktek: 'Rp. 100.000'            
        },
        d3Keperawatan: {
            praktek: 'Rp. 75.000'
        },
        d4Kebidanan: {
            praktek: 'Rp. 75.000'
        },
        d3Kebidanan: {
            praktek: 'Rp. 75.000'
        },
        d3Analis: {
            praktek: 'Rp. 200.000'
        }
    }
    var reguler = {
        s1Keperawatan: {
            dppp: 'Rp. 13.500.000',
            spp: 'Rp. 700.000',
        },
        d3Keperawatan: {
            dppp: 'Rp. 10.000.000',
            spp: 'Rp. 600.000',
        },
        d3Kebidanan: {
            dppp: 'Rp. 10.000.000',
            spp: 'Rp. 600.000',
        },
        d4Kebidanan: {
            dppp: 'Rp. 10.000.000',
            spp: 'Rp. 600.000',
        },
        d3Analis: {
            dppp: 'Rp. 10.000.000',
            spp: 'Rp. 650.000',
        }
    }
    var bidikMisi = {
        s1Keperawatan: {
            dppp: '-',
            spp: 'Rp. 450.000',
        },
        d3Keperawatan: {
            dppp: '-',
            spp: 'Rp. 375.000',
        },
        d3Kebidanan: {
            dppp: '-',
            spp: 'Rp. 300.000',
        },
        d4Kebidanan: {
            dppp: '-',
            spp: 'Rp. 300.000',
        },
        d3Analis: {
            dppp: '-',
            spp: 'Rp. 450.000',
        }
    }
    var prestasi = {
        s1Keperawatan: {
            dppp: 'Rp. 7.500.000',
            spp: 'Rp. 450.000',
        },
        d3Keperawatan: {
            dppp: 'Rp. 6.000.000',
            spp: 'Rp. 375.000',
        },
        d3Kebidanan: {
            dppp: 'Rp. 5.000.000',
            spp: 'Rp. 300.000',
        },
        d4Kebidanan: {
            dppp: 'Rp. 5.000.000',
            spp: 'Rp. 300.000',
        },
        d3Analis: {
            dppp: 'Rp. 6.000.000',
            spp: 'Rp. 450.000',
        }
    }
    var eksekutif = {
        s1Keperawatan: {
            dppp: 'Rp. 15.000.000',
            spp: 'Rp. 900.000',
        },
        d3Keperawatan: {
            dppp: 'Rp. 12.000.000',
            spp: 'Rp. 700.000',
        },
        d3Kebidanan: {
            dppp: 'Rp. 10.000.000',
            spp: 'Rp. 600.000',
        },
        d4Kebidanan: {
            dppp: 'Rp. 10.000.000',
            spp: 'Rp. 600.000',
        },
        d3Analis: {
            dppp: 'Rp. 12.000.000',
            spp: 'Rp. 800.000',
        }
    }

    $scope.reguler = reguler;
    $scope.bidikMisi = bidikMisi;
    $scope.prestasi = prestasi;
    $scope.eksekutif = eksekutif;

    $scope.default = static;
})
.controller('StructureController', function() {
    this.organisasi = [
        [
            {jabatan: "Ketua", nama: "H.Imam Fatoni, SKM.,MM." }
        ],
        [ 
            { jabatan: "Wakil Ketua 1", nama: "Dr. Hariyono, S.Kep.Ns., M.Kep" },
            { jabatan: "Wakil Ketua 2", nama: "Hidayatun Nufus, S.Si.T.M.Kes" },
            { jabatan: "Wakil Ketua 3", nama: "Harnanik Nawangsari, SST., M.Keb." }
        ],
        [
            {jabatan: "Ka. PPPM", nama: "Baderi, S.Kom.MM." },
            {jabatan: "Ka. PPMI", nama: "Lusyta Puri Ardhiyanti, S.S.T., M.Kes" }
        ],
        [
            {jabatan: "Ka. Komisi Etik Penelitian", nama: "Siti Rohani, S.ST., M.Kes" }
        ],
        [
            {jabatan: "Ka. Prodi S1 Keperawatan", nama: "Inayatur Rosyidah, S.Kep.Ns., M.Kes" },
            {jabatan: "Ka. Prodi D3 Keperawatan", nama: "Maharani Tri Puspita, S.Kep.Ns.,M.Kes" },
            {jabatan: "Ka. Prodi D3 Kebidanan", nama: "Nining Mustikaningrum, S.S.T.,M.Kes" },
            {jabatan: "Ka. Prodi D4 Kebidanan", nama: "Ita Ni'matuz Zuhroh, S.Si.T.,M.Kes" },
        ],
        [
            
            {jabatan: "Ka. Prodi D3 Analis Kesehatan", nama: "Sri Sayekti, S.Si.M.Ked." },
            {jabatan: "Ka. Prodi Profesi Ners", nama: "Dwi Prasetyaningati, S.Kep.Ns.,M.Kep" }
        ],
        [
            {jabatan: "Ka. Perpustakaan", nama: "Dwi Nuriana, S.Kom.,M.IP" }
        ]
    ]
})

