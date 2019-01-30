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
    $scope.data = []

    $.getJSON('gallery.json', function(gallery) {
        gallery = gallery.map(function(image) {
            image.link = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&url=" + encodeURI(image.link)
        
            return image;
        })

        $scope.$apply(function () {
            $scope.data = gallery;
        });
    })
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
            dppp: '',
            spp: 'Rp. 450.000',
        },
        d3Keperawatan: {
            dppp: '',
            spp: 'Rp. 375.000',
        },
        d3Kebidanan: {
            dppp: '',
            spp: 'Rp. 300.000',
        },
        d4Kebidanan: {
            dppp: '',
            spp: 'Rp. 300.000',
        },
        d3Analis: {
            dppp: '',
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

